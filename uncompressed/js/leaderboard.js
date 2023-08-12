var localDevelopment = false,
    friendlyName,
    _this,
    scrollInterval,
    scrollIntervalCheck,
    scrollStart = false,
    autoScrollFlag;

var actiongolfLB = {
    init: function () {
        _this = this;
        _this.scrollVal = 0;
        
        friendlyName = this.getParameterByName('friendlyName');
        autoScrollFlag = this.getParameterByName('autoscroll') !== 'false' && window.innerWidth >= 1024;

        _this.leaderBoardCall();
    },

    autoScroll: function() {
        scrollInterval = setInterval(function () {
            _this.scrollVal = _this.scrollVal + window.innerHeight/2;
            $("html, body").animate({ scrollTop: _this.scrollVal }, 10000);
        }, 15000);

        scrollIntervalCheck = setInterval(function () {
            if (document.getElementById('scrollCheck').getBoundingClientRect().top == window.innerHeight) {
                _this.scrollVal = 0;
                clearInterval(scrollInterval);
                clearInterval(scrollIntervalCheck);
                $("html, body").animate({ scrollTop: _this.scrollVal }, 5000);
                _this.leaderBoardCall(true);
            }
        }, 1000);
    },

    getParameterByName: function(name, url = window.location.href) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    },

    leaderBoardCall: function(reload) {
        var ajaxUrl = _this.getApiUrl('leaderBoard');
        $('.page-header').addClass('loading');

        $.ajax({
            type: "GET",
            url: ajaxUrl,
            contentType: "application/json",
            dataType: "json",
            timeout: 0,
            success: function(xhr, status) {
                $('#leaderboardDetails').html('');

                var leaderboardDetailsTemplate = Handlebars.compile($("[data-template='leaderboardDetailsTemplate']").html()),
                    leaderboardAdDetailsTemplate  = Handlebars.compile($("[data-template='leaderboardAdDetailsTemplate']").html()),
                    leaderboardListDetailsTemplate  = Handlebars.compile($("[data-template='leaderboardListDetailsTemplate']").html()),
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

                        if (!item.rank || item.rank === 9999) {
                            item.rank = 'NA';
                        }

                        if (!item.totalScore || item.totalScore === 9999) {
                            item.totalScore = 'NA';
                        }
                    });
                }

                $('#leaderboardDetails').html(leaderboardDetailsTemplate(leaderboardDetailsData));

                if (window.innerWidth >= 1024 ) {
                    if (!reload) {
                        const sponsorListCount = (leaderboardDetailsData.sponsorList && leaderboardDetailsData.sponsorList.length) || 0;
    
                        if (sponsorListCount) {
                            $('#leaderboardAdDetails').html(leaderboardAdDetailsTemplate(leaderboardDetailsData));
                        }
                    }
    
                    if (leaderboardDetailsData && leaderboardDetailsData.playerLeaderBoardList && leaderboardDetailsData.playerLeaderBoardList.length) {
                        $('#leaderboardListDetails').html(leaderboardListDetailsTemplate(leaderboardDetailsData));
                    }
                }


                document.querySelectorAll('.photo img').forEach(function(img) {
                    img.onerror = function(){
                        this.parentElement.classList.add('icon');
                    };
                 })

                 if (leaderboardDetailsData && leaderboardDetailsData.playerLeaderBoardList && leaderboardDetailsData.playerLeaderBoardList.length && document.body.scrollHeight > window.innerHeight && autoScrollFlag) {
                    _this.totalScroll = document.body.scrollHeight;
                    clearInterval(scrollInterval);
   
                    if (autoScrollFlag) {
                       _this.autoScroll();
                    }
                 }

            }.bind(this),
            error:  function(xhr, status, error) {
                var leaderboardDetailsTemplate = Handlebars.compile($("[data-template='leaderboardDetailsTemplate']").html()),
                    leaderboardDetailsData = {
                        error: true
                    };

                if (xhr && xhr.responseJSON && xhr.responseJSON.message) {
                    leaderboardDetailsData.message = xhr.responseJSON.message
                } else {
                    leaderboardDetailsData.message = 'Something went wrong. We are working on getting this fixed as soon as we can. Please try later.';
                }
                $('#leaderboardDetails').html(leaderboardDetailsTemplate(leaderboardDetailsData));
                $("html, body").animate({ scrollTop: $('.screen-message.error-message').offset().top - 50 });
            }.bind(this)
        });
    },

    getApiUrl: function(source) {
        var apiUrls = {
                test : {
                    leaderBoard: `https://beta.actiongolfers.com/website/tournament/leaderboard?friendlyName=${friendlyName}`
                },
                prod : {
                    leaderBoard: `https://api.actiongolfers.com/website/tournament/leaderboard?friendlyName=${friendlyName}`
                },
            },
            domain = window.origin === 'https://actiongolfers.com' ? 'prod' : (localDevelopment ? 'local' : 'test');

        return apiUrls[domain][source];
    }
};

actiongolfLB.init();
