<?php

namespace App\Http\Controllers;
use App\BlogPost;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Middleware\ApiAdmin;

class BlogPostController extends Controller
{
    public function __construct()
    {
        $this->middleware(ApiAdmin::class)->only('store','update');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return BlogPost::with('tags')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $validator = $this->validator($request->all());

        if ($validator->fails()) {
            return response(["errors" => $validator->errors()], 422);
        }

        $post = BlogPost::create($request->all());
        $post->save();

        $post->errors = new class()
        {
        };

        return $post;
    }

    private function validator($data)
    {
        return Validator::make($data, [
            'title' => 'required|unique:blog_posts|max:100',
            'post' => 'required|max:500',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $post = BlogPost::findOrFail($id);
        $post['tags'] = $post->tags()->get();
        return $post;

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function latest()
    {
        return BlogPost::orderBy('id', 'desc')->with('tags')->first();
    }
}
