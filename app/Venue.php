<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Venue extends Model
{
    protected $fillable=[
        'lat',
        'lng',
        'name',
        'description',
        'street',
        'city',
        'state',
        'postal_code'
    ];

    protected $casts = [
        'lat' => 'float',
        'lng' => 'float'
    ];

    public function concerts(){
        return $this->hasMany('App\Concert');
    }
}
