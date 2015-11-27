module ytm.comment {
    import IVideoSearchResults = ytm.services.IVideoSearchResults;
    'use strict';

    interface ICommentController {

        commentText : string;
        comment() : void;

    }

    class CommentController implements ICommentController {

        static $inject = ['searchService', 'commentService'];

        searchService : ytm.services.ISearchService;
        commentService : ytm.services.ICommentService;
        commentText : string;

        constructor(searchService : ytm.services.ISearchService, commentService : ytm.services.ICommentService) {
            this.searchService = searchService;
            this.commentService = commentService;
            this.commentText = "";

        }

        comment():void {
            console.log(this.commentText);
            var ids = this.getSearchResultsFields('videoId');
            this.commentService.comment(this.commentText, ids)
                                .then(function(data : string) {

                                    console.log(data);
                                });

        }

        private getSearchResultsFields(field : string) {
            return this.searchService.searchResults.map(function (a:IVideoSearchResults) {
                return a[field];
            });
        };

    }


    angular.module('ytm.comment').controller('commentController', CommentController);
}