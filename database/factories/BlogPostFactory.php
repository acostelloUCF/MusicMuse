<?php

use Faker\Generator as Faker;

$factory->define(App\BlogPost::class, function (Faker $faker) {
    return [
        'title' => $faker->words(5,true),
        'post' => $faker->paragraphs(4,true)
    ];
});