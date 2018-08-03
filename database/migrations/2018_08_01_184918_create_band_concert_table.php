<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBandConcertTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('band_concert', function (Blueprint $table) {
            $table->integer('band_id')->unsigned();
            $table->integer('concert_id')->unsigned();

            $table->foreign('band_id')->references('id')->on('bands');
            $table->foreign('concert_id')->references('id')->on('concerts');

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
        Schema::dropIfExists('band_concert');
    }
}
