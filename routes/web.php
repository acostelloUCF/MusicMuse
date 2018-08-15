<?php
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::group(['prefix' => 'api'], function () {
    // all routes that don't need to go to react-router
    Route::get('posts/latest', 'BlogPostController@latest');
    Route::resource('posts', 'BlogPostController');
    Route::resource('bands', 'BandController');
    Route::resource('tags', 'TagController');
    Route::resource('concerts', 'ConcertController');

    //Auth
    Route::post('/login', 'AuthController@login');
    Route::get('/reset_password', 'AuthController@requestPasswordReset');
    Route::post('/reset_password', 'AuthController@resetPassword');

});

Route::view('/{path?}', 'home')
    ->where('path', '.*')
    ->name('react');
