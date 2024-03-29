/*
 * Less Configuration
 *
 * See all options: https://github.com/gruntjs/grunt-contrib-less
 */
module.exports = function( grunt ) {

    grunt.config( 'less', {
        actiongolf: {
            options: {
                sourceMap: true,
                strictMath: true,
                relativeUrls: true
            },
            files: [
                {
                    expand: true,
                    cwd: 'uncompressed',
                    src: [
                        '**/actiongolf.less'
                    ],
                    dest: 'library',
                    ext: '.css',

                    // Set the destination to a directory named "css"
                    rename: function( dest, src ) {

                        var path = require( 'path' ),
                            splitDirs = src.split( '/' )
                            ;

                        splitDirs[ splitDirs.indexOf( 'less' ) ] = 'css';

                        return path.join( dest, splitDirs.join( '/' ) );
                    }
                }
            ]
        },
        admin: {
            options: {
                sourceMap: true,
                strictMath: true,
                relativeUrls: true
            },
            files: [
                {
                    expand: true,
                    cwd: 'uncompressed',
                    src: [
                        '**/admin.less'
                    ],
                    dest: 'library',
                    ext: '.css',

                    // Set the destination to a directory named "css"
                    rename: function( dest, src ) {

                        var path = require( 'path' ),
                            splitDirs = src.split( '/' )
                            ;

                        splitDirs[ splitDirs.indexOf( 'less' ) ] = 'css';

                        return path.join( dest, splitDirs.join( '/' ) );
                    }
                }
            ]
        },
        leaderboard: {
            options: {
                sourceMap: true,
                strictMath: true,
                relativeUrls: true
            },
            files: [
                {
                    expand: true,
                    cwd: 'uncompressed',
                    src: [
                        '**/leaderboard.less'
                    ],
                    dest: 'library',
                    ext: '.css',

                    // Set the destination to a directory named "css"
                    rename: function( dest, src ) {

                        var path = require( 'path' ),
                            splitDirs = src.split( '/' )
                            ;

                        splitDirs[ splitDirs.indexOf( 'less' ) ] = 'css';

                        return path.join( dest, splitDirs.join( '/' ) );
                    }
                }
            ]
        },
    });

    grunt.loadNpmTasks( 'grunt-contrib-less' );
};