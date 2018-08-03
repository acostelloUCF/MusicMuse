<?php

use Faker\Generator as Faker;

$factory->define(App\Venue::class, function (Faker $faker) {

    $start_time = $faker->dateTimeThisYear('2018-12-31','America/New_York');
    $end_time = clone $start_time;
    $end_time->modify('+ 1 hour');

    return [
        'lat' => $faker->randomFloat(8,-90,90),
        'lng'=> $faker->randomFloat(8,-90,90),
        'street'=>$faker->streetAddress(),
        'city'=>$faker->city(),
        'state'=>$faker->stateAbbr(),
        'postal_code'=>$faker->postcode(),
        'name'=>$faker->words(4,true),
        'description'=>$faker->sentences(4,true)
    ];
});
