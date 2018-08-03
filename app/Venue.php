<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Venue extends Model
{
    protected $casts = [
        'lat' => 'float',
        'lng' => 'float'
    ];

    public function concerts(){
        return $this->hasMany('App\Concert');
    }
}
