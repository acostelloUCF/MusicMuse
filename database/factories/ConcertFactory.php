<?php

use Faker\Generator as Faker;

$factory->define(App\Concert::class, function (Faker $faker) {

    $start_time = $faker->dateTimeThisYear('2018-12-31','America/New_York');
    $end_time = clone $start_time;
    $end_time->modify('+ 1 hour');

    return [
        'title'=>$faker->words(4,true),
        'description'=>$faker->sentences(4,true),
        'start_time'=>$start_time,
        'end_time'=>$end_time
    ];
});
