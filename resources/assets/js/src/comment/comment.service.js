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
                //return this.$http.get('/api/comment/insert?commentThread='+ JSON.stringify(str))
                //            .then(function(response : ng.IHttpPromiseCallbackArg<any>) {
                //               return response.data;
                //            });
                return this.$http({
                    'method': 'POST',
                    'url': '/api/comment/insert',
                    'data': $.param(str)
                }).then(function (response) {
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