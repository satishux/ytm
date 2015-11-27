var ytm;
(function (ytm) {
    var auth;
    (function (auth) {
        'use strict';
        var LoginController = (function () {
            function LoginController($scope, authService, $window) {
                var _this = this;
                this.authService = authService;
                this.text = 'Login';
                this.$scope = $scope;
                $window.initGapi = function () {
                    _this.attempt();
                };
            }
            /**
             *  Initiate Google Login Process
             */
            LoginController.prototype.attempt = function () {
                this.authService
                    .connect()
                    .then(function (val) {
                    console.log(val);
                });
            };
            LoginController.$inject = ['$scope', 'authService', '$window'];
            return LoginController;
        })();
        angular.module('ytm.auth')
            .controller('loginController', LoginController);
    })(auth = ytm.auth || (ytm.auth = {}));
})(ytm || (ytm = {}));
//# sourceMappingURL=login.controller.js.map