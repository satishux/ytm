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
            this.commentText = this.removeHTMLEntities(this.commentText);
            var ids = this.getSearchResultsFields('videoId');
            
            
            this.commentService.comment(this.commentText, ids)
                                .then(function(data : string) {

                                    console.log(data);
                                });

        }

        private removeHTMLEntities(contents : string) {
            return $('<div />').html(contents).text();
        }

        private getSearchResultsFields(field : string) {
            return this.searchService.searchResults.map(function (a:IVideoSearchResults) {
                return a[field];
            });
        };

    }


    angular.module('ytm.comment').controller('commentController', CommentController);
}