var localDevelopment = false,
    tournamentId,
    _this;

var actiongolfLB = {
    init: function () {
        _this = this;
        tournamentId = window.location.hash ? window.location.hash.substring(1) : '';

        _this.leaderBoardCall();

        setInterval(function () {
            _this.leaderBoardCall();
        }, 60000);
    },

    leaderBoardCall: function() {
        var ajaxUrl = _this.getApiUrl('leaderBoard');

        $('.page-header').addClass('loading');

        $.ajax({
            type: "GET",
            url: ajaxUrl,
            contentType: "application/json",
            dataType: "json",
            timeout: 0,
            success: function(xhr, status) {
                $('.page-header').removeClass('loading');
                $('#leaderboardDetails').html('');

                var leaderboardDetailsTemplate = Handlebars.compile($("[data-template='leaderboardDetailsTemplate']").html()),
                    leaderboardDetailsData = xhr;

                    if (leaderboardDetailsData && leaderboardDetailsData.playerLeaderBoardList && leaderboardDetailsData.playerLeaderBoardList.length) {
                        leaderboardDetailsData.playerLeaderBoardList.map(function(item) {
                            if (item.rank && item.rank === 1) {
                                item.prize = 'gold';
                            } else if (item.rank && item.rank === 2) {
                                item.prize = 'silver';
                            } else if (item.rank && item.rank === 3) {
                                item.prize = 'bronze';
                            } else {
                                item.prize = '';
                            }
                        });
                    }


                $('#leaderboardDetails').html(leaderboardDetailsTemplate(leaderboardDetailsData));

                document.querySelectorAll('.photo img').forEach(function(img){
                    img.onerror = function(){
                        this.parentElement.classList.add('icon');
                    };
                 })

            }.bind(this),
            error:  function(xhr, status, error) {
                $('.page-header').removeClass('loading');
                $('.screen-message.error-message').removeClass('hide');
                $("html, body").animate({ scrollTop: $('.screen-message.error-message').offset().top - 50 });
            }.bind(this)
        });
    },

    getApiUrl: function(source) {
        var apiUrls = {
                test : {
                    leaderBoard: `https://beta.actiongolfers.com/website/tournaments/${tournamentId}/leaderboard`
                },
                prod : {
                    leaderBoard: `https://api.actiongolfers.com/website/tournaments/${tournamentId}/leaderboard`
                },
            },
            domain = window.origin === 'https://actiongolfers.com' ? 'prod' : (localDevelopment ? 'local' : 'test');

        return apiUrls[domain][source];
    }
};

actiongolfLB.init();
