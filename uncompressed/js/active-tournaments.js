var localDevelopment = false;
var activeTournaments = {
    init: function () {
        var sessionKey = 'agLoginAuth';

        if (localDevelopment) {
            var sessionData = {
                userProfileId: 1,
                deviceId: 111
            };

            this.setAuthSession(sessionKey, sessionData);
        }

        if (!this.getAuthSession(sessionKey) && !localDevelopment) {
            window.sessionStorage.setItem('agReDirectPage', './active-tournaments.html');
            window.location.href = "./login.html";

            window.localStorage.removeItem('tournamentDetails');
            return;
        } else if (this.getAuthSession(sessionKey)) {
            this.setAuthSession(sessionKey, this.getAuthSession(sessionKey));

            $('.page-header-link').on('click', function() {
                window.localStorage.removeItem('tournamentDetails');
                window.localStorage.removeItem(sessionKey);

                window.location.href = "./login.html";
            });

            var ajaxUrl,
                userProfileId = this.getAuthSession(sessionKey).userProfileId;

            ajaxUrl= this.getApiUrl('tournaments') + (localDevelopment ? '' : userProfileId);

            $.ajax({
                type: "GET",
                url: ajaxUrl,
                contentType: "application/json",
                dataType: "json",
                timeout: 0,
                success: function(xhr, status) {
                    var listTournamentsTemplate = Handlebars.compile($("[data-template='listTournamentsTemplate']").html());

                    if (xhr && xhr.ownerTournaments) {
                        xhr.ownerTournaments.map(function(tournaments) {
                            if (tournaments.tournamentInfo && tournaments.tournamentInfo.baseCategory) {
                                tournaments.tournamentInfo.createTeams = (tournaments.tournamentInfo.baseCategory == 2 || tournaments.tournamentInfo.baseCategory == 3) ? true : false;
                            }
                        });

                        $('.list-tournaments').html(listTournamentsTemplate(xhr));

                        $(".action-links").on({
                            mouseenter: function () {
                                $(this).parent('.tournament-item').addClass('active');
                            },
                            mouseleave: function () {
                                $(this).parent('.tournament-item').removeClass('active');
                            }
                        });

                        $('.create-website').on('click', function(e) {
                            var tournamentId = $(e.target).data('tournamentId'),
                                friendlyName = $(e.target).data('friendlyName') || '',
                                startDate = $(e.target).data('startDate'),
                                endDate = $(e.target).data('endDate');

                            this.setAuthSession('tournamentDetails', {
                                tournamentId: tournamentId,
                                friendlyName: friendlyName,
                                startDate: startDate,
                                endDate: endDate
                            });

                            window.location.href = "./create-landing.html";
                        }.bind(this));

                        $('.create-teams').on('click', function(e) {
                            var tournamentId = $(e.target).data('tournamentId'),
                                teamSize = $(e.target).data('teamSize'),
                                tournamentDesc = $(e.target).data('tournamentDesc');

                            this.setAuthSession('tournamentDetails', {
                                tournamentId: tournamentId,
                                teamSize: teamSize,
                                tournamentDesc: tournamentDesc
                            });

                            window.location.href = "./create-teams.html";
                        }.bind(this));

                        $('.tournament-teams').on('click', function(e) {
                            var tournamentId = $(e.target).data('tournamentId'),
                                holesToPlay = $(e.target).data('holeToPlay');

                            this.setAuthSession('tournamentDetails', {
                                tournamentId: tournamentId,
                                holesToPlay: holesToPlay
                            });

                            window.location.href = "./tournament-teams.html";
                        }.bind(this));
                    } else {
                        $('.loading').hide();
                        $('.screen-message').removeClass('hide');
                    }

                    $('.page-header').removeClass('loading');
                }.bind(this),
                error:  function(xhr, status, error) {
                    $('.loading').hide();
                    $('.screen-message').removeClass('hide');
                    $('.page-header').removeClass('loading');
                }.bind(this)
            });
        }
    },

    getAuthSession: function(key) {
        var stringValue = window.localStorage.getItem(key);
        if (stringValue !== null) {
            var value = JSON.parse(stringValue),
                expirationDate = new Date(value.expirationDate);

            if (expirationDate > new Date() && value) {
                return value.value;
            } else {
                window.localStorage.removeItem(key);
            }
        }
        return null;
    },

    setAuthSession: function(key, value) {
        var expirationInMin = 600,
            expirationDate = new Date(new Date().getTime() + (60000 * expirationInMin)),
            newValue = {
                value: value,
                expirationDate: expirationDate.toISOString()
            };
        window.localStorage.setItem(key, JSON.stringify(newValue));
    },

    getApiUrl: function(source) {
        var apiUrls = {
                test : {
                    tournaments: 'https://beta.actiongolfers.com/website/getOwnerTournaments?userProfileId='
                },
                prod : {
                    tournaments: 'https://api.actiongolfers.com/website/getOwnerTournaments?userProfileId='
                },
                local: {
                    tournaments: 'http://localhost:8080/json/getTournaments.json'
                }
            },
            domain = window.origin === 'https://actiongolfers.com' ? 'prod' : (localDevelopment ? 'local' : 'test');

        return apiUrls[domain][source];
    }
};

activeTournaments.init();
