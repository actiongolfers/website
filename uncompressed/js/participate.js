let tournamentId,
    userProfileId,
    deviceId,
    selectedMembers = [],
    loginUserData,
    tournamentDetails

var actiongolfLogin = {
    init: function () {
        var publicSessionKey = 'publicAgLoginAuth';

        tournamentDetails = this.getAuthSession('tournamentDetails');
        loginUserData = this.getAuthSession('loginUserData');

        if (!tournamentDetails) {
            alert('tournamentDetails Not found');
        }

        if (!this.getAuthSession(publicSessionKey) || !loginUserData) {
            window.sessionStorage.setItem('agReDirectPage', './participate.html');
            window.location.href = "./login.html";

            return;
        }

        tournamentId = 1952; //tournamentDetails.tournamentId;
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

    openParticipantsDetails: function() {
        var openParticipants = this.getApiUrl('openParticipants'),
            teamSize = tournamentDetails.teamSize || 4;

        $.ajax({
            type: "GET",
            url: openParticipants,
            contentType: "application/json",
            dataType: "json",
            timeout: 0,
            success: function(opxhr, opstatus) {
                if (opxhr && opxhr.openParticipants && opxhr.openParticipants.length) {
                    opxhr.openParticipants[0].selected = true;
                    opxhr.teamSize = teamSize;

                    var listParticipatesTemplate = Handlebars.compile($("[data-template='listParticipatesTemplate']").html());
                    $('.list-participate-wrapper').html(listParticipatesTemplate(opxhr));

                    $('.participates-item .styledradio').on('click', function(event) {
                        event.stopPropagation();
                    });
                    $('.participates-item').off().on('click', function(event) {
                        $('#teamMemberMessage').removeClass('shakeme').addClass('hide');
                        event.stopPropagation();
                        var selectedCount = 0;
                        $('.participates-item').each(function(){
                            if ($(this).hasClass('selected')) {
                                selectedCount++;
                            }
                        });

                        if ($(this).hasClass('selected')) {
                            $(this).removeClass('selected');
                        } else if (selectedCount < teamSize) {
                            $(this).addClass('selected');
                        } else {
                            $('#teamMemberMessage').html(`You can select a Maximum of ${teamSize} team members, please remove one to select another`);
                            $('#teamMemberMessage').removeClass('hide');
                            $("html, body").animate({ scrollTop: $('#teamMemberMessage').offset().top - 50 });
                            $('#teamMemberMessage').addClass('shakeme');

                            setTimeout(function() {
                                $('#teamMemberMessage').addClass('hide');
                            }, 4000);
                        }
                    });

                    $('#create-team-form-submit').on('click', function(event) {
                        var selectedMembersArray = [],
                            teamName,
                            teamNameEle = $('input[name=teamName]');

                        teamName = teamNameEle.val().trim();

                        $(teamNameEle).parents('.styled-input').toggleClass('error', !teamName);

                        $('.participates-item').each(function() {
                            if ($(this).hasClass('selected')) {
                                selectedMembersArray.push({
                                    userProfileID: $(this).data('uid'),
                                    isLead: $(this).find('.switch').is(':checked')
                                });
                            }
                        });

                        if (!teamName) {
                            $("html, body").animate({ scrollTop: teamNameEle.offset().top - 50 });
                        } else if (selectedMembersArray.length < teamSize) {
                            $('#teamMemberMessage').html(`Minimum ${teamSize} team members required`);
                            $('#teamMemberMessage').removeClass('hide');
                            $("html, body").animate({ scrollTop: $('#teamMemberMessage').offset().top - 50});
                            $('#teamMemberMessage').addClass('shakeme');
                        } else {
                            $('#teamMemberMessage').html('').addClass('hide').removeClass('shakeme');

                        }
                    });
                }
            }.bind(this),
            error:  function(opxhr, opstatus, operror) {

            }.bind(this)
        });
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
                //temp start
                $('#createTeam').removeClass('hide');
                this.openParticipantsDetails();
                //temp end

                if (xhr && !xhr.participating) {
                    $('#payNow').removeClass('hide');
                } else {
                    if (xhr && !xhr.tournamentTeam) {
                        $('#createTeam').removeClass('hide');
                        this.openParticipantsDetails();
                    } else {
                        $('#yourTeam').removeClass('hide');
                    }
                }
            }.bind(this),
            error:  function(xhr, status, error) {

            }.bind(this)
        });
    },

// var requestData1 = {};
// requestData1.userProfileId = userProfileId;
// requestData1.tournamentId = tournamentId;
// requestData1.mediaID = 'Int';
// requestData1.teamName = "pppp";
// requestData1.members= [
//     {
//       "userProfileID": "Int",
//       "isLead": "Int"
//     }
//   ];

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
                    openParticipants: `https://beta.actiongolfers.com/tournament/openParticipants?userProfileId=${userProfileId}&tournamentId=${tournamentId}`
                },
                prod : {
                    login: 'https://api.actiongolfers.com/auth/verifyRequest',
                    verify: 'https://api.actiongolfers.com/auth/verify',
                    profileUpdate: 'https://api.actiongolfers.com/profile/update',
                    tournamentUserDetails: `https://api.actiongolfers.com/tournament/${tournamentId}/profiles/${userProfileId}`,
                    openParticipants: `https://api.actiongolfers.com/tournament/openParticipants?userProfileId=${userProfileId}&tournamentId=${tournamentId}`
                }
            },
            domain = window.origin === 'https://actiongolfers.com' ? 'prod' : 'test';

        return apiUrls[domain][source];
    }
};

actiongolfLogin.init();



