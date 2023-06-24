var localDevelopment = false,
    friendlyName,
    participateSessionKey = 'participateAgLoginAuth',
    userProfileId,
    tournamentId,
    deviceId,
    participateStep = 1;

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

        var participateSession = self.getAuthSession(participateSessionKey , true);

        if (participateSession) {
            self.setAuthSession(participateSessionKey, participateSession);
            self.setAuthSession(participateSessionKey, participateSession, true);
            userProfileId = participateSession.userProfileId;
            deviceId = participateSession.deviceId;
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

                    tournamentId = xhr.tournamentInfo.tournamentId;

                    if (tournamentId && userProfileId && deviceId) {
                        self.getPartcipateStatus(xhr);
                    } else {
                        self.updateData(xhr);
                    }
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

    getPartcipateStatus: function(xhrData) {
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
                if (xhr && xhr.participating) {
                    if (xhr && xhr.tournamentTeam && xhr.tournamentTeam.tournamentTeamMembers && xhr.tournamentTeam.tournamentTeamMembers.length) {
                        participateStep = 3;
                    } else if (xhrData && xhrData.tournamentInfo && xhrData.tournamentInfo.teamSize > 1) {
                        participateStep = 2;
                    } else {
                        participateStep = 0;

                        if (xhrData && xhrData.tournamentInfo && !xhrData.tournamentInfo.teamSize) {
                            participateStep = 1;
                        }
                    }
                }

                this.updateData(xhrData);
            }.bind(this),
            error:  function(xhr, status, error) {
                this.updateData(xhrData);
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

            if (noExpiry || stringValueLocal != null) {
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

    updateData: function(data) {
        var landingTemplate = Handlebars.compile($("[data-template='landingTemplate']").html()),
            logoImages = [],
            details = {
                images: 'images/noprofitlogos.jpg',
                webPageTitle: data.tournamentInfo.webPageTitle,
                webPageBlob: data.tournamentInfo.webPageBlob,
                startDate: this.dateConversion(data.tournamentInfo.startDate, true),
                endDate: this.dateConversion(data.tournamentInfo.endDate, true),
                golfCourseName : data.tournamentInfo.golfCourseName,
                titleBackgroundImage: (data.tournamentInfo.titleBackgroundHQImage || data.tournamentInfo.titleBackgroundImage),
                learnMore: 'Learn More',
                singleDay: data && this.dateConversion(data.tournamentInfo.startDate, true) === this.dateConversion(data.tournamentInfo.endDate, true)
            },
            self = this;

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

        participateAgLoginAuth = this.getAuthSession(participateSessionKey, true);

        details.paricipateBtn = 'Register Here';
        details.soldOut = '';

        if (participateAgLoginAuth && participateAgLoginAuth.userProfileId) {
            if (participateStep == 1) {
                details.paricipateBtn = 'Register Here';
            } else if (participateStep == 2) {
                details.paricipateBtn = 'Create Team';
            } else if (participateStep == 3) {
                details.paricipateBtn = 'View Team';
            } else if (participateStep == 0) {
                details.paricipateBtn = 'View Details';
            } else {
                participateStep = 1;
                details.paricipateBtn = 'Register Here';
            }
        }

        if (details.paricipateBtn) {
            $('#participate-submit-header').html(details.paricipateBtn).attr('title', details.paricipateBtn).removeClass('hide');
        }

        if (data && participateStep === 1 && (data.tournamentConfig && data.tournamentConfig.seatsLeft === 0)) {
            details.soldOut = 'sold-out';
            details.paricipateBtn = 'Sold Out';
            $('#participate-submit-header').html(details.paricipateBtn).attr('title', details.paricipateBtn).addClass('sold-out').removeClass('hide');
        }

        if (data.sponsorers && data.sponsorers.length) {
            details.sponsorers = data.sponsorers;
        }

        if (data.prizes && data.prizes.length) {
            details.prizes = data.prizes;
        }

        $('title').html(details.webPageTitle.replaceAll('<br>', ''));
        $('.landing-content').html(landingTemplate(details));

        var otpValidationParticipate = $('.otp-validation-slide').length;

        self.setAuthSession('landingPage', {
            href: window.location.href
        }, true);

        self.setAuthSession('tournamentDetails', {
            tournamentId: data.tournamentInfo.tournamentId,
            friendlyName: data.tournamentInfo.friendlyName,
            teamSize: data.tournamentInfo.teamSize
        }, true);

        $('#participate-submit, #participate-submit-header').on('click', function(event) {
            event.preventDefault();

            if (!otpValidationParticipate || data.tournamentConfig && data.tournamentConfig.seatsLeft === 0) {
                return;
            }

            if (self.getAuthSession(participateSessionKey, true)) {
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
    },

    getApiUrl: function(source) {
        var apiUrls = {
                test : {
                    landing: 'https://beta.actiongolfers.com/website/tournament?friendlyName=',
                    tournamentUserDetails: `https://beta.actiongolfers.com/tournament/${tournamentId}/profiles/${userProfileId}`,
                },
                prod : {
                    landing: 'https://api.actiongolfers.com/website/tournament?friendlyName=',
                    tournamentUserDetails: `https://api.actiongolfers.com/tournament/${tournamentId}/profiles/${userProfileId}`,
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
