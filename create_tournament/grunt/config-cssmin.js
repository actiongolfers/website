/*

* Css min Configuration

*

* See all options: https://github.com/gruntjs/grunt-contrib-cssmin

*/
module.exports = function ( grunt ) {

    //require('time-grunt')(grunt);

    grunt.config( 'cssmin', {

        live: {

            files: [ {
                expand: true,
                cwd: 'library/css/',
                src: [ '**/*.css' ],
                dest: 'library/css/',
                ext: '.css'
            } ]

        }
    } );
    grunt.loadNpmTasks( 'grunt-contrib-cssmin' );

};
