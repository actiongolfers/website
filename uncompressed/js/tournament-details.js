var localDevelopment = false,
    tournamentId;

var tournamentDetails = {
    init: function () {

        tournamentId = window.location.hash ? window.location.hash.substring(1) : '';

        if (!tournamentId) {
            $('.page-header').removeClass('loading');
            $('.screen-message').removeClass('hide');
        }

        var ajaxUrl= this.getApiUrl('tournamentDetails'),
            requestData = {};

        requestData.longitude = '0.0';
        requestData.latitude = '0.0';
        requestData.userProfileId = '1';
        requestData.tournamentId = tournamentId;

        $.ajax({
            type: "POST",
            url: ajaxUrl,
            contentType: "application/json",
            dataType: "json",
            timeout: 0,
            data: JSON.stringify(requestData),
            success: function(xhr, status) {
                $('.page-header').removeClass('loading');
                this.updateData(xhr);
            }.bind(this),
            error:  function(xhr, status, error) {
                $('.screen-message').removeClass('hide');
                $('.page-header').removeClass('loading');
            }.bind(this)
        });
    },

    updateData: function(data) {
        var tournamentDetailsTemplate = Handlebars.compile($("[data-template='tournamentDetailsTemplate']").html());

        $('.tournament-details').html(tournamentDetailsTemplate(data));
    },

    getApiUrl: function(source) {
        var apiUrls = {
                test : {
                    tournamentDetails: 'https://beta.actiongolfers.com/tournament/get'
                },
                prod : {
                    tournamentDetails: 'https://api.actiongolfers.com/tournament/get'
                },
                local : {
                    tournamentDetails: 'http://localhost:8080/json/tournamentDetails.json'
                }
            },
            domain = window.origin === 'https://actiongolfers.com' ? 'prod' : (localDevelopment ? 'local' : 'test');

        return apiUrls[domain][source];
    }
};

tournamentDetails.init();
