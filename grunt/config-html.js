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
        },
        login: {
            files: {
                'login.html': 'pages/login.hbs'
            },
            options: {
                partials: [
                    'pages/partials/*.hbs'
                ],
                basePath: '/'
            }
        },
        activetournaments: {
            files: {
                'active-tournaments.html': 'pages/active-tournaments.hbs'
            },
            options: {
                partials: [
                    'pages/partials/*.hbs'
                ],
                basePath: '/'
            }
        },
        createlanding: {
            files: {
                'create-landing.html': 'pages/create-landing.hbs'
            },
            options: {
                partials: [
                    'pages/partials/*.hbs'
                ],
                basePath: '/'
            }
        },
        createtournament: {
            files: {
                'create-tournament.html': 'pages/create-tournament.hbs'
            },
            options: {
                partials: [
                    'pages/partials/*.hbs'
                ],
                basePath: '/'
            }
        },
        landing: {
            files: {
                'landing.html': 'pages/landing.hbs'
            },
            options: {
                partials: [
                    'pages/partials/*.hbs'
                ],
                basePath: '/'
            }
        },
        createteams: {
            files: {
                'create-teams.html': 'pages/create-teams.hbs'
            },
            options: {
                partials: [
                    'pages/partials/*.hbs'
                ],
                basePath: '/'
            }
        },
        tournamentTeams: {
            files: {
                'tournament-teams.html': 'pages/tournament-teams.hbs'
            },
            options: {
                partials: [
                    'pages/partials/*.hbs'
                ],
                basePath: '/'
            }
        },
        tournamentDetails: {
            files: {
                'tournament-details.html': 'pages/tournament-details.hbs'
            },
            options: {
                partials: [
                    'pages/partials/*.hbs'
                ],
                basePath: '/'
            }
        },
        participate: {
            files: {
                'participate.html': 'pages/participate.hbs'
            },
            options: {
                partials: [
                    'pages/partials/*.hbs'
                ],
                basePath: '/'
            }
        },
        participateTest: {
            files: {
                'participate-test.html': 'pages/participate-test.hbs'
            },
            options: {
                partials: [
                    'pages/partials/*.hbs'
                ],
                basePath: '/'
            }
        },
        tournamentSettings: {
            files: {
                'tournament-settings.html': 'pages/tournament-settings.hbs'
            },
            options: {
                partials: [
                    'pages/partials/*.hbs'
                ],
                basePath: '/'
            }
        },
        leaderboard: {
            files: {
                'leaderboard.html': 'pages/leaderboard.hbs'
            },
            options: {
                partials: [
                    'pages/partials/*.hbs'
                ],
                basePath: '/'
            }
        },
    });

  grunt.loadNpmTasks( 'grunt-handlebars-layouts' );
};
