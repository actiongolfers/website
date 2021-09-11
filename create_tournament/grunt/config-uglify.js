/*
 * Uglify Configuration
 *
 * See all options: https://github.com/gruntjs/grunt-contrib-uglify
 */
module.exports = function( grunt ) {
    var distFiles = {};

    distFiles[ 'library/js/actiongolf.js' ] = ['library/js/actiongolf.js'];

    grunt.config( 'uglify', {
        options: {
            report: 'min',
            mangle: {
                toplevel: true
            }
        },
        live: {
            files: distFiles
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
};