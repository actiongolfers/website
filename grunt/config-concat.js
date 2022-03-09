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

      actiongolf: {
        filter: function (filepath) {
            if (!grunt.file.exists(filepath)) {
                grunt.fail.warn('Could not find: ' + filepath);
            } else {
                return true;
            }
        },
        nonull: true,
        src: ['library/js/vendor/jquery.js', 'library/js/vendor/slick.js', 'library/js/actiongolf.js'],
        dest: 'library/js/actiongolf.js'
      },
      landing: {
        filter: function (filepath) {
            if (!grunt.file.exists(filepath)) {
                grunt.fail.warn('Could not find: ' + filepath);
            } else {
                return true;
            }
        },
        nonull: true,
        src: ['library/js/vendor/jquery.js', 'library/js/vendor/handlebars.js', 'library/js/landing.js'],
        dest: 'library/js/landing.js'
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
      },
      activetournaments: {
        filter: function (filepath) {
            if (!grunt.file.exists(filepath)) {
                grunt.fail.warn('Could not find: ' + filepath);
            } else {
                return true;
            }
        },
        nonull: true,
        src: ['library/js/vendor/jquery.js','library/js/vendor/handlebars.js', 'library/js/active-tournaments.js'],
        dest: 'library/js/active-tournaments.js'
      },
      createlanding: {
        filter: function (filepath) {
            if (!grunt.file.exists(filepath)) {
                grunt.fail.warn('Could not find: ' + filepath);
            } else {
                return true;
            }
        },
        nonull: true,
        src: ['library/js/vendor/jquery.js','library/js/vendor/handlebars.js', 'library/js/vendor/rte.js', 'library/js/vendor/rte-plugins.js', 'library/js/create-landing.js'],
        dest: 'library/js/create-landing.js'
      },
      login: {
        filter: function (filepath) {
            if (!grunt.file.exists(filepath)) {
                grunt.fail.warn('Could not find: ' + filepath);
            } else {
                return true;
            }
        },
        nonull: true,
        src: ['library/js/vendor/jquery.js', 'library/js/login.js'],
        dest: 'library/js/login.js'
      },
      createteams: {
        filter: function (filepath) {
            if (!grunt.file.exists(filepath)) {
                grunt.fail.warn('Could not find: ' + filepath);
            } else {
                return true;
            }
        },
        nonull: true,
        src: ['library/js/vendor/jquery.js','library/js/vendor/handlebars.js', 'library/js/create-teams.js'],
        dest: 'library/js/create-teams.js'
      },
      tournamentTeams: {
        filter: function (filepath) {
            if (!grunt.file.exists(filepath)) {
                grunt.fail.warn('Could not find: ' + filepath);
            } else {
                return true;
            }
        },
        nonull: true,
        src: ['library/js/vendor/jquery.js','library/js/vendor/handlebars.js', 'library/js/tournament-teams.js'],
        dest: 'library/js/tournament-teams.js'
      }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
};