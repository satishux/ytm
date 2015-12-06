<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Laravel\Socialite\Contracts\Factory as Socialite;
use Illuminate\Contracts\Auth\Guard as Auth;

use App\Ytm\Repos\DB\UserDB;

class SocialLoginController extends Controller
{
    /**
     * @var Socialite
     */
    protected $socialite;
    /**
     * @var User
     */

    protected $auth;

    /**
     * @param Socialite $socialite
     * @param User $user
     * @param Auth $auth
     */

    protected $request;

    protected $userdb;

    function __construct(Socialite $socialite, Auth $auth, Request $request, UserDB $userdb)
    {
        $this->socialite = $socialite;
        $this->auth = $auth;
        $this->request = $request;
        $this->userdb = $userdb;
    }

    /**
     * @param $provider
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function login($provider)
    {
        return $this->execute($provider, $this->request->has('code'));
    }

    /**
     * @param $provider
     * @param $hasCode
     * @return \Illuminate\Http\RedirectResponse|\Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function execute($provider, $hasCode)
    {
        if( ! $hasCode)
        {
            return $this->getAuthorization($provider);

        }

        ///$user = $this->user->findByUsernameOrCreate($this->socialUser($provider));

        $user = $this->socialUser($provider);
        session(['g_name'=> $user->getName(),
                 'g_email' => $user->getEmail(),
                 'g_token'=> json_encode($user->token)]);

        if( ! $this->userdb->existingUser($user))
        {
            //if new user, show form to create new user
            return redirect()->route('user.create');
        }

        if( $this->userdb->loginUser() )
        {
            return redirect()->route('search.video');
        }

    }

    /**
     * @param $provider
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function getAuthorization($provider)
    {
        return $this->socialite->driver($provider)->redirect();
    }

    /**
     * @param $provider
     * @return \Laravel\Socialite\Contracts\User
     */
    public function socialUser($provider)
    {
        return $this->socialite->driver($provider)->user();
    }
}
