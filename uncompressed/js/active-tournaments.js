var localDevelopment = false,
    sessionKey = 'agLoginAuth',
    userProfileId,
    deviceId;

var activeTournaments = {
    init: function () {
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
                window.sessionStorage.removeItem('tournamentDetails');
                window.sessionStorage.removeItem(sessionKey);

                window.location.href = "./login.html";
            });

            $('#delete-account-btn').on('click', function() {
                this.toggleDeleteConfirmationModal(true);
            }.bind(this));

            var ajaxUrl;

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

                        $('.tournament-settings').on('click', function(e) {
                            var tournamentId = $(e.target).data('tournamentId');

                            this.setAuthSession('tournamentDetails', {
                                tournamentId: tournamentId
                            });

                            window.location.href = "./tournament-settings.html";
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

        $('#delete-account-submit').on('click', function() {
            this.deleteAccountConfirm();
        }.bind(this));

        $('.close-modal, #modal-shade, #delete-account-cancel').on('click', function() {
            this.toggleDeleteConfirmationModal();
        }.bind(this));

        $("body").on('keyup', function(event) {
            if (event.keyCode === 27) {
                this.toggleDeleteConfirmationModal();
            }
        }.bind(this));
    },

    toggleDeleteConfirmationModal: function(show) {
        if (!this.getAuthSession(sessionKey) && !localDevelopment) {
            window.sessionStorage.setItem('agReDirectPage', './active-tournaments.html');
            window.location.href = "./login.html";

            window.localStorage.removeItem('tournamentDetails');
            return;
        } 

        if (show) {
            $('#delete-confirmation-message').show();
            $('#modal-shade').show();
            $('#delete-confirmation-message .button-wrapper .alert-btn,#delete-confirmation-message .button-wrapper .secondary-btn').removeClass('hide');
            $('#delete-confirmation-message .button-wrapper').removeClass('loading');
            $('#delete-confirmation-message .success-message').addClass('hide');
            $('#delete-confirmation-message .error-message').addClass('hide');
        } else {
            $('#delete-confirmation-message').hide();
            $('#modal-shade').hide();
        }
    },

    deleteAccountConfirm: function() {
        var ajaxUrl,
            auth = 'YWdkZXY6cGFzc3dvcmQ=';

        userProfileId = this.getAuthSession(sessionKey).userProfileId;
        deviceId = this.getAuthSession(sessionKey).deviceId;


        ajaxUrl= this.getApiUrl('deleteAccount') + (localDevelopment ? '' : userProfileId);

        $('#delete-confirmation-message .button-wrapper').addClass('loading');
        $('#delete-confirmation-message .button-wrapper .alert-btn,#delete-confirmation-message .button-wrapper .secondary-btn').addClass('hide');

        $.ajax({
            type: "DELETE",
            url: ajaxUrl,
            contentType: "application/json",
            dataType: "json",
            timeout: 0,
            beforeSend: function(xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + auth),
                xhr.setRequestHeader("userProfileId", userProfileId),
                xhr.setRequestHeader("deviceId", deviceId)
            },
            success: function(xhr, status) {
                window.localStorage.removeItem('tournamentDetails');
                window.localStorage.removeItem(sessionKey);
                window.sessionStorage.removeItem('tournamentDetails');
                window.sessionStorage.removeItem(sessionKey);
                $('#delete-confirmation-message .success-message').removeClass('hide');
                $('#delete-confirmation-message .delete-account-info').addClass('hide');
                $('#delete-confirmation-message .error-message').addClass('hide');
            }.bind(this),
            error:  function(xhr, status, error) {
                // $('#delete-confirmation-message .button-wrapper .alert-btn,#delete-confirmation-message .button-wrapper .secondary-btn').removeClass('hide');
                // $('#delete-confirmation-message .button-wrapper').removeClass('loading');
                // $('#delete-confirmation-message .success-message').addClass('hide');
                // $('#delete-confirmation-message .error-message').removeClass('hide');
                window.localStorage.removeItem('tournamentDetails');
                window.localStorage.removeItem(sessionKey);
                window.sessionStorage.removeItem('tournamentDetails');
                window.sessionStorage.removeItem(sessionKey);
                $('#delete-confirmation-message .success-message').removeClass('hide');
                $('#delete-confirmation-message .delete-account-info').addClass('hide');
                $('#delete-confirmation-message .error-message').addClass('hide');
            }.bind(this)
        });
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
                    tournaments: 'https://beta.actiongolfers.com/website/getOwnerTournaments?userProfileId=',
                    deleteAccount: `https://beta.actiongolfers.com/profile/${userProfileId}`,
                },
                prod : {
                    tournaments: 'https://api.actiongolfers.com/website/getOwnerTournaments?userProfileId=',
                    deleteAccount: `https://api.actiongolfers.com/profile/${userProfileId}`,
                },
                local: {
                    tournaments: 'http://localhost:8080/json/getTournaments.json',
                    deleteAccount: 'http://localhost:8080/json/delete.json'
                }
            },
            domain = window.origin === 'https://actiongolfers.com' ? 'prod' : (localDevelopment ? 'local' : 'test');

        return apiUrls[domain][source];
    }
};

activeTournaments.init();
