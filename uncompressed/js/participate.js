let tournamentId,
    userProfileId,
    deviceId,
    selectedMembers = [],
    loginUserData,
    tournamentDetails,
    publicAgLoginAuth,
    teamSize,
    auth = 'YWdkZXY6cGFzc3dvcmQ=',
    _this;

var actiongolfLogin = {
    init: function () {
        var publicSessionKey = 'publicAgLoginAuth';

        _this = this;

        tournamentDetails = _this.getAuthSession('tournamentDetails');
        publicAgLoginAuth = _this.getAuthSession(publicSessionKey);

        if (!tournamentDetails) {
            $('.screen-message.error-message').html('Tournament Details Not found').removeClass('hide');
            return;
        }

        if (!publicAgLoginAuth) {
            window.sessionStorage.setItem('agReDirectPage', './participate.html');
            window.location.href = './login.html';

            return;
        }

        tournamentId = tournamentDetails.tournamentId; // 1952 1829 1834

        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());

        if (params && params.tournamentId) {
            tournamentId = params.tournamentId;
        }

        userProfileId = publicAgLoginAuth.userProfileId;
        deviceId = publicAgLoginAuth.deviceId;

        _this.getProfile();

        String.prototype.splice = function(idx, rem, str) {
            return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
        };

        $('.page-header-link').on('click', function() {
            window.localStorage.removeItem('tournamentDetails');
            window.localStorage.removeItem('publicAgLoginAuth');

            var previousLandingPage = _this.getAuthSession('landingPage');

            if (previousLandingPage && previousLandingPage.href) {
                window.location.href = previousLandingPage.href;
            } else {
                window.sessionStorage.setItem('agReDirectPage', './participate.html');
                window.location.href = './login.html';
            }

        });
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
                        $('#participateNow').addClass('hide');
                        $('[name=firstName]').val(loginUserData.firstName || '');
                        $('[name=lastName]').val(loginUserData.lastName || '');
                        $('[name=email]').val(loginUserData.email || '');

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
                                $('[name=firstName]').parent('.styled-input').addClass('error');
                                isValid = false;
                            } else {
                                $('[name=firstName]').parent('.styled-input').removeClass('error');
                                isValid = true;
                            }

                            if (!_this.isValidTextField(requestData.lastName)) {
                                $('[name=lastName]').parent('.styled-input').addClass('error');
                                isValid = false;
                            } else {
                                $('[name=lastName]').parent('.styled-input').removeClass('error');
                                isValid = isValid;
                            }

                            if (!requestData.email.trim()) {
                                $('[name=email]').parent('.styled-input').addClass('error');
                                $('[name=email]').parent('.styled-input').find('.error-message').html($('[name=email]').data('required'));
                                isValid = false;
                            } else {
                                if (!_this.isValidEmail(requestData.email)) {
                                    $('[name=email]').parent('.styled-input').addClass('error');
                                    $('[name=email]').parent('.styled-input').find('.error-message').html($('[name=email]').data('invalid'));
                                    isValid = false;
                                } else {
                                    $('[name=email]').parent('.styled-input').removeClass('error');
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
                        _this.tournamentUserDetails();
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

    tournamentUserDetails: function() {
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

                var userTournamentDetails = Handlebars.compile($("[data-template='userTournamentDetails']").html()),
                    userTournamentDate = {};

                userTournamentDate.firstName = loginUserData.firstName || '';
                userTournamentDate.lastName = loginUserData.lastName || '';
                userTournamentDate.email = loginUserData.email || '';
                userTournamentDate.phoneNumber = loginUserData.phoneNumber || '';

                userTournamentDate.tournamentName = tournamentDetails.tournamentName || '';
                userTournamentDate.entryFee = (tournamentDetails.entryFee === 0) ? 'Free' :  ('$' + tournamentDetails.entryFee);
                userTournamentDate.tournamentCategory = tournamentDetails.tournamentCategoryDesc || '';
                userTournamentDate.teamSize = tournamentDetails.teamSize || '';

                $('.participate-user-details').html(userTournamentDetails(userTournamentDate));
                _this.getPartcipateStatus();

            }.bind(this),
            error:  function(xhr, status, error) {
                $('#pageLoad').hide();
            }.bind(this)
        });
    },

    getPartcipateStatus: function() {
        var ajaxUrl = _this.getApiUrl('tournamentUserDetails');

        function validateFields() {
            if (!$('input[name=amount]').val() || $('input[name=cardNumber]').val().toString().length != $('input[name=cardNumber]').attr('maxlength') || $('input[name=expMonth]').val().toString().length != $('input[name=expMonth]').attr('maxlength') || $('input[name=expYear]').val().toString().length != $('input[name=expYear]').attr('maxlength') || $('input[name=cardCode]').val().toString().length != $('input[name=cardCode]').attr('maxlength') ) {
                $('#participate-pay-button').attr('disabled', true).addClass('disabled-btn');
            } else {
                $('#participate-pay-button').removeAttr('disabled', true).removeClass('disabled-btn');
            }
        }

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
                $('#pageLoad').hide();
                if (xhr && xhr.tournamentTeam && xhr.tournamentTeam.tournamentTeamMembers && xhr.tournamentTeam.tournamentTeamMembers.length) {
                    $('#yourTeam').removeClass('hide');
                    var listTeamsTemplate = Handlebars.compile($("[data-template='listTeamsTemplate']").html());

                    xhr.tournamentTeam.tournamentTeamMembers.map(function(op, i) {
                        if (op.isLead) {
                            xhr.tournamentTeam.tournamentTeamMembers.splice(i, 1);
                            xhr.tournamentTeam.tournamentTeamMembers.unshift(op);
                        }
                    });

                    $('.list-team-wrapper').html(listTeamsTemplate(xhr.tournamentTeam));

                } else if (xhr && !xhr.participating && xhr.entryFee > loginUserData.balanceAmount) {
                    $('#payNow').removeClass('hide');
                    $('#currentBalance').html('$' + tournamentDetails.balanceAmount);
                    $('input[name=amount]').val(xhr.entryFee);

                    $('.number-only').on('keypress', function(event) {
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

                    $('.number-only').on('keyup', function(event) {
                        validateFields();
                    });

                    $('input[name=expMonth]').on('blur', function(event) {
                        if ($(this).val().toString().length == 1) {
                            $(this).val('0' + $(this).val());
                        }

                        validateFields();
                    });

                    $('#participate-pay-button').on('click', function(event) {
                        event.preventDefault();

                        $('#participate-pay-button').parent('.button-wrapper').addClass('loading');
                        $('.screen-message.error-message').addClass('hide');

                        var authData = {};
                        authData.clientKey = "9E9u9bZhnz6AaaTxGqESm8Tr2AfuPXcex498Q9A9g7X9GG34yGpJGgh5cH4CNKZf";
                        authData.apiLoginID = "9k9FP9khR";

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

                            var ajaxUrl = _this.getApiUrl('authorize');

                            var requestData = {};
                            requestData.createTransactionRequest = {};
                            requestData.createTransactionRequest.merchantAuthentication = {};
                            requestData.createTransactionRequest.merchantAuthentication.name = '9k9FP9khR';
                            requestData.createTransactionRequest.merchantAuthentication.transactionKey = '2tkP3CP85y76Vp6P';
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
                                    } else {
                                        $('#participate-pay-button').parent('.button-wrapper').removeClass('loading');
                                    }
                                }.bind(this),
                                error:  function(xhr, status, error) {
                                    $('.screen-message.error-message').removeClass('hide');
                                    $("html, body").animate({ scrollTop: $('.screen-message.error-message').offset().top - 50 });
                                    $('#participate-pay-button').parent('.button-wrapper').removeClass('loading');
                                }.bind(this)
                            });
                        }

                    });
                } else if (xhr && !xhr.participating) {
                    $('#participateNow').removeClass('hide');

                    if (xhr.entryFee !== 0 && xhr.entryFee <= loginUserData.balanceAmount) {
                        $('#entryFee').html('$' + xhr.entryFee);
                        $('#entryFeeDeduction').removeClass('hide');
                    }

                    $('#participate-button').on('click', function(event) {
                        var ajaxUrl = _this.getApiUrl('participate'),
                            requestData = {};

                        $('#participate-button').parent('.button-wrapper').addClass('loading');
                        $('.screen-message.error-message').addClass('hide');

                        requestData.userProfileId = userProfileId;
                        requestData.tournamentId = tournamentId;

                        $.ajax({
                            type: "POST",
                            url: ajaxUrl,
                            contentType: "application/json",
                            dataType: "json",
                            timeout: 0,
                            data: JSON.stringify(requestData),
                            success: function(xhr, status) {
                                $('#participate-button').parent('.button-wrapper').removeClass('loading');
                                $('#participateNow').addClass('hide');
                                $('#createTeam').removeClass('hide');

                                if (tournamentDetails.teamSize > 1) {
                                    _this.openParticipantsDetails();
                                } else {
                                    $('#alreadyParticipated').removeClass('hide');
                                    $('#tournamentCategoryDesc').html(tournamentDetails.tournamentCategoryDesc);
                                }
                            }.bind(this),
                            error:  function(xhr, status, error) {
                                $('.screen-message.error-message').removeClass('hide');
                                $("html, body").animate({ scrollTop: $('.screen-message.error-message').offset().top - 50 });
                                $('#participate-button').parent('.button-wrapper').removeClass('loading');
                            }.bind(this)
                        });
                    });
                } else if (xhr && xhr.participating) {
                    if (tournamentDetails.teamSize > 1) {
                        $('#createTeam').removeClass('hide');
                        _this.openParticipantsDetails();
                    } else {
                        $('#alreadyParticipated').removeClass('hide');
                        $('#tournamentCategoryDesc').html(tournamentDetails.tournamentCategoryDesc);
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

    updatePayment: function(xhr, amount) {
        $('#pay-now-form').addClass('hide');
        $('#payment-title').addClass('hide');
        $('#transID').html(xhr.transactionResponse.transId);
        $('#pay-now-success').removeClass('hide');

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

    isValidEmail: function(userinput) {
        var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

        return pattern.test(userinput);
    },

    isValidTextField: function(userinput) {
        return userinput.trim() !== '';
    },

    getApiUrl: function(source) {
        var apiUrls = {
                test : {
                    login: 'https://beta.actiongolfers.com/auth/verifyRequest',
                    verify: 'https://beta.actiongolfers.com/auth/verify',
                    profileUpdate: 'https://beta.actiongolfers.com/profile/update',
                    tournamentUserDetails: `https://beta.actiongolfers.com/tournament/${tournamentId}/profiles/${userProfileId}`,
                    openParticipants: `https://beta.actiongolfers.com/tournament/openParticipants?userProfileId=${userProfileId}&tournamentId=${tournamentId}`,
                    createTeam: 'https://beta.actiongolfers.com//tournament/createTeamV2',
                    authorize: 'https://apitest.authorize.net/xml/v1/request.api',
                    participate: 'https://beta.actiongolfers.com/tournament/participate',
                    updatePayment: 'https://beta.actiongolfers.com/payment/ag_transaction',
                    getProfile: `https://beta.actiongolfers.com/profile/get/${userProfileId}`,
                    getTournamentDetails: 'https://beta.actiongolfers.com/tournament/get',
                },
                prod : {
                    login: 'https://api.actiongolfers.com/auth/verifyRequest',
                    verify: 'https://api.actiongolfers.com/auth/verify',
                    profileUpdate: 'https://api.actiongolfers.com/profile/update',
                    tournamentUserDetails: `https://api.actiongolfers.com/tournament/${tournamentId}/profiles/${userProfileId}`,
                    openParticipants: `https://api.actiongolfers.com/tournament/openParticipants?userProfileId=${userProfileId}&tournamentId=${tournamentId}`,
                    createTeam: 'https://api.actiongolfers.com//tournament/createTeamV2',
                    authorize: 'https://api.authorize.net/xml/v1/request.api',
                    participate: 'https://api.actiongolfers.com/tournament/participate',
                    updatePayment: 'https://api.actiongolfers.com/payment/ag_transaction',
                    getProfile: `https://api.actiongolfers.com/profile/get/${userProfileId}`,
                    getTournamentDetails: 'https://api.actiongolfers.com/tournament/get',
                }
            },
            domain = window.origin === 'https://actiongolfers.com' ? 'prod' : 'test';

        return apiUrls[domain][source];
    }
};

actiongolfLogin.init();



