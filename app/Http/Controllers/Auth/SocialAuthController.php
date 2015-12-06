<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Contracts\Auth\Guard as Auth;
use Laravel\Socialite\Contracts\Factory as Socialite;
use App\Ytm\Repos\DB\UserDB;

class SocialAuthController extends Controller
{

    use AuthenticateSocialUsers, LogoutSocialUsers;

    protected $socialite;
    protected $auth;
    protected $request;
    protected $userdb;

    function __construct(Socialite $socialite, Auth $auth, Request $request, UserDB $userdb)
    {
        $this->socialite = $socialite;
        $this->auth = $auth;
        $this->request = $request;
        $this->userdb = $userdb;
    }


}
