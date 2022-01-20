var localDevelopment = false,
    sessionKey = 'agLoginAuth';

var createTeams = {
    init: function () {
        if (!this.getAuthSession(sessionKey) && !localDevelopment) {
            window.sessionStorage.setItem('agReDirectPage', './create-teams.html');
            window.location.href = "./login.html";

            return;
        } else {
            this.setAuthSession(sessionKey, this.getAuthSession(sessionKey));

            var tournamentDetails = this.getAuthSession('tournamentDetails') || {},
                tournamentId = tournamentDetails.tournamentId;

            if (!tournamentId) {
                window.location.href = "./active-tournaments.html";
            }
        }

        $('#get-teams').on('click', function(event) {
            event.preventDefault();

            var originalArray = [],
                regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv)$/,
                mergedArray,
                arrayHashmap,
                reader,
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
                            teams:Object.values(arrayHashmap)
                        };

                        var listTeamsTemplate = Handlebars.compile($("[data-template='listTeamsTemplate']").html());
                        $('.list-teams').html(listTeamsTemplate(mergedArray));

                        $('html, body').animate({
                            scrollTop: $('.list-teams').offset().top - 10
                        }, 'slow');

                        $('.create-team').off().on('click', function(e) {
                            var buttonEle = $(e.target),
                                duplicateError= {},
                                _team = buttonEle.parents('.teams-item'),
                                id = _team.attr('id'),
                                allTeamPlayersPhoneDuplicate = [],
                                allTeamPlayersPhoneSorted,
                                allTeamPlayersName = _team.find('.name').map(function () {
                                    return $(this).text();
                                }).get(),
                                allTeamPlayersPhone = _team.find('.phone').map(function () {
                                    return $(this).text();
                                }).get();

                            allTeamPlayersPhoneSorted = allTeamPlayersPhone.sort();

                            allTeamPlayersPhone = _team.find('.phone').map(function () {
                                return $(this).text();
                            }).get();

                            for (var i = 0; i < allTeamPlayersPhoneSorted.length - 1; i++) {
                                if (allTeamPlayersPhoneSorted[i + 1] == allTeamPlayersPhoneSorted[i]) {
                                    allTeamPlayersPhoneDuplicate.push(allTeamPlayersPhoneSorted[i]);
                                }
                            }

                            allTeamPlayersPhoneDuplicate.map(function(phone) {
                                $('.'+phone).addClass('error');
                            });

                            mergedArray.teams.map(function(team) {
                                if (id != team.id) {
                                    team.players.map(function(player){
                                        if (allTeamPlayersPhone.includes(player.phone)) {
                                            duplicateError.id = team.id;
                                            duplicateError.phone =  player.phone;
                                        }
                                    });
                                }
                            });

                            if (duplicateError.id || allTeamPlayersPhoneDuplicate.length) {
                                _team.addClass('error');
                                buttonEle.addClass('error');
                                buttonEle.blur();
                                buttonEle.html('Duplicate Phone number');

                                if (duplicateError.id) {
                                    $('#'+duplicateError.id).addClass('error');
                                    $('#'+duplicateError.id).find('.create-team').addClass('error');
                                    $('#'+duplicateError.id).find('.create-team').html('Duplicate Phone number');
                                    $('.'+duplicateError.phone).addClass('error');
                                }

                                allTeamPlayersPhone.map(function(phone) {
                                    if (!_this.isValidPhoneField(phone)) {
                                        $('.'+phone).addClass('error');
                                        $('.'+phone).after('<span class="invalid">Invalid Phone number</span>');
                                    }
                                });
                            } else {
                                var isValid = true;
                                allTeamPlayersPhone.map(function(phone) {
                                    if (!_this.isValidPhoneField(phone)) {
                                        $('.'+phone).addClass('error');
                                        $('.'+phone).after('<span class="invalid">Invalid Phone number</span>');
                                        isValid = false;
                                    }
                                });

                                if (isValid) {
                                    var data = {};
                                    data.teamName = _team.find('h3').text();
                                    data.members = [];

                                    console.log(allTeamPlayersName);
                                    console.log(allTeamPlayersPhone);

                                    for(var j = 0; j < allTeamPlayersName.length; j++) {
                                        data.members.push({
                                            name: allTeamPlayersName[j],
                                            tele: allTeamPlayersPhone[j],
                                            isLead: $('.' + allTeamPlayersPhone[j]).hasClass('lead') ? 1 : 0
                                        });
                                    }

                                    _this.createTeamApi(buttonEle, data);
                                } else {
                                    _team.addClass('error');
                                    buttonEle.addClass('error');
                                    buttonEle.blur();
                                    buttonEle.html('Invalid Phone number');
                                }
                            }
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

        console.log(data);

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
                buttonEle.parents('.button-wrapper').removeClass('loading');
                buttonEle.html('Team Created');
                buttonEle.blur();
                buttonEle.addClass('success');
                _team.addClass('success');

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

createTeams.init();
