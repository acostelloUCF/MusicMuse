<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ApiKey extends Model
{

    protected $fillable = [
        'key',
        'user_id'
    ];
    public function api_key(){
        return $this->belongsTo('App\User');
    }

}
