let tournamentId,
    userProfileId,
    deviceId,
    selectedMembers = [],
    loginUserData,
    tournamentDetails,
    participateAgLoginAuth,
    teamSize,
    auth = 'YWdkZXY6cGFzc3dvcmQ=',
    _this,
    teamCreated = false,
    userParticipating = false,
    addMemberObj = {},
    participateSessionKey = 'participateAgLoginAuth',
    testPage = window.location.href.includes('participate-test.html') || false,
    merchantAuthenticationName = testPage ? '9k9FP9khR' : '55qBy6J2aN73',
    merchantAuthenticationClient = testPage ? '9E9u9bZhnz6AaaTxGqESm8Tr2AfuPXcex498Q9A9g7X9GG34yGpJGgh5cH4CNKZf' : '9X7ym9MuWS7wwc2VTdDE87w4AC8w5qW7fA6zqvqjnjq95wk8Z6ynm5ATfHQA838J',
    merchantAuthenticationTrans = testPage ? '2tkP3CP85y76Vp6P' : '28UPsn88BWW3K4mZ';

var actiongolfLogin = {
    init: function () {
        _this = this;

        tournamentDetails = _this.getAuthSession('tournamentDetails', true);
        participateAgLoginAuth = _this.getAuthSession(participateSessionKey, true);

        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());

        if (params && params.tournamentId) {
            tournamentId = params.tournamentId;
        } else if (tournamentDetails) {
            tournamentId = tournamentDetails.tournamentId; // 1952 1829 1834
        }

        if (!tournamentDetails && !tournamentId) {
            $('.screen-message.error-message').html('Tournament Details Not found').removeClass('hide');
            return;
        }

        if (!participateAgLoginAuth) {
            window.sessionStorage.setItem('agReDirectPage', window.location.href);
            window.location.href = './login.html';

            return;
        }

        userProfileId = participateAgLoginAuth.userProfileId;
        deviceId = participateAgLoginAuth.deviceId;

        _this.getProfile();

        String.prototype.splice = function(idx, rem, str) {
            return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
        };

        $('.page-header-link').on('click', function() {
            window.localStorage.removeItem('tournamentDetails');
            window.localStorage.removeItem('participateAgLoginAuth');
            window.sessionStorage.removeItem('tournamentDetails');
            window.sessionStorage.removeItem('participateAgLoginAuth');

            var previousLandingPage = _this.getAuthSession('landingPage', true);

            if (previousLandingPage && previousLandingPage.href) {
                window.location.href = previousLandingPage.href;
            } else {
                window.sessionStorage.setItem('agReDirectPage', testPage ? '/participate-test.html' :'./participate.html');
                window.location.href = './login.html';
            }
        });

        $('#add-member-expand').hide().removeClass('hide');

        $('#add-member-expand-btn').on('click', function() {
            $('#add-member-expand').slideToggle();
        });
    },

    participateSuccess: function(response) {
        $('#addMembers').removeClass('hide');
        $('#addedMemberList').addClass('hide');
        $('#participateConfirm').removeClass('hide');
        $('#pageLoad').hide();
        window.sessionStorage.removeItem('memberList');
        addMemberObj.addedMembers = [];

        var participateConfirmTemplate = Handlebars.compile($("[data-template='participateConfirmTemplate']").html());
        $('.participate_confirm').html(participateConfirmTemplate(response));

        if (!teamCreated) {
            $('#createTeam').removeClass('hide');
            _this.openParticipantsDetails();
        }

        _this.getProfile();
    },

    openParticipantsDetails: function() {
        var openParticipants = _this.getApiUrl('openParticipants'),
            openParticipantsList = {};

        teamSize = tournamentDetails.teamSize;

        $('#pageLoad').show();

        $.ajax({
            type: "GET",
            url: openParticipants,
            contentType: "application/json",
            dataType: "json",
            timeout: 0,
            success: function(opxhr, opstatus) {
                $('#pageLoad').hide();

                if (opxhr && opxhr.openParticipants && opxhr.openParticipants.length) {

                    openParticipantsList.teamSize = teamSize;
                    openParticipantsList.openParticipants = [];

                    opxhr.openParticipants.map(function(op, i) {
                        if (op.isOpen) {
                            if (op.userProfileId === userProfileId) {
                                op.selected = true;
                            }
                            openParticipantsList.openParticipants.push(op);
                        }
                    });

                    openParticipantsList.openParticipants.map(function(op, i) {
                        if (op.userProfileId === userProfileId) {
                            openParticipantsList.openParticipants.splice(i, 1);
                            openParticipantsList.openParticipants.unshift(op);
                        }
                    });

                    var listParticipatesTemplate = Handlebars.compile($("[data-template='listParticipatesTemplate']").html());
                    $('.list-participate-wrapper').html(listParticipatesTemplate(openParticipantsList));

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
                                    userProfileId: $(this).data('uid'),
                                    isLead: $(this).find('.switch').is(':checked') ? 1 : 0
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

                            _this.createTeam(selectedMembersArray, teamName);
                        }
                    });
                }
            }.bind(this),
            error:  function(opxhr, opstatus, operror) {
                $('#pageLoad').hide();
                $('.screen-message.error-message').removeClass('hide');
                $("html, body").animate({ scrollTop: $('.screen-message.error-message').offset().top - 50 });
            }.bind(this)
        });
    },

    getProfile: function() {
        var ajaxUrl = _this.getApiUrl('getProfile');

        $('#pageLoad').show();

        $.ajax({
            type: "GET",
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
                $('#pageLoad').hide();

                if (xhr) {
                    loginUserData = xhr;

                    if (loginUserData && !(loginUserData.firstName && loginUserData.lastName && loginUserData.email)) {
                        $('#ajaxParticipateForm').removeClass('hide');
                        $('#participateUserDetails').addClass('hide');
                        $('#payNow').addClass('hide');
                        $('[name=firstName]').val(loginUserData.firstName || '');
                        $('[name=lastName]').val(loginUserData.lastName || '');
                        $('[name=email]').val(loginUserData.email || '');
                        $('[name=phone-added]').val(loginUserData.phoneNumber || '');
                        $('[name=phone-added]').addClass('js-added');
                        $('#title_phno').html(loginUserData.phoneNumber || '');

                        $('#participate-complete-registration').on('click', function(event) {
                            event.preventDefault();
                            var ajaxUrl = _this.getApiUrl('profileUpdate'),
                                requestData = {},
                                isValid = true;

                            requestData.firstName = $('[name=firstName]').val() || '';
                            requestData.lastName = $('[name=lastName]').val() || '';
                            requestData.email = $('[name=email]').val() || '';
                            requestData.phoneNumber = loginUserData.phoneNumber;
                            requestData.userProfileId = userProfileId;
                            requestData.deviceId = deviceId;
                            requestData.golferStatusType = "Amateur";
                            requestData.genderId = 1;
                            requestData.ghin = "";
                            requestData.handicapIndex= 0.0;
                            requestData.approxIndex= 0.0;

                            if (!_this.isValidTextField(requestData.firstName)) {
                                $('#ajaxParticipateForm [name=firstName]').parent('.styled-input').addClass('error');
                                isValid = false;
                            } else {
                                $('#ajaxParticipateForm [name=firstName]').parent('.styled-input').removeClass('error');
                                isValid = true;
                            }

                            if (!_this.isValidTextField(requestData.lastName)) {
                                $('#ajaxParticipateForm [name=lastName]').parent('.styled-input').addClass('error');
                                isValid = false;
                            } else {
                                $('#ajaxParticipateForm [name=lastName]').parent('.styled-input').removeClass('error');
                                isValid = isValid;
                            }

                            if (!requestData.email.trim()) {
                                $('#ajaxParticipateForm [name=email]').parent('.styled-input').addClass('error');
                                $('#ajaxParticipateForm [name=email]').parent('.styled-input').find('.error-message').html($('#ajaxParticipateForm [name=email]').data('required'));
                                isValid = false;
                            } else {
                                if (!_this.isValidEmail(requestData.email)) {
                                    $('#ajaxParticipateForm input[name=email]').parent('.styled-input').addClass('error');
                                    $('#ajaxParticipateForm input[name=email]').parent('.styled-input').find('.error-message').html($('#ajaxParticipateForm [name=email]').data('invalid'));
                                    isValid = false;
                                } else {
                                    $('#ajaxParticipateForm input[name=email]').parent('.styled-input').removeClass('error');
                                    isValid = isValid;
                                }
                            }

                            if (!isValid) {
                                return;
                            }

                            $('#participate-complete-registration').parent('.button-wrapper').addClass('loading');
                            $('.screen-message.error-message').addClass('hide');

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
                                    $('#participate-complete-registration').parent('.button-wrapper').removeClass('loading');

                                    window.location.reload();
                                }.bind(this),
                                error:  function(xhr, status, error) {
                                    $('.screen-message.error-message').removeClass('hide');
                                    $("html, body").animate({ scrollTop: $('.screen-message.error-message').offset().top - 50 });
                                    $('#participate-complete-registration').parent('.button-wrapper').removeClass('loading');
                                }.bind(this)
                            });
                        }.bind(this));
                    } else {
                        _this.tournamentDetails();
                    }
                }
            }.bind(this),
            error:  function(xhr, status, error) {
                $('#pageLoad').hide();
                $('.screen-message.error-message').removeClass('hide');
                $("html, body").animate({ scrollTop: $('.screen-message.error-message').offset().top - 50 });
            }.bind(this)
        });
    },

    addMemberJS: function(participating, entryFee) {
        userParticipating = participating;

        addMemberObj.addedMembers = [];
        addMemberObj.participating = participating;
        addMemberObj.entryFee = entryFee;
        addMemberObj.participateNow = !participating && entryFee <= loginUserData.balanceAmount;

        if (_this.getAuthSession('memberList', true)) {
            addMemberObj.addedMembers = _this.getAuthSession('memberList', true);
            addMemberObj.entryFee = entryFee  * addMemberObj.addedMembers.length;
            addMemberObj.participateNow = addMemberObj.entryFee <= loginUserData.balanceAmount;
            window.localStorage.removeItem('memberList');

            if (addMemberObj.entryFee > loginUserData.balanceAmount) {
                _this.setAuthSession('memberList', addMemberObj.addedMembers, true);
                _this.paymentBlock();
            }
        } else if (!participating) {
            addMemberObj.addedMembers.push(
                {
                    firstName: loginUserData.firstName,
                    lastName: loginUserData.lastName,
                    tele: loginUserData.phoneNumber,
                    currentUser: true
                }
            );
        }

        var addedMembersListTemplate = Handlebars.compile($("[data-template='addedMembersListTemplate']").html());
        $('.added-members-list').html(addedMembersListTemplate(addMemberObj));

        addMemberEvents();

        function validateAddMembersFields() {
            if (!$('#addMembers input[name=fname]').val().trim() || !$('#addMembers input[name=lname]').val().trim() || $('#addMembers input[name=phoneNumber]').val().toString().length != $('#addMembers input[name=phoneNumber]').attr('maxlength') ) {
                $('#add-member-button').attr('disabled', true).addClass('disabled-btn');
            } else {
                $('#add-member-button').removeAttr('disabled', true).removeClass('disabled-btn');
            }
        }

        $('#addMembers .callingCode').on('keyup', function(event) {
            var val = $(this).val();

            if (val && !val.includes('+')) {
                $(this).val('+' + val);
            }
        });

        $('#addMembers .number-only').on('keypress', function(event) {
            var charCode = (event.which) ? event.which : event.keyCode,
                element = $(event.target),
                maxlength = element.attr('maxlength');

            if (element.val() && element.val().toString().length == maxlength) {
                return false;
            }

            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                return false;
            }
        }.bind(this));

        $('#addMembers .add-members-input').on('keyup', function(event) {
            validateAddMembersFields();
        });

        $('#add-member-button').off().on('click', function(event) {
            event.preventDefault();
            var aMFistName,
                aMLastName,
                aMCallingCode,
                aMPhoneNumber;

            aMFistName = $('#addMembers .add-members-input[name=fname]').val();
            aMLastName = $('#addMembers .add-members-input[name=lname]').val();
            aMCallingCode = $('#addMembers .add-members-input[name=callingCode]').val() || '+1';
            aMPhoneNumber = $('#addMembers .add-members-input[name=phoneNumber]').val();

            addMemberData(aMFistName, aMLastName, aMCallingCode + ' ' + aMPhoneNumber);
            $('#addMembers .add-members-input[name=fname]').val('');
            $('#addMembers .add-members-input[name=lname]').val('');
            $('#addMembers .add-members-input[name=callingCode]').val('');
            $('#addMembers .add-members-input[name=phoneNumber]').val('');
            $('#add-member-button').attr('disabled', true).addClass('disabled-btn');

            $('#addedMemberList').removeClass('hide');
            $('#participateConfirm').addClass('hide');
        });

        function addMemberData(aMFistName, aMLastName, aMPhoneNumber) {
            addMemberObj.addedMembers.push(
                {
                    firstName: aMFistName,
                    lastName: aMLastName,
                    tele: aMPhoneNumber,
                    currentUser: false
                }
            );

            addMemberObj.entryFee = entryFee  * addMemberObj.addedMembers.length;
            addMemberObj.participateNow = addMemberObj.entryFee <= loginUserData.balanceAmount;

            var addedMembersListTemplate = Handlebars.compile($("[data-template='addedMembersListTemplate']").html());
            $('.added-members-list').html(addedMembersListTemplate(addMemberObj));

            if (addMemberObj.entryFee > loginUserData.balanceAmount) {
                _this.setAuthSession('memberList', addMemberObj.addedMembers, true);
                _this.paymentBlock();
            } else {
                $('#payNow').addClass('hide');
            }

            addMemberEvents();
        }

        function addMemberEvents() {
            $('#add-amount-scroll').off().on('click', function(event) {
                $("html, body").animate({ scrollTop: $('#payNow').offset().top - 30 });
            });

            $('.member-delete-active').off().on('click', function(event) {
                event.preventDefault();

                var tele = $(this).data('pid');

                addMemberObj.addedMembers.splice(addMemberObj.addedMembers.findIndex(function(i){
                    return i.tele === tele;
                }), 1);

                addMemberObj.entryFee = entryFee  * addMemberObj.addedMembers.length;
                addMemberObj.participateNow = addMemberObj.entryFee <= loginUserData.balanceAmount && (!userParticipating || addMemberObj.addedMembers.length);

                var addedMembersListTemplate = Handlebars.compile($("[data-template='addedMembersListTemplate']").html());
                $('.added-members-list').html(addedMembersListTemplate(addMemberObj));

                if (addMemberObj.entryFee > loginUserData.balanceAmount) {
                    _this.paymentBlock();
                } else {
                    $('#payNow').addClass('hide');
                }
                addMemberEvents();
            });

            $('#participate-button').off().on('click', function(event) {
                event.preventDefault();
                var ajaxUrl = _this.getApiUrl('groupParticipate'),
                    requestData = {};

                $('#participate-button').parent('.button-wrapper').addClass('loading');
                $('.screen-message.error-message').addClass('hide');

                requestData.userProfileId = userProfileId;
                requestData.tournamentId = parseInt(tournamentId);
                requestData.members = addMemberObj.addedMembers || [];

                requestData.members.forEach(object => {
                    delete object.currentUser;
                });

                $.ajax({
                    type: "POST",
                    url: ajaxUrl,
                    contentType: "application/json",
                    dataType: "json",
                    timeout: 0,
                    data: JSON.stringify(requestData),
                    success: function(xhr, status) {
                        _this.participateSuccess(xhr);
                    }.bind(this),
                    error:  function(xhr, status, error) {
                        $('.screen-message.error-message').removeClass('hide');
                        $("html, body").animate({ scrollTop: $('.screen-message.error-message').offset().top - 50 });
                        $('#participate-button').parent('.button-wrapper').removeClass('loading');
                    }.bind(this)
                });
            });
        }
    },

    tournamentDetails: function() {
        var ajaxUrl = _this.getApiUrl('getTournamentDetails');

        $('#pageLoad').show();
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
                tournamentDetails = xhr.tournamentDetail;

                $('#ajaxParticipateForm').addClass('hide');
                $('#participateUserDetails').removeClass('hide');

                var userTournamentDetailsTemplate = Handlebars.compile($("[data-template='userTournamentDetailsTemplate']").html()),
                    userTournamentData = {};

                userTournamentData.firstName = loginUserData.firstName || '';
                userTournamentData.lastName = loginUserData.lastName || '';
                userTournamentData.email = loginUserData.email || '';
                userTournamentData.phoneNumber = loginUserData.phoneNumber || '';
                userTournamentData.largeImageUrl = loginUserData.largeImageUrl || '';

                userTournamentData.tournamentName = tournamentDetails.tournamentName || '';
                userTournamentData.entryFee = (tournamentDetails.entryFee === 0) ? 'Free' :  ('$' + tournamentDetails.entryFee);
                userTournamentData.tournamentCategory = tournamentDetails.tournamentCategoryDesc || '';
                userTournamentData.teamSize = tournamentDetails.teamSize || '';

                $('.participate-user-details').html(userTournamentDetailsTemplate(userTournamentData));
                _this.getPartcipateStatus();

            }.bind(this),
            error:  function(xhr, status, error) {
                $('#pageLoad').hide();
                $('.screen-message.error-message').removeClass('hide');
                $("html, body").animate({ scrollTop: $('.screen-message.error-message').offset().top - 50 });
            }.bind(this)
        });
    },

    getPartcipateStatus: function() {
        var ajaxUrl = _this.getApiUrl('tournamentUserDetails');
        participateAgLoginAuth = _this.getAuthSession(participateSessionKey, true);

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
                participateAgLoginAuth.tournamentId = tournamentId;

                $('#pageLoad').hide();
                $('#addMembers').removeClass('hide');
                _this.addMemberJS(xhr.participating, xhr.entryFee);
                $('#currentBalance').html('$' + tournamentDetails.balanceAmount);

                if (xhr && xhr.tournamentTeam && xhr.tournamentTeam.tournamentTeamMembers && xhr.tournamentTeam.tournamentTeamMembers.length) {
                    $('#yourTeam').removeClass('hide');
                    teamCreated = true;
                    var listTeamsTemplate = Handlebars.compile($("[data-template='listTeamsTemplate']").html());

                    xhr.tournamentTeam.tournamentTeamMembers.map(function(op, i) {
                        if (op.isLead) {
                            xhr.tournamentTeam.tournamentTeamMembers.splice(i, 1);
                            xhr.tournamentTeam.tournamentTeamMembers.unshift(op);
                        }
                    });

                    $('.list-team-wrapper').html(listTeamsTemplate(xhr.tournamentTeam));

                } else if (xhr && !xhr.participating && xhr.entryFee > loginUserData.balanceAmount) {
                    _this.paymentBlock();
                } else if (xhr && !xhr.participating) {
                    //already handled
                } else if (xhr && xhr.participating) {

                    if (tournamentDetails.teamSize > 1) {
                        $('#createTeam').removeClass('hide');
                        _this.openParticipantsDetails();
                    } else {
                        teamCreated = true;
                        $('#alreadyParticipated').removeClass('hide');
                        $('#tournamentCategoryDesc').html(tournamentDetails.tournamentCategoryDesc);
                    }
                }

                _this.setAuthSession(participateSessionKey, participateAgLoginAuth);
            }.bind(this),
            error:  function(xhr, status, error) {
                $('#pageLoad').hide();
                $('.screen-message.error-message').removeClass('hide');
                $("html, body").animate({ scrollTop: $('.screen-message.error-message').offset().top - 50 });
            }.bind(this)
        });
    },

    paymentBlock: function() {
        $('#payNow').removeClass('hide');
        //$('#pay-now-form input[name=amount]').val(xhr.entryFee);

        function validatePaymentFields() {
            if (!$('#pay-now-form input[name=amount]').val() || $('#pay-now-form input[name=cardNumber]').val().toString().length != $('#pay-now-form input[name=cardNumber]').attr('maxlength') || $('#pay-now-form input[name=expMonth]').val().toString().length != $('#pay-now-form input[name=expMonth]').attr('maxlength') || $('#pay-now-form input[name=expYear]').val().toString().length != $('#pay-now-form input[name=expYear]').attr('maxlength') || $('#pay-now-form input[name=cardCode]').val().toString().length != $('#pay-now-form input[name=cardCode]').attr('maxlength') ) {
                $('#participate-pay-button').attr('disabled', true).addClass('disabled-btn');
            } else {
                $('#participate-pay-button').removeAttr('disabled', true).removeClass('disabled-btn');
            }
        }

        $('#pay-now-form .number-only').off().on('keypress', function(event) {
            var charCode = (event.which) ? event.which : event.keyCode,
                element = $(event.target),
                maxlength = element.attr('maxlength');

            if (element.val() && element.val().toString().length == maxlength) {
                return false;
            }

            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                return false;
            }
        }.bind(this));

        $('#pay-now-form .number-only').off().on('keyup', function(event) {
            validatePaymentFields();
        });

        $('#pay-now-form input[name=expMonth]').off().on('blur', function(event) {
            if ($(this).val().toString().length == 1) {
                $(this).val('0' + $(this).val());
            }

            validatePaymentFields();
        });

        $('#participate-pay-button').off().on('click', function(event) {
            event.preventDefault();

            $('#participate-pay-button').parent('.button-wrapper').addClass('loading');
            $('.screen-message.error-message').addClass('hide');

            var authData = {};
            authData.clientKey = merchantAuthenticationClient;
            authData.apiLoginID = merchantAuthenticationName;

            var cardData = {};
                cardData.cardNumber = document.getElementById("cardNumber").value;
                cardData.month = document.getElementById("expMonth").value;
                cardData.year = document.getElementById("expYear").value;
                cardData.cardCode = document.getElementById("cardCode").value;

            var secureData = {};
                secureData.authData = authData;
                secureData.cardData = cardData;

            Accept.dispatchData(secureData, responseHandler);

            function responseHandler(response) {
                if (response.messages.resultCode === "Error") {
                    $('#participate-pay-button').parent('.button-wrapper').removeClass('loading');
                    $('.screen-message.error-message').removeClass('hide');
                    $("html, body").animate({ scrollTop: $('.screen-message.error-message').offset().top - 50 });

                    var i = 0;
                    while (i < response.messages.message.length) {
                        console.log(
                            response.messages.message[i].code + ": " +
                            response.messages.message[i].text
                        );
                        i = i + 1;
                    }
                } else {
                    paymentFormUpdate(response.opaqueData);
                }
            }

            function paymentFormUpdate(opaqueData) {
                document.getElementById("dataDescriptor").value = opaqueData.dataDescriptor;
                document.getElementById("dataValue").value = opaqueData.dataValue;

                var amount = document.getElementById("amount").value;

                // If using your own form to collect the sensitive data from the customer,
                // blank out the fields before submitting them to your server.
                document.getElementById("amount").value = "";
                document.getElementById("cardNumber").value = "";
                document.getElementById("expMonth").value = "";
                document.getElementById("expYear").value = "";
                document.getElementById("cardCode").value = "";
                $('#participate-pay-button').attr('disabled', true).addClass('disabled-btn');
                $('#participate-pay-button').parent('.button-wrapper').find('.red').addClass('hide');

                var ajaxUrl = _this.getApiUrl('authorize');

                var requestData = {};
                requestData.createTransactionRequest = {};
                requestData.createTransactionRequest.merchantAuthentication = {};
                requestData.createTransactionRequest.merchantAuthentication.name = merchantAuthenticationName;
                requestData.createTransactionRequest.merchantAuthentication.transactionKey = merchantAuthenticationTrans;
                requestData.createTransactionRequest.refId = "123456";
                requestData.createTransactionRequest.transactionRequest = {};
                requestData.createTransactionRequest.transactionRequest.transactionType = 'authCaptureTransaction';
                requestData.createTransactionRequest.transactionRequest.amount = amount;
                requestData.createTransactionRequest.transactionRequest.payment = {};
                requestData.createTransactionRequest.transactionRequest.payment.opaqueData = {};
                requestData.createTransactionRequest.transactionRequest.payment.opaqueData.dataDescriptor = opaqueData.dataDescriptor;
                requestData.createTransactionRequest.transactionRequest.payment.opaqueData.dataValue = opaqueData.dataValue;
                requestData.createTransactionRequest.transactionRequest.profile = {};
                requestData.createTransactionRequest.transactionRequest.profile.createProfile = false;
                requestData.createTransactionRequest.transactionRequest.order = {};
                requestData.createTransactionRequest.transactionRequest.order.invoiceNumber = Math.random().toString(36).substring(2, 10);
                requestData.createTransactionRequest.transactionRequest.customer = {};
                requestData.createTransactionRequest.transactionRequest.customer.id = "0";

                $.ajax({
                    type: "POST",
                    url: ajaxUrl,
                    contentType: "application/json",
                    dataType: "json",
                    timeout: 0,
                    data: JSON.stringify(requestData),
                    success: function(xhr, status) {
                        if (xhr && xhr.messages && xhr.messages.resultCode === 'Ok' && xhr.refId === requestData.createTransactionRequest.refId && xhr.transactionResponse.responseCode === '1' && xhr.transactionResponse.transId) {
                            _this.updatePayment(xhr, amount);
                        } else if (xhr && xhr.messages && xhr.messages.resultCode === 'Ok' && xhr.refId === requestData.createTransactionRequest.refId && xhr.transactionResponse.responseCode === '2' && xhr.transactionResponse.transId) {
                            this.reportFailure(xhr, status);
                            $('#participate-pay-button').parent('.button-wrapper').removeClass('loading');
                            $('#participate-pay-button').parent('.button-wrapper').find('.red').removeClass('hide').html(xhr.transactionResponse.errors[1].errorText);
                        }
                        else {
                            this.reportFailure(xhr, status);
                            $('#participate-pay-button').parent('.button-wrapper').removeClass('loading');
                        }
                    }.bind(this),
                    error:  function(xhr, status, error) {
                        this.reportFailure(xhr, status, error);
                        $('.screen-message.error-message').removeClass('hide');
                        $("html, body").animate({ scrollTop: $('.screen-message.error-message').offset().top - 50 });
                        $('#participate-pay-button').parent('.button-wrapper').removeClass('loading');
                    }.bind(this)
                });
            }

        });
    },

    reportFailure: function(xhr, status, error) {
        var requestData = {
            email: loginUserData.email,
            firstName: loginUserData.firstName,
            lastName: loginUserData.lastName,
            title:  "Payment Failure",
            problemType: "Other",
            teleNumber: loginUserData.phoneNumber,
            message: 'Response' + JSON.stringify(xhr) + 'Status' + status + 'Error' + error
        },
        ajaxUrl = this.getApiUrl('contact');

        $.ajax({
            type: "POST",
            url: ajaxUrl,
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(requestData),
            success: function() {
                alert('We have reported this issue with Action Golf, A member of our staff will contact you within the next 24 hours.');
            }.bind(this),
            error:  function() {

            }.bind(this)
        });
    },

    updatePayment: function(xhr, amount) {
        $('#pay-now-form').addClass('hide');
        $('#payment-title').addClass('hide');
        $('#transID').html(xhr.transactionResponse.transId);
        $('#pay-now-success').removeClass('hide');
        $('body').addClass('fixed-popup-body');
        $('.pay-now-block').addClass('fixed-popup');

        $('#payment-complete').on('click', function() {
            $('#payment-complete').parent('.button-wrapper').addClass('loading');
            $('.screen-message.error-message').addClass('hide');

            var ajaxUrl = _this.getApiUrl('updatePayment'),
                requestData = {};

            requestData.fromAccountTail = xhr.transactionResponse.accountNumber;
            requestData.paymentTransactionId = xhr.transactionResponse.transId;
            requestData.currencyCode = 'USD';
            requestData.paymentProcessor = 'Authorize.Net';
            requestData.fromAccountType = xhr.transactionResponse.accountType;
            requestData.deviceData = deviceId;
            requestData.profileId = userProfileId;
            requestData.paymentAmount = amount;

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
                    window.location.reload();
                }.bind(this),
                error:  function(xhr, status, error) {
                    $('.screen-message.error-message').removeClass('hide');
                    $("html, body").animate({ scrollTop: $('.screen-message.error-message').offset().top - 50 });
                    $('#payment-complete').parent('.button-wrapper').removeClass('loading');
                    $('#payment-complete').addClass('disabled-btn');
                    $('#payment-complete').parent('.button-wrapper').find('.red').removeClass('hide');
                }.bind(this)
            });

        });
    },

    createTeam: function(selectedMembersArray, teamName) {
        var ajaxUrl = _this.getApiUrl('createTeam'),
            requestData = {};

        requestData.userProfileId = userProfileId;
        requestData.tournamentId = tournamentId;
        requestData.mediaId = 0;
        requestData.teamName = teamName;
        requestData.members = selectedMembersArray;

        $('#create-team-form-submit').parent('.button-wrapper').addClass('loading');
        $('.screen-message.error-message').addClass('hide');

        $.ajax({
            type: "POST",
            url: ajaxUrl,
            contentType: "application/json",
            dataType: "json",
            timeout: 0,
            data: JSON.stringify(requestData),
            success: function(xhr, status) {
                if (xhr && xhr.IsSuccess) {
                    window.location.reload();
                } else if (xhr && xhr.errorCode === 1644) {
                    $('#create-team-form-submit').parent('.button-wrapper').removeClass('loading');
                    $('.screen-message.error-message').html(xhr.errorMsg).removeClass('hide');
                    $("html, body").animate({ scrollTop: $('.screen-message.error-message').offset().top - 50 });
                }
            }.bind(this),
            error:  function(xhr, status, error) {
                $('.screen-message.error-message').removeClass('hide');
                $("html, body").animate({ scrollTop: $('.screen-message.error-message').offset().top - 50 });
                $('#create-team-form-submit').parent('.button-wrapper').removeClass('loading');
            }.bind(this)
        });
    },

    getAuthSession: function(key, noExpiry) {
        var stringValueSession = window.sessionStorage.getItem(key);
        var stringValueLocal = window.localStorage.getItem(key);

        var stringValue = stringValueSession != null ? stringValueSession : stringValueLocal;

        if (stringValue !== null) {
            var value = JSON.parse(stringValue),
                expirationDate = new Date(value.expirationDate);

            if (noExpiry || stringValueSession != null) {
                return value.value;
            }

            if (expirationDate > new Date() && value) {
                return value.value;
            } else {
                window.localStorage.removeItem(key);
            }
        }
        return null;
    },

    setAuthSession: function(key, value, session) {
        var expirationInMin = 6000,
            expirationDate = new Date(new Date().getTime() + (60000 * expirationInMin)),
            newValue = {
                value: value,
                expirationDate: session ? null : expirationDate.toISOString()
            };

        if (session) {
            window.sessionStorage.setItem(key, JSON.stringify(newValue));
        } else {
            window.localStorage.setItem(key, JSON.stringify(newValue));
        }
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

    isValidEmail: function(userinput) {
        var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

        return pattern.test(userinput);
    },

    isValidTextField: function(userinput) {
        return userinput.trim() !== '';
    },

    getApiUrl: function(source) {
        var authorizePayment = testPage ? 'https://apitest.authorize.net/xml/v1/request.api' : 'https://api.authorize.net/xml/v1/request.api',
            apiUrls = {
                test : {
                    login: 'https://beta.actiongolfers.com/auth/verifyRequest',
                    verify: 'https://beta.actiongolfers.com/auth/verify',
                    profileUpdate: 'https://beta.actiongolfers.com/profile/update',
                    tournamentUserDetails: `https://beta.actiongolfers.com/tournament/${tournamentId}/profiles/${userProfileId}`,
                    openParticipants: `https://beta.actiongolfers.com/tournament/openParticipants?userProfileId=${userProfileId}&tournamentId=${tournamentId}`,
                    createTeam: 'https://beta.actiongolfers.com//tournament/createTeamV2',
                    authorize: authorizePayment,
                    groupParticipate: 'https://beta.actiongolfers.com/website/groupParticipate',
                    updatePayment: 'https://beta.actiongolfers.com/payment/ag_transaction',
                    getProfile: `https://beta.actiongolfers.com/profile/get/${userProfileId}`,
                    getTournamentDetails: 'https://beta.actiongolfers.com/tournament/get',
                    contact: 'https://beta.actiongolfers.com/subscription/contact-us/'
                },
                prod : {
                    login: 'https://api.actiongolfers.com/auth/verifyRequest',
                    verify: 'https://api.actiongolfers.com/auth/verify',
                    profileUpdate: 'https://api.actiongolfers.com/profile/update',
                    tournamentUserDetails: `https://api.actiongolfers.com/tournament/${tournamentId}/profiles/${userProfileId}`,
                    openParticipants: `https://api.actiongolfers.com/tournament/openParticipants?userProfileId=${userProfileId}&tournamentId=${tournamentId}`,
                    createTeam: 'https://api.actiongolfers.com//tournament/createTeamV2',
                    authorize: authorizePayment,
                    groupParticipate: 'https://api.actiongolfers.com/website/groupParticipate',
                    updatePayment: 'https://api.actiongolfers.com/payment/ag_transaction',
                    getProfile: `https://api.actiongolfers.com/profile/get/${userProfileId}`,
                    getTournamentDetails: 'https://api.actiongolfers.com/tournament/get',
                    contact: 'https://api.actiongolfers.com/subscription/contact-us/'
                }
            },
            domain = window.origin === 'https://actiongolfers.com' ? 'prod' : 'test';

        return apiUrls[domain][source];
    }
};

actiongolfLogin.init();



