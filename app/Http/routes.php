<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/






//Route::get('/', function() {
//    return view('test');
//});

Route::get('/', [function() {
    return view('auth.login');
}, 'as' => 'search.video']);

Route::get('/videos/search', ['uses' => 'VideosController@search', 'as' => 'search.video']);


Route::group(['prefix' => 'user'], function() {

    Route::get('create', ['uses' => 'UsersController@create', 'as' => 'user.create']);
    Route::post('create', ['uses' => 'UsersController@store', 'as' => 'user.create']);
});


Route::group(['prefix' => 'api', 'middleware' => 'auth'], function() {

    Route::get('/videos/search', ['uses' => 'API\GAPIVideoController@searchVideos', 'as' => 'api.videos.search']);

    Route::get('/comment/insert', ['uses' => 'API\GAPICommentController@comment', 'as' => 'api.comment.insert']);
});



Route::group( ['prefix' => 'auth'], function ()
{
    Route::get( '/login/{provider}', ['uses' => 'SocialLoginController@login', 'as' => 'social.login'] );
    Route::get('/login', 'Auth\AuthController@getLogin');
    Route::post('/login', 'Auth\AuthController@postLogin');
    Route::get('/logout', 'Auth\AuthController@getLogout');
} );


