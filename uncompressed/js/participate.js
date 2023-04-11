let tournamentId,
    userProfileId,
    deviceId;
var actiongolfLogin = {
    init: function () {
        var publicSessionKey = 'publicAgLoginAuth',
            loginUserData = this.getAuthSession('loginUserData'),
            tournamentDetails = this.getAuthSession('tournamentDetails');

        if (!tournamentDetails) {
            alert('tournamentDetails Not found');
        }

        if (!this.getAuthSession(publicSessionKey)) {
            window.sessionStorage.setItem('agReDirectPage', './participate.html');
            window.location.href = "./login.html";

            return;
        }

        tournamentId = tournamentDetails.tournamentId;
        userProfileId = loginUserData.userProfileId;
        deviceId = loginUserData.deviceId;

        this.tournamentUserDetails();

        if (loginUserData && !(loginUserData.firstName && loginUserData.lastName && loginUserData.email)) {
            $('#ajaxParticipateForm').removeClass('hide');
            $('#participateUserDetails').addClass('hide');
            $('[name=firstName]').val(loginUserData.firstName || '');
            $('[name=lastName]').val(loginUserData.lastName || '');
            $('[name=email]').val(loginUserData.email || '');
        } else {
            $('#ajaxParticipateForm').addClass('hide');
            $('#participateUserDetails').removeClass('hide');
            $('[data-firstName]').html(loginUserData.firstName || '');
            $('[data-lastName]').html(loginUserData.lastName || '');
            $('[data-email]').html(loginUserData.email || '');
            $('[data-phoneNumber]').html(loginUserData.phoneNumber || '');
        }

        $('#participate-form-submit').on('click', function(event) {
            event.preventDefault();
            var ajaxUrl = this.getApiUrl('profileUpdate'),
                requestData = {},
                auth = 'YWdkZXY6cGFzc3dvcmQ=';

            requestData.firstName = $('[name=firstName]').val();
            requestData.lastName = $('[name=lastName]').val();
            requestData.email = $('[name=email]').val();
            requestData.phoneNumber = loginUserData.phoneNumber;
            requestData.userProfileId = userProfileId;
            requestData.deviceId = deviceId;
            requestData.golferStatusType = "Amateur";
            requestData.genderId = 1;
            requestData.ghin = "";
            requestData.handicapIndex= 0.0;
            requestData.approxIndex= 0.0;

            $('.button-wrapper').addClass('loading');

            $.ajax({
                type: "PUT",
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
                    $('.button-wrapper').removeClass('loading');

                    var loginUserData = {
                        userProfileId: requestData.userProfileId,
                        email: requestData.email,
                        firstName: requestData.firstName,
                        lastName: requestData.lastName,
                        phoneNumber: requestData.phoneNumber,
                        deviceId: requestData.deviceId
                    };
                    this.setAuthSession('loginUserData', loginUserData);

                    $('#ajaxParticipateForm').addClass('hide');
                    $('#participateUserDetails').removeClass('hide');
                    $('[data-firstName]').html(loginUserData.firstName || '');
                    $('[data-lastName]').html(loginUserData.lastName || '');
                    $('[data-email]').html(loginUserData.email || '');
                    $('[data-phoneNumber]').html(loginUserData.phoneNumber || '');

                    this.tournamentUserDetails();
                }.bind(this),
                error:  function(xhr, status, error) {

                    $('.button-wrapper').removeClass('loading');
                }.bind(this)
            });
        }.bind(this));
    },

    tournamentUserDetails: function() {
        var ajaxUrl = this.getApiUrl('tournamentUserDetails');

        $.ajax({
            type: "GET",
            url: ajaxUrl,
            contentType: "application/json",
            dataType: "json",
            timeout: 0,
            beforeSend: function(xhr) {
                xhr.setRequestHeader("userProfileId", userProfileId),
                xhr.setRequestHeader("deviceId", deviceId)
            },
            success: function(xhr, status) {
                if (xhr && !xhr.participating) {
                    $('#payNow').removeClass('hide');
                } else {
                    if (xhr && !xhr.tournamentTeam) {
                        $('#createTeam').removeClass('hide');
                    } else {
                        $('#yourTeam').removeClass('hide');
                    }
                }
            }.bind(this),
            error:  function(xhr, status, error) {

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
        var expirationInMin = 600,
            expirationDate = new Date(new Date().getTime() + (60000 * expirationInMin)),
            newValue = {
                value: value,
                expirationDate: expirationDate.toISOString()
            };
        window.localStorage.setItem(key, JSON.stringify(newValue));
    },

    isValidNumberField: function(userinput) {
        var pattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i;

        return pattern.test(userinput);
    },

    isValidCodeField: function(userinput) {
        var pattern = /^(\d(\s+)?){4}$/;

        return pattern.test(userinput);
    },

    getRandomId: function(){
        return new Date().getTime().toString() + Math.floor(Math.random());
    },

    getApiUrl: function(source) {
        var apiUrls = {
                test : {
                    login: 'https://beta.actiongolfers.com/auth/verifyRequest',
                    verify: 'https://beta.actiongolfers.com/auth/verify',
                    profileUpdate: 'https://beta.actiongolfers.com/profile/update',
                    tournamentUserDetails: `https://beta.actiongolfers.com/tournament/${tournamentId}/profiles/${userProfileId}`,
                },
                prod : {
                    login: 'https://api.actiongolfers.com/auth/verifyRequest',
                    verify: 'https://api.actiongolfers.com/auth/verify',
                    profileUpdate: 'https://api.actiongolfers.com/profile/update',
                    tournamentUserDetails: `https://api.actiongolfers.com/tournament/${tournamentId}/profiles/${userProfileId}`,
                }
            },
            domain = window.origin === 'https://actiongolfers.com' ? 'prod' : 'test';

        return apiUrls[domain][source];
    }
};

actiongolfLogin.init();



