/*
 * RequireJS Build profile
 *
 * See all options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
 */
module.exports = function ( grunt ) {
    var _ = require( 'lodash' );

    var common = {

        // generateSourceMaps: true,
        /*
         The path that represents the project's root folder
         This path is relative to this file.
        */
        appDir: './uncompressed/js',

        noBuildTxt: true,

        /*
         This is the main path to which our modules are relative.
         This path is relative to the `appDir` option.
        */
        baseUrl: '.',

        /*
         Introduced in 2.1.2: If using "dir" for an output directory, normally the
         optimize setting is used to optimize the build bundles (the "modules"
         section of the config) and any other JS file in the directory. However, if
         the non-build bundle JS files will not be loaded after a build, you can
         skip the optimization of those files, to speed up builds. Set this value
         to true if you want to skip optimizing those other non-build bundle JS
         files.
        */
        skipDirOptimize: true,

        /*
         Since jQuery defines its path as `jquery`, it would need to be
         found at the root of your js directory (`baseUrl`). This may not
         always be possible. The following option allows us to locate
         jQuery at a more logical path.
         Paths are relative to `baseUrl`.
        */
        preserveLicenseComments: false,
        wrap: true,
        waitSeconds: 60,
        findNestedDependencies: true,
        preserveComments: false,
        optimize: 'none',

    };

    grunt.config( 'requirejs', {
        live: {
            options: _.assign( _.clone( common, true ), {
                dir: 'library/js',
                skipDirOptimize: true
            } )
        }
    } );

    grunt.loadNpmTasks( 'grunt-contrib-requirejs' );
};
