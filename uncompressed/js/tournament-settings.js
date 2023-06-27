var localDevelopment = false,
    tournamentDetails,
    tournamentId,
    deviceId,
    userProfileId,
    auth = 'YWdkZXY6cGFzc3dvcmQ=',
    _this;

var actiongolfCL = {
    init: function () {
        var sessionKey = 'agLoginAuth';

        _this = this;

         if (!_this.getAuthSession(sessionKey) && !localDevelopment) {
            window.sessionStorage.setItem('agReDirectPage', './tournamet-settings.html');
            window.location.href = "./login.html";

             return;
         } else {
            _this.setAuthSession(sessionKey, _this.getAuthSession(sessionKey));

            tournamentDetails = _this.getAuthSession('tournamentDetails') || {};
            userProfileId = _this.getAuthSession(sessionKey).userProfileId;
            deviceId = _this.getAuthSession(sessionKey).deviceId;
            tournamentId = tournamentDetails.tournamentId;

            if (!tournamentDetails || !tournamentDetails.tournamentId) {
                    window.location.href = "./active-tournaments.html";

                return;
            }

            _this.setAuthSession('tournamentDetails', tournamentDetails);
            _this.tournamentDetails();
       }
    },

    tournamentDetails: function() {
        var ajaxUrl = _this.getApiUrl('getTournamentDetailsWithConfig');
        var requestData = {};

        requestData.tournamentId = tournamentId;
        requestData.latitude = 0;
        requestData.longitude = 0;
        requestData.userProfileId = userProfileId;

        $.ajax({
            type: "POST",
            url: ajaxUrl,
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(requestData),
            timeout: 0,
            beforeSend: function(xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + auth),
                xhr.setRequestHeader("userProfileId", userProfileId),
                xhr.setRequestHeader("deviceId", deviceId)
            },
            success: function(xhr, status) {
                $('.page-header').removeClass('loading');
                tournamentConfig = xhr.tournamentConfig || {};

                var tournamentSettingsTemplate = Handlebars.compile($("[data-template='tournamentSettingsTemplate']").html()),
                    tournamentSettingsData = {};

                tournamentSettingsData.isRandomScoreEntryAllowed = tournamentConfig.isRandomScoreEntryAllowed;
                tournamentSettingsData.memberCountCap = tournamentConfig.memberCountCap;
                tournamentSettingsData.allowMemberCountCap = tournamentConfig.memberCountCap > 0;

                tournamentSettingsData.tournamentName = xhr.tournamentDetail.tournamentName || '';
                tournamentSettingsData.tournamentCategory = xhr.tournamentDetail.tournamentCategoryDesc || '';
                tournamentSettingsData.tournamentId = xhr.tournamentDetail.tournamentId || '';

                $('.tournament-settings-details').html(tournamentSettingsTemplate(tournamentSettingsData));

                _this.settingsEvents();
            }.bind(this),
            error:  function(xhr, status, error) {
                $('.page-header').removeClass('loading');
                $('.screen-message.error-message').removeClass('hide');
                $("html, body").animate({ scrollTop: $('.screen-message.error-message').offset().top - 50 });
            }.bind(this)
        });
    },

    settingsEvents: function() {
        $('#memberCountCap').on('keypress', function(event) {
            var charCode = (event.which) ? event.which : event.keyCode,
                element = $(event.target),
                maxlength = element.attr('maxlength');

            if (element.val() && element.val().toString().length == maxlength) {
                return false;
            }

            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                return false;
            }

        });

        $('#allowMemberCapToggle').on('change', function(event) {
            $('#allowMemberCountDiv').toggleClass('hide', !$('#allowMemberCapToggle').prop('checked'));
        });

        $('#update-tournament-settings-btn').on('click', function(event) {
            event.preventDefault();
            var ajaxUrl = _this.getApiUrl('updateConfig'),
                requestData = {};

            $('#update-tournament-settings-btn').parent('.button-wrapper').addClass('loading');
            $('.screen-message.error-message').addClass('hide');
            $('.screen-message.success-message').addClass('hide');

            requestData.tournamentId = parseInt(tournamentId);
            requestData.isRandomScoreEntryAllowed = $('#isRandomScoreEntryAllowed').prop('checked');

            if ($('#allowMemberCapToggle').prop('checked')) {
                requestData.memberCountCap = $('#memberCountCap').val() || -1;
            } else {
                requestData.memberCountCap = -1;
            }

            $('#memberCountCapError').html('');
            $('#memberCountCapError').parent('.styled-input').removeClass('error');

            $.ajax({
                type: "POST",
                url: ajaxUrl,
                contentType: "application/json",
                dataType: "json",
                timeout: 0,
                data: JSON.stringify(requestData),
                success: function(xhr, status) {
                    $('#update-tournament-settings-btn').parent('.button-wrapper').removeClass('loading');
                    $('.screen-message.success-message').removeClass('hide');
                }.bind(this),
                error:  function(xhr, status, error) {
                    if (xhr && xhr.responseJSON && xhr.responseJSON.errorCode === 90003) {
                        $('#allowMemberCapToggle').click();
                        $('#memberCountCapError').html(xhr.responseJSON.message);
                        $('#memberCountCapError').parent('.styled-input').addClass('error');
                    } else {
                        $('.screen-message.error-message').removeClass('hide');
                        $("html, body").animate({ scrollTop: $('.screen-message.error-message').offset().top - 50 });
                    }

                    $('#update-tournament-settings-btn').parent('.button-wrapper').removeClass('loading');
                }.bind(this)
            });
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
                    getTournamentDetailsWithConfig: 'https://beta.actiongolfers.com/tournament/getDetailsWithConfig',
                    updateConfig: 'https://beta.actiongolfers.com/website/tournament/updateConfig'
                },
                prod : {
                    getTournamentDetailsWithConfig: 'https://api.actiongolfers.com/tournament/getDetailsWithConfig',
                    updateConfig: 'https://api.actiongolfers.com/website/tournament/updateConfig'
                },
            },
            domain = window.origin === 'https://actiongolfers.com' ? 'prod' : (localDevelopment ? 'local' : 'test');

        return apiUrls[domain][source];
    }
};

actiongolfCL.init();
