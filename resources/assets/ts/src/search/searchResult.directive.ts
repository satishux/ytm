module ytm.search {
    'use strict';

    interface ISearchResultScope extends ng.IScope {
        result : ytm.services.IVideoSearchResults;
        select(videoId : string) : void;
        remove(videoId : string, element : ng.IAugmentedJQuery) : void;
        selected : boolean;
    }


    class SearchResultDirectiveController {

        static $inject = ['searchService'];

        constructor(public searchService : ytm.services.ISearchService){}

        select(videoId : string) {

            console.log(this.searchService.searchResults);
        }

        remove(videoId : string, element : ng.IAugmentedJQuery) {
            this.searchService.searchResults = this.searchService.searchResults.filter((el : ytm.services.IVideoSearchResults) => {
                return el.videoId !== videoId;
            });

            element.remove();
        }
    }

    class SearchResultDirective implements ng.IDirective {

        static instance() {
            return new SearchResultDirective;
        }

        restrict = 'E';
        scope = {
            result : '=resultData'
        };
        controller = SearchResultDirectiveController;
        template = `
                    <div class="row" style="display : block">
                        <div class="col-md-12" style="padding : 20px; border : 1px solid #f1f1f1">
                            <div class="pull-left">
                                <div style="display: table-cell; vertical-align: top;">
                                    <a href="https://www.youtube.com/watch?v=@{{ result.videoId }}" target="_blank">
                                        <img ng-src="{{ result.thumbnailDefault }}">
                                    </a>
                                </div>
                                <div style="display : table-cell; vertical-align: top; padding-left : 20px">
                                    <h3 class="h5 font-600 m-b-5"><a href="https://www.youtube.com/watch?v={{ result.videoId }}" target="_blank" ng-bind="result.title"></a></h3>
                                    <div class="font-13 text-success m-b-10" ng-bind="result.channelTitle">
                                    </div>
                                    <p ng-bind="result.description">
                                    </p>
                                </div>
                            </div>

                            <div class="action-buttons pull-right">
                                <button class="btn btn-icon waves-effect waves-light" ng-class="{ 'btn-default' : selected, 'btn-white' : !selected }" ng-click="select(result.videoId)"> <i class="fa fa-check"></i> </button>
                                <button class="btn btn-icon waves-effect waves-light btn-danger" ng-click="remove(result.videoId)"> <i class="fa fa-remove"></i> </button>
                            </div>
                        </div>
                    </div>
        `;

        link(scope : ISearchResultScope, element : ng.IAugmentedJQuery, attrs : ng.IAttributes, controller : SearchResultDirectiveController) {

            scope.selected = false;

            scope.select = function (videoId) { scope.selected = !scope.selected; controller.select(videoId) };

            scope.remove = function (videoId) { controller.remove(videoId, element) };
        }
    }

    angular.module('ytm.search').directive('searchResult', SearchResultDirective.instance);
}