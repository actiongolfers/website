var localDevelopment = false,
    friendlyName,
    participateSessionKey = 'participateAgLoginAuth';

var actiongolfLanding = {
    init: function () {
        var self = this;

        friendlyName = window.location.hash ? window.location.hash.substring(1) : '';

        if (!friendlyName) {
            $('.landing-content').hide();
            $('.screen-message').removeClass('hide');
            return;
        }

        var ajaxUrl= this.getApiUrl('landing') + (localDevelopment ? '' : friendlyName);

        if (self.getAuthSession(participateSessionKey)) {
            self.setAuthSession(participateSessionKey, self.getAuthSession(participateSessionKey));
        }

        $.ajax({
            type: "GET",
            url: ajaxUrl,
            contentType: "application/json",
            dataType: "json",
            timeout: 0,
            success: function(xhr, status) {
                if (xhr && xhr.tournamentInfo) {
                    $('.landing-content').show();
                    this.updateData(xhr);

                    var otpValidationParticipate = $('.otp-validation-slide').length;

                    $('#participate-submit, #participate-submit-header').on('click', function(event) {
                        event.preventDefault();

                        if (!otpValidationParticipate) {
                            return;
                        }

                        self.setAuthSession('tournamentDetails', {
                            tournamentId: xhr.tournamentInfo.tournamentId,
                            friendlyName: xhr.tournamentInfo.friendlyName,
                            teamSize: xhr.tournamentInfo.teamSize
                        }, true);

                        self.setAuthSession('landingPage', {
                            href: window.location.href
                        });

                        if (self.getAuthSession(participateSessionKey)) {
                            window.location.href = "./participate.html";
                        } else {
                            $('.otp-validation-slide').toggleClass('open');
                            $('#modal-shade').toggle();
                        }
                    });

                    $('.modal-slide-close').on('click', function(event) {
                        event.preventDefault();
                        $('.otp-validation-slide').toggleClass('open');
                        $('#modal-shade').toggle();
                    });
                } else {
                    $('.landing-content').hide();
                    $('.screen-message').removeClass('hide');
                }
            }.bind(this),
            error:  function(xhr, status, error) {
                $('.landing-content').hide();
                $('.screen-message').removeClass('hide');
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
        var expirationInMin = 600,
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

    updateData: function(data) {
        var landingTemplate = Handlebars.compile($("[data-template='landingTemplate']").html()),
            logoImages = [],
            details = {
                images: 'images/noprofitlogos.jpg',
                webPageTitle: data.tournamentInfo.webPageTitle,
                webPageBlob: data.tournamentInfo.webPageBlob,
                startDate: this.dateConversion(data.tournamentInfo.startDate),
                endDate: this.dateConversion(data.tournamentInfo.endDate),
                golfCourseName : data.tournamentInfo.golfCourseName,
                titleBackgroundImage: (data.tournamentInfo.titleBackgroundHQImage || data.tournamentInfo.titleBackgroundImage),
                learnMore: 'Learn More',
                singleDay: data && this.dateConversion(data.tournamentInfo.startDate) === this.dateConversion(data.tournamentInfo.endDate)
            };

        if (data.tournamentImages && data.tournamentImages.length) {
            data.tournamentImages.forEach(function(img){
                logoImages.push({
                    image: img.hqImageUrl || img.imageUrl,
                });
            });
        }

        details.logoImages = logoImages;

        details.webPageBlob = decodeURIComponent(details.webPageBlob);
        details.webPageTitle = details.webPageTitle.replace('[[STARTDATE]]', details.startDate);
        details.webPageTitle = details.webPageTitle.replace('[[ENDDATE]]', details.endDate);
        details.webPageTitle = details.webPageTitle.replace('[[STARTDATEYEAR]]', this.dateConversion(data.tournamentInfo.startDate, true));
        details.webPageTitle = details.webPageTitle.replace('[[ENDDATEYEAR]]', this.dateConversion(data.tournamentInfo.endDate, true));
        details.webPageBlob = details.webPageBlob.replace('[[STARTDATE]]', details.startDate);
        details.webPageBlob = details.webPageBlob.replace('[[ENDDATE]]', details.endDate);
        details.webPageBlob = details.webPageBlob.replace('[[STARTDATEYEAR]]', this.dateConversion(data.tournamentInfo.startDate, true));
        details.webPageBlob = details.webPageBlob.replace('[[ENDDATEYEAR]]', this.dateConversion(data.tournamentInfo.endDate, true));

        participateAgLoginAuth = this.getAuthSession(participateSessionKey);

        details.paricipateBtn = 'Register Here';

        if (participateAgLoginAuth && participateAgLoginAuth.tournamentId == data.tournamentInfo.tournamentId && participateAgLoginAuth.step) {
            if (participateAgLoginAuth.step == 1) {
                details.paricipateBtn = 'Register Here';
            } else if (participateAgLoginAuth.step == 2) {
                details.paricipateBtn = 'Create Team';
            } else if (participateAgLoginAuth.step == 3) {
                details.paricipateBtn = 'View Team';
            } else {
                details.paricipateBtn = 'Register Here';
            }
        }

        $('#participate-submit-header').html(details.paricipateBtn).attr('title', details.paricipateBtn).removeClass('hide');

        if (data.sponsorers && data.sponsorers.length) {
            details.sponsorers = data.sponsorers;
        }

        if (data.prizes && data.prizes.length) {
            details.prizes = data.prizes;
        }

        $('title').html(details.webPageTitle.replaceAll('<br>', ''));
        $('.landing-content').html(landingTemplate(details));
    },

    getApiUrl: function(source) {
        var apiUrls = {
                test : {
                    landing: 'https://beta.actiongolfers.com/website/tournament?friendlyName='
                },
                prod : {
                    landing: 'https://api.actiongolfers.com/website/tournament?friendlyName='
                },
                local : {
                    landing: 'http://localhost:8080/json/landing.json'
                }
            },
            domain = window.origin === 'https://actiongolfers.com' ? 'prod' : (localDevelopment ? 'local' : 'test');

        return apiUrls[domain][source];
    },

    dateConversion: function(value, withYear) {
        var date = new Date(value),
            months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        return months[date.getMonth()] + ' ' + this.formatWithZero(date.getDate()) + (withYear ? (', ' + date.getFullYear()) : '');
    },

    formatWithZero: function(value) {
        return (value < 9) ? ('0' + value) : value;
    }
};

actiongolfLanding.init();
