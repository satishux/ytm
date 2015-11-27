module ytm.api {
    'use strict';

    export interface IAuthService {
        oauth2ClientId : string;
        oauth2Scopes : Array<string>;
        authStatus : boolean;
        resolve : any;
        connect() : ytm.helpers.IPromise;
    }

    class AuthService implements IAuthService {
        oauth2Scopes:Array<string>;
        oauth2ClientId : string;
        authStatus : boolean;
        resolve : any;
        reject : any;

        constructor() {
            this.oauth2ClientId = '938200501272-drja408kab3jfjdqh3saoi6al1bbistr.apps.googleusercontent.com';
            this.oauth2Scopes = ['https://www.googleapis.com/auth/youtube'];
            this.authStatus = false;
            this.resolve = null;
            this.reject = null;

        }

        private init() {

            gapi.auth.init(() => {
                window.setTimeout(
                    this.checkAuth.bind(this), 1);
            });

        }

        private checkAuth() {
            gapi.auth.authorize({
                client_id: this.oauth2ClientId,
                scope: this.oauth2Scopes,
                immediate: true
            }, this.handleAuthResult.bind(this));
        }

        private handleAuthResult(authResult) {
            if (authResult && !authResult.error) {
                // Authorization was successful. Hide authorization prompts and show
                // content that should be visible after authorization succeeds.
                $('.pre-auth').hide();
                $('.post-auth').show();
                this.loadAPIClientInterfaces.apply(this);
            } else {
                    //if imidiate login failed, then open dialog box to login
                    gapi.auth.authorize({
                        client_id: this.oauth2ClientId,
                        scope: this.oauth2Scopes,
                        immediate: false
                    }, this.handleAuthResult.bind(this));
            }
        }

        private loadAPIClientInterfaces() {

            gapi.client.load('youtube', 'v3', () => {
                this.handleAPILoaded();
            });

        }

        /*
          * Exit Point
          */
        public handleAPILoaded() {
            this.authStatus = true;
            this.resolve(this.authStatus);
        }
        /*
          * Entry point
          */
        connect():ytm.helpers.IPromise{
            return new ytm.helpers.Promise((resolve, reject) => {
                this.resolve = resolve;
                this.reject = reject;
                this.init();
            });
        }
    }

    angular.module('ytm.api').service('authService', AuthService);
}