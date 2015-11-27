var ytm;
(function (ytm) {
    var api;
    (function (api) {
        'use strict';
        var AuthService = (function () {
            function AuthService() {
                this.oauth2ClientId = '938200501272-drja408kab3jfjdqh3saoi6al1bbistr.apps.googleusercontent.com';
                this.oauth2Scopes = ['https://www.googleapis.com/auth/youtube'];
                this.authStatus = false;
                this.resolve = null;
                this.reject = null;
            }
            AuthService.prototype.init = function () {
                var _this = this;
                gapi.auth.init(function () {
                    window.setTimeout(_this.checkAuth.bind(_this), 1);
                });
            };
            AuthService.prototype.checkAuth = function () {
                gapi.auth.authorize({
                    client_id: this.oauth2ClientId,
                    scope: this.oauth2Scopes,
                    immediate: true
                }, this.handleAuthResult.bind(this));
            };
            AuthService.prototype.handleAuthResult = function (authResult) {
                if (authResult && !authResult.error) {
                    // Authorization was successful. Hide authorization prompts and show
                    // content that should be visible after authorization succeeds.
                    $('.pre-auth').hide();
                    $('.post-auth').show();
                    this.loadAPIClientInterfaces.apply(this);
                }
                else {
                    //if imidiate login failed, then open dialog box to login
                    gapi.auth.authorize({
                        client_id: this.oauth2ClientId,
                        scope: this.oauth2Scopes,
                        immediate: false
                    }, this.handleAuthResult.bind(this));
                }
            };
            AuthService.prototype.loadAPIClientInterfaces = function () {
                var _this = this;
                gapi.client.load('youtube', 'v3', function () {
                    _this.handleAPILoaded();
                });
            };
            /*
              * Exit Point
              */
            AuthService.prototype.handleAPILoaded = function () {
                this.authStatus = true;
                this.resolve(this.authStatus);
            };
            /*
              * Entry point
              */
            AuthService.prototype.connect = function () {
                var _this = this;
                return new ytm.helpers.Promise(function (resolve, reject) {
                    _this.resolve = resolve;
                    _this.reject = reject;
                    _this.init();
                });
            };
            return AuthService;
        })();
        angular.module('ytm.api').service('authService', AuthService);
    })(api = ytm.api || (ytm.api = {}));
})(ytm || (ytm = {}));
//# sourceMappingURL=auth.service.js.map