var ytm;
(function (ytm) {
    var api;
    (function (api) {
        'use strict';
        var SearchService = (function () {
            function SearchService($http) {
                this.$http = $http;
            }
            SearchService.prototype.search = function (query) {
                return this.$http.get('/api/search/videos/' + query)
                    .then(function (response) {
                    return response.data;
                });
            };
            SearchService.$inject = ['$http'];
            return SearchService;
        })();
        api.SearchService = SearchService;
        angular.module('ytm.api').service('searchService', SearchService);
    })(api = ytm.api || (ytm.api = {}));
})(ytm || (ytm = {}));
//# sourceMappingURL=search.service.js.map