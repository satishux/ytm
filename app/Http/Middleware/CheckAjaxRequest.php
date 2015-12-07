<?php

namespace App\Http\Middleware;

use Closure;

class CheckAjaxRequest
{

    protected $errors;

    public function __construct ()
    {
        $this->errors = [];
    }
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        if( ! $request->isXmlHttpRequest())
        {
            $this->errors['reason']  = 'Not XMLHttpRequest';
            return json_encode($this->errors);
        }

        return $next($request);
    }
}
