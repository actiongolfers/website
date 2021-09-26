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
       'less:live',
       'cssmin:live',
       'requirejs:live',
       'uglify:live',
       'concat:live',
       'uglify:createtournament',
       'concat:createtournament',
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
};
