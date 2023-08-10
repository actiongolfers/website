var localDevelopment = false,
    tournamentId,
    _this,
    scrollInterval,
    autoScrollFlag;

var actiongolfLB = {
    init: function () {
        _this = this;
        _this.scrollVal = 0;
        
        tournamentId = this.getParameterByName('id');
        autoScrollFlag = this.getParameterByName('autoscroll') === 'yes' && window.innerWidth >= 768;

        _this.leaderBoardCall();
    },

    autoScroll: function() {
        scrollInterval = setInterval(function () {
            if (_this.totalScroll < _this.scrollVal) {
                _this.scrollVal = 0;
                $("html, body").animate({ scrollTop: _this.scrollVal }, 5000);
                _this.leaderBoardCall();
                
            } else {
                _this.scrollVal = _this.scrollVal + window.innerHeight/2;
                $("html, body").animate({ scrollTop: _this.scrollVal }, 10000);
            }
        }, 15000);
    },

    getParameterByName: function(name, url = window.location.href) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
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
                    leaderboardDetailsData.autoScroll = autoScrollFlag;

                    if (leaderboardDetailsData && leaderboardDetailsData.playerLeaderBoardList && leaderboardDetailsData.playerLeaderBoardList.length) {
                        leaderboardDetailsData.playerLeaderBoardList.map(function(item) {
                            if (item.rank && item.rank === 1) {
                                item.prize = 'gold';
                            } else if (item.rank && item.rank === 2) {
                                item.prize = 'silver';
                            } else if (item.rank && item.rank === 3) {
                                item.prize = 'bronze';
                            } else {
                                item.prize = 'medal';
                            }
                        });
                    }


                $('#leaderboardDetails').html(leaderboardDetailsTemplate(leaderboardDetailsData));

                document.querySelectorAll('.photo img').forEach(function(img) {
                    img.onerror = function(){
                        this.parentElement.classList.add('icon');
                    };
                 })

                 _this.totalScroll = document.body.scrollHeight;
                 clearInterval(scrollInterval);

                 if (autoScrollFlag) {
                    _this.autoScroll();
                 }

                 $('#autoScrollCheck').off().on('change', function() {
                    autoScrollFlag = !autoScrollFlag;

                    clearInterval(scrollInterval);
                    
                    if (autoScrollFlag) {
                        _this.scrollVal = window.pageYOffset;
                        _this.autoScroll();
                    }
                 });

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
