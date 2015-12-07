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


Route::group( [ 'prefix' => 'api', 'middleware' => 'ajax' ], function ()
{
    Route::get( '/youtube/search', [ 'uses' => 'API\GAPIVideoController@search', 'as' => 'api.youtube.search' ] );
    Route::post( '/comment/insert', [ 'uses' => 'API\GAPICommentController@comment', 'as' => 'api.comment.insert' ] );
} );


Route::get( '/', [ function ()
{
    return view( 'auth.login' );
}, 'as' => 'search.video' ] );


Route::group( [ 'middleware' => 'auth' ], function ()
{
    Route::get( '/videos/search', [ 'uses' => 'VideosController@search', 'as' => 'search.video' ] );
} );


Route::group( [ 'prefix' => 'user' ], function ()
{
    Route::get( 'create', [ 'uses' => 'UsersController@create', 'as' => 'user.create' ] );
    Route::post( 'create', [ 'uses' => 'UsersController@store', 'as' => 'user.create' ] );
} );


Route::group( [ 'prefix' => 'auth' ], function ()
{
    Route::get( '/login/{provider}', [ 'uses' => 'Auth\SocialAuthController@login', 'as' => 'social.login' ] );
    Route::get( '/logout/{provider}', [ 'uses' => 'Auth\SocialAuthController@logout', 'as' => 'social.logout' ] );
    Route::get( '/login', ['uses' => 'Auth\AuthController@getLogin', 'as' => 'get.login'] );
    Route::post( '/login', ['uses' => 'Auth\AuthController@postLogin', 'as' => 'post.login'] );
    Route::get( '/logout', ['uses' => 'Auth\AuthController@getLogout', 'as' => 'get.logout'] );
} );


