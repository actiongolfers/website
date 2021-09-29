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
                    home: true
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
        },
        nonProfit: {
            files: {
                'nonprofit.html': 'pages/nonprofit.hbs'
            },
            options: {
                partials: [
                    'pages/partials/*.hbs'
                ],
                basePath: '/'
            }
        },
        TCA: {
            files: {
                'TCA.html': 'pages/TCA.hbs'
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
