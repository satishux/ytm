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






Route::get('/', function() {
    return view('test');
});

Route::get('/videos/search', ['uses' => 'VideosController@search', 'as' => 'search.video']);


Route::group(['prefix' => 'api'], function() {

    Route::get('/videos/search', ['uses' => 'API\GAPIVideoController@searchVideos', 'as' => 'api.videos.search']);

    Route::get('/comment/insert', ['uses' => 'API\GAPICommentController@comment', 'as' => 'api.comment.insert']);
});



Route::group( ['prefix' => 'auth'], function ()
{
    Route::get( '/login/{provider}', ['uses' => 'SocialLoginController@login', 'as' => 'social.login'] );
} );