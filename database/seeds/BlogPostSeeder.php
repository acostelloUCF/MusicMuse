<?php

use Illuminate\Database\Seeder;

class BlogPostSeeder extends Seeder{
    
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\BlogPost::class, 50)->create()->each(function ($blog_post){
            $blog_post->tags()->saveMany(App\Tag::all()->random(rand(0,25)));
        });
    }
}