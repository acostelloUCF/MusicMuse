<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BlogPost extends Model
{
    protected $fillable = ['title','post'];
    protected $hidden = ['pivot'];


    public function tags(){
        return $this->belongsToMany('App\Tag')->withTimestamps();
    }

}
