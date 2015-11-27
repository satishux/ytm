module ytm.auth {
    'use strict';

    export interface IYtmWindowService extends ng.IWindowService {
        initGapi() : void;
    }
    interface ILoginController {
        attempt() : void;
    }

    class LoginController implements ILoginController {

        static $inject = ['$scope', 'authService', '$window'];


        /**
         * api/auth.service.ts
         * handles login logic
         */
        authService : ytm.api.IAuthService;
        /**
         * Button Text Message
         */
        text : string;

        $scope : ng.IScope;

        constructor($scope : ng.IScope, authService : ytm.api.IAuthService, $window : IYtmWindowService) {
            this.authService = authService;
            this.text = 'Login';
            this.$scope = $scope;

            $window.initGapi = () => {
                this.attempt();
            }
        }

        /**
         *  Initiate Google Login Process
         */
        attempt() {

            this.authService
                        .connect()
                        .then( (val : number) => {
                            console.log(val);
                        });

        }


    }

    angular.module('ytm.auth')
            .controller('loginController', LoginController);
}