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
                this.commentText = this.removeHTMLEntities(this.commentText);
                var ids = this.getSearchResultsFields('videoId');
                this.commentService.comment(this.commentText, ids)
                    .then(function (data) {
                    console.log(data);
                });
            };
            CommentController.prototype.removeHTMLEntities = function (contents) {
                return $('<div />').html(contents).text();
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