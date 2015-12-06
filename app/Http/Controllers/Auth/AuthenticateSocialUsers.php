<?php

namespace App\Http\Controllers\Auth;

trait AuthenticateSocialUsers {

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

        return $this->redirectAuthorizedUser( $provider );

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

    /**
     * @param $user
     */
    private function setGapiSession ( $user )
    {
        $this->request->session()->put('g_name', $user->getName());
        $this->request->session()->put('g_email', $user->getEmail());
        $this->request->session()->put('g_token', json_encode( $user->token));
    }

    /**
     * @param $provider
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    private function redirectAuthorizedUser ( $provider )
    {
        $user = $this->socialUser( $provider );
        $this->setGapiSession( $user );

        //if user does not exist in database, create new user from social credentials
        if ( !$this->userdb->existingUser( $user ) )
        {
            return redirect()->route( 'user.create' );
        }

        //log user in from our end
        if ( $this->userdb->loginUser() )
        {
            return redirect()->route( 'search.video' );
        }
    }

}