var ytm;
(function (ytm) {
    var search;
    (function (search) {
        'use strict';
        var SearchController = (function () {
            function SearchController(searchService, $scope) {
                this.searchData = {
                    input: '',
                    type: 'video',
                    order: 'relevance'
                };
                this.searchService = searchService;
                this.results = this.searchService.searchResults;
                this.$scope = $scope;
            }
            SearchController.prototype.search = function () {
                var _this = this;
                var promise = this.searchService.search(this.searchData);
                promise.then(function (results) {
                    _this.searchService.searchResults = _this.results = results;
                });
            };
            SearchController.$inject = ['searchService', '$scope'];
            return SearchController;
        })();
        angular.module('ytm.search').controller('searchController', SearchController);
    })(search = ytm.search || (ytm.search = {}));
})(ytm || (ytm = {}));
//# sourceMappingURL=search.controller.js.map