<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Concert extends Model
{
    protected $fillable = [
        'title',
        'description'
    ];

    protected $hidden = ['pivot'];

    public function bands(){
        return $this->belongsToMany('App\Band')->withTimestamps();
    }

    public function venue(){
        return $this->belongsTo('App\Venue');
    }
}
