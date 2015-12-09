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
                    order: 'relevance',
                    count: 10
                };
                this.searchService = searchService;
                this.results = this.searchService.searchResults;
                this.$scope = $scope;
            }
            SearchController.prototype.search = function () {
                var _this = this;
                var promise = this.searchService.search(this.searchData);
                var searchBox = $('#search-results-box');
                var uiBlocker = new ytm.helpers.ui.uiBlocker;
                uiBlocker.blockElement(searchBox);
                promise.then(function (results) {
                    _this.searchService.searchResults = _this.results = results;
                    uiBlocker.unblockElement(searchBox);
                });
            };
            SearchController.prototype.select = function (searchResultId) {
                console.log(searchResultId + ' is selected');
            };
            SearchController.prototype.remove = function (searchResultId) {
                console.log(searchResultId + ' is removed');
            };
            SearchController.$inject = ['searchService', '$scope'];
            return SearchController;
        })();
        angular.module('ytm.search').controller('searchController', SearchController);
    })(search = ytm.search || (ytm.search = {}));
})(ytm || (ytm = {}));
//# sourceMappingURL=search.controller.js.map