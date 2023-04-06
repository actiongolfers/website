/*
 * Uglify Configuration
 *
 * See all options: https://github.com/gruntjs/grunt-contrib-uglify
 */
module.exports = function( grunt ) {
    var distAGFiles = {},
        distLPFiles = {},
        distCTFiles = {},
        distLGFiles = {},
        distCLFiles = {},
        distATFiles = {},
        distCTMFiles = {},
        distTTFiles = {},
        distTDFiles = {},
        distPPFiles = {};

    distAGFiles[ 'library/js/actiongolf.js' ] = ['library/js/actiongolf.js'];
    distLPFiles[ 'library/js/landing.js' ] = ['library/js/landing.js'];
    distCTFiles[ 'library/js/create-tournament.js' ] = ['library/js/create-tournament.js'];
    distCLFiles[ 'library/js/create-landing.js' ] = ['library/js/create-landing.js'];
    distLGFiles[ 'library/js/login.js' ] = ['library/js/login.js'];
    distATFiles[ 'library/js/active-tournaments.js' ] = ['library/js/active-tournaments.js'];
    distCTMFiles[ 'library/js/create-teams.js' ] = ['library/js/create-teams.js'];
    distTTFiles[ 'library/js/tournament-teams.js' ] = ['library/js/tournament-teams.js'];
    distTDFiles[ 'library/js/tournament-details.js' ] = ['library/js/tournament-details.js'];
    distPPFiles[ 'library/js/participate.js' ] = ['library/js/participate.js'];

    grunt.config( 'uglify', {
        options: {
            report: 'min',
            mangle: {
                toplevel: true
            }
        },
        actiongolf: {
            files: distAGFiles
        },
        landing: {
            files: distLPFiles
        },
        createtournament: {
            files: distCTFiles
        },
        activetournaments: {
            files: distATFiles
        },
        createlanding: {
            files: distCLFiles
        },
        login: {
            files: distLGFiles
        },
        createteams: {
            files: distCTMFiles
        },
        tournamentTeams: {
            files: distTTFiles
        },
        tournamentDetails: {
            files: distTDFiles
        },
        participate: {
            files: distPPFiles
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
};