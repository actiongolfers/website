module.exports = function ( grunt ) {

    /* Configure */
    grunt.initConfig( {
        pkg: grunt.file.readJSON( 'package.json' ),
        noBuildTxt:false,
        buildRoot: '../',
        revision: 0, // updated via gitsvn:info task
        buildName: {
            dev: '<%= pkg.name %>-dev-build-r<%= revision %>',
            dist: '<%= pkg.name %>-dist-build-r<%= revision %>'
        },
        buildPath: {
            dev: '<%= buildRoot %><%= buildName.dev %>/',
            dist: '<%= buildRoot %><%= buildName.dist %>/'
        }
    } );

    /* Load tasks */
    grunt.loadTasks( 'grunt' );

    grunt.registerTask( 'build', 'Build for integration handoff.', [
       'clean:live',
       'less:actiongolf',
       'less:admin',
       'less:leaderboard',
       'cssmin:live',
       'requirejs:live',
       'uglify:actiongolf',
       'concat:actiongolf',
       'uglify:landing',
       'concat:landing',
       'uglify:activetournaments',
       'concat:activetournaments',
       'uglify:createtournament',
       'concat:createtournament',
       'uglify:createlanding',
       'concat:createlanding',
       'uglify:login',
       'concat:login',
       'uglify:createteams',
       'concat:createteams',
       'uglify:tournamentTeams',
       'concat:tournamentTeams',
       'uglify:tournamentDetails',
       'concat:tournamentDetails',
       'uglify:participate',
       'concat:participate',
       'uglify:tournamentSettings',
       'concat:tournamentSettings',
       'uglify:leaderboard',
       'concat:leaderboard',
       'clean:vendor',
       'handlebarslayouts'
    ]);

    grunt.registerTask( 'stage', 'Deploy for integration handoff.', [
        'clean:stage',
        'copy:stage'
    ]);

    grunt.registerTask( 'prod', 'Deploy for integration handoff.', [
        'clean:prod',
        'copy:prod'
    ]);

    grunt.registerTask( 'prodSource', 'Deploy for integration handoff.', [
        'clean:prodSource',
        'copy:prodSource'
    ]);

    grunt.registerTask( 'all', 'Deploy for integration handoff.', [
        'clean:stage',
        'copy:stage',
        'clean:prod',
        'copy:prod',
        'clean:prodSource',
        'copy:prodSource'
    ]);
};
