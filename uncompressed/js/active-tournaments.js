var localDevelopment = false;
var activeTournaments = {
    init: function () {
        var sessionKey = 'agLoginAuth';

        //localDevelopment = window.origin === 'http://localhost:8080';

        if (localDevelopment) {
            var sessionData = {
                userProfileId: 1,
                deviceId: 111
            };

            this.setAuthSession(sessionKey, sessionData);
        }

        if (!this.getAuthSession(sessionKey) && !localDevelopment) {
            if (window.origin === 'https://pramith.com') {
                window.location.href = window.origin + "/actiongolf/login.html";
            } else {
                window.location.href = window.origin + "/login.html";
            }

            window.localStorage.removeItem('tournamentId');
            return;
        } else if (this.getAuthSession(sessionKey)) {
            this.setAuthSession(sessionKey, this.getAuthSession(sessionKey));

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
                        $('.list-tournaments').html(listTournamentsTemplate(xhr));

                        $(".create-website").on({
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

                            if (window.origin === 'https://pramith.com') {
                                window.location.href = window.origin + "/actiongolf/create-landing.html";
                            } else {
                                window.location.href = window.origin + "/create-landing.html";
                            }
                        }.bind(this));
                    } else {
                        $('.loading').hide();
                        $('.screen-message').removeClass('hide');
                    }
                }.bind(this),
                error:  function(xhr, status, error) {
                    $('.loading').hide();
                    $('.screen-message').removeClass('hide');
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
