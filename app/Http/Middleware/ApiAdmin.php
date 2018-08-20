<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Lcobucci\JWT\Parser;
use Lcobucci\JWT\Signer\Hmac\Sha256;
use Lcobucci\JWT\ValidationData;
use \App\User;

class ApiAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        //Parse token
        try {
            $token = $request->bearerToken();
            $token = (new Parser())->parse((string) $token);
        } catch (\Exception $e) {
            //Catch parsing exception
            return Response([
                "errors" => ["auth_error" => "There is a problem with the bearer token. It might be missing or invalid, please see the API documentation at " . env('APP_URL') . "/api/docs"],
            ], 422);

        }

        //Verify signature
        $signer = new Sha256();
        if (!$token->verify($signer, env('API_SIG'))) {
            return $this->invalidBearerToken();
        }

        //validate jwt
        $data = new ValidationData(); // It will use the current time to validate (iat, nbf and exp)
        $data->setIssuer(env('APP_URL'));
        $data->setAudience(env('APP_URL'));
        if (!$token->validate($data)) {
            return $this->invalidBearerToken();
        }

        //check user has valid api token in DB
        $user = User::find($token->getClaim('user_id'));
        $isValidApiKey = $this->validateUserApiToken($user, $token->getClaim('jti'));
        if (!$isValidApiKey) {
            return $this->invalidBearerToken();
        }

        return $next($request);
    }

    private function invalidBearerToken()
    {
        return Response([
            "errors" => ["auth_error" => "Bearer token is invalid. Please log in to obtain a new one."],
        ], 401);
    }

    private function validateUserApiToken(User $user, String $apiKey)
    {
        $isValidKey = false;
        $api_records = DB::table('api_keys')->where('user_id', $user->id)->where('expired_at', null)->get();
        foreach ($api_records as $api_record) {

            if (Hash::check($apiKey, $api_record->key)) {
                $isValidKey = true;
            }
        }
        return $isValidKey;
    }
}
