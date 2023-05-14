var localDevelopment = false,
    sessionKey = 'agLoginAuth',
    tournamentDetails,
    tournamentId,
    tournamentDesc,
    holesToPlay,
    userProfileId;

var tournamentTeams = {
    init: function () {
        var requestData = {};


        if (!this.getAuthSession(sessionKey) && !localDevelopment) {
            window.sessionStorage.setItem('agReDirectPage', './tournament-teams.html');
            window.location.href = "./login.html";

            return;
        } else {
            this.setAuthSession(sessionKey, this.getAuthSession(sessionKey));

            tournamentDetails = this.getAuthSession('tournamentDetails') || {};
            userProfileId = this.getAuthSession(sessionKey).userProfileId || {};
            tournamentId = tournamentDetails.tournamentId;
            holesToPlay = tournamentDetails.holesToPlay;
            tournamentDesc = tournamentDetails.tournamentDesc;

            if (!tournamentId || !holesToPlay || !userProfileId) {
                window.location.href = "./active-tournaments.html";
            }
        }

        var ajaxUrl= this.getApiUrl('loadTeams');

        requestData.tournamentId = tournamentId;
        requestData.userProfileId = userProfileId;

        $.ajax({
            type: "POST",
            url: ajaxUrl,
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(requestData),
            timeout: 0,
            success: function(xhr, status) {
                $('.page-header').removeClass('loading');

                if (xhr && xhr.tournamentTeams) {
                    this.updateData(xhr);
                } else {
                    this.updateData({});
                }
            }.bind(this),
            error:  function(xhr, status, error) {
                $('.page-header').removeClass('loading');
            }.bind(this)
        });
    },

    updateData: function(xhr) {
        var listTeamsTemplate = Handlebars.compile($("[data-template='listTeamsTemplate']").html());
        xhr.tournamentId = tournamentId;

        if (xhr && xhr.tournamentTeams) {
            for(var j = 0; j < xhr.tournamentTeams.length; j++) {
                xhr.tournamentTeams[j].holesToPlay = [];
                for(var i=1; i<=holesToPlay; i++) {
                    xhr.tournamentTeams[j].holesToPlay.push({
                        value: i,
                        selected: i == xhr.tournamentTeams[j].startingHole
                    });
                }
            }
        }

        $('.list-teams-details').html(listTeamsTemplate(xhr));

        $('.update-hole-trigger').on('click', function() {
            $('.display-starting-hole').removeClass('updating');
            $(this).parent('.display-starting-hole').addClass('updating').removeClass('error');
        });

        $('.update-starting-hole select').on('change', function(e) {
            var ajaxUrl= this.getApiUrl('updateHole'),
                requestData = {},
                element = $(e.target),
                currentStartingHole = element.data('startingHole');

            requestData.tournamentTeamId = element.parents('.teams-item').data('teamId');
            requestData.userProfileId = userProfileId;
            requestData.startingHole = parseInt(element.val());

            $.ajax({
                type: "PUT",
                url: ajaxUrl,
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify(requestData),
                timeout: 0,
                success: function(xhr, status) {
                    element.parents('.display-starting-hole').removeClass('updating');
                    element.parents('.display-starting-hole').find('.update-hole-trigger').html(requestData.startingHole);
                    element.data('startingHole', requestData.startingHole);
                }.bind(this),
                error:  function(xhr, status, error) {
                    element.parents('.display-starting-hole').removeClass('updating').addClass('error');
                    element.val(currentStartingHole);
                }.bind(this)
            });
        }.bind(this));
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
        var expirationInMin = 6000,
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
                    loadTeams: 'https://beta.actiongolfers.com/tournament/getalldetails',
                    updateHole: 'https://beta.actiongolfers.com/tournament/updatetournamentteamhole'
                },
                prod : {
                    loadTeams: 'https://api.actiongolfers.com/tournament/getalldetails',
                    updateHole: 'https://api.actiongolfers.com/tournament/updatetournamentteamhole'
                },
                local : {
                    loadTeams: '',
                    updateHole: ''
                }
            },
            domain = window.origin === 'https://actiongolfers.com' ? 'prod' : (localDevelopment ? 'local' : 'test');

        return apiUrls[domain][source];
    },


};

tournamentTeams.init();
