<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBlogPostTag extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('blog_post_tag', function (Blueprint $table) {
            $table->integer('blog_post_id')->unsigned();
            $table->integer('tag_id')->unsigned();

            $table->foreign('blog_post_id')->references('id')->on('blog_posts');
            $table->foreign('tag_id')->references('id')->on('tags');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('blog_post_tag');
    }
}
