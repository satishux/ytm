module ytm.services {
    'use strict';

    export interface IVideoSearchResults {
        videoId : string;
        kind : string;
        publishedAt : string;
        channelId : string;
        title : string;
        description : string;
        thumbnailDefault : string;
        thumbnailMedium : string;
        thumbnailHigh : string;
        channelTitle : string;
        liveBroadcastContent : string;
    }
    export interface ISearchObj {
        input : string;
        type : string;
        order : string;
    }
    export interface ISearchService {
        searchResults : Array<IVideoSearchResults>;
        search(query : ISearchObj) : ng.IPromise<Array<IVideoSearchResults>>;
    }

    export class SearchService {

        static $inject = ['$http'];

        $http : ng.IHttpService;
        searchResults : Array<IVideoSearchResults>;

        constructor($http : ng.IHttpService) {
            this.$http = $http;
            this.searchResults = null;
        }

        search(query : ISearchObj) : ng.IPromise<Array<IVideoSearchResults>> {

            return  this.$http.get('/api/videos/search?data=' + JSON.stringify(query))
                                .then(function(response : ng.IHttpPromiseCallbackArg<Array<IVideoSearchResults>>) : Array<IVideoSearchResults> {
                                    return response.data;
                                });

        }
    }

    angular.module('ytm.services').service('searchService', SearchService);

}