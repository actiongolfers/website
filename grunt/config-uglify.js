/*
 * Uglify Configuration
 *
 * See all options: https://github.com/gruntjs/grunt-contrib-uglify
 */
module.exports = function( grunt ) {
    var distFiles = {},
        distCTFiles = {};

    distFiles[ 'library/js/actiongolf.js' ] = ['library/js/actiongolf.js'];
    distCTFiles[ 'library/js/create-tournament.js' ] = ['library/js/create-tournament.js'];

    grunt.config( 'uglify', {
        options: {
            report: 'min',
            mangle: {
                toplevel: true
            }
        },
        live: {
            files: distFiles
        },
        createtournament: {
            files: distCTFiles
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
};