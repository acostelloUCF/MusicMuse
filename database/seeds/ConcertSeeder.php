<?php

use Illuminate\Database\Seeder;

class ConcertSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Concert::class, 50)->create()->each(function ($concert){
            $concert->bands()->saveMany(App\Band::all()->random(rand(1,15)));
        });
    }
}
