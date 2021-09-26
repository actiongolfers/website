/*
 * Concat Configuration
 *
 * See all options: https://github.com/gruntjs/grunt-contrib-concat
 */
module.exports = function( grunt ) {
  grunt.config( 'concat', {
      options: {
          report: 'min'
      },

      live: {
        filter: function (filepath) {
            if (!grunt.file.exists(filepath)) {
                grunt.fail.warn('Could not find: ' + filepath);
            } else {
                return true;
            }
        },
        nonull: true,
        src: ['library/js/vendor/jquery.js','library/js/vendor/slick.js', 'library/js/actiongolf.js'],
        dest: 'library/js/actiongolf.js'
      },
      createtournament: {
        filter: function (filepath) {
            if (!grunt.file.exists(filepath)) {
                grunt.fail.warn('Could not find: ' + filepath);
            } else {
                return true;
            }
        },
        nonull: true,
        src: ['library/js/vendor/jquery.js', 'library/js/vendor/jquery-ui.js', 'library/js/create-tournament.js'],
        dest: 'library/js/create-tournament.js'
      }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
};