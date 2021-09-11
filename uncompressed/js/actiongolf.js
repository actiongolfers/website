var actiongolf = {
    init: function () {
        var validatedOnce = false;

        $(".hamburger").on('click', function(e) {
            e.preventDefault();
            $(window).scrollTop(0);

            $('body').toggleClass("menu-active");
            $(this).toggleClass("is-active");
        });

        $(window).on('scroll', function(e) {
            if ($('body').hasClass("menu-active")) {
                $(window).scrollTop(0);
            }
        });

        $(window).on('resize orientationchange', function(e) {
            $('body').removeClass("menu-active");
            $(".hamburger").removeClass("is-active");
        });

        $('.media.slick-slider').each(function() {
            $(this).slick({
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000,
                cssEase: 'linear',
                appendArrows: $(this).siblings('.arrow-container')
            });
        });

        $('#testimonial-carousel').slick({
            infinite: false
        }).on('setPosition', function (event, slick) {
            slick.$slides.css('min-height', '1px');
            slick.$slides.find('h3').css('min-height', '1px');

            slick.$slides.css('min-height', slick.$slideTrack.height() + 'px');

            var maxHeight = 0,
                cntHeight;

            slick.$slides.each(function() {
                cntHeight = $(this).find('h3').outerHeight(true);

                if (cntHeight > maxHeight) {
                    maxHeight = cntHeight;
                }
            });

            slick.$slides.find('h3').css('min-height', maxHeight + 'px');
        });

        $('.download-app').on('click', function() {
            if (this.isIOS()) {
                //console.log('ios');
            } else  {
                //console.log('non ios');
            }
        }.bind(this));

        $('.subscribe-box-text').on('keyup', function() {
            var emailId = $('.subscribe-box-text').val();

            if (this.isValidEmail(emailId)) {
                $('.subscribe-box-button').addClass('active');
            } else {
                $('.subscribe-box-button').removeClass('active');
                $('.subscribe-error').html('');
                $('.subscribe-error').css('visibility', 'hidden');
            }
        }.bind(this));

        $('.subscribe-box-button').on('click', function() {
            $('.subscribe-error').html('');
            $('.subscribe-error').css('visibility', 'hidden');

            var emailId = $('.subscribe-box-text').val(),
                requestData,
                ajaxUrl= this.getApiUrl('subscribe');

            requestData = {
                "emailId": emailId
            };

            $('.subscribe-box-button').addClass('active');
            $('.subscribe-box-button').css('visibility', 'hidden');
            $('.subscribe-box .lds-ellipsis').show();

            $.ajax({
                type: "POST",
                url: ajaxUrl,
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify(requestData),
                success: function() {
                    this.toggleModal(true);
                }.bind(this),
                error:  function() {
                    $('.subscribe-error').html('Error submitting your request');
                    $('.subscribe-error').css('visibility', 'visible');
                    $('.subscribe-box .lds-ellipsis').hide();
                    $('.subscribe-box-button').css('visibility', 'visible');
                }.bind(this)
            });

        }.bind(this));

        $('.close-modal, #modal-shade').on('click', function() {
            this.toggleModal();
        }.bind(this));

        $(".subscribe-box-text").on('keyup', function(event) {
            if (event.keyCode === 13) {
                $('.subscribe-box-button').click();
            }
        });

        $("body").on('keyup', function(event) {
            if (event.keyCode === 27) {
                this.toggleModal();
            }
        }.bind(this));

        $(".phone-input").on('keypress', function(event) {
            var charCode = (event.which) ? event.which : event.keyCode;

            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                return false;
            }

        }.bind(this));

        $(".phone-input").on('keyup', function(event) {
            var phoneCode,
                phonePrefix,
                phoneLine,
                element = $(event.target),
                maxlength = element.attr('maxlength');

            phoneCode = $('.phone-code').val();
            phonePrefix = $('.phone-prefix').val();
            phoneLine = $('.phone-line').val();

            $('[name="teleNumber"]').val(phoneCode + '' + phonePrefix + '' + phoneLine);

            if (element.val() && element.val().toString().length == maxlength) {
                if (element.hasClass('phone-code')) {
                    $('.phone-prefix').focus();
                } else if (element.hasClass('phone-prefix')) {
                    $('.phone-line').focus();
                }
            }

        }.bind(this));

        $(".phone-input").on('focus', function(event) {
            $('.phone-number label').addClass('focus');
        }.bind(this));

        $(".phone-input").on('blur', function(event) {
            $('.phone-number label').removeClass('focus');
        }.bind(this));

        $('#ajaxForm').find('[required]').on('change', function(event) {
            if (!validatedOnce) {
                return;
            }

            this.formValidation();
        }.bind(this));

        $('.demo-submit-btn').on('click', function(event) {
            event.preventDefault();

            if (!event.originalEvent) {
                return false;
            }

            var demoForm = $('#ajaxForm'),
                requestData = {},
                validForm = true,
                contact = demoForm.data('type') && demoForm.data('type') === 'contact',
                ajaxUrl= contact ? this.getApiUrl('contact') : this.getApiUrl('demo');

            validatedOnce = true;

            $('.success-message').addClass('hide');
            $('.error-message').addClass('hide');

            validForm = this.formValidation();

            if (validForm) {
                serializedData = demoForm.serializeArray();

                $(serializedData).each(function(index, obj){
                    requestData[obj.name] = obj.value;
                });

                $('.button-wrapper').addClass('loading');

                $.ajax({
                    type: "POST",
                    url: ajaxUrl,
                    contentType: "application/json",
                    dataType: "json",
                    data: JSON.stringify(requestData),
                    success: function() {
                        $('.success-message').removeClass('hide');
                        $("html, body").animate({ scrollTop: $('.form-container').offset().top });
                        $('.button-wrapper').removeClass('loading');
                    }.bind(this),
                    error:  function() {
                        $('.error-message').removeClass('hide');
                        $("html, body").animate({ scrollTop: $('.form-container').offset().top });
                        $('.button-wrapper').removeClass('loading');
                    }.bind(this)
                });
            } else {
                $("html, body").animate({ scrollTop: $('.styled-input.error').first().offset().top - 20 });
            }
        }.bind(this));

        $('.title-head').on('click', function(event) {
            $(this).next('.details').slideToggle();
        });
    },

    formValidation: function() {
        var demoForm = $('#ajaxForm'),
            fields = demoForm.find('[name][required]'),
            validForm = true;

        fields.each(function(index, ele) {
            var element = $(ele),
                name = element.attr('name'),
                parentEle = (name === 'teleNumber') ? element.parents('.phone-number') : element.parents('.styled-input'),
                inputValue = element.val().trim(),
                requiredMessage = element.data('required'),
                invalidMessage = element.data('invalid'),
                isValid = false;

            parentEle.find('.error-message').remove();
            parentEle.removeClass('error').removeClass('invalid-error');

            if (!inputValue) {
                parentEle.addClass('error');
                parentEle.append('<span class="error-message">' + requiredMessage + '</span>');
                validForm = false;
            } else {
                if (name === 'email') {
                    isValid = this.isValidEmail(inputValue);
                } else if (name === 'teleNumber') {
                    isValid = this.isValidPhoneField(inputValue);
                } else if (name === 'message') {
                    isValid = this.isValidMessageField(inputValue);
                } else {
                    isValid = this.isValidTextField(inputValue);
                }

                if (!isValid) {
                    parentEle.addClass('error').addClass('invalid-error');
                    parentEle.append('<span class="error-message">' + invalidMessage + '</span>');
                    validForm = false;
                }
            }
        }.bind(this));

        return validForm;
    },

    toggleModal: function(show) {
        if (show) {
            $('.subscribe-error').html('');
            $('.subscribe-error').css('visibility', 'hidden');
            $('.subscribe-box .lds-ellipsis').hide();
            $('.subscribe-box-button').css('visibility', 'visible');

            $('#success-message').show();
            $('#modal-shade').show();
        } else {
            $('#success-message').hide();
            $('#modal-shade').hide();
        }
    },

    isIOS: function () {
        return [
          'iPad Simulator',
          'iPhone Simulator',
          'iPod Simulator',
          'iPad',
          'iPhone',
          'iPod',
          'MacIntel'
        ].includes(navigator.platform) || (navigator.userAgent.includes("Mac") && "ontouchend" in document);
    },

    isValidEmail: function(userinput) {
        var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

        return pattern.test(userinput);
    },

    isValidTextField: function(userinput) {
        var pattern = /^[a-zA-Z ]{1,50}$/i;

        return pattern.test(userinput);
    },

    isValidMessageField: function(userinput) {
        var pattern = /^[a-zA-Z \(\)\[\]\{\}.,-_\n]{6,999}$/i;

        return pattern.test(userinput);
    },

    isValidPhoneField: function(userinput) {
        var pattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i;

        return pattern.test(userinput);
    },

    getApiUrl: function(source) {
        var apiUrls = {
                test : {
                    subscribe: 'https://beta.actiongolfers.com/subscription/subscribe',
                    demo: 'https://beta.actiongolfers.com/subscription/inquiry/',
                    contact: 'https://beta.actiongolfers.com/subscription/contact-us/'
                },
                prod : {
                    subscribe: 'https://api.actiongolfers.com/subscription/subscribe',
                    demo: 'https://api.actiongolfers.com/subscription/inquiry/',
                    contact: 'https://api.actiongolfers.com/subscription/contact-us/'
                }
            },
            domain = window.origin === 'https://actiongolfers.com' ? 'prod' : 'test';

        return apiUrls[domain][source];
    }
};

actiongolf.init();
