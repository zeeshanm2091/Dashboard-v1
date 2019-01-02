var API_Path = "../../route/";
var str = document.referrer;
var companyCode = str.substring(
    str.lastIndexOf(".com/") + 5
);
companyCode = companyCode.replace("/", "");
if (companyCode.indexOf('ErrorPage.aspx') >= 1) {
    alert('Please enter valid custom URL,\n' + document.location.origin + '/companycode');
    window.location = '' + document.location.origin + '/companycode';
}
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d = new Date();
$('#lblPayslip').text('Download payslip for the month of ' + monthNames[d.getMonth()] + '');
$(document).ready(function () {
    //****************************************************************************head menu code*******************************************************************//
    $('.menu-tab .menu-icon').click(function () {
        $(this).parent().find('.menu-main-content').animate({
            left: "0%"
        }, 300)
        $('.setting-menu').animate({
            left: "0px"
        }, 300);
        $('.main-content').animate({
            left: "0px"
        }, 300)
    })
    $('.close-btn').click(function () {
        if ($(window).width() < 767) {
            $(this).parent().animate({
                left: "-100%"
            }, 300);
        } else {
            $(this).parent().animate({
                left: "-80%"
            }, 300);
        }
    });

    $('.login-page .close-btn').click(function () {
        $('.icon-setting').addClass('icon-next')
    });
    $('.setting-icon').click(function () {
        $('.setting-menu').animate({
            left: "0px"
        }, 300);
        $('.main-content').animate({
            left: "420px"
        }, 300);
        $('.menu-main-content').animate({
            left: "-50%"
        }, 300);
    })
    $('.icon-setting').click(function () {
        $('.dashboard-page .main-container').toggleClass('active');
    })
    $('.setting-menu .setting-head > .icon-wrong').click(function () {
        $('.setting-menu').animate({
            left: "-600px"
        }, 300)
        $('.main-content').animate({
            left: "0px"
        }, 300)
    })
    $('.setting-menu .setting-head > .icon-wrong').click(function () {
        $('.dashboard-page .main-container').toggleClass('active');
        $('.left-list,.right-list').sortable({
            disabled: true
        })
    })
    $('.accord-item-title').click(function () {
        $('.accord-item-title span.icon').toggleClass('icon-up');
        $(this).parent().siblings().find('.accord-item-title span.icon').removeClass('icon-up');
        $(this).parent().find('.accord-item-body').slideToggle();
        $(this).parent().siblings().find('.accord-item-body').slideUp();
    });
    $('.header-notification').click(function () {
        $('.noti-wrap').fadeIn();
    });
    //****************************************************************************attendance block******************************************************************//
    //****************************************************************************swiper code**********************************************************************//
    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
        autoHeight: true,
        pagination: {
            el: '.swiper-pagination',
        },
        simulateTouch: false,
    });
    var swiper = new Swiper('.empConnect .swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 6,
        spaceBetween: 20,
        loop: true,
        autoHeight: true,
        simulateTouch: false,
    });
    var swiper = new Swiper('.small-card .swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        autoHeight: true,
        simulateTouch: false,
    });
    var swiper = new Swiper('.moreLink-card .swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        autoHeight: true,
        simulateTouch: false,
    });
    if ($(window).width() < 767) {
        var swiper = new Swiper('.moreLink-card .swiper-container', {
            slidesPerView: 3,
            spaceBetween: 30,
            autoHeight: false,

        });
    }
    if ($(window).width() > 992 && $(window).width() < 1200) {
        var swiper = new Swiper('.small-card .swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            slidesPerView: 2,
            spaceBetween: 10,
            loop: true,
            autoHeight: true,
            simulateTouch: false,
        });
    } else if ($(window).width() < 992 && $(window).width() > 767) {
        var swiper = new Swiper('.small-card .swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            slidesPerView: 3,
            spaceBetween: 10,
            loop: true,
            autoHeight: true,
            simulateTouch: false,
        });
    }
    //****************************************************************************drag and drop code*************************************************************************//
    $('.icon-setting').click(function () {
        var classArr = $('.main-container').attr('class').split(' ');
        console.log(classArr);
        if ($.inArray(classArr, ['active']) == -1) {

            $('.active .left-list,.right-list').sortable({
                items: 'section',
                cancel: '.db-arrow,.newsCard-img-block,.delete-btn,.emp-filter-item,.card-head',
                forcePlaceholderSize: true,
                connectWith: '.left-list,.right-list',
                disabled: false
            })
            $('.divide-block').sortable({
                items: 'li',
                cancel: '.db-arrow,.newsCard-img-block,.delete-btn,.emp-filter-item,.card-head,div',
                forcePlaceholderSize: true,
            })
            $('.widget-list').sortable({
                items: 'section',
                cancel: '.db-arrow,.newsCard-img-block,.delete-btn,.emp-filter-item,.card-head',
                forcePlaceholderSize: true,
                connectWith: '.left-list,.right-list',
            });
            $('.__basic .option-list,.__basic2 .option-list,.menu-main-content .option-list').sortable({
                disabled: true
            })
            if ($(window).width() < 992) {
                $('.left-list,.right-list,.divide-block,.widget-list').sortable({
                    disabled: true
                })
            }
            $(function () {
                $('active .left-list,.right-list').sortable()
                  .on('sortable:receive', function (e, ui) {
                      var swiper = new Swiper('.swiper-container', {
                          navigation: {
                              nextEl: '.swiper-button-next',
                              prevEl: '.swiper-button-prev',
                          },
                          simulateTouch: false,
                      });
                      var swiper = new Swiper('.small-card .swiper-container', {
                          navigation: {
                              nextEl: '.swiper-button-next',
                              prevEl: '.swiper-button-prev',
                          },
                          slidesPerView: 3,
                          spaceBetween: 20,
                          simulateTouch: false,
                      });
                      var swiper = new Swiper('.moreLink-card .swiper-container', {
                          navigation: {
                              nextEl: '.swiper-button-next',
                              prevEl: '.swiper-button-prev',
                          },
                          slidesPerView: 4,
                          spaceBetween: 20,
                          simulateTouch: false,
                      });
                  })
            })
            $(function () {
                $('active .left-list,.right-list').sortable()
                  .on('sortable:activate', function (e, ui) {
                      $('section').css("z-index", "10");
                      $('.delete-btn').click(function () {
                          $(this).parent().remove();
                          if (jQuery.inArray($(this).parent().find('.main-markup > div').attr('class'), newArr) === -1) {
                              if ($(this).parent().attr('class') === "sec-50") {
                                  $('.widget-list').append('<section class="sec-50">' + $(this).parent().html() + '</section>');
                              } else {
                                  $('.widget-list').append('<section>' + $(this).parent().html() + '</section>');
                              }
                          }
                      });
                  })
            })
            $(function () {
                $('.option-list').sortable()
                  .on('sortable:activate', function (e, ui) {
                      $('li').css("z-index", "10")
                  })
            })
        } else {
            $('.delete-btn').hide()
        }
    })
    //****************************************************************************delete btn code*******************************************************************//
    $('.delete-btn').click(function () {
        $(this).parent().remove();
        if (jQuery.inArray($(this).parent().find('.main-markup > div').attr('class'), newArr) === -1) {
            if ($(this).parent().attr('class') === "sec-50") {
                $('.widget-list').append('<section class="sec-50">' + $(this).parent().html() + '</section>');
            } else {
                $('.widget-list').append('<section>' + $(this).parent().html() + '</section>');
            }
        }
    });
    var widLength = $('.widget-list > section').length;
    var newArr = [];
    for (var i = 1; i < widLength + 1; i++) {
        console.log(newArr.push($('.widget-list section:nth-child(' + i + ') .main-markup > div').attr('class')));
    }
    var mainListLeft = $('.left-list > section').length;
    var mainListRight = $('.right-list > section').length;
    var ListArr = [];
    for (var i = 1; i < mainListLeft + 1; i++) {
        console.log(ListArr.push($('.left-list section:nth-child(' + i + ') .main-markup > div').attr('class')));
    }
    for (var i = 1; i < mainListRight + 1; i++) {
        console.log(ListArr.push($('.right-list section:nth-child(' + i + ') .main-markup > div').attr('class')));
    }
    //*************************************************************************drop down code***************************************************************************************************************//
    $('.selected-item').click(function () {
        $(this).parent().find('.dropdown-list').slideToggle();
    })
    $('.single-select .dropdown-item').click(function () {
        var selTxt = $(this).html();
        $(this).parent().parent().find('.selected-item').html(selTxt);
        $(this).parent().slideUp();

    })

    var langArr = [];

    $('.multi-select .dropdown-item').click(function () {
        $(this).toggleClass('active');



        // if($(this).index() > 0)){
        //
        // }

        if ($(this).attr('class') === "dropdown-item active") {
            langArr.push($(this).text());
            $('.language-select .selected-item').text(langArr.toString());

        } else {
            langArr.splice(($.inArray($(this).text(), langArr)), 1);
            $('.language-select .selected-item').text(langArr.toString());
        }
    })
    var inputArr = [];
    $(document).mouseup(function (e) {
        var container = $(".openList");
        if (!container.is(e.target) && container.has(e.target).length === 0) { }
    });
    $('.login-inputs .accord-item-title').click(function () {
        for (var i = 0; i < langArr.length; i++) {
            if (langArr[i].toLowerCase() == "english") {
                if ($('.English').length < 1) {
                    $('.login-inputs .accord-item-body .addonInput').append('<div class="theme-list accord-body-list' + " " + langArr[i] + '"><div class="language-title">' + langArr[i] + '</div> <div class="bannerInput-group"><span class="banner-label">title</span> <input type="text" class="login-fields login-title" onkeyup="changeBannerText(this)" placeholder="title"></div><div class="bannerInput-group"><span class="banner-label">subtitle</span><input type="text" class="login-fields login-subtitle" onkeyup="changeBannerText(this)" placeholder="subtitle"></div><div class="bannerInput-group"><span class="banner-label">link text</span><input type="text" class="login-fields login-link-input" onkeyup="changeBannerText(this)"  placeholder="link text"></div><div class="bannerInput-group"><span class="banner-label">link url</span><input type="text" onblur="ValidURL(this.value)" onkeyup="changeBannerText(this)" class="login-fields login-link-url" placeholder="link url"></div><div class="db-error-mgs"> <span>*Please enter the required fields</span> </div><div class="db-btn input-submit sub-btn"> <span>Click to Preview</span> </div> </div>');
                }
            }
            else if (langArr[i].toLowerCase() == "arabic") {
                if ($('.Arabic').length < 1) {
                    $('.login-inputs .accord-item-body .addonInput').append('<div class="theme-list accord-body-list' + " " + langArr[i] + '"><div class="language-title">' + langArr[i] + '</div> <div class="bannerInput-group"><span class="banner-label">title</span><input type="text" class="login-fields login-title" id="loginTitleArabic" onkeyup="arabicValue(loginTitleArabic)" dir="rtl" placeholder="title"></div><div class="bannerInput-group"><span class="banner-label">subtitle</span><input type="text" class="login-fields login-subtitle" id="loginSubTitleArabic" onkeyup="arabicValue(loginSubTitleArabic)" dir="rtl" placeholder="subtitle"></div><div class="bannerInput-group"><span class="banner-label">link text</span><input type="text"  class="login-fields login-link-input" id="loginLinkTextArabic" onkeyup="arabicValue(loginLinkTextArabic)" dir="rtl" placeholder="link text"></div><div class="bannerInput-group"><span class="banner-label">link url</span><input type="text" class="login-fields login-link-url" id="loginLinkUrlArabic" onblur="ValidURL(this.value)" placeholder="link url"></div><div class="db-error-mgs"> <span>*Please enter the required fields</span> </div> <div class="db-btn save-arabic sub-btn" id="save-arabic"><span>Click to Preview</span> </div> </div>');
                }
            }
        }

    });
    $('.lan-list').click(function () {
        if ($('.language-select .selected-item').text().split(' ').join('').toLowerCase() == "arabic") {
            $('.addonInput').find('.English').remove();
        }
        else if ($('.language-select .selected-item').text().split(' ').join('').toLowerCase() == "english") {
            $('.addonInput').find('.Arabic').remove();
        }
    })
    //************************************************************************theme change code**************************************************************************************************************//
    $('.login-setup .theme-item').click(function () {
        var Childno = $(this).index();
        $('.dashboard-page').attr('class', 'main-content dashboard-page theme-v' + Childno+'');
        var clr = rgb2hex($('.titTxt-var .color-block .pickr-child').css('background-color'));
        //var primclr = rgb2hex($('.txt-var .color-block .pickr-child').css('background-color'));
        if (parseInt(Childno + 1) == 3) {
            //$('.login-footer a,.login-content-block > span').css("color", primclr);
            // $('.login-footer a,.login-content-block > span').css("color", "#ffffff");
            $('.login-head .right-block .imp-link a,.login-head .right-block .imp-link a .icon, .lang-sel .dropdown-block .selected-item,label').css("color", "#ffffff");
            $('.sel-down-arrow').css("border-top-color", "#fff");

        }
        else {
            $('.login-footer a,.login-content-block > span').css("color", clr);
        }
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })
    //***********************************************************************closing div code ***********************************************************************//
    $(document).mouseup(function (e) {
        var container = $(".dropdown-list");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.slideUp();
        }
    });
    $(document).mouseup(function (e) {
        var container = $(".noti-wrap");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.fadeOut();
        }
    });
    //tab code
    $('.tab-title-item').click(function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        var tabNo = $(this).index() + 1;
        $('.tab-content').siblings().fadeOut();
        $('.tab-content:nth-child(' + tabNo + ')').fadeIn();
    })
    //*****************************************login page*************************//
    $('.re-me').click(function () {
        $(this).find('.icon-ok').toggleClass('icon-ok-filled');
    });
    $('.pass-eye').click(function () {
        $(this).toggleClass('icon-visibility')

        if ($(this).parent().find('input').attr('type') === "password") {
            $(this).parent().find('input').attr("type", "text")
        } else {
            $(this).parent().find('input').attr("type", "password")
        }
    })
    //login page setting page
    $('.login-setting-icon').click(function () {
        $(this).parent().find('.setting-menu').animate({
            left: "0%"
        }, 300)
        $('.login-page').animate({
            left: "500px"
        }, 300)
    });
    var logChild = 1;
    $('.login-setup .theme-item').click(function () {
        logChild = $(this).index() + 1;
        $('.login-page').attr('class', 'main-content login-page screen-' + logChild);

        if (logChild === 2 | logChild === 3) {
            $('.login-page .login-inputs').slideUp();
        } else {
            $('.login-page .login-inputs').slideDown();
        }
    });
    //*******************************************************************************Apply button****************************************************************//
    $('.app-btn').click(function () {
        $('.confirm-popup').addClass('active');
        $('.confirm-btn .db-btn').click(function () {
            $('.confirm-popup').removeClass('active');
        })
    })
    $('.single-select .dropdown-item').click(function () {
      var selTxt = $(this).html();
        if (selTxt.toLowerCase() == "arabic") {
            $('.zingo-content .loginTitle').html($('#loginTitleArabic').val());
            $('.zingo-content .loginSubtitle').html($('#loginSubTitleArabic').val());
            $('.login-link').html($('#loginLinkTextArabic').val());
            $('.login-link').attr('href', $('#loginLinkUrlArabic').val());
        }
        else {
            $('.zingo-content .loginTitle').html($('.login-title').val());
            $('.zingo-content .loginSubtitle').html($('.login-subtitle').val());
            $('.login-link').html($('.login-link-input').val());
            $('.login-link').attr('href', $('.login-link-url').val());
        }
        $(this).parent().parent().find('.selected-item').html(selTxt);
        $(this).parent().slideUp();
    })
    $('.confirm-popup .confirm-btn .btn-yes').click(function () {
        SaveThemeSetup();
    })
    //*******************************************************************************Apply button****************************************************************//
    $('.overlay-setup .theme-item').click(function () {
        var logChild = $(this).index() + 1;
        $('.db-overlay').attr('class', 'db-overlay type-' + logChild)
    });
    var loginTitle = $('.zingo-content .loginTitle').html();
    var loginSubtitle = $('.zingo-content .loginSubtitle').html();
    var loginLinkTxt = $('.login-link').html();
    var loginLinkUrl = $('.login-link').attr('href');
    $(document).on('click', '.input-submit', function () {
        loginTitle = $('.login-title').val();
        loginSubtitle = $('.login-subtitle').val();
        loginLinkTxt = $('.login-link-input').val();
        loginLinkUrl = $('.login-link-url').val();
        if ((loginTitle.length) && (loginSubtitle.length) && (loginLinkTxt.length) && (loginLinkUrl.length) > 0) {
            $('.zingo-content .loginTitle').html(loginTitle)
            $('.zingo-content .loginSubtitle').html(loginSubtitle);
            $('.login-link').html(loginLinkTxt);
            $('.login-link').attr('href', "https://" + loginLinkUrl);
            $('.login-inputs input').css({
                "border": "0px solid"
            });
            $('.db-error-mgs').slideUp();

        } else {
            $('.db-error-mgs').slideDown();
            $('.login-inputs input').css({
                "border": "1px solid red"
            })
        }
    });
    $(document).on('click', '.save-arabic', function () {
        loginTitleA = $('#loginTitleArabic').val();
        loginSubtitleA = $('#loginSubTitleArabic').val();
        loginLinkTxtA = $('#loginLinkTextArabic').val();
        loginLinkUrlA = $('#loginLinkUrlArabic').val();
        if ((loginTitleA.length) && (loginSubtitleA.length) && (loginLinkTxtA.length) && (loginLinkUrlA.length) > 0) {
            $('.zingo-content .loginTitle').html(loginTitleA)
            $('.zingo-content .loginSubtitle').html(loginSubtitleA);
            $('.login-link').html(loginLinkTxtA);
            $('.login-link').attr('href', loginLinkUrlA);
            $('.login-inputs input').css({
                "border": "0px solid"
            });
            $('.db-error-mgs').slideUp();

        } else {
            $('.db-error-mgs').slideDown();
            $('.login-inputs input').css({
                "border": "1px solid red"
            })
        }
    });
    $('input#myFile1').change(function (e) {
        Loading('show');
        imgName = e.target.files[0].name;
        var imgNameExt1 = imgName.split('.').pop().toLowerCase();
        if ($.inArray(imgNameExt1, ['gif', 'png', 'jpg', 'jpeg', 'bmp']) == -1) {
            alert("Please select the valid file format");
            Loading('hide');
            return false;
        }
        var fsize = "";
        fsize = $('input#myFile1')[0].files[0].size;
        var fMB = Math.round((fsize / 1024));
        if (fMB > 500) {
            alert("File size should be less than 500 KB.");
            Loading('hide');
            return false;
        }
        //Upload Image File
        var file_data = $("#myFile1").prop("files")[0];
        var form_data = new FormData();
        form_data.append("file", file_data);
        var url = API_Path + "DashboardV1/LogoUpload";
        $.ajax({
            url: API_Path + "DashboardV1/LogoUpload",
            contentType: false,
            processData: false,
            data: form_data,    // Setting the data attribute of ajax with file_data
            type: 'post',
            success: function (response) {
                if (response.DO != null) {
                    $('.Profileimg-display-block img').attr("src", response.DO);
                    $('.login-page .main-logo img').attr('src', response.DO )
                    Loading('hide');
                    return false;
                }
                else {
                    alert("Unable to upload logo Image."); return false;
                }
            }
        });
    })
    var imgName;
    $('input#myFile').change(function (e) {
        Loading('show');
        imgName = e.target.files[0].name;
        var imgNameExt = imgName.split('.').pop().toLowerCase();
        if ($.inArray(imgNameExt, ['gif', 'png', 'jpg', 'jpeg', 'bmp']) == -1) {
            alert("Please select the valid file format"); Loading('hide'); return false;
        } else {
            $('.login-page').css("background-image", "url(../images/" + imgName + ")");
            $('.log-imgUplaod ').click(function () {
                $('.login-page').css("background-image", "url(../images/" + imgName + ")");
            })
        }
        var fsize = "";
        fsize = $('input#myFile')[0].files[0].size;
        var fMB = Math.round((fsize / 1024));
        if (fMB > 500) {
            alert("File size should be less than 500 KB.");
            Loading('hide');
            return false;
        }
        //Upload Image File
        var file_data = $("#myFile").prop("files")[0];
        var form_data = new FormData();
        form_data.append("file", file_data);
        var url = API_Path + "DashboardV1/FileUpload";
        $.ajax({
            url: API_Path + "DashboardV1/FileUpload",
            contentType: false,
            processData: false,
            data: form_data,    // Setting the data attribute of ajax with file_data
            type: 'post',
            success: function (response) {
                if (response.DO != null) {
                    $('.img-display-block img').attr("src", response.DO);
                    $('.login-page').css("background-image", "url(" + response.DO + ")");
                    Loading('hide');
                    return false;
                }
                else {
                    alert("Unable to upload Background Image."); return false;
                }
            }
        });
    });
    $('.setting-pull').click(function () {
        $(this).toggleClass("active");
        if ($(this).attr('class') === "setting-pull") {
            $('.setting-menu').animate({
                left: "0%"
            }, 300)
            $('.login-page').animate({
                left: "500px"
            }, 300)
            $(this).find('.icon').removeClass('icon-setting')
            $(this).find('.icon').addClass('icon-next')
        } else {
            $('.setting-menu').animate({
                left: "-500px"
            }, 300)
            $('.main-content').animate({
                left: "0px"
            }, 300)
            $(this).find('.icon').removeClass('icon-next');
            $(this).find('.icon').addClass('icon-setting')
        }
    });
    $('.pre-btn,.btn-yes,.history-btn > .flat-btn:first-child').click(function () {
        $('.setting-menu').animate({
            left: "-500px"
        }, 300)
        $('.main-content').animate({
            left: "0px"
        }, 300)
        $('.setting-menu .setting-pull').find('.icon').removeClass('icon-next');
        $('.setting-menu .setting-pull').find('.icon').addClass('icon-setting');
        $('.setting-menu .setting-pull').addClass('active');
    })
    var punchInVal = 1;
    var ccVal = 1;
    $('.punch-opt .db-toggle-btn').click(function () {
        if ($('.punch-opt .db-toggle-btn').attr('class').indexOf('disabled') >= 1) { return false; }
        $('.punch-opt .db-toggle-btn').toggleClass('active');
        $('.btn-group.punch').toggle(200);
        if ($(this).attr('class') === 'db-toggle-btn active') {
            punchInVal = 0
        }
    })
    $('.cc-opt .db-toggle-btn').click(function () {
        if ($('.cc-opt .db-toggle-btn').attr('class').indexOf('disabled') >= 1) { return false; }
        $('.cc-opt .db-toggle-btn').toggleClass('active');
        $('.input-group.com-code').toggle(200);
        if ($(this).attr('class') === 'db-toggle-btn active') {
            ccVal = 0
        }
    })
    //****************************************************************************datepicker***************************************************************************
    //***********************************************************************ctc tab *******************************************************//
    $('.ctc-tab .card-head-title span').click(function () {
        if ($(this).index() === 0) {
            $(this).addClass('active');
            $('.ctc-body').fadeIn();
            $('.nonctc-body').fadeOut();
            $(this).siblings().removeClass('active');
        } else {
            $(this).addClass('active')
            $(this).siblings().removeClass('active');
            $('.nonctc-body').fadeIn();
            $('.ctc-body').fadeOut();
        }
    });
    /*****new code for color picker******/
    $('.overlay-setup .color-block').ColorPicker({
        onShow: function (colpkr) {
            $(colpkr).fadeIn(500);
            var clr = rgb2hex($('.overlay-setup .color-block .pickr-child').css('background-color'));
            $('.colorpicker .colorpicker_new_color').eq(0).css('backgroundColor', clr);
            $('.colorpicker .colorpicker_hex input').val(clr)
            return false;
        },
        onHide: function (colpkr) {
            $(colpkr).fadeOut(500);
            return false;
        },
        onChange: function (hsb, hex, rgb) {
            $('.overlay-setup .color-block .pickr-child').css('backgroundColor', '#' + hex);
            $('.db-overlay').css('backgroundColor', '#' + hex);
        },
        color: rgb2hex($('.overlay-setup .color-block .pickr-child').css('background-color'))
    });
    $('.bc-var .color-block').ColorPicker({
        onShow: function (colpkr) {
            $(colpkr).fadeIn(500);
            var clr = rgb2hex($('.bc-var .color-block .pickr-child').css('background-color'));
            $('.colorpicker .colorpicker_new_color').css('backgroundColor', clr);
            $('.colorpicker .colorpicker_hex input').val(clr)
            return false;
        },
        onHide: function (colpkr) {
            $(colpkr).fadeOut(500);
            return false;
        },
        onChange: function (hsb, hex, rgb) {
            $('.bc-var .color-block .pickr-child').css('backgroundColor', '#' + hex);
            $('body').css("backgroundColor", '#' + hex);
        },
        color: rgb2hex($('.bc-var .color-block .pickr-child').css('background-color'))
    });
    $('.hdBc-var .color-block').ColorPicker({
        onShow: function (colpkr) {
            $(colpkr).fadeIn(500);
            var clr = rgb2hex($('.hdBc-var .color-block .pickr-child').css('background-color'));
            $('.colorpicker .colorpicker_new_color').css('backgroundColor', clr);
            $('.colorpicker .colorpicker_hex input').val(clr)
            return false;
        },
        onHide: function (colpkr) {
            $(colpkr).fadeOut(500);
            return false;
        },
        onChange: function (hsb, hex, rgb) {
            $('.hdBc-var .color-block .pickr-child').css('backgroundColor', '#' + hex);
            $('.db-head').css("backgroundColor", '#' + hex);
        },
        color: rgb2hex($('.hdBc-var .color-block .pickr-child').css('background-color'))
    });
    $('.hdTxt-var .color-block').ColorPicker({
        onShow: function (colpkr) {
            $(colpkr).fadeIn(500);
            var clr = rgb2hex($('.hdTxt-var .color-block .pickr-child').css('background-color'));
            $('.colorpicker .colorpicker_new_color').css('backgroundColor', clr);
            $('.colorpicker .colorpicker_hex input').val(clr)
            return false;
        },
        onHide: function (colpkr) {
            $(colpkr).fadeOut(500);
            return false;
        },
        onChange: function (hsb, hex, rgb) {
            $('.hdTxt-var .color-block .pickr-child').css('backgroundColor', '#' + hex);
            $('.login-head .right-block .imp-link a,.login-head .right-block .imp-link a .icon, .lang-sel .dropdown-block .selected-item').css("color", '#' + hex);
            $('.sel-down-arrow').css("border-top-color", '#' + hex);
        },
        color: rgb2hex($('.hdTxt-var .color-block .pickr-child').css('background-color'))
    });
    $('.titTxt-var .color-block').ColorPicker({
        onShow: function (colpkr) {
            $(colpkr).fadeIn(500);
            var clr = rgb2hex($('.titTxt-var .color-block .pickr-child').css('background-color'));
            $('.colorpicker .colorpicker_new_color').css('backgroundColor', clr);
            $('.colorpicker .colorpicker_hex input').val(clr)
            return false;
        },
        onHide: function (colpkr) {
            $(colpkr).fadeOut(500);
            return false;
        },
        onChange: function (hsb, hex, rgb) {
            $('.titTxt-var .color-block .pickr-child').css('backgroundColor', '#' + hex);
            $('.dashboard-page h4,.loginSubtitle,.login-link,.loginTitle,.login-footer,.login-footer a ,.login-content-block > span').css("color", '#' + hex);
        },
        color: rgb2hex($('.titTxt-var .color-block .pickr-child').css('background-color'))
    });
    $('.txt-var .color-block').ColorPicker({
        onShow: function (colpkr) {
            $(colpkr).fadeIn(500);
            var clr = rgb2hex($('.txt-var .color-block .pickr-child').css('background-color'));
            $('.colorpicker .colorpicker_new_color').css('backgroundColor', clr);
            $('.colorpicker .colorpicker_hex input').val(clr);
            return false;
        },
        onHide: function (colpkr) {
            $(colpkr).fadeOut(500);
            return false;
        },
        onChange: function (hsb, hex, rgb) {
            $('.txt-var .color-block .pickr-child').css('backgroundColor', '#' + hex);
            if ($('.login-page').attr('class').indexOf('screen-3')>1) {
                $('.punch .db-btn,.login-body .login-block .login-title-block span.icon-lock,.login-body .login-block .login-title-block span.login-txt,input:focus + label, input:valid + label,.login-input-list .re-me.active,lable,.logincolor,.screen-3 .login-input-list a,.screen-3 .pass-eye,.screen-3 .login-footer a,.login-content-block > span,.login-input-list .re-me,.login-input-list a').css("color", '#' + hex);
                $('.screen-3 .login-body-block input').css('border-color', '#' + hex);

            }
            else {
                $('.punch .db-btn,.login-body .login-block .login-title-block span.icon-lock,.login-body .login-block .login-title-block span.login-txt,input:focus + label, input:valid + label,.login-input-list .re-me.active,lable,.logincolor,.screen-3 .login-input-list a,.pass-eye,.screen-3 .login-footer a,.login-input-list .re-me,.login-input-list a').css("color", '#' + hex);
                $('.login-body-block input').css('border-color', '#' + hex);
            }

            $('.login-block .sub-btn,.login-footer').css("background-color", '#' + hex);
            $('.punch .db-btn,.login-body-block input:focus, .login-body-block input:valid').css("border-color", '#' + hex);

        },
        color: rgb2hex($('.txt-var .color-block .pickr-child').css('background-color'))
    });
    $('.login-body-block .input-group input').focusout(function () {
    })
    /*****copy custom url *******/
    $('.cust-url .db-btn').click(function(){
     var copyText =   $('.cust-url input').select();
      document.execCommand("copy");
      $('.copyNoti').fadeIn(1000);
      $('.copyNoti').fadeOut(1000);
    })

    /******last moment changes*****/


})
//************************************************************************popup block*****************************************************//
//*********************************************API Request Login Page ***********************************************
function SaveThemeSetup() {
    Loading('show');
    var filename = "";
    var objParam = {};
    objParam.TransType = 'save';
    if ($('div.main-content')[0].classList[2] == undefined) {
        objParam.LoginPageName = "screen-4";
    }
    else {
        objParam.LoginPageName = $('div.main-content')[0].classList[2].replace('screen-', '');
    }
    objParam.LayOverColorCode = $('.pickr-child').css("backgroundColor");//$('.db-overlay').css("backgroundColor");
    objParam.InputFieldTitle = $('.login-title').val();
    objParam.InputFieldSubTitle = $('.login-subtitle').val();
    objParam.InputFieldLinkText = $('.login-link-input').val();
    objParam.InputFieldLinkUrl = $('.login-link-url').val();

    objParam.Title =$('.loginTitle').text();
    objParam.SubTitle= $('.loginSubtitle').text();
    objParam.LinkText = $('.login-link').text();
    objParam.LinkUrl = $('.login-link').attr('href');
    objParam.loginTitleArabic = $('#loginTitleArabic').val();
    objParam.loginSubTitleArabic = $('#loginSubTitleArabic').val();
    objParam.loginLinkTextArabic = $('#loginLinkTextArabic').val();
    objParam.loginLinkUrlArabic = $('#loginLinkUrlArabic').val();
    var fullPath = $('.img-display-block > img').attr('src');
    if (fullPath != " ") {
        filename = fullPath.replace(/^.*[\\\/]/, '')
        filename = filename.split('?')[0];
    }
    objParam.BackgroundImageName = filename;
    objParam.EffectiveStartDate = $('.esStDate').val();
    objParam.EffectiveEndDate = $('.esEdDate').val();
    objParam.ImageEndDate = $('.imgEdDate').val();
    objParam.LanguageID = $('.language-select .selected-item').text().split(' ').join('');
    punchInVal = 0;
    if ($('.punch-opt .db-toggle-btn').attr('class').indexOf('active') >= 1) {
        punchInVal = 1;
    }
    objParam.IsPunchOption = punchInVal;


    objParam.colourBackground =$('body').css("background-color");
    objParam.colourHeaderBackground=$('.db-head').css("background-color");
    objParam.colourHeaderText=$('.login-head .right-block .imp-link a').css("color");
    objParam.colourTitleText=$('.dashboard-page h4,.loginTitle').css("color");
    objParam.colourText = $('.txt-var .pickr-child').css('background-color');//$('.txt-var .loginSubtitle,.login-link').css('color');

    var fullPath1 = $('.login-page .main-logo img').attr('src');
    if (fullPath1 != " ") {
        filename1 = fullPath1.replace(/^.*[\\\/]/, '')
        filename1 = filename1.split('?')[0];
    }
    objParam.logoName = filename1;
    var isCompanyCode = 0;
    if ($('.cc-opt .db-toggle-btn').attr('class').indexOf('active') >= 1) {
        isCompanyCode = 1;
    }
    objParam.IsCompanyCode = isCompanyCode;
    CallAjaxAsync("POST", SaveThemeSetupSuccess, APIError, API_Path + "DashboardV1/SaveThemeSetup", objParam);
}
function SaveThemeSetupSuccess(data, status) {
    if (data.Code == "0") {
        bootbox.alert(data.Message);
        Loading('hide');
    }
    else if (data.Code == "1") {
        if (data.Message = "Success") {
            Loading('hide');
            return false;
        }
    }
}
function APIError(data, status) {
    Loading('hide');
}
function getThemeSetup() {
   Loading('show');
   var DbName = companyCode.replace('/', '');
    CallAjaxAsync("GET", GetThemeSetupSuccess, APIError, API_Path + "DashboardV1/GetThemeSetup?TransType="+DbName+"", '');
}
function GetThemeSetupSuccess(data, status) {
    if (data.Code == "1") {
        if (data != null) {
            Loading('show');
            var imageUrl = '';
            $('.login-page').attr('class', 'main-content login-page screen-' + data.LoginPageName);
            $('.theme-item.screen-' + data.LoginPageName + '').addClass('active');
            //$('.theme-item:nth-child(' + $('.login-page').attr('class').split(' ').pop().substr(-1) + ')').addClass('active');
            if (data.LoginPageName == "3") {
                $('.punch-opt').css('display', 'true');
                if (window.location.pathname.split('/').slice(-1)[0].toLowerCase() == "zing.aspx") {
                    $('.punch-opt .db-toggle-btn').click();
                }
            }
            if (data.BackgroundImageName == null || data.BackgroundImageName == undefined || data.BackgroundImageName == " " || data.BackgroundImageName=="") {
                imageUrl = '../../App_Themes/Images/DashboardV1/bg1.jpg';
            }
            else {
                imageUrl = GetSasUrl(data.BackgroundImageName)
            }
            $('.img-display-block img').attr("src", imageUrl);
            $('.login-page').css('background-image', 'url(' + imageUrl + ')');
            $('.esStDate').val(data.EffectiveStartDate.split(' ')[0]);
            $('.esEdDate').val(data.EffectiveEndDate.split(' ')[0]);
            $('.imgEdDate').val(data.BackgroundImageEndDate.split(' ')[0]);
            var language = "";
            var isLan = false;
            if (data.LanguageID.length > 0) {
                language = data.LanguageID.split(',');
                for (var i = 0; i < language.length; i++) {
                    if (language[i].toLowerCase() == 'english') {
                        $('.dropdown-item').eq(0).addClass('active');
                        langArr.push('English');
                        addBannerText();
                        isLan = true;
                        ////English----------
                        $('.login-title').val(data.InputFieldTitle);
                        $('.login-subtitle').val(data.InputFieldSubTitle);
                        $('.login-link-input').val(data.InputFieldLinkText);
                        $('.login-link-url').val(data.InputFieldLinkUrl)

                        $('.loginTitle').text(data.Title);
                        $('.loginSubtitle').text(data.SubTitle);
                        $('.login-link').text(data.LinkText)
                        $('.English .login-link-url').val(data.LinkUrl);
                    }
                    else if (language[i].toLowerCase() == 'arabic') {
                        $('.dropdown-item').eq(1).addClass('active');
                        langArr.push('Arabic');
                        addBannerText();
                        $('#loginTitleArabic').val(data.InputFieldTitle_Arabic);
                        $('#loginSubTitleArabic').val(data.InputFieldSubTitle_Arabic);
                        $('#loginLinkTextArabic').val(data.InputFieldLinkText_Arabic);
                        $('#loginLinkUrlArabic').val(data.InputFieldLinkUrl_Arabic);
                        if (!isLan) {
                            $('.loginTitle').text(data.InputFieldTitle_Arabic);
                            $('.loginSubtitle').text(data.InputFieldSubTitle_Arabic);
                            $('.login-link').text(data.InputFieldLinkText_Arabic)
                            $('.Arabic .login-link-url').val('https://'+ data.InputFieldLinkUrl_Arabic);
                        }
                    }
                }
            }

            $('.language-select .selected-item').text(data.LanguageID);
            if (language.length < 1) {
                if ($('.English').length < 1 && langArr.length < 1) {
                    $('.login-inputs .accord-item-body .addonInput').append('<div class="theme-list accord-body-list English"><div class="language-title">English</div> <div class="bannerInput-group"><span class="banner-label">title</span> <input type="text" class="login-fields login-title" placeholder="title"></div><div class="bannerInput-group"><span class="banner-label">subtitle</span><input type="text" class="login-fields login-subtitle"  placeholder="subtitle"></div><div class="bannerInput-group"><span class="banner-label">link text</span><input type="text" class="login-fields login-link-input"  placeholder="link text"></div><div class="bannerInput-group"><span class="banner-label">link url</span><input type="text" onblur="ValidURL(this.value)" class="login-fields login-link-url" placeholder="link url"></div><div class="db-error-mgs"> <span>*Please enter the required fields</span> </div><div class="db-btn input-submit sub-btn"> <span>Click to Preview</span> </div> </div>');
                    $('.openList .dropdown-item').eq(0).addClass('active');
                    $('.dropdown-block .selected-item').text('English');
                }
            }
            if (data.PunchInAllowed == 0) {
                $('.punch-opt').addClass('disabled');
                $('.punch-opt .db-toggle-btn').click();
                $('.punch-opt .db-toggle-btn').removeClass('active');
            }
            else {
                $('.punch-opt').removeClass('disabled');
                if (data.IsPunchOption == true) {
                    $('.punch-opt .db-toggle-btn').removeClass('active');
                }
                else {
                    $('.punch-opt .db-toggle-btn').click();
                    $('.punch-opt .db-toggle-btn').addClass('active');
                    if (window.location.pathname.split('/').slice(-1)[0].toLowerCase() == "zing.aspx") {
                        $('.btn-group.punch').css('display', 'none');
                    }
                }
            }
            //Theme History
            var HistoryStr ="";
            var historyData = data.ThemeHistory;
            for (var i = 0; i < historyData.length; i++) {
                HistoryStr += "<div class='db-history-ListItem'><div class='history-item'><div class='historyDate'>" + historyData[i].UpdatedDate + "</div></div><div class='history-btn'><div class='db-btn flat-btn'>";
                HistoryStr += "<span data-id='" + historyData[i].Id + "' data-LoginPageName='" + historyData[i].LoginPageName + "' data-LayOverColorCode='" + historyData[i].LayOverColorCode + "' data-InputFieldTitle='" + historyData[i].InputFieldTitle + "' data-InputFieldSubTitle='" + historyData[i].InputFieldSubTitle + "' data-InputFieldLinkText='" + historyData[i].InputFieldLinkText + "' data-InputFieldLinkUrl='" + historyData[i].InputFieldLinkUrl + "' data-BackgroundImageName='" + historyData[i].BackgroundImageName + "' data-EffectiveStartDate='" + historyData[i].EffectiveStartDate.split(' ')[0] + "' data-EffectiveEndDate='" + historyData[i].EffectiveEndDate.split(' ')[0] + "' data-LanguageID='" + historyData[i].LanguageID + "' data-IsPunchOption='" + historyData[i].IsPunchOption + "' data-UpdatedDate='" + historyData[i].UpdatedDate.split(' ')[0] + "' data-BackgroundImageEndDate='" + historyData[i].BackgroundImageEndDate.split(' ')[0] + "' data-InputFieldTitle_Arabic='" + historyData[i].InputFieldTitle_Arabic + "' data-InputFieldSubTitle_Arabic='" + historyData[i].InputFieldSubTitle_Arabic + "' data-InputFieldLinkText_Arabic='" + historyData[i].InputFieldLinkText_Arabic + "' data-InputFieldLinkUrl_Arabic='" + historyData[i].InputFieldLinkUrl_Arabic + "' data-IsCompanyCode='" + historyData[i].IsCompanyCode + "' data-colourBackground='" + historyData[i].colourBackground + "' data-colourHeaderBackground='" + historyData[i].colourHeaderBackground + "' data-colourHeaderText='" + historyData[i].colourHeaderText + "' data-colourTitleText='" + historyData[i].colourTitleText + "' data-colourText='" + historyData[i].colourText + "' onclick=PreviewTheme(this);>preview</span></div><div class='db-btn flat-btn'>";
                HistoryStr += "<span data-id='" + historyData[i].Id + "' data-LoginPageName='" + historyData[i].LoginPageName + "' data-LayOverColorCode='" + historyData[i].LayOverColorCode + "' data-InputFieldTitle='" + historyData[i].InputFieldTitle + "' data-InputFieldSubTitle='" + historyData[i].InputFieldSubTitle + "' data-InputFieldLinkText='" + historyData[i].InputFieldLinkText + "' data-InputFieldLinkUrl='" + historyData[i].InputFieldLinkUrl + "' data-BackgroundImageName='" + historyData[i].BackgroundImageName + "' data-EffectiveStartDate='" + historyData[i].EffectiveStartDate.split(' ')[0] + "' data-EffectiveEndDate='" + historyData[i].EffectiveEndDate.split(' ')[0] + "' data-LanguageID='" + historyData[i].LanguageID + "' data-IsPunchOption='" + historyData[i].IsPunchOption + "' data-UpdatedDate='" + historyData[i].UpdatedDate.split(' ')[0] + "' data-BackgroundImageEndDate='" + historyData[i].BackgroundImageEndDate.split(' ')[0] + "' data-InputFieldTitle_Arabic='" + historyData[i].InputFieldTitle_Arabic + "' data-InputFieldSubTitle_Arabic='" + historyData[i].InputFieldSubTitle_Arabic + "' data-InputFieldLinkText_Arabic='" + historyData[i].InputFieldLinkText_Arabic + "' data-InputFieldLinkUrl_Arabic='" + historyData[i].InputFieldLinkUrl_Arabic + "' data-IsCompanyCode='" + historyData[i].IsCompanyCode + "' data-colourBackground='" + historyData[i].colourBackground + "' data-colourHeaderBackground='" + historyData[i].colourHeaderBackground + "' data-colourHeaderText='" + historyData[i].colourHeaderText + "' data-colourTitleText='" + historyData[i].colourTitleText + "' data-colourText='" + historyData[i].colourText + "' onclick=ApplyTheme(this);>Apply</span></div></div></div>";
            }
            $('#themeHistory').empty().append(HistoryStr);
            if (data.IsCompanyCode.toLowerCase() == "true") {
                $('.cc-opt .db-toggle-btn').removeClass('active');

            }
            else {
                //$('.cc-opt .db-toggle-btn').addClass('disabled');
                $('.cc-opt .db-toggle-btn').click();
                $('.cc-opt .db-toggle-btn').addClass('active');
                if (window.location.pathname.split('/').slice(-1)[0].toLowerCase() == "zing.aspx") {
                    $('.com-code').css('display', 'none');
                }

            }
            $('.db-overlay').css("backgroundColor", data.LayOverColorCode);
            $('body').css("background-color", data.colourBackground);
            $('.db-head').css("background-color", data.colourHeaderBackground);
            $('.login-head .right-block .imp-link a,.login-head .right-block .imp-link a .icon,.lang-sel .dropdown-block .selected-item').css("color", data.colourHeaderText);
            $('.dashboard-page h4,.loginTitle,.loginSubtitle,.login-link,.login-footer a,.login-content-block > span').css("color", data.colourTitleText);
            if ($('.login-page').attr('class').indexOf('screen-3') > 1) {
                $('.punch .db-btn,.login-body .login-block .login-title-block span.icon-lock,.login-body .login-block .login-title-block span.login-txt,input:focus + label, input:valid + label,.login-input-list .re-me.active,lable,.logincolor,.screen-3 .login-input-list a,.screen-3 .pass-eye,.screen-3 .login-footer a,.login-content-block > span,.login-input-list .re-me,.login-input-list a').css("color", '#' + hex);
                $('.screen-3 .login-body-block input').css('border-color', data.colourText);
            }
            else {
                $('.punch .db-btn,.login-body .login-block .login-title-block span.icon-lock,.login-body .login-block .login-title-block span.login-txt,input:focus + label, input:valid + label,.login-input-list .re-me.active,lable,.logincolor,.screen-3 .login-input-list a,.screen-3 .pass-eye,.screen-3 .login-footer a,.login-input-list .re-me,.login-input-list a').css("color", '#' + hex);
            }
            $('.login-block .sub-btn,.login-footer').css("background-color", data.colourText);
            $('.punch .db-btn ,.login-body-block input:focus, .login-body-block input:valid,.login-body-block input, .login-body-block input:valid').css("border-color", data.colourText);
            $('.bc-var .color-block .pickr-child').css('backgroundColor', data.colourBackground);
            $('.hdBc-var .color-block .pickr-child').css('backgroundColor', data.colourHeaderBackground);
            $('.hdTxt-var .color-block .pickr-child').css('backgroundColor', data.colourHeaderText);
            $('.titTxt-var .color-block .pickr-child').css('backgroundColor', data.colourTitleText);
            $('.txt-var .color-block .pickr-child').css('backgroundColor', data.colourText);

            $('.overlay-setup .pickr-child').css("backgroundColor", data.LayOverColorCode);

            $('.login-body .login-block .login-title-block span.icon-lock,.login-body .login-block .login-title-block span.login-txt,.login-body-block label').css("color", '#' + data.colourText);
            $('.login-body .login-block .login-title-block span.icon-lock,.login-body .login-block .login-title-block span.login-txt,.punch .db-btn').css('color', rgb2hex($('.txt-var .color-block .pickr-child').css('background-color')));
            $('.sel-down-arrow').css("border-top-color", data.colourText);

            if (data.logoName == null || data.logoName == undefined || data.logoName == " " || data.logoName == "") {
            }
            else {
                imageUrl = GetLogoUrl(data.logoName);//
                $('.Profileimg-display-block img').attr("src", imageUrl);
                $('.login-page .main-logo img').attr('src', imageUrl)
            }
            Loading('hide');
        }
    }
    else {
        language = ["English"];
        for (var i = 0; i < language.length; i++) {
            if (language[i].toLowerCase() == 'english') {
                $('.dropdown-item').eq(0).addClass('active');
                langArr.push('English');
                addBannerText();
                $('.login-title').val("Meet Zingo");
                $('.login-subtitle').val("Your New Virtual HR Assistant!");
                $('.login-link-input').val("Lets Chat With Zingo");
                $('.login-link-url').val("www.zinghr.com")

                $('.loginTitle').text("Meet Zingo");
                $('.loginSubtitle').text("Your New Virtual HR Assistant!");
                $('.login-link').text("Lets Chat With Zingo")
                $('.login-link-url').val("www.zinghr.com");
            }
        }
        $('#themeHistory').empty().append("No Data Found !");
        $('.btn-group.punch ').css('display', 'none');
        $('.punch-opt .db-toggle-btn').removeClass('active');
        $('.img-display-block img').attr("src", '../../App_Themes/Images/DashboardV1/bg1.jpg');
        $('.login-page').css('background-image', 'url(' + '../../App_Themes/Images/DashboardV1/bg1.jpg' + ')');
        $('.Profileimg-display-block img').attr("src", '../../App_Themes/Images/DashboardV1/zing-logo.png');
        $('.login-page .main-logo img').attr('src', '../../App_Themes/Images/DashboardV1/zing-logo.png');
        $('.titTxt-var .pickr-child').css('backgroundColor', '#ffffff');
        $('.txt-var .pickr-child').css('backgroundColor', '#33cccc');
        $('.com-code').css('display', 'none');
        $('.main-content.login-page').addClass('Screen-1');
        $('.theme-item:nth-child(' + $('.login-page').attr('class').split(' ').pop().substr(-1) + ')').addClass('active');
        $('.login-link').attr('href', "https://www.zinghr.com");
    }
    Loading('hide');
}
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
var hexDigits = new Array
        ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");
//Function to convert rgb color to hex format
function rgb2hex(rgb) {
    if (rgb != undefined) {
        rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
        return (rgb && rgb.length === 4) ? "#" +
         ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
         ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
         ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
    }
}
function hex(x) {
    return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}
function PreviewTheme(evt) {
    Loading('show');
    $('.login-title').val(evt.dataset.inputfieldtitle);
    $('.loginTitle').text(evt.dataset.inputfieldtitle);
    $('.login-subtitle').val(evt.dataset.inputfieldsubtitle);
    $('.loginSubtitle').text(evt.dataset.inputfieldsubtitle);
    $('.login-link-input').val(evt.dataset.inputfieldlinktext)
    $('.login-link-url').val(evt.dataset.inputfieldlinkurl);

    var BackgroundImageName = GetBackGroundUrl(evt.dataset.backgroundimagename); //evt.dataset.BackgroundImageName;
    $('.img-display-block img').attr("src", BackgroundImageName);
    $('.login-page').css("background-image", "url(" + BackgroundImageName + ")");

    $('.esStDate').val(evt.dataset.effectivestartdate.split(' ')[0]);
    $('.esEdDate').val(evt.dataset.effectiveenddate.split(' ')[0]);
    $('.imgEdDate').val(evt.dataset.backgroundimageenddate.split(' ')[0]);

    if (evt.dataset.ispunchoption == true) {
        $('.punch-opt .db-toggle-btn').addClass('active');
    }
    else {
        $('.punch-opt .db-toggle-btn').removeClass('active');
        $('.punch-opt .db-toggle-btn').click();
    }
    if (evt.dataset.iscompanycode.toLowerCase() == "true") {
        $('.cc-opt .db-toggle-btn').addClass('active');
    }
    else {
        $('.cc-opt .db-toggle-btn').removeClass('active');
        $('.cc-opt .db-toggle-btn').click();
    }
    var language = evt.dataset.languageid.split(',');
    for (var i = 0; i < language.length; i++) {
        if (language[i].toLowerCase() == 'arabic') {
            $('.dropdown-item').eq(0).addClass('active');
            langArr.push('Arabic');
           // $('.login-inputs .accord-item-title').click();
            addBannerText();
        }
        $('#loginTitleArabic').val(evt.dataset.inputfieldtitle_arabic);
        $('#loginSubTitleArabic').val(evt.dataset.inputfieldsubtitle_arabic);
        $('#loginLinkTextArabic').val(evt.dataset.inputfieldlinktext_arabic);
        $('#loginLinkUrlArabic').val(evt.dataset.inputfieldlinkurl_arabic);
    }
    $('.language-select .selected-item').text(evt.dataset.languageid);

    $('.db-history-ListItem').siblings().find('.history-btn > .flat-btn').removeClass('sub-btn');

    $('body').css("background-color", evt.dataset.colourBackground);
    $('.db-head').css("background-color", evt.dataset.colourHeaderBackground);
    $('.login-head .right-block .imp-link a,.login-head .right-block .imp-link a .icon').css("color", evt.dataset.colourHeaderText);
    $('.dashboard-page h4,.loginTitle,.loginSubtitle,.login-link').css("color", evt.dataset.colourTitleText);
    $(evt).closest(".flat-btn").addClass("sub-btn");
    Loading('hide');
    return false;
}
function ApplyTheme(evt) {
    Loading('show');
    $('.db-history-ListItem').siblings().find('.history-btn > .flat-btn').removeClass('sub-btn');
    $(evt).closest(".flat-btn").addClass("sub-btn");
    $('.app-btn').click();
    Loading('hide');
    return false;
}
function GetSasUrl(filename) {
    filename = "/Documents/Themes/ThemesIcon/" + filename;
    var mangtug =
    {
        "filename": filename,
        "SubscriptionName": companyCode
    }
    var objSas = CallAjaxWithReturnVal("POST", API_Path + "DashboardV1/GetSASUrl", mangtug);
    if (objSas != null) {
        sasurl = objSas.Message;
    }
    else {
        sasurl = BlobAddress + "indbase/Images/nopicture.jpg";
    }
    return sasurl;
}
function GetLogoUrl(filename) {
    filename = "/Image/Logo/" + filename;
    var mangtug =
    {
        "filename": filename,
        "SubscriptionName": companyCode
    }
    var objSas = CallAjaxWithReturnVal("POST", API_Path + "DashboardV1/GetSASUrl", mangtug);
    if (objSas != null) {
        sasurl = objSas.Message;
    }
    else {
        sasurl = "https://zinghruat.blob.core.windows.net/demobase/Image/Logo/zinghr_logo.jpg";
    }
    return sasurl;
}
function GetBackGroundUrl(filename) {
    filename = "/Documents/Themes/ThemesIcon/" + filename;
    var mangtug =
    {
        "filename": filename
    }
    var objSas = CallAjaxWithReturnVal("POST", API_Path + "DashboardV1/GetSASUrl", mangtug);
    if (objSas != null) {
        sasurl = objSas.Message;
    }
    else {
        sasurl = BlobAddress + "indbase/Images/nopicture.jpg";
    }
    return sasurl;
}
function CallAjaxWithReturnVal(type, url, param) {
    param.Token = getCookie("AuthToken");
    param.TokenValue = getCookie("AuthToken");
    param.SubscriptionName = getCookie("TokenValue");
    var returnVal;
    if (param != '') {
        param = JSON.stringify(param)
    }
    $.ajax({
        type: type,
        url: url,
        data: param,
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data, status) { returnVal = data; },
        error: function (request, status, error) { returnVal = "Error"; }
    });
    return returnVal;
}
function CallAjaxAsync(type, FuncSuccess, FuncError, url, param) {
    param.Token = getCookie("AuthToken");
    param.TokenValue = getCookie("AuthToken");
    param.SubscriptionName = getCookie("TokenValue");

    if (param != '') {
        param = JSON.stringify(param)
    }
    $.ajax({
        type: type,
        url: url,
        data: param,
        async: true,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: FuncSuccess,
        error: FuncError,
        headers: {
            "Authorization": "apikey:APIKEY,tokenid:4a5ba979-0c56-468d-87c7-30a22759f7ce",
            "Accept-Language": "en-US"
        }
    });
}
function addBannerText() {
    for (var i = 0; i < langArr.length; i++) {
        if (langArr[i].toLowerCase() == "english") {
            if ($('.English').length < 1) {
                $('.login-inputs .accord-item-body .addonInput').append('<div class="theme-list accord-body-list' + " " + langArr[i] + '"><div class="language-title">' + langArr[i] + '</div> <div class="bannerInput-group"><span class="banner-label">title</span> <input type="text" class="login-fields login-title" onkeyup="changeBannerText(this)" placeholder="title"></div><div class="bannerInput-group"><span class="banner-label">subtitle</span><input type="text" class="login-fields login-subtitle" onkeyup="changeBannerText(this)" placeholder="subtitle"></div><div class="bannerInput-group"><span class="banner-label">link text</span><input type="text"  class="login-fields login-link-input" onkeyup="changeBannerText(this)" placeholder="link text"></div><div class="bannerInput-group"><span class="banner-label">link url</span><input type="text" class="login-fields login-link-url" onkeyup="changeBannerText(this)" onblur="ValidURL(this.value)" placeholder="link url"></div><div class="db-error-mgs"> <span>*Please enter the required fields</span> </div><div class="db-btn input-submit sub-btn"> <span>Click to Preview</span> </div> </div>');
            }
        }
        else if (langArr[i].toLowerCase() == "arabic") {
            if ($('.Arabic').length < 1) {
                $('.login-inputs .accord-item-body .addonInput').append('<div class="theme-list accord-body-list' + " " + langArr[i] + '"><div class="language-title">' + langArr[i] + '</div> <div class="bannerInput-group"><span class="banner-label">title</span><input type="text" class="login-fields login-title" id="loginTitleArabic" onkeyup="arabicValue(loginTitleArabic)" dir="rtl" placeholder="title"></div><div class="bannerInput-group"><span class="banner-label">subtitle</span><input type="text" class="login-fields login-subtitle" id="loginSubTitleArabic" onkeyup="arabicValue(loginSubTitleArabic)" dir="rtl" placeholder="subtitle"></div><div class="bannerInput-group"><span class="banner-label">link text</span><input type="text" class="login-fields login-link-input"  id="loginLinkTextArabic" onkeyup="arabicValue(loginLinkTextArabic)" dir="rtl" placeholder="link text"></div><div class="bannerInput-group"><span class="banner-label">link url</span><input type="text" class="login-fields login-link-url" id="loginLinkUrlArabic" onblur="ValidURL(this.value)" placeholder="link url"></div><div class="db-error-mgs"> <span>*Please enter the required fields</span> </div> <div class="db-btn save-arabic sub-btn" id="save-arabic"><span>Click to Preview</span> </div> </div>');
            }
        }
    }
}
function ValidURL(str) {
    var regex = /(http(s)?:\\)?([\w-]+\.)+[\w-]+[.com|.in|.org]+(\[\?%&=]*)?/
    if (!regex.test(str)) {
        $('.db-error-mgs').slideDown();
        $('.login-inputs .login-link-url').css({
            "border": "1px solid red"
        })
        return false;
    } else {
        $('.db-error-mgs').slideUp();
        $('.login-inputs .login-link-url').css({
            "border": "none"
        })
        return true;
    }
}
function pageRedirect() {
    window.location.replace(""+window.location.origin+"/2015/Pages/Common/Dashboardv1.html");
   //window.location.replace("" + window.location.origin + "/Pages/Common/Dashboardv1.html");
}
function changeBannerText(evt) {
    if (evt.attributes.class.value.indexOf('login-title') > 0) {
        $('.zingo-content .loginTitle').html(evt.value);
    }
    else if (evt.attributes.class.value.indexOf('login-subtitle') > 0) {
        $('.zingo-content .loginSubtitle').html(evt.value);
    }
    else if (evt.attributes.class.value.indexOf('login-link-input') > 0) {
        $('.login-link').html(evt.value);
    }
    else if (evt.attributes.class.value.indexOf('login-link-url') > 0) {
        $('.login-link').attr('href', evt.value);
    }
    $('.zingo-content .loginTitle').html($('.login-title').val())
    $('.zingo-content .loginSubtitle').html($('.login-subtitle').val());
    $('.login-link').html($('.login-link-input').val());
    $('.login-link').attr('href', $('.login-link-url').val());
}
var yas;
function arabicValue(txt) {
    yas = txt.value;
    yas = yas.replace(/`/g, "ذ");
    yas = yas.replace(/0/g, "۰");
    yas = yas.replace(/1/g, "۱");
    yas = yas.replace(/2/g, "۲");
    yas = yas.replace(/3/g, "۳");
    yas = yas.replace(/4/g, "٤");
    yas = yas.replace(/5/g, "۵");
    yas = yas.replace(/6/g, "٦");
    yas = yas.replace(/7/g, "۷");
    yas = yas.replace(/8/g, "۸");
    yas = yas.replace(/9/g, "۹");
    yas = yas.replace(/0/g, "۰");
    yas = yas.replace(/q/g, "ض");
    yas = yas.replace(/w/g, "ص");
    yas = yas.replace(/e/g, "ث");
    yas = yas.replace(/r/g, "ق");
    yas = yas.replace(/t/g, "ف");
    yas = yas.replace(/y/g, "غ");
    yas = yas.replace(/u/g, "ع");
    yas = yas.replace(/i/g, "ه");
    yas = yas.replace(/o/g, "خ");
    yas = yas.replace(/p/g, "ح");
    yas = yas.replace(/\[/g, "ج");
    yas = yas.replace(/\]/g, "د");
    yas = yas.replace(/a/g, "ش");
    yas = yas.replace(/s/g, "س");
    yas = yas.replace(/d/g, "ي");
    yas = yas.replace(/f/g, "ب");
    yas = yas.replace(/g/g, "ل");
    yas = yas.replace(/h/g, "ا");
    yas = yas.replace(/j/g, "ت");
    yas = yas.replace(/k/g, "ن");
    yas = yas.replace(/l/g, "م");
    yas = yas.replace(/\;/g, "ك");
    yas = yas.replace(/\'/g, "ط");
    yas = yas.replace(/z/g, "ئ");
    yas = yas.replace(/x/g, "ء");
    yas = yas.replace(/c/g, "ؤ");
    yas = yas.replace(/v/g, "ر");
    yas = yas.replace(/b/g, "لا");
    yas = yas.replace(/n/g, "ى");
    yas = yas.replace(/m/g, "ة");
    yas = yas.replace(/\,/g, "و");
    yas = yas.replace(/\./g, "ز");
    yas = yas.replace(/\//g, "ظ");
    yas = yas.replace(/~/g, " ّ");
    yas = yas.replace(/Q/g, "َ");
    yas = yas.replace(/W/g, "ً");
    yas = yas.replace(/E/g, "ُ");
    yas = yas.replace(/R/g, "ٌ");
    yas = yas.replace(/T/g, "لإ");
    yas = yas.replace(/Y/g, "إ");
    yas = yas.replace(/U/g, "‘");
    yas = yas.replace(/I/g, "÷");
    yas = yas.replace(/O/g, "×");
    yas = yas.replace(/P/g, "؛");
    yas = yas.replace(/A/g, "ِ");
    yas = yas.replace(/S/g, "ٍ");
    yas = yas.replace(/G/g, "لأ");
    yas = yas.replace(/H/g, "أ");
    yas = yas.replace(/J/g, "ـ");
    yas = yas.replace(/K/g, "،");
    yas = yas.replace(/L/g, "/");
    yas = yas.replace(/Z/g, "~");
    yas = yas.replace(/X/g, "ْ");
    yas = yas.replace(/B/g, "لآ");
    yas = yas.replace(/N/g, "آ");
    yas = yas.replace(/M/g, "’");
    yas = yas.replace(/\?/g, "؟");
    txt.value = yas;
    if (txt.attributes.class.value.indexOf('login-title') > 0) {
        $('.zingo-content .loginTitle').html(txt.value);
    }
    else if (txt.attributes.class.value.indexOf('login-subtitle') > 0) {
        $('.zingo-content .loginSubtitle').html(txt.value);
    }
    else if (txt.attributes.class.value.indexOf('login-link-input') > 0) {
        $('.login-link').html(txt.value);
    }
    else if (txt.attributes.class.value.indexOf('login-link-url') > 0) {
        $('.login-link').attr('href', txt.value);
    }
    $('.zingo-content .loginTitle').html($('#loginTitleArabic').val())
    $('.zingo-content .loginSubtitle').html($('#loginSubTitleArabic').val());
    $('.login-link').html($('#loginLinkTextArabic').val());
    $('.login-link').attr('href', $('#loginLinkUrlArabic').val());
}
//*********************************************API Request Login page End ***********************************************
/* function creates cooke with random key */
function setCookie(inputs) {
    var name = (inputs[0]) ? inputs[0] : "key" + document.cookie.length;
    var date = new Date();
    date.setTime(date.getTime() + (120 * 1000));
    var expires = "; expires=" + date.toGMTString();
    document.cookie = name + "=" + inputs[1] + expires;
};
/* get the cookie based on input */
function getCookie(input) {
    input = input.toLowerCase();
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var name = cookies[i].split('=')[0].toLowerCase().trim();
        var value = cookies[i].split('=')[1].toLowerCase().trim();
        if (name === input) {
            return value;
        } else if (value === input) {
            return name;
        }
    }
    return "";
};
// API Request Dashboard page //
function DashboardWidgetSuccess(data, status) {
    if (data.Code == "0") {
        bootbox.alert(data.Message);
        return;
    }
    else {
        BindWishesGrid(data.DO, data.DOConfig, "", data.DONewJoinee, data.DONewJoineeEmail);
    }
}
function ParallelDashboardWidgetSuccess(data, status) {
    if (data.Code == "0") {
        bootbox.alert(data.Message);
        return;
    }
    // /* --------------- Best Wishes Grid ----------------------------*/
    BindWishesGrid(data.DOWishes, data.DOConfig, "", data.DONewJoinee, data.DONewJoineeEmail);
    BindRNRGrid(data.DOBadge);
    getMyTeam();
    getMyCalender();

}
function BindWishesGrid(DOWishes, DOConfig, WishesType, DONewJoinee, DOEmail) {
    /*Forming Existing structure*/
    browser = navigator.userAgent.toLowerCase();
    if (WishesType == '' || WishesType == 'Existing') {
        var ISWishApplicable = 0;
        var wishCount = 0;
        if (DOWishes != null && DOWishes != undefined) {
            if (DOWishes.Response[0] != null || DOWishes.Response[0] != undefined) {
                EmpSocial_DataArray = DOWishes.Response[0];
                ListEmployeeConnect = DOConfig.Response[0];
            }
        }
        if (EmpSocial_DataArray != null) {
            ExistingTotalCount = EmpSocial_DataArray.length;
        }
        else { ExistingTotalCount = 0; }
        var j = 0;
        for (j = 0; j < ListEmployeeConnect.length; j++) {
            if (ListEmployeeConnect[j].Applicable && ListEmployeeConnect[j].WishType != 'NewJoinees') {
                ISWishApplicable = 1;
            }
        }
        $('#bday-slider').html('');
        $('#anni-slider').html('');

        if (ISWishApplicable != 1) {
            $('#divBestWish').hide();
        }
        else if (ISWishApplicable == 1) {
            $('#bday-slider').show();
            $('#anni-slider').show();
            if (ExistingTotalCount == 0) {
                EmpSocial_str = "";
                EmpSocial_str = "<div class='font-12 no-records'>No Records Found.</div>";
                $('#bday-slider').html(EmpSocial_str);
                $('#anni-slider').html(EmpSocial_str);
            }
            else {
                $('#bday-slider').html("<div class='font-12'>Loading ...</div>");
                $('#anni-slider').html("<div class='font-12'>Loading ...</div>");
                var bday_str = "";
                var anni_str = "";
                for (var i = 0; i < ExistingTotalCount; i++) {
                    EmpSocialEmpName = EmpSocial_DataArray[i].EmpName;
                    EmpSocial_MobileNo = (EmpSocial_DataArray[i].MobileNo != "") ? EmpSocial_DataArray[i].MobileNo : '-'
                    if (EmpSocial_DataArray[i].Type == 'BirthDays' || EmpSocial_DataArray[i].Type == 'BirthDay') {
                        EPhoto = $.trim(EmpSocial_DataArray[i].EmployeePhoto);
                        if (browser.indexOf('firefox') > -1 && EPhoto == "") {
                            EPhoto = BlobAddress + "indbase/Images/nopicture.jpg";
                        }
                        bday_str += "<div class='slider-item swiper-slide'><a href='javascript:;'><div class='slider-item-content'><div class='slider-top-block'><img src='" + EPhoto + "' alt=''></div><div class='slider-bottom-block'> <div class='emp-desc'><div class='emp-name' data-empcode='" + EmpSocial_DataArray[i].EmpCode + "'><span>" + EmpSocialEmpName + "</span></div>";
                        bday_str += "<div class='emp-desg'><span class='emp-desg-txt'></span> </div></div></div></div></a></div>"; //<span class='join-date'>15 mar</span>
                    }
                    else if (EmpSocial_DataArray[i].Type == 'Anniversary') {
                        EPhoto = $.trim(EmpSocial_DataArray[i].EmployeePhoto);
                        if (browser.indexOf('firefox') > -1 && EPhoto == "") {
                            EPhoto = BlobAddress + "indbase/Images/nopicture.jpg";
                        }
                        anni_str += "<div class='slider-item swiper-slide'><a href='javascript:;'><div class='slider-item-content'><div class='slider-top-block'><img src='" + EPhoto + "' alt=''></div><div class='slider-bottom-block'><div class='emp-desc'><div class='emp-name' data-empcode='" + EmpSocial_DataArray[i].EmpCode + "'><span>" + EmpSocialEmpName + "</span></div>";
                        anni_str += "<div class='emp-desg'><span class='emp-desg-txt'></span></div></div></div></div></a></div>";
                    }
                }
                if (anni_str == "") {
                    anni_str = "<div class='font-12 no-records'>No Records Found.</div>";
                }
                if (bday_str == "") {
                    bday_str = "<div class='font-12 no-records'>No Records Found.</div>";
                }
                $('#bday-slider').empty().append(bday_str);
                $('#anni-slider').empty().append(anni_str);
            }
        }
    }
}
function ConvertDateToYYYY_MM_DD(Value, Delimiter) {
    var Common_yyyy = Value.getFullYear().toString();
    var Common_mm = (Value.getMonth() + 1).toString(); // getMonth() is zero-based
    var Common_dd = Value.getDate().toString();
    return Common_yyyy + Delimiter + (Common_mm[1] ? Common_mm : "0" + Common_mm[0]) + Delimiter + (Common_dd[1] ? Common_dd : "0" + Common_dd[0]);
}
function ConvertDateToYMD(value, Delimiter) {
    var dateVal = value.split(Delimiter)
    return formattedDate = dateVal[2] + "-" + dateVal[1] + "-" + dateVal[0];
}
function BindRNRGrid(DOBadge) {
    var rnr_str = "";
    var badgeData = DOBadge.Response[0];
    for (var x = 0; x < badgeData.length; x++) {
        if (x < 3) {
            var rnr_imgUrl = "", rnr_userUrl = "", rnr_userName = "", rnr_userDesc = "";
            rnr_imgUrl = badgeData[x].BadgeImage;
            rnr_userUrl = badgeData[x].EmployeePhoto;
            rnr_userName = badgeData[x].AllocatedEmployeeName;
            rnr_userDesc = badgeData[x].Description;
            rnr_str += "<div class='rnr-item'><div class='rnr-award-img'><img src='" + rnr_imgUrl + "' /></div><div class='rnr-top'><div class='rnr-img'> <img src='" + rnr_userUrl + "' alt=''></div><div class='rnr-userprofile'><span class='userName'>" + rnr_userName + "</span>";
            rnr_str += "</div></div><div class='rnr-bottom'><div class='rnr-desc'><p>'" + rnr_userDesc + "'</p></div></div></div>";
        }
    }
    if (rnr_str == "") {
        rnr_str = "<div class='font-12 no-records'>No Records Found.</div>";
    }
    $('#rnr-widget').empty().append(rnr_str);
}
function getMyTeam() {
    var API_Path = "../../route/";
    CallAjaxAsync("GET", GetMyTeamSuccess, APIError, API_Path + "DashboardV1/GetMyTeam?TransType=MGR", '');
}
function GetMyTeamSuccess(data, status) {
    if (data.Code == "1") {
        if (data != null) {
            var team_str = "";
            var presentClass = "";
            var TeamData = data.MyTeam;
            for (var x = 0; x < TeamData.length; x++) {
                if (TeamData[x].ISPRESENT == 1) {
                    presentClass = "";
                }
                else { presentClass = "attn-abs"; }
                team_str += "<div class='myteam-item' data-empname='" + TeamData[x].EMPFIRSTNAME + ' ' + TeamData[x].EMPLASTNAME + "' ><img src='" + TeamData[x].EMPLOYEEPHOTO + "' Title='" + TeamData[x].EMPFIRSTNAME + ' ' + TeamData[x].EMPLASTNAME + "'   data-empcode='" + TeamData[x].EMPLOYEECODE + "' alt=''><div class='attn-status " + presentClass + "'><span></span></div></div>";
            }
            if (team_str == "") {
                team_str = "<div class='font-12 no-records'>No Records Found.</div>";
            }
            $('#MyTeamList').empty().append(team_str);
        }
    }
}
function getMyCalender() {
    getDate = ConvertDateToYYYY_MM_DD(new Date(), '-');
    CallAjaxAsync("GET", getMyCalenderSuccess, APIError, API_Path + "DashboardV1/GetMyCalender?FromDate=" + getDate + "", '');
}
var monthDays = {
    1: 31,
    2: 29,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
};
var currMonth = (new Date()).getMonth() + 1;
function getMyCalenderSuccess(data, status) {
    if (data.Code == "1") {
        if (data != null) {
            var CalResult = data.CalenderResult;
            var cal_Str="";
            $('.attn-count').text(CalResult[0].AbsentCount.toFixed(2));
            var MyCalender = data.MyCalender;
            //cal-abs --a,cal-present --p,cal-lapplied --PL,cal-lapproved,cal-outdoor --,cal-halfday --hd,cal-halfdayApplied,cal-halfdayApproved,cal-secLevApplied,cal-secLevApproved
            for (var i = 1; i <= monthDays[currMonth]; i++) {
                var day = MyCalender[i - 1].Result;
                var Desc1 = MyCalender[i - 1].Desc;
                var LStatus = MyCalender[i - 1].LeaveStatus;

                var LeaveClass = "";
                if (day.toLowerCase() == "p") {
                    LeaveClass = 'cal-present';
                    if (Desc1.toLowerCase() == "outdoor approved" || Desc1.toLowerCase() =='outdoor cancel request') {
                        var LeaveClass = "cal-outdoor";
                    }
                }
                else if (day.toLowerCase() == "a") {
                    LeaveClass = 'cal-abs';
                    if (LStatus == 2) {
                        LeaveClass = 'cal-lapplied';
                    }
                    if (LStatus == 13) {
                        LeaveClass = 'cal-outdoor'
                    }
                }
                else if (day.toLowerCase() == "hd") {
                    if (Desc1.toLowerCase() == "flexi rule applied") {
                        LeaveClass = 'cal-halfday';
                    }
                    if (LStatus == 13) {
                        LeaveClass = 'cal-lapproved';
                    }
                }
                cal_Str += "<span class='cal-date " + LeaveClass + "'></span>";
            }
            $('.attn-cal-list').empty().append(cal_Str)
        }
    }
}
function DownloadPayslip() {
    var date = new Date();
    Pay_finMonth = date.getMonth() + 1;
    year1 = date.getFullYear();
    year2 = parseInt(date.getFullYear()) + 1;
    var year = year1 + year2;
    vCurrFinYear = year;
    Pay_HandlerHref = GetDownloadPaySlip(vCurrFinYear, Pay_finMonth);
    if (Pay_HandlerHref != '') {
        window.open(Pay_HandlerHref, "_blank");
        setTimeout(function () {
            objParam.PayslipBlobURL = Pay_HandlerHref;
            CallAjaxAsync("POST", GetXChartDataSuccess, APIError, APIService + "DeleteBlobPaySlip", objParam);
        }, 3000);

    } else {
        alert("" + monthNames[d.getMonth()] + " month salary is not processed.");
    }
}
function GetDownloadPaySlip(finYear, finMonth) {
    if (localStorage.getItem("MyTeam") == "Y") {
        objParam.EmployeeCode = localStorage.getItem("MyTeamCode");
        objParam.MyTeam = "Y";
    }
    else {
        objParam.MyTeam = "N";
    }
    if (refurl != null && typeof refurl != "undefined") {
        if (refurl.toLowerCase().indexOf("listemployeecreation") >= 0) {
            objParam.MyTeam = "EC";
        }
    }
    Pay_Href = '';
    objParam.FinYear = finYear;
    objParam.FinMonth = finMonth;
    var ApproverCombId = 0;
    var BasedOnAttribute = GetAttributeBasedOnMoudle("ESS", "PAYSLIPS", "", "");
    if (BasedOnAttribute != "") {
        ApproverCombId = GetAttributeCombinationId("ESS", "PAYSLIPS", "", "", BasedOnAttribute);
    }
    else {
        ApproverCombId = 0;
    }
    var APIService = '../../route/api/';
    objParam.CombinationID = ApproverCombId;
    var data = CallAjaxWithReturnVal("Post", APIService + "GetPayslipName", objParam);
    if (data.Code == "1") {
        Pay_Href = data.Table1;
    }
    return Pay_Href;
}
function GetAttributeBasedOnMoudle(ModuleCode, SubModuleCode, ActionCode, ReasonCode) {
    objParamAttribute.ModuleCode = ModuleCode;
    objParamAttribute.SubModuleCode = SubModuleCode.toUpperCase();
    objParamAttribute.ActionCode = ActionCode;
    objParamAttribute.ReasonCode = ReasonCode;
    objParamAttribute.SubscriptionName = localStorage.TokenValue;// getCookie("SubscriptionName");

    if (ModuleCode == "EC") {
        var APIPath = "../../route/";
        var Attribute_Data = CallAjaxWithReturnVal("POST", APIPath + "Attribute/GetAttributeBasedConfig", objParamAttribute);
        if (Attribute_Data.Code == "1") {
            if (Attribute_Data.Table1 != null) {
                AttributeBasedOn = jQuery.parseJSON(Attribute_Data.Table1);
                if (AttributeBasedOn.length > 0) {
                    return AttributeBasedOn[0].AttributeBasedOn;
                }
            }
        }
    }
    else {
        var Attribute_Data = CallAjaxWithReturnVal("POST", API_Path + "Attribute/GetAttributeBasedConfig", objParamAttribute);
        if (Attribute_Data.Code == "1") {
            if (Attribute_Data.Table1 != null) {
                AttributeBasedOn = jQuery.parseJSON(Attribute_Data.Table1);
                if (AttributeBasedOn.length > 0) {
                    return AttributeBasedOn[0].AttributeBasedOn;
                }
            }
        }
        else if (Attribute_Data.Code == "0") {
            alert(Attribute_Data.Message);
        }
    }
}
function GetAttributeCombinationId(ModuleCode, SubModuleCode, ActionCode, ReasonCode, AttributeBasedOn) {
    objParamAttribute.ModuleCode = ModuleCode;
    objParamAttribute.SubModuleCode = SubModuleCode;
    objParamAttribute.ActionCode = ActionCode;
    objParamAttribute.ReasonCode = ReasonCode;
    objParamAttribute.AttributeUnitConfig = AttributeBasedOn;
    objParamAttribute.SubscriptionName = localStorage.TokenValue;

    if (ModuleCode == "EC") {
        var APIPath = "../../route/";
        var Attribute_Comb_Data = CallAjaxWithReturnVal("POST", APIPath + "Attribute/GetAttributeViaModule", objParamAttribute);
        if (Attribute_Comb_Data.Code == "1") {
            if (Attribute_Comb_Data.Table1 != null) {
                CombinationInfo = jQuery.parseJSON(Attribute_Comb_Data.Table1);
                if (CombinationInfo.length > 0) {
                    return CombinationInfo[0].CombinationID;
                }
            }
        }
        else {
            return "0";
        }
    }
    else {
        var Attribute_Comb_Data = CallAjaxWithReturnVal("POST", API_Path + "Attribute/GetAttributeViaModule", objParamAttribute);
        if (Attribute_Comb_Data.Code == "1") {
            if (Attribute_Comb_Data.Table1 != null) {
                CombinationInfo = jQuery.parseJSON(Attribute_Comb_Data.Table1);
                if (CombinationInfo.length > 0) {
                    return CombinationInfo[0].CombinationID;
                }
            }
        }
        else {
            return "0";
        }
    }
}
function getClaimEligibility() {
data = CallAjaxWithReturnVal("POST", API_Path + "Home/CDGetClaimEligibilityDetails", objParam);
}
function Loading(Mode) {
    if (Mode.toLowerCase() == "show") {
        $('.db-loader').show();
    }
    else if (Mode.toLowerCase() == "hide") {
        $('.db-loader').hide();
    }
}
// API Request Dashboard page end here //
