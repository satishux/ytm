<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Ytm\Repos\Youtube;

class GAPIVideoController extends Controller
{

    /**
     * @var Youtube
     */
    protected $youtube;

    protected $errors;

    /**
     * GApiController constructor.
     * @param Youtube $youtube
     */
    public function __construct( Youtube $youtube)
    {
        $this->youtube = $youtube;
        $this->errors = [];
    }

    /**
     * @param Request $request
     * @param $query
     * @return array|bool|string
     */
    public function searchVideos( Request $request)
    {
        if( ! $request->isXmlHttpRequest())
        {
            $this->errors['reason']  = 'Not XMLHttpRequest';
            return json_encode($this->errors);
        }

        $data = json_decode($request->get('data'), true);

        $results = $this->youtube->getVideoList(['q' => $data['input'], 'maxResults' => 20, 'type' => $data['type'], 'order' => $data['order']]);

        return $results;

    }
}
