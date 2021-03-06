@extends('users.dashboard')

@section('page')
    <div class="content-page">
        <!-- Start content -->
        <div class="content">
            <div class="container" ng-controller="searchController as search">

                <div class="row">
                    <div class="col-sm-12">
                        <h4 class="page-title">Search Videos</h4>
                    </div>
                </div>
                <div class="row m-t-10">
                    <div class="col-sm-12">
                        <div class="card-box">
                            <div class="row">
                                <div class="col-md-8 col-md-offset-2">
                                    <div class="input-group m-t-10 m-b-10">
                                        <input type="text" id="search-input" name="search-input" class="form-control input-lg" placeholder="Search Videos..." ng-model="search.searchData.input">
                                    <span class="input-group-btn">
                                    <button type="button" class="btn waves-effect waves-light btn-primary btn-lg" ng-click="search.search()"><i class="fa fa-search m-r-5"></i> Search</button>
                                    </span>
                                    </div>
                                    @include('layouts.search-videos.filter-search')
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="row">
                    <div class="col-lg-12">
                        <div class="card-box m-t-40" id="search-results-box">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div ng-hide="search.results.length">
                                            <h3>No search results to display..</h3>
                                        </div>

                                        <search-result result-data="result" ng-repeat="result in search.results"></search-result>
                                        {{--<div class="search-item row m-t-20" ng-repeat="result in search.results">--}}
                                                {{--<div class="pull-left">--}}
                                                    {{--<div style="display: table-cell; vertical-align: top;">--}}
                                                        {{--<a href="https://www.youtube.com/watch?v=@{{ result.videoId }}" target="_blank">--}}
                                                            {{--<img ng-src="@{{ result.thumbnailDefault }}">--}}
                                                        {{--</a>--}}
                                                    {{--</div>--}}
                                                    {{--<div style="display : table-cell; vertical-align: top; padding-left : 20px">--}}
                                                        {{--<h3 class="h5 font-600 m-b-5"><a href="https://www.youtube.com/watch?v=@{{ result.videoId }}" target="_blank" ng-bind="result.title"></a></h3>--}}
                                                        {{--<div class="font-13 text-success m-b-10" ng-bind="result.channelTitle">--}}
                                                        {{--</div>--}}
                                                        {{--<p ng-bind="result.description">--}}
                                                        {{--</p>--}}
                                                    {{--</div>--}}
                                                {{--</div>--}}

                                                {{--<div class="action-buttons pull-right">--}}
                                                    {{--<button class="btn btn-icon waves-effect waves-light btn-white" ng-click="search.select(result.videoId)"> <i class="fa fa-check"></i> </button>--}}
                                                    {{--<button class="btn btn-icon waves-effect waves-light btn-danger" ng-click="search.remove(result.videoId)"> <i class="fa fa-remove"></i> </button>--}}
                                                {{--</div>--}}

                                        {{--</div>--}}


                                    </div>
                                </div>
                        <!-- Search Result Box Ends -->
                        </div>
                    </div>
                </div>


                <div class="row">
                    <div class="col-sm-12">
                        <div class="card-box">
                            <div ng-controller="commentController as comment">
                                <h4><b>Comment</b></h4>
                                <summernote name="comment-area" on-change="comment.summernoteChange(contents)" id="comment-area" ng-model="comment.commentText" height="200"></summernote>
                                {{--<textarea name="comment-area" summernote id="comment-area" ng-model="comment.commentText" style="width : 100%; min-height : 200px"></textarea>--}}
                                <button ng-click="comment.comment()" class="btn btn-primary pull-right">Comment</button>
                            </div>
                            <span class="clearfix"></span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>


@stop

@section('styles-top')
    <link rel="stylesheet" href="/css/summernote.css">
@stop
@section('scripts-top')
    <script src="/js/summernote.js"></script>
    <script src="/js/angular-summernote.js"></script>
@stop