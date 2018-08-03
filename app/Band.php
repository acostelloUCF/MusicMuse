<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Band extends Model
{
    protected $hidden = ['pivot'];
    
    public function tags(){
        return $this->belongsToMany('App\Tag')->withTimestamps();
    }

    public function concerts(){
        return $this->belongsToMany('App\Concert')->withTimestamps();
    }
}
