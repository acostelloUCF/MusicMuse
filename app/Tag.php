<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $fillable=['name'];
    protected $hidden = ['pivot'];

    public function bands(){
        return $this->belongsToMany('App\Band')->withTimestamps();
    }

    public function blog_posts(){
        return $this->belongsToMany('App\BlogPost')->withTimestamps();
    }
}
