module ytm {
    'use strict';

    angular.module('ytm')
            .config(config);

    config.$inject = ['$locationProvider', '$httpProvider', '$interpolateProvider' ];

    function config($locationProvider : ng.ILocationProvider, $httpProvider : ng.IHttpProvider, $interpolateProvider : ng.IInterpolateProvider) : void {

        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        $httpProvider.defaults.headers.common['X-Requested-With'] = "XMLHttpRequest";
        //$httpProvider.defaults.headers.post['X-CSRF-Token'] = $('meta[name=_token]').attr('content');


        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    }


}
