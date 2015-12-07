module ytm.services {
    'use strict';

    export interface ICommentService {
        comment( commentText : string, videoIds : Array<string> ) : ng.IPromise<any>;
    }

    export class CommentService implements ICommentService {

        static $inject = ['$http'];

        $http : ng.IHttpService;

        constructor($http : ng.IHttpService) {
            this.$http = $http;
        }

        comment(commentText : string, videoIds : Array<string>) : ng.IPromise<any>{
            var str = {
                "comment" : commentText,
                "ids" : videoIds
            };
            console.log(JSON.stringify(str));

            //return this.$http.get('/api/comment/insert?commentThread='+ JSON.stringify(str))
            //            .then(function(response : ng.IHttpPromiseCallbackArg<any>) {
            //               return response.data;
            //            });

            return this.$http({
                'method' : 'POST',
                'url' : '/api/comment/insert',
                'data' : $.param(str)
            }).then(function(response : ng.IHttpPromiseCallbackArg<any>) {
                 return response.data;
            });
        }


    }

    angular.module('ytm.services').service('commentService', CommentService);

}