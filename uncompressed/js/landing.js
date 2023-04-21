var localDevelopment = false,
    friendlyName;

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

                    $('#participate-submit').on('click', function(event) {
                        event.preventDefault();

                        if (!otpValidationParticipate) {
                            return;
                        }

                        var publicSessionKey = 'publicAgLoginAuth';

                        self.setAuthSession('tournamentDetails', {
                            tournamentId: xhr.tournamentInfo.tournamentId,
                            friendlyName: xhr.tournamentInfo.friendlyName,
                            teamSize: xhr.tournamentInfo.teamSize,
                            full: xhr.tournamentInfo
                        });

                        if (self.getAuthSession(publicSessionKey)) {
                            self.setAuthSession(publicSessionKey, self.getAuthSession(publicSessionKey));
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
                titleBackgroundImage: data.tournamentInfo.titleBackgroundImage,
                learnMore: 'Learn More'
            };

        if (data.tournamentImages && data.tournamentImages.length) {
            data.tournamentImages.forEach(function(img){
                logoImages.push({
                    image: img.imageUrl
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

        if (data.sponsorers && data.sponsorers.length) {
            details.sponsorers = data.sponsorers;
        }

        if (data.prizes && data.prizes.length) {
            details.prizes = data.prizes;
        }

        $('title').html(details.webPageTitle);
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
