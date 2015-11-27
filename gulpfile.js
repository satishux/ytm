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


elixir(function (mix) {
    mix.sass('app.scss');

    //mix.scriptsIn("resources/assets/ts/build", 'public/js/app.js');

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
        "src/comment/comment.controller.js"


    /**
     * helpers
     *
     * "src/helpers/promise.js" // not required now
     */


    ], 'public/js/app.js');

    mix.browserSync({
        proxy: "localhost:8000"
    });
});
