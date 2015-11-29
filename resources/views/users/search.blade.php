@extends('master')

@section('content')
    <div class="content-page">
        <!-- Start content -->
        <div class="content">
            <div class="container">

                <div class="row">
                    <div class="col-sm-12">
                        <h4 class="page=title">Search And Comment Videos</h4>
                    </div>
                </div>


                <div class="row">
                    <div class="col-sm-12">
                        <div class="card-box">
                            <div>
                                <form action="/auth/login/google" method="get">
                                    {{ csrf_field() }}
                                    <button type="submit" class="btn btn-default">Login</button>
                                </form>
                            </div>
                            <div class="search-input" ng-controller="searchController as search">
                                <input type="text" ng-model="search.searchData.input">
                                <select name="type" id="type" ng-model="search.searchData.type">
                                    <option value="video">video</option>
                                    <option value="channel">channel</option>
                                    <option value="playlist">playlist</option>
                                </select>
                                <select name="order" id="order" ng-model="search.searchData.order">
                                    <option value="date">date</option>
                                    <option value="rating">rating</option>
                                    <option value="relevance">relevance</option>
                                    <option value="title">title</option>
                                    <option value="viewCount">viewCount</option>
                                </select>

                                <button type="button" ng-click="search.search()" class="btn btn-default">Search</button>

                                <div>
                                    <ul>
                                        <li ng-repeat="result in search.results">
                                            <a href="https://www.youtube.com/watch?v=@{{ result.videoId }}" target="_blank">
                                                <img ng-src="@{{ result.thumbnailDefault }}">
                                                &nbsp;
                                                <span>@{{ result.title }}</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            <div ng-controller="commentController as comment">
                                <h1>Comment Here</h1>
                                <textarea name="comment-area" id="comment-area" cols="30" rows="10" ng-model="comment.commentText"></textarea>
                                <button ng-click="comment.comment()" class="btn btn-default">Comment</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>


@stop