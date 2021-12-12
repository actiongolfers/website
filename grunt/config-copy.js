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
                {expand: true,  src: '*.html', dest: '../ActionGolfWebApplication/', filter: 'isFile'},
                {expand: true,  src: '*.htm', dest: '../ActionGolfWebApplication/', filter: 'isFile'}
              ],
        },
        prodSource: {
            files: [
                {expand: true,  src: 'fonts/**', dest: '../../actiongolfers/website/'},
                {expand: true,  src: 'grunt/**', dest: '../../actiongolfers/website/'},
                {expand: true,  src: 'images/**', dest: '../../actiongolfers/website/'},
                {expand: true,  src: 'library/**', dest: '../../actiongolfers/website/'},
                {expand: true,  src: 'pages/**', dest: '../../actiongolfers/website/'},
                {expand: true,  src: 'uncompressed/**', dest: '../../actiongolfers/website/'},
                {expand: true,  src: '*.html', dest: '../../actiongolfers/website/', filter: 'isFile'},
                {expand: true,  src: '*.json', dest: '../../actiongolfers/website/', filter: 'isFile'},
                {expand: true,  src: '*.js', dest: '../../actiongolfers/website/', filter: 'isFile'},
                {expand: true,  src: '*.htm', dest: '../../actiongolfers/website/', filter: 'isFile'}

              ],
        },
        stage: {
            files: [
                {expand: true,  src: 'library/**', dest: '../pramithprakash.github.io/actiongolf/'},
                {expand: true,  src: 'images/**', dest: '../pramithprakash.github.io/actiongolf/'},
                {expand: true,  src: 'fonts/**', dest: '../pramithprakash.github.io/actiongolf/'},
                {expand: true,  src: '*.html', dest: '../pramithprakash.github.io/actiongolf/', filter: 'isFile'},
                {expand: true,  src: '*.htm', dest: '../pramithprakash.github.io/actiongolf/', filter: 'isFile'}
              ],
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
};