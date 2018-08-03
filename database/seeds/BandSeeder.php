<?php

use Illuminate\Database\Seeder;

class BandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Band::class, 50)->create()->each(function ($band){
            $band->tags()->saveMany(App\Tag::all()->random(rand(0,25)));
        });
    }
}
