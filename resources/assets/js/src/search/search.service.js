var ytm;
(function (ytm) {
    var services;
    (function (services) {
        'use strict';
        var SearchService = (function () {
            function SearchService($http) {
                this.$http = $http;
                this.searchResults = null;
            }
            SearchService.prototype.search = function (query) {
                return this.$http.get('/api/youtube/search?data=' + JSON.stringify(query))
                    .then(function (response) {
                    return response.data;
                });
            };
            SearchService.$inject = ['$http'];
            return SearchService;
        })();
        services.SearchService = SearchService;
        angular.module('ytm.services').service('searchService', SearchService);
    })(services = ytm.services || (ytm.services = {}));
})(ytm || (ytm = {}));
//# sourceMappingURL=search.service.js.map