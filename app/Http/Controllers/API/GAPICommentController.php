<?php

namespace App\Http\Controllers\API;

use App\Ytm\Repos\Youtube;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class GAPICommentController extends Controller
{

    protected $youtube;
    protected $errors;

    public function __construct(Youtube $youtube)
    {
        $this->youtube = $youtube;
        $this->errors = [];
    }

    public function comment(Request $request)
    {

        if( ! $request->isXmlHttpRequest())
        {
            $this->errors['reason'] = 'not XMLHttpRequest';
            return json_encode($this->errors);
        }

        $commentData =  json_decode($request->get('commentThread'), true);

        return $this->youtube->commentVideos($commentData['comment'], $commentData['ids']);

    }
}
