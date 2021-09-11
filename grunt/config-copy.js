/*
 * Uglify Configuration
 *
 * See all options: https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function( grunt ) {
    grunt.config( 'copy', {
        prod: {
            files: [
                {expand: true,  src: 'library/**', dest: '../ActionGolfWebApplication/'},
                {expand: true,  src: 'images/**', dest: '../ActionGolfWebApplication/'},
                {expand: true,  src: 'fonts/**', dest: '../ActionGolfWebApplication/'},
                {expand: true,  src: '*.html', dest: '../ActionGolfWebApplication/', filter: 'isFile'}
              ],
        },
        stage: {
            files: [
                {expand: true,  src: 'library/**', dest: '../pramithprakash.github.io/actiongolf/'},
                {expand: true,  src: 'images/**', dest: '../pramithprakash.github.io/actiongolf/'},
                {expand: true,  src: 'fonts/**', dest: '../pramithprakash.github.io/actiongolf/'},
                {expand: true,  src: '*.html', dest: '../pramithprakash.github.io/actiongolf/', filter: 'isFile'}
              ],
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
};