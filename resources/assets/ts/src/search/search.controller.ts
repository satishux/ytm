module ytm.search {
    import IVideoSearchResults = ytm.services.IVideoSearchResults;
    import ISearchObj = ytm.services.ISearchObj;
    'use strict';

    interface ISearchController {
        searchService : ytm.services.ISearchService;
        searchData : ytm.services.ISearchObj;
        search() : void;
        results : Array<ytm.services.IVideoSearchResults>;
    }
    class SearchController implements ISearchController {

        static $inject = ['searchService', '$scope'];

        searchData : ytm.services.ISearchObj;
        searchService : ytm.services.ISearchService;
        results : Array<ytm.services.IVideoSearchResults>;
        $scope : ng.IScope;

        constructor(searchService : ytm.services.ISearchService, $scope : ng.IScope) {
            this.searchData = {
                input : '',
                type : 'video',
                order : 'relevance'
            };
            this.searchService = searchService;
            this.results = this.searchService.searchResults;
            this.$scope = $scope;

        }

        search():void {
            var promise = this.searchService.search(this.searchData);

            promise.then((results : Array<IVideoSearchResults> ) => {
                this.searchService.searchResults = this.results = results ;
            });
        }
    }

    angular.module('ytm.search').controller('searchController', SearchController);
}