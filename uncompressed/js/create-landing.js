var localDevelopment = false,
    tournamentDetails,
    tournamentId,
    userProfileId,
    uploadImages = [],
    sessionStartDate,
    sessionEndDate;

var actiongolfCL = {
    init: function () {
        var sessionKey = 'agLoginAuth';

        //localDevelopment = window.origin === 'http://localhost:8080';

         if (!this.getAuthSession(sessionKey) && !localDevelopment) {
             if (window.origin === 'https://pramith.com') {
                 window.location.href = window.origin + "/actiongolf/login.html";
             } else {
                 window.location.href = window.origin + "/login.html";
             }

             return;
         } else {
            this.setAuthSession(sessionKey, this.getAuthSession(sessionKey));

            tournamentDetails = this.getAuthSession('tournamentDetails') || {};
            userProfileId = this.getAuthSession(sessionKey).userProfileId;
            tournamentId = tournamentDetails.tournamentId;
            sessionStartDate = tournamentDetails.startDate;
            sessionEndDate = tournamentDetails.endDate;

            if (!tournamentDetails || !tournamentDetails.tournamentId) {
                if (window.origin === 'https://pramith.com') {
                    window.location.href = window.origin + "/actiongolf/active-tournaments.html";
                } else {
                    window.location.href = window.origin + "/active-tournaments.html";
                }

                return;
            }

            this.setAuthSession('tournamentDetails', tournamentDetails);

            if (!tournamentDetails.friendlyName) {
                this.updateData();

                return;
            }

            var ajaxUrl= this.getApiUrl('tournaments') + (localDevelopment ? '' : tournamentDetails.friendlyName);

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
                        $('#previous-data-load-error').removeClass('hide');
                    }
                }.bind(this),
                error:  function(xhr, status, error) {
                    $('.loading').hide();
                    this.updateData();
                    $('#previous-data-load-error').removeClass('hide');
                }.bind(this)
            });
       }
    },

    updateData: function(data) {
        var webPageBlobCfg = {},
            webPageBlob,
            details,
            logoImages = [];

        webPageBlobCfg.toolbar = "mytoolbar";
        webPageBlobCfg.toolbar_mytoolbar = "{bold,italic,underline,insertorderedlist,insertunorderedlist,justifyleft,justifycenter,justifyright,insertlink,code,undo,redo}";

        webPageBlob = new RichTextEditor("#div_webPageBlob", webPageBlobCfg);

        if (!data && tournamentDetails && tournamentId && sessionStartDate && sessionEndDate) {
            var data = {
                tournamentInfo: {
                    tournamentId: tournamentId,
                    startDate: sessionStartDate,
                    endDate: sessionEndDate,
                    webPageTitle: '',
                    webPageBlob: ''
                }
            };
        } else if (!data) {
            if (window.origin === 'https://pramith.com') {
                window.location.href = window.origin + "/actiongolf/active-tournaments.html";
            } else {
                window.location.href = window.origin + "/active-tournaments.html";
            }
        }

        if (data && data.tournamentInfo) {
            var friendlyNameSplit= data.tournamentInfo.friendlyName ? data.tournamentInfo.friendlyName.split('_') : '',
                friendlyNameFormated = '';

            if (friendlyNameSplit) {
                friendlyNameSplit.forEach(function(a,i){
                    if (i < friendlyNameSplit.length-1) {
                        friendlyNameFormated = friendlyNameFormated + (friendlyNameFormated ? '_' : '') + a;
                    }
                });
            }

            if (data.tournamentInfo.friendlyName) {
                $('.page-header').html('Edit Landing page - ' + friendlyNameFormated);

                $('.tournament-details-head').html(
                    'Tournament Id - '+ data.tournamentInfo.tournamentId + ', ' + this.dateConversion(data.tournamentInfo.startDate, true) + ' - ' + this.dateConversion(data.tournamentInfo.endDate, true)
                );
            }

            $('[name=webPageTitle]').val(data.tournamentInfo.webPageTitle);
            $('[name=friendlyName]').val(friendlyNameFormated);

            if (data.tournamentInfo.webPageBlob) {
                webPageBlob.setHTMLCode(decodeURIComponent(data.tournamentInfo.webPageBlob));
            }

            if (data.tournamentImages && data.tournamentImages.length) {
                data.tournamentImages.forEach(function(img){
                    logoImages.push({
                        image: img
                    });
                });
            }
        }

        $('#preview-btn').on('click', function() {
            var webPageBlobContent = webPageBlob.getHTMLCode(),
                landingTemplate = Handlebars.compile($("[data-template='landingTemplate']").html());

            details = {
                logoImages: logoImages,
                webPageTitle : '',
                startDate: data && this.dateConversion(data.tournamentInfo.startDate),
                endDate: data && this.dateConversion(data.tournamentInfo.endDate),
                golfCourseName : data && data.tournamentInfo.golfCourseName,
                learnMore: 'Learn More',
            };

            details.webPageBlob = webPageBlobContent;
            details.friendlyName = $('[name=friendlyName]').val();
            details.webPageBlobValue = encodeURIComponent(webPageBlobContent);
            details.webPageTitleValue = $('[name=webPageTitle]').val();
            details.webPageTitle = $('[name=webPageTitle]').val();
            details.webPageTitle = details.webPageTitle.replace('[[STARTDATE]]', details.startDate);
            details.webPageTitle = details.webPageTitle.replace('[[ENDDATE]]', details.endDate);
            details.webPageTitle = details.webPageTitle.replace('[[STARTDATEYEAR]]', data && this.dateConversion(data.tournamentInfo.startDate, true));
            details.webPageTitle = details.webPageTitle.replace('[[ENDDATEYEAR]]', data && this.dateConversion(data.tournamentInfo.endDate, true));
            details.webPageBlob = details.webPageBlob.replace('[[STARTDATE]]', details.startDate);
            details.webPageBlob = details.webPageBlob.replace('[[ENDDATE]]', details.endDate);
            details.webPageBlob = details.webPageBlob.replace('[[STARTDATEYEAR]]', data && this.dateConversion(data.tournamentInfo.startDate, true));
            details.webPageBlob = details.webPageBlob.replace('[[ENDDATEYEAR]]', data && this.dateConversion(data.tournamentInfo.endDate, true));

            setTimeout(function(){
                $('.landing-content').html(landingTemplate(details));
            }, 500);

            $('#create-landing-preview').show();

            $('.logo-images').html('');

            logoImages.forEach(element => {
                $('.logo-images').append(
                    '<img class="logoimages" src='+ element.image +' />'
                );
            });

            $('#publish-btn').removeClass('hide');
            $('#publish-error').addClass('hide');
            $('#publish-success').addClass('hide');

            $('html, body').animate({
                scrollTop: $('#create-landing-preview').offset().top - 30
            }, 'slow');

        }.bind(this));

        $('#publish-btn').on('click', function() {
            var ajaxUrl= this.getApiUrl('create');

            var requestData = {
                userProfileId: userProfileId,
                tournamentId: tournamentId,
                friendlyName: details.friendlyName + '_' + (data ? this.dateConversion(data.tournamentInfo.startDate, true, true) : ''),
                title: details.webPageTitleValue,
                webpageBlob: details.webPageBlobValue
            };

            if (uploadImages && uploadImages.length) {
                requestData.images = {
                    images: uploadImages
                };
            }

            $('.button-wrapper').addClass('loading');

            $.ajax({
                type: "POST",
                url: ajaxUrl,
                contentType: "application/json",
                dataType: "json",
                timeout: 0,
                data: JSON.stringify(requestData),
                success: function(xhr, status) {
                    tournamentDetails.friendlyName = requestData.friendlyName;
                    this.setAuthSession('tournamentDetails', tournamentDetails);
                    $('.button-wrapper').removeClass('loading');
                    $('#publish-success').html(
                        'Your page published successfully, please validate - <a target="_blank" href="/landing.html#' + requestData.friendlyName +'">' + requestData.friendlyName + '</a>'
                    );

                    $('#publish-error').addClass('hide');
                    $('#publish-success').removeClass('hide');
                    $('#publish-btn').addClass('hide');
                }.bind(this),
                error:  function(xhr, status, error) {
                    $('.button-wrapper').removeClass('loading');
                    $('#publish-error').removeClass('hide');
                    $('#publish-success').addClass('hide');
                    $('#publish-btn').addClass('hide');
                }.bind(this)
            });
        }.bind(this));

        $('[name=logo_image1]').on('change', function(event) {
            var _this = $('[name=logo_image1]');
            showMyImage(_this, $(_this).data('index'), this);
        }.bind(this));

        $('[name=logo_image2]').on('change', function(event) {
            var _this = $('[name=logo_image2]');
            showMyImage(_this, $(_this).data('index'), this);
        }.bind(this));

        $('[name=logo_image3]').on('change', function(event) {
            var _this = $('[name=logo_image3]');
            showMyImage(_this, $(_this).data('index'), this);
        }.bind(this));

        function showMyImage(fileInput, index, _this) {
            var ajaxUrl= _this.getApiUrl('upload'),
                formData = new FormData();

            formData.append("imageFile", $(fileInput)[0].files[0]);
            formData.append("userProfileId", userProfileId);
            formData.append("mediaFolder", "Tournament");
            formData.append("mediaFolderId", 123);
            formData.append("mediaSubFolder", 'Logo');
            formData.append("mediaSubFolderId", 456);

           $.ajax({
                type: "POST",
                url: ajaxUrl,
                timeout: 0,
                enctype: 'multipart/form-data',
                processData: false,
                contentType: false,
                cache: false,
                data: formData,
                success: function(xhr, status) {
                    if (xhr) {
                        var imgObj = {
                            "mediaRole": "logo",
                            "mediaFriendlyName": "logo" + xhr.mediaId,
                            "mediaId": xhr.mediaId
                        };

                        uploadImages.push(imgObj);
                    }
                }.bind(this),
                error:  function(xhr, status, error) {
                    console.log('failed');
                }.bind(this)
           });


            var files = $(fileInput)[0].files;

            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                var imageType = /image.*/;
                if (!file.type.match(imageType)) {
                    continue;
                }
                var img=document.getElementById("thumbnil");
                img.file = file;
                var reader = new FileReader();
                reader.onload = (function(aImg) {
                    return function(e) {
                        aImg.src = e.target.result;
                        logoImages[index] = {image:''};
                        logoImages[index].image = e.target.result;
                    };
                })(img);
                reader.readAsDataURL(file);
            }
        }
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
                    tournaments: 'https://beta.actiongolfers.com/website/tournament?friendlyName=',
                    create: 'https://beta.actiongolfers.com/website/tournament/create',
                    upload: 'https://beta.actiongolfers.com/media/upload'
                },
                prod : {
                    tournaments: 'https://api.actiongolfers.com/website/tournament?friendlyName=',
                    create: 'https://api.actiongolfers.com/website/tournament/create',
                    upload: 'https://api.actiongolfers.com/media/upload'
                },
                local : {
                    tournaments: 'http://localhost:8080/json/tournamentDetails.json',
                    create: 'create',
                    upload: 'upload'
                }
            },
            domain = window.origin === 'https://actiongolfers.com' ? 'prod' : (localDevelopment ? 'local' : 'test');

        return apiUrls[domain][source];
    },

    dateConversion: function(value, withYear, nospace) {
        var date = new Date(value),
            months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            formatedDate;

        formatedDate = months[date.getMonth()] + ' ' + this.formatWithZero(date.getDate()) + (withYear ? (', ' + date.getFullYear()) : '');

        if (nospace) {
            formatedDate = formatedDate.replace(' ', '');
            formatedDate = formatedDate.replace(', ', '');
        }

        return formatedDate;
    },

    formatWithZero: function(value) {
        return (value < 9) ? ('0' + value) : value;
    }
};

actiongolfCL.init();
