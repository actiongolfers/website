/*
 * Clean Configuration
 *
 * See all options: https://github.com/gruntjs/grunt-contrib-clean
 */
module.exports = function ( grunt ) {

    //require('time-grunt')(grunt);

    grunt.config( 'clean', {
        options: {
            force: true
        },
        live: [
            'library/'
        ],
        vendor: [
            'library/js/vendor'
        ]
    } );

    grunt.loadNpmTasks( 'grunt-contrib-clean' );
};
