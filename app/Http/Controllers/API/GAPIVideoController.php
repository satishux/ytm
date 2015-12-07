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

    /**
     * GApiController constructor.
     * @param Youtube $youtube
     */
    public function __construct( Youtube $youtube)
    {
        $this->youtube = $youtube;
    }

    /**
     * @param Request $request
     * @param $query
     * @return array|bool|string
     */
    public function search( Request $request)
    {
        $data = json_decode($request->get('data'), true);
        $results = $this->youtube->search($data['input'])->maxResults(intval($data['count']))->type($data['type'])->orderBy($data['order'])->get();
        return $results;

    }
}
