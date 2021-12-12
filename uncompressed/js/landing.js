var localDevelopment = false,
    friendlyName;

var actiongolfLanding = {
    init: function () {

        //localDevelopment = window.origin === 'http://localhost:8080';
        friendlyName = window.location.hash ? window.location.hash.substring(1) : '';

        if (!friendlyName) {
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
                    this.updateData(xhr);
                } else {
                    $('.loading').hide();
                    $('.screen-message').removeClass('hide');
                }
            }.bind(this),
            error:  function(xhr, status, error) {
                $('.loading').hide();
                $('.screen-message').removeClass('hide');
            }.bind(this)
        });
    },

    updateData: function(data) {
        var landingTemplate = Handlebars.compile($("[data-template='landingTemplate']").html()),
            details = {
                images: 'images/noprofitlogos.jpg',
                webPageTitle: data.tournamentInfo.webPageTitle,
                webPageBlob: data.tournamentInfo.webPageBlob,
                startDate: data && this.dateConversion(data.tournamentInfo.startDate),
                endDate: data && this.dateConversion(data.tournamentInfo.endDate),
                golfCourseName : data.tournamentInfo.golfCourseName,
                learnMore: 'Learn More'
            };

        details.webPageBlob = decodeURIComponent(details.webPageBlob);
        details.webPageTitle = details.webPageTitle.replace('[[STARTDATE]]', details.startDate);
        details.webPageTitle = details.webPageTitle.replace('[[ENDDATE]]', details.endDate);
        details.webPageTitle = details.webPageTitle.replace('[[STARTDATEYEAR]]', this.dateConversion(data.tournamentInfo.startDate, true));
        details.webPageTitle = details.webPageTitle.replace('[[ENDDATEYEAR]]', this.dateConversion(data.tournamentInfo.endDate, true));
        details.webPageBlob = details.webPageBlob.replace('[[STARTDATE]]', details.startDate);
        details.webPageBlob = details.webPageBlob.replace('[[ENDDATE]]', details.endDate);
        details.webPageBlob = details.webPageBlob.replace('[[STARTDATEYEAR]]', this.dateConversion(data.tournamentInfo.startDate, true));
        details.webPageBlob = details.webPageBlob.replace('[[ENDDATEYEAR]]', this.dateConversion(data.tournamentInfo.endDate, true));
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
