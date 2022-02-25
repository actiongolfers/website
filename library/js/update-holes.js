var localDevelopment = false,
    sessionKey = 'agLoginAuth',
    mergedArray;

var updateHoles = {
    init: function () {
        var tournamentDetails,
            tournamentId,
            tournamentDesc,
            teamSize;

        return false;

        if (!this.getAuthSession(sessionKey) && !localDevelopment) {
            window.sessionStorage.setItem('agReDirectPage', './create-teams.html');
            window.location.href = "./login.html";

            return;
        } else {
            this.setAuthSession(sessionKey, this.getAuthSession(sessionKey));

            tournamentDetails = this.getAuthSession('tournamentDetails') || {};
            tournamentId = tournamentDetails.tournamentId;
            teamSize = tournamentDetails.teamSize;
            tournamentDesc = tournamentDetails.tournamentDesc;

            if (!tournamentId || !teamSize) {
                window.location.href = "./active-tournaments.html";
            }
        }

        $('#get-teams').on('click', function(event) {
            event.preventDefault();

            var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv)$/,
                arrayHashmap,
                reader,
                originalArray = [],
                _this = this;

            //Checks whether the file is a valid csv file
            if (regex.test($("#csvfile").val().toLowerCase())) {
                //Checks whether the browser supports HTML5
                if (typeof(FileReader) != "undefined") {
                    $('.form-field').removeClass('error');

                    reader = new FileReader();

                    reader.readAsText($("#csvfile")[0].files[0]);

                    reader.onload = function(e) {
                        //Splitting of Rows in the csv file
                        var csvrows = e.target.result.split("\n");

                        for (var i = 1; i < csvrows.length; i++) {
                            if (csvrows[i] != "") {
                                var csvcols = csvrows[i].split(",");
                                originalArray.push({
                                    teamName: csvcols[0].replaceAll('"', ''),
                                    id: 'teamId' + i,
                                    players: [{
                                        phone: csvcols[1],
                                        name: csvcols[2].replaceAll('"', ''),
                                        isLead: csvcols[3] === '1'
                                    }]
                                });
                            }
                        }

                        arrayHashmap = originalArray.reduce((obj, item) => {
                            obj[item.teamName] ? obj[item.teamName].players.push(...item.players) : (obj[item.teamName] = { ...item });
                            return obj;
                        }, {});

                        mergedArray = {
                            tournamentDetails: {
                                tournamentId: tournamentId,
                                tournamentDesc: tournamentDesc
                            },
                            teams:Object.values(arrayHashmap)
                        };

                        mergedArray.teams.map(function(team) {
                            team.teamSize = teamSize;
                            team.teamSizeError = team.players && team.players.length !== teamSize;
                            team.players.map(function(player) {
                                team.duplicateError = team.duplicateError ? true : _this.isDuplicatePhone(player.phone, team.id);
                                team.invalidError = team.invalidError ? true : !_this.isValidPhoneField(player.phone);
                                player.duplicateError = player.duplicateError ? true : _this.isDuplicatePhone(player.phone, team.id);
                                player.invalidError = player.invalidError ? true : !_this.isValidPhoneField(player.phone);
                            });
                        });

                        var listTeamsTemplate = Handlebars.compile($("[data-template='listTeamsTemplate']").html());
                        $('.list-teams-wrapper').html(listTeamsTemplate(mergedArray));

                        $('html, body').animate({
                            scrollTop: $('.list-teams-wrapper').offset().top - 10
                        }, 'slow');

                        $('.create-team').off().on('click', function(e) {
                            var buttonEle = $(e.target),
                                _team = buttonEle.parents('.teams-item'),
                                allTeamPlayersName = _team.find('.name').map(function () {
                                    return $(this).text();
                                }).get(),
                                allTeamPlayersPhone = _team.find('.phone').map(function () {
                                    return $(this).text();
                                }).get(),
                                data = {};


                            allTeamPlayersPhone = _team.find('.phone').map(function () {
                                return $(this).text();
                            }).get();

                            data.teamName = _team.find('h3').text();
                            data.members = [];

                            for(var j = 0; j < allTeamPlayersName.length; j++) {
                                data.members.push({
                                    name: allTeamPlayersName[j],
                                    tele: allTeamPlayersPhone[j],
                                    isLead: $('.' + allTeamPlayersPhone[j]).hasClass('lead') ? 1 : 0
                                });
                            }

                            _this.createTeamApi(buttonEle, data);
                        });

                        $('.create-all-teams').off().on('click', function(e) {
                            $('.primary-btn.create-team').each(function(){
                                $(this).trigger('click');
                            });
                        });
                    };
                } else {
                    $('.form-field').addClass('error');
                    $('.form-field').find('.error-message').html('Sorry! Your browser does not support HTML5!');
                }
            } else {
                $('.form-field').addClass('error');
            }
        }.bind(this));
    },

    isValidPhoneField: function(value) {
        var pattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i;

        return pattern.test(value);
    },

    isDuplicatePhone: function(phone, id) {
        var _duplicateError = false;

        mergedArray.teams.map(function(team) {
            if (id != team.id) {
                team.players.map(function(player){
                    if (phone == player.phone) {
                        _duplicateError = true;
                        return;
                    }
                });
            }
        });

        if (!_duplicateError) {
            var c;
            mergedArray.teams.map(function(team) {
                if (id == team.id) {
                    c = 0;
                    team.players.map(function(player){
                        if (phone == player.phone) {
                            c++;
                        }
                    });
                }
            });

            _duplicateError = (c === 2);
        }

        return _duplicateError;
    },

    createTeamApi: function(buttonEle, data) {
        var ajaxUrl= this.getApiUrl('createTeam'),
            requestData = {},
            tournamentDetails = this.getAuthSession('tournamentDetails') || {},
            userProfileId = this.getAuthSession(sessionKey) && this.getAuthSession(sessionKey).userProfileId,
            tournamentId = tournamentDetails.tournamentId,
            _team = buttonEle.parents('.teams-item');

        if (!userProfileId) {
            window.location.href = "./login.html";
        } else if (!tournamentId) {
            window.location.href = "./active-tournaments.html";
        }

        buttonEle.parents('.button-wrapper').addClass('loading');

        requestData.mediaId = 0;
        requestData.userProfileId = userProfileId;
        requestData.tournamentId = tournamentId;
        requestData.teamName = data.teamName;
        requestData.members = data.members;

        $.ajax({
            type: "POST",
            url: ajaxUrl,
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(requestData),
            timeout: 0,
            success: function(xhr, status) {
                buttonEle.blur();
                buttonEle.parents('.button-wrapper').removeClass('loading');

                if (xhr && xhr.IsSuccess) {
                    buttonEle.removeClass('error').removeClass('retry');
                    buttonEle.html('Team Created');
                    buttonEle.addClass('success');
                    _team.removeClass('error').addClass('success');
                } else if (xhr && xhr.errorCode === 1062) {
                    _team.addClass('error');
                    buttonEle.addClass('error');
                    buttonEle.html(xhr.errorMsg);
                }  else if (xhr && xhr.errorCode === 1644) {
                    _team.addClass('error');
                    buttonEle.addClass('error');
                    buttonEle.html(xhr.errorMsg);
                } else if (xhr && xhr.errorCode === 1213) {
                    _team.addClass('error');
                    buttonEle.addClass('error').addClass('retry');
                    buttonEle.html('Please Retry');

                    var retryCount = buttonEle.data('retry');

                    if (!retryCount || (retryCount && parseInt(retryCount) < 4)) {
                        buttonEle.data('retry', !retryCount ? 0 : retryCount + 1);
                        buttonEle.trigger('click');
                    }

                } else {
                    _team.addClass('error');
                    buttonEle.addClass('error');
                    buttonEle.html('Error Creating Team');
                }

            }.bind(this),
            error:  function(xhr, status, error) {
                buttonEle.parents('.button-wrapper').removeClass('loading');
                _team.addClass('error');
                buttonEle.addClass('error');
                buttonEle.blur();
                buttonEle.html('Error Creating Team');
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

    getApiUrl: function(source) {
        var apiUrls = {
                test : {
                    createTeam: 'https://beta.actiongolfers.com/tournament/createTeam',
                },
                prod : {
                    createTeam: 'https://api.actiongolfers.com/tournament/createTeam',
                },
                local : {
                    createTeam: ''
                }
            },
            domain = window.origin === 'https://actiongolfers.com' ? 'prod' : (localDevelopment ? 'local' : 'test');

        return apiUrls[domain][source];
    },


};

updateHoles.init();
