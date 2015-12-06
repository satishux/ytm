<?php

namespace App\Http\Controllers\Auth;

trait LogoutSocialUsers {

    public function logout ()
    {
        $this->request->session()->forget('g_name');
        $this->request->session()->forget('g_email');
        $this->request->session()->forget('g_token');

        return redirect()->route('get.logout');
    }
}