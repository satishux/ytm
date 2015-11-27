var ytm;
(function (ytm) {
    'use strict';
    angular.module('ytm', [
        'ytm.core',
        'ytm.services',
        'ytm.search',
        'ytm.comment'
    ]);
})(ytm || (ytm = {}));
//# sourceMappingURL=app.module.js.map
var ytm;
(function (ytm) {
    var core;
    (function (core) {
        'use strict';
        angular.module('ytm.core', []);
    })(core = ytm.core || (ytm.core = {}));
})(ytm || (ytm = {}));
//# sourceMappingURL=app.core.module.js.map
var ytm;
(function (ytm) {
    var search;
    (function (search) {
        'use strict';
        angular.module('ytm.search', []);
    })(search = ytm.search || (ytm.search = {}));
})(ytm || (ytm = {}));
//# sourceMappingURL=search.module.js.map
var ytm;
(function (ytm) {
    var services;
    (function (services) {
        'use strict';
        angular.module('ytm.services', []);
    })(services = ytm.services || (ytm.services = {}));
})(ytm || (ytm = {}));
//# sourceMappingURL=app.services.module.js.map
var ytm;
(function (ytm) {
    var comment;
    (function (comment) {
        'use strict';
        angular.module('ytm.comment', []);
    })(comment = ytm.comment || (ytm.comment = {}));
})(ytm || (ytm = {}));
//# sourceMappingURL=comment.module.js.map
var ytm;
(function (ytm) {
    'use strict';
    angular.module('ytm')
        .config(config);
    config.$inject = ['$locationProvider', '$httpProvider', '$interpolateProvider'];
    function config($locationProvider, $httpProvider, $interpolateProvider) {
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        $httpProvider.defaults.headers.common['X-Requested-With'] = "XMLHttpRequest";
        //$httpProvider.defaults.headers.post['X-CSRF-Token'] = $('meta[name=_token]').attr('content');
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    }
})(ytm || (ytm = {}));
//# sourceMappingURL=app.config.js.map
var ytm;
(function (ytm) {
    'use strict';
})(ytm || (ytm = {}));
//# sourceMappingURL=app.controller.js.map
var ytm;
(function (ytm) {
    angular.module('ytm').run(run);
    run.$inject = [];
    function run() {
    }
})(ytm || (ytm = {}));
//# sourceMappingURL=app.run.js.map
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
                return this.$http.get('/api/videos/search?data=' + JSON.stringify(query))
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
var ytm;
(function (ytm) {
    var services;
    (function (services) {
        'use strict';
        var CommentService = (function () {
            function CommentService($http) {
                this.$http = $http;
            }
            CommentService.prototype.comment = function (commentText, videoIds) {
                var str = {
                    "comment": commentText,
                    "ids": videoIds
                };
                console.log(JSON.stringify(str));
                return this.$http.get('/api/comment/insert?commentThread=' + JSON.stringify(str))
                    .then(function (response) {
                    return response.data;
                });
            };
            CommentService.$inject = ['$http'];
            return CommentService;
        })();
        services.CommentService = CommentService;
        angular.module('ytm.services').service('commentService', CommentService);
    })(services = ytm.services || (ytm.services = {}));
})(ytm || (ytm = {}));
//# sourceMappingURL=comment.service.js.map
var ytm;
(function (ytm) {
    var comment;
    (function (comment) {
        'use strict';
        var CommentController = (function () {
            function CommentController(searchService, commentService) {
                this.searchService = searchService;
                this.commentService = commentService;
                this.commentText = "";
            }
            CommentController.prototype.comment = function () {
                console.log(this.commentText);
                var ids = this.getSearchResultsFields('videoId');
                this.commentService.comment(this.commentText, ids)
                    .then(function (data) {
                    console.log(data);
                });
            };
            CommentController.prototype.getSearchResultsFields = function (field) {
                return this.searchService.searchResults.map(function (a) {
                    return a[field];
                });
            };
            ;
            CommentController.$inject = ['searchService', 'commentService'];
            return CommentController;
        })();
        angular.module('ytm.comment').controller('commentController', CommentController);
    })(comment = ytm.comment || (ytm.comment = {}));
})(ytm || (ytm = {}));
//# sourceMappingURL=comment.controller.js.map
//# sourceMappingURL=app.js.map
