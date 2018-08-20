<?php

namespace App\Http\Controllers;

use App\ApiKey;
use App\Mail\PasswordReset;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Validator;
use Lcobucci\JWT\Builder;
use Lcobucci\JWT\Signer\Hmac\Sha256;
use \DateTime;

class AuthController extends Controller
{

    private function generateApiKey($user_id)
    {
        //generate API key
        $isUnique = false;
        while (!$isUnique) {
            $key = base64_encode(bin2hex(random_bytes(8)) . time());
            $keyCount = ApiKey::where('key', $key)->count();
            if ($keyCount == 0) {
                $isUnique = true;
            }
        }
        //instantiate ApiKey Model Object
        $keyObject = new ApiKey([
            'key' => Hash::make($key),
            'user_id' => $user_id,

        ]);

        //save to DB
        $keyObject->save();

        //return key string
        return $key;
    }

    private function generateJWT($api_key, $user)
    {
        $signer = new Sha256();
        $token = (new Builder())->setIssuer(env('APP_URL')) // Configures the issuer (iss claim)
            ->setAudience(env('APP_URL')) // Configures the audience (aud claim)
            ->setId($api_key, true) // Configures the id (jti claim), replicating as a header item
            ->setIssuedAt(time()) // Configures the time that the token was issue (iat claim)
            ->setExpiration(time() + 90) // Configures the expiration time of the token (exp claim)
            ->set('user_id', $user->id)
            ->sign($signer, env('API_SIG'))
            ->getToken(); // Retrieves the generated token

        return $token;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Band  $band
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        //verify user email & pass
        $user = User::where('email', $request->input('email'))->first();
        if (!$user) {
            //User not found, return 404
            return Response(
                [
                    'errors' => ['email' => 'The email could not be found in our system.'],
                ],
                404
            );
        }

        $isValidPassword = Hash::check($request->input('password'), $user->password);
        if (!$isValidPassword) {
            //Wrong password, return 422
            return Response(
                [
                    'errors' => ['password' => 'Incorrect password.'],
                ],
                401
            );
        }

        //disable active api keys
        $this->expireActiveApiKeys($user);

        //generate API key
        $key = $this->generateApiKey($user->id);

        //generate JWT
        $signer = new Sha256();
        $token = $this->generateJWT($key, $user); // Retrieves the generated token

        //succes, return JWT + 200
        return Response(
            [
                'token' => (string) $token,
                'errors' => [],
            ],
            200
        );
    }

    public function logout(){
        //get token
        $token = $request->bearerToken();
        $token = (new Parser())->parse((string) $token);

        //expire api key
        $user = User::find($token->getClaim('user_id'));
        $this->expireActiveApiKeys($user);

    }

    public function requestPasswordReset(Request $request)
    {

        //check for valid email
        $user = User::where('email', $request->input('email'))->first();
        if (!$user) {
            //User not found, return 404
            return Response(
                [
                    'errors' => ['email' => 'The email could not be found in our system.'],
                ],
                404
            );
        }

        //generate token
        $token = bin2hex(random_bytes(8)) . time();

        //generate token and storein password reset table
        DB::table('password_resets')->insert([
            'token' => Hash::make($token),
            'user_id' => $user->id,
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);

        //send email to user with token
        //TODO: verify domain and use real email
        Mail::to('alcostello91@gmail.com')->send(new PasswordReset($token));

        return Response(
            [
                'errors' => [],
            ],
            200
        );

    }

    public function resetPassword(Request $request)
    {
        //check for valid email
        $user = User::where('email', $request->input('email'))->first();
        if (!$user) {
            //User not found, return 404
            return Response(
                [
                    'errors' => ['email' => 'The email could not be found in our system.'],
                ],
                404
            );
        }

        //validate password reset token
        if (!$this->validatePasswordResetToken($user, $request->input('token'))) {
            //User not found, return 404
            return Response(
                [
                    'errors' => ['token' => 'Invalid password reset token.'],
                ],
                401
            );
        }

        //vallidate new password
        $validator = $this->validator($request->all());

        if ($validator->fails()) {
            return response(["errors" => $validator->errors()], 422);
        }

        //set new password
        $user->password = Hash::make($request->input('password'));
        $user->save();

        //expire any active API keys
        $this->expireActiveApiKeys($user);

        //generate API key
        $key = $this->generateApiKey($user->id);

        //generate JWT
        $signer = new Sha256();
        $token = $this->generateJWT($key, $user); // Retrieves the generated token

        //disable any active password reset tokens
        $this->expirePasswordResetTokens($user);

        //success, return JWT + 200
        return Response(
            [
                'token' => (string) $token,
                'errors' => [],
            ],
            200
        );

    }

    private function validatePasswordResetToken($user, $token)
    {
        $isValidToken = false;
        $reset_records = DB::table('password_resets')->where('user_id', $user->id)->where('expired_at', null)->get();
        foreach ($reset_records as $reset_record) {
            if (Hash::check($token, $reset_record->token)) {
                $isValidToken = true;
            }
        }

        return $isValidToken;
    }

    private function expirePasswordResetTokens($user)
    {
        DB::table('password_resets')->where('expired_at', null)->where('user_id', $user->id)->update(['expired_at' => new DateTime()]);
    }

    private function expireActiveApiKeys($user)
    {
        DB::table('api_keys')->where('expired_at', null)->where('user_id', $user->id)->update(['expired_at' => new DateTime()]);
    }

    private function validator($data)
    {
        return Validator::make($data, [
            'password' => 'required|regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/',
        ]);
    }

}
