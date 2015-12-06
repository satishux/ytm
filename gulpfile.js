var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir.config.sourcemaps = false;

elixir(function (mix) {

    /**
     * Copying Font to resources/assets/less/fonts folder
     */

    /**
     * uncomment the line when update the bower so case fonts get updated
     * and then re-comment after running one time
     */

    //mix.copy('bower_components/font-awesome', 'resources/assets/less/icons/font-awesome');
    //mix.copy('bower_components/themify-icons', 'resources/assets/less/icons/themify-icons');
    //mix.copy('bower_components/material-design-iconic-font', 'resources/assets/less/icons/material-design-iconic-font');
    //mix.copy('bower_components/simple-line-icons', 'resources/assets/less/icons/simple-line-icons');
    //mix.copy('bower_components/ionicons', 'resources/assets/less/icons/ionicons');
    //mix.copy('bower_components/weather-icons', 'resources/assets/less/icons/weather-icons');

    //mix.copy('bower_components/font-awesome/fonts', 'public/fonts');
    //mix.copy('bower_components/themify-icons/fonts', 'public/fonts');
    //mix.copy('bower_components/material-design-iconic-font/dist/fonts', 'public/fonts');
    //mix.copy('bower_components/simple-line-icons/fonts', 'public/fonts');
    //mix.copy('bower_components/ionicons/fonts', 'public/fonts');
    //mix.copy('bower_components/weather-icons/fonts', 'public/fonts');


    /**
     * Compiling Theme Less Styles
     *
     * Remove Comment When Update Core Theme Styles
     */
    //mix.less('core.less', 'public/css/core.css');
    //mix.less('components.less', 'public/css/components.css');
    //mix.less('icons.less', 'public/css/icons.css');
    //mix.less('pages.less', 'public/css/pages.css');
    //mix.less('responsive.less', 'public/css/responsive.css');

    /**
     * My custom Css
     */
    mix.sass('app.scss');


    mix.scripts([
    /**
     *  Main Module
     */

        "app.module.js",


    /**
     * Modules
     * "src/auth/auth.module.js", // not required now
     * "src/api/api.module.js",
     */

        "src/_bootstrap/app.core.module.js",
        "src/search/search.module.js",
        "src/_bootstrap/app.services.module.js",
        "src/comment/comment.module.js",

    /**
     *bootstrap
     */
        "src/_bootstrap/app.config.js",
        "src/_bootstrap/app.controller.js",
        "src/_bootstrap/app.run.js",


    /**
     * api
     *"src/api/auth.service.js", // not required now
     */


    /**
     * auth
     * "src/auth/login.controller.js",
     */


    /**
     * search
     */
        "src/search/search.service.js",
        "src/search/search.controller.js",

    /**
     * comment
     */
        "src/comment/comment.service.js",
        "src/comment/comment.controller.js",


    /**
     * helpers
     *
     * "src/helpers/promise.js" // not required now
     */
        "src/helpers/ui/uiBlocker.js"


    ], 'public/js/app.js');

    /**
     * Core Theme JS
     *
     */
    //mix.scripts([
    //    "src/theme/jquery.core.js",
    //    "src/theme/jquery.app.js"
    //], 'public/js/theme.core.js');

    /**
     * Jquery
     */
    //mix.copy('bower_components/jquery/dist/jquery.min.js', 'public/js/jquery.js');

    /**
     * Angular
     */
    //mix.copy('bower_components/angular/angular.min.js', 'public/js/angular.js');

    /**
     * Bootstrap
     */
    //mix.copy('bower_components/bootstrap/dist/css/bootstrap.min.css', 'public/css/bootstrap.css');
    //mix.copy('bower_components/bootstrap/dist/js/bootstrap.min.js', 'public/js/bootstrap.js');
    //mix.copy('bower_components/bootstrap/dist/fonts', 'public/fonts');

    /**
     * Plugins
     */

    //mix.copy('bower_components/jquery.nicescroll/dist/jquery.nicescroll.min.js', 'public/js/jquery.nicescroll.js');
    //mix.copy('bower_components/slimScroll/jquery.slimscroll.min.js', 'public/js/jquery.slimscroll.js');
    //mix.copy('bower_components/blockUI/jquery.blockUI.js', 'public/js/jquery.blockUI.js');
    //mix.copy('bower_components/wow/dist/wow.min.js', 'public/js/wow.js');

    //mix.copy('bower_components/Waves/dist/waves.min.js', 'public/js/waves.js');
    //mix.copy('bower_components/Waves/dist/waves.min.css', 'public/css/waves.css');

    //mix.copy('bower_components/detect-mobile-browser/detectmobilebrowser.js', 'public/js/detect.js');
    //mix.copy('bower_components/fastclick/lib/fastclick.js', 'public/js/fastclick.js');


    mix.browserSync({
        proxy: "localhost:8000"
    });
});
