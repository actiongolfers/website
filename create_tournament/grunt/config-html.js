module.exports = function ( grunt ) {
    grunt.config( 'handlebarslayouts', {
        index: {
            files: {
                'index.html': 'pages/index.hbs'
            },
            options: {
                partials: [
                    'pages/partials/*.hbs'
                ],
                basePath: '/',
                context: {
                    para: 'It is as easy as (1) open the app, (2) pick an available tournament, (3) enter and compete for prizes.  No longer do you have to belong to a club and have to play at a certain time or day.  ActionGolfers is your virtual club.'
                }
            }
        },
        organizer: {
            files: {
                'organizer.html': 'pages/organizer.hbs'
            },
            options: {
                partials: [
                    'pages/partials/*.hbs'
                ],
                basePath: '/',
                context: {
                    para: 'It is as easy as (1) dial up the app, (2) pick an available tournament, (3) enter and compete for prizes. ActionGolfers tournaments are open to all and available for you to play at any time of day or week. All you need is a valid handicap through the GHIN. Start your tournament play today!'
                }
            }
        },
        privacy: {
            files: {
                'privacy-policy.html': 'pages/privacy-policy.hbs'
            },
            options: {
                partials: [
                    'pages/partials/*.hbs'
                ],
                basePath: '/'
            }
        },
        terms: {
            files: {
                'terms-of-use.html': 'pages/terms-of-use.hbs'
            },
            options: {
                partials: [
                    'pages/partials/*.hbs'
                ],
                basePath: '/'
            }
        },
        schedule: {
            files: {
                'schedule-a-demo.html': 'pages/schedule-a-demo.hbs'
            },
            options: {
                partials: [
                    'pages/partials/*.hbs'
                ],
                basePath: '/'
            }
        },
        contact: {
            files: {
                'contact-us.html': 'pages/contact-us.hbs'
            },
            options: {
                partials: [
                    'pages/partials/*.hbs'
                ],
                basePath: '/'
            }
        },
        inlinePrivacy: {
            files: {
                'inline-privacy-policy.html': 'pages/inline-privacy-policy.hbs'
            },
            options: {
                partials: [
                    'pages/partials/*.hbs'
                ],
                basePath: '/'
            }
        },
        inlineTerms: {
            files: {
                'inline-terms-of-use.html': 'pages/inline-terms-of-use.hbs'
            },
            options: {
                partials: [
                    'pages/partials/*.hbs'
                ],
                basePath: '/'
            }
        },
        inlineSchedule: {
            files: {
                'inline-schedule-a-demo.html': 'pages/inline-schedule-a-demo.hbs'
            },
            options: {
                partials: [
                    'pages/partials/*.hbs'
                ],
                basePath: '/'
            }
        },
        inlineContact: {
            files: {
                'inline-contact-us.html': 'pages/inline-contact-us.hbs'
            },
            options: {
                partials: [
                    'pages/partials/*.hbs'
                ],
                basePath: '/'
            }
        }
    });

  grunt.loadNpmTasks( 'grunt-handlebars-layouts' );
};
