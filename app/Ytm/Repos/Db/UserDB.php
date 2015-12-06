<?php
/**
 * Created by PhpStorm.
 * User: sat98
 * Date: 06-Dec-15
 * Time: 12:44 AM
 */

namespace App\Ytm\Repos\DB;

use App\User;
use Illuminate\Support\Facades\Auth;

class UserDB {

    protected $user;

    public function __construct ( User $user )
    {
        $this->user = $user;
    }


    public function existingUser ( $user )
    {
        $existingUser = $this->user->where( 'email', $user->getEmail() )
            ->first();

        return $existingUser;
    }

    public function createUser ( $requestData )
    {
        $status = false;

        try
        {
            $status = $this->user->create( [
                'name'     => ( $requestData->has( 'use_session' ) ) ? session( 'g_name' ) : $requestData['name'],
                'email'    => ( $requestData->has( 'use_session' ) ) ? session( 'g_email' ) : $requestData['email'],
                'password' => bcrypt( $requestData['password'] ),
                'active'   => 0,
            ] );
        }
        catch ( \Exception $e )
        {
            $status = false;
        }

        return $status;
    }


    public function loginUser ()
    {
            $user = $this->user->where('email', session('g_email'))->first();
            Auth::login($user);
            return $user;
    }
}