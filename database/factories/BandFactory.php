<?php

use Faker\Generator as Faker;

$factory->define(App\Band::class, function (Faker $faker) {
    return [
       "name" => $faker->company(),
       "active" => 1,
       "state"=> $faker->stateAbbr(),
       "description"=> $faker->paragraphs(3,true)
    ];
});
