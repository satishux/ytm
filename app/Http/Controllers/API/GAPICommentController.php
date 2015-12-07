<?php

namespace App\Http\Controllers\API;

use App\Ytm\Repos\Youtube;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class GAPICommentController extends Controller {

    protected $youtube;

    public function __construct ( Youtube $youtube )
    {
        $this->youtube = $youtube;
    }

    public function comment ( Request $request )
    {

//        $commentData =  json_decode($request->get('commentThread'), true);
        $comment    =   $request->get( 'comment' );
        $ids        =   $request->get( 'ids' );

        return $this->youtube->commentVideos( $comment, $ids );

    }
}
