var actiongolfLogin = {
    init: function () {
        var verification = false,
            valid = false,
            ajaxUrl,
            requestData,
            phoneNumber,
            callingCode,
            verificationCode,
            element,
            parentEle,
            requiredMessage,
            invalidMessage,
            deviceId,
            sessionKey = 'agLoginAuth',
            publicSessionKey = 'publicAgLoginAuth',
            auth = 'YWdkZXY6cGFzc3dvcmQ=',
            reDirectUrl,
            otpValidationParticipate = $('.otp-validation-slide').length || window.sessionStorage.getItem('agReDirectPage') === './participate.html';

        if (this.getAuthSession(sessionKey) && !otpValidationParticipate) {
            this.setAuthSession(sessionKey, this.getAuthSession(sessionKey));
            reDirectUrl = window.sessionStorage.getItem('agReDirectPage');
            window.sessionStorage.removeItem('agReDirectPage');

            if (reDirectUrl) {
                window.location.href = reDirectUrl;
            } else {
                window.location.href = "./active-tournaments.html";
            }
            return;
        }

        $('.callingCode, .phoneNumber,.verification-code input').on('keypress', function(event) {
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

        $('.verification-code input').on('keyup', function(event) {
            var element = $(event.target),
                maxlength = element.attr('maxlength');

            if (element.val() && element.val().toString().length == maxlength) {
                if (element.hasClass('verificationCode1')) {
                    $('.verificationCode2').focus();
                } else if (element.hasClass('verificationCode2')) {
                    $('.verificationCode3').focus();
                } else if (element.hasClass('verificationCode3')) {
                    $('.verificationCode4').focus();
                }
            }

        }.bind(this));

        $('.callingCode').on('keyup', function(event) {
            var val = $(this).val();

            if (val && !val.includes('+')) {
                $(this).val('+' + val);
            }
        });

        $('#login-submit').on('click', function(event) {
            event.preventDefault();

            requestData = {};
            otpValidationParticipate = $('.otp-validation-slide').length || window.sessionStorage.getItem('agReDirectPage').includes('participate');;

            if (otpValidationParticipate) {
               window.sessionStorage.setItem('agReDirectPage', window.sessionStorage.getItem('agReDirectPage'));
            }

            $('.screen-message').addClass('hide');
            $('.form-field').find('.error-message').remove();
            $('.form-field').removeClass('error').removeClass('invalid-error');

            if (!verification) {
                element = $('.phoneNumber');
                callingCode = $('.callingCode').val() || '+1';
                parentEle = element.parents('.form-field');
                requiredMessage = element.data('required');
                invalidMessage = element.data('invalid');
                phoneNumber = element.val();

                ajaxUrl= this.getApiUrl('login');
                requestData.callingCode = callingCode;
                requestData.phoneNumber = phoneNumber;
                deviceId = deviceId || this.getRandomId();
                requestData.deviceId = deviceId;

                if (!phoneNumber) {
                    parentEle.addClass('error');
                    parentEle.find('.styled-input').append('<span class="error-message">' + requiredMessage + '</span>');
                    return;
                }

                valid = this.isValidNumberField(phoneNumber);

                if (!valid) {
                    parentEle.addClass('error');
                    parentEle.find('.styled-input').append('<span class="error-message">' + invalidMessage + '</span>');
                    return;
                }
            } else {
                parentEle = $('.form-field.otp');
                requiredMessage = 'Verification Code is required.';
                verificationCode = $('.verificationCode1').val() + $('.verificationCode2').val() + $('.verificationCode3').val() + $('.verificationCode4').val();

                ajaxUrl= this.getApiUrl('verify');
                requestData.callingCode = callingCode;
                requestData.phoneNumber = phoneNumber;
                requestData.deviceId = deviceId;
                requestData.verificationCode = verificationCode;

                valid = verificationCode.length == 4;

                if (!valid) {
                    $('.otp-error-message').html(requiredMessage);
                    parentEle.addClass('error');
                    return;
                }
            }

            $('.button-wrapper').addClass('loading');

            $.ajax({
                type: "POST",
                url: ajaxUrl,
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify(requestData),
                timeout: 0,
                beforeSend: function(xhr) {
                    xhr.setRequestHeader("Authorization", "Basic " + auth)
                },
                success: function(xhr, status) {
                    $('.button-wrapper').removeClass('loading');

                    if (!verification) {
                        verification = true;

                        $('.callingCode').prop('disabled', 'disabled');
                        $('.phoneNumber').prop('disabled', 'disabled');
                        $('.login').show();
                        $('.otp').show();
                        $('.verificationCode1').focus();
                    } else {
                        if (xhr && xhr.userProfileId) {
                            var sessionData = {
                                userProfileId: xhr.userProfileId,
                                deviceId: deviceId
                            };
                            reDirectUrl = window.sessionStorage.getItem('agReDirectPage');
                            window.sessionStorage.removeItem('agReDirectPage');
                            this.setAuthSession( otpValidationParticipate ? publicSessionKey : sessionKey, sessionData);

                            if (reDirectUrl) {
                                window.location.href = reDirectUrl;
                            } else {
                                window.location.href = "./active-tournaments.html";
                            }
                        } else {
                            $('.screen-message').removeClass('hide');
                        }
                    }
                }.bind(this),
                error:  function(xhr, status, error) {
                    if (xhr && xhr.responseText) {
                        var response = JSON.parse(xhr.responseText);

                        if (response && response.errorCode == 11001) {
                            $('.form-field.otp').addClass('error');
                            $('.otp-error-message').html(response.message || 'Invalid Verification Code');
                        } else {
                            $('.screen-message').removeClass('hide');
                        }

                    } else {
                        $('.screen-message').removeClass('hide');
                    }

                    $('.button-wrapper').removeClass('loading');
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
                    verify: 'https://beta.actiongolfers.com/auth/verify'
                },
                prod : {
                    login: 'https://api.actiongolfers.com/auth/verifyRequest',
                    verify: 'https://api.actiongolfers.com/auth/verify'
                }
            },
            domain = window.origin === 'https://actiongolfers.com' ? 'prod' : 'test';

        return apiUrls[domain][source];
    }
};

actiongolfLogin.init();



