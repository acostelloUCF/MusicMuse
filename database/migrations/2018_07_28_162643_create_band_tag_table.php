<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBandTagTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('band_tag', function (Blueprint $table) {
            $table->integer('band_id')->unsigned();
            $table->integer('tag_id')->unsigned();

            $table->foreign('band_id')->references('id')->on('bands');
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
        Schema::dropIfExists('band_tag');
    }
}
