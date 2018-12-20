$(document).ready(function() {

  //****************************************************************************head menu code*******************************************************************//
  $('.menu-tab .menu-icon').click(function() {
    $(this).parent().find('.menu-main-content').animate({
      left: "0%"
    }, 300)
    $('.setting-menu').animate({
      left: "-500px"
    }, 300);
    $('.main-content').animate({
      left: "0px"
    }, 300)
  })






  $('.close-btn').click(function() {
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

  $('.login-page .close-btn').click(function() {
    $('.icon-setting').addClass('icon-next')
  });

  $('.setting-icon').click(function() {
    $('.setting-menu').animate({
      left: "0px"
    }, 300);
    $('.main-content').animate({
      left: "420px"
    }, 300);
    $('.left-block .menu-main-content').animate({
      left: "-50%"
    }, 300);
  })

  $('.icon-setting').click(function() {
    $('.dashboard-page .main-container').toggleClass('active');

  })

  $('.setting-menu .setting-head > .icon-wrong').click(function() {
    $('.setting-menu').animate({
      left: "-600px"
    }, 300)
    $('.main-content').animate({
      left: "0px"
    }, 300)
  })

  $('.setting-menu .setting-head > .icon-wrong').click(function() {
    $('.dashboard-page .main-container').toggleClass('active');


    $('.left-list,.right-list').sortable({
      disabled: true
    })



  })

  $('.accord-item-title').click(function() {
    $('.accord-item-title span.icon').toggleClass('icon-up');
    $(this).parent().siblings().find('.accord-item-title span.icon').removeClass('icon-up');

    $(this).parent().find('.accord-item-body').slideToggle();
    $(this).parent().siblings().find('.accord-item-body').slideUp();
  });

  $('.header-notification').click(function() {
    $('.noti-wrap').fadeIn();
  });

  $('.right-block .right-head-menu .menu-icon').click(function() {
    $('.right-block .menu-main-content').fadeIn()
  })



  //****************************************************************************attendance block******************************************************************//


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
  for (var i = 1; i <= monthDays[currMonth]; i++) {
    $('.attn-cal-list').append('<span class="cal-date"></span>')
  }



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



  $('.icon-setting').click(function() {

    var classArr = $('.main-container').attr('class').split(' ');
    console.log(classArr);
    if ($.inArray(classArr, ['active']) == -1) {
      console.log("working");



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



      $(function() {
        $('active .left-list,.right-list').sortable()
          .on('sortable:receive', function(e, ui) {
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




      $(function() {
        $('active .left-list,.right-list').sortable()
          .on('sortable:activate', function(e, ui) {
            $('section').css("z-index", "10");
            $('.delete-btn').click(function() {
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

      $(function() {
        $('.option-list').sortable()
          .on('sortable:activate', function(e, ui) {
            $('li').css("z-index", "10")
          })
      })
    } else {
      $('.delete-btn').hide()
    }


  })








  //****************************************************************************delete btn code*******************************************************************//

  $('.delete-btn').click(function() {
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
  var langArr = [];
  $('.selected-item').click(function() {
    $(this).parent().find('.dropdown-list').slideToggle();
    // console.log($(this).text());
  })

  $('.single-select .dropdown-item').click(function() {
    var selTxt = $(this).html();
    // console.log(selTxt);
    $(this).parent().parent().find('.selected-item').html(selTxt);
    $(this).parent().slideUp();
  })

  $('.multi-select .dropdown-item').click(function() {
    $(this).toggleClass('active');
    // console.log($(this).attr('class'));
    if ($(this).attr('class') === "dropdown-item active") {
      langArr.push($(this).text());
      $('.language-select .selected-item').text(langArr.toString());

    } else {
      langArr.splice(($.inArray($(this).text(), langArr)), 1);
      $('.language-select .selected-item').text(langArr.toString());
    }


  })

  var inputArr = [];
  $(document).mouseup(function(e) {
    var container = $(".openList");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      // console.log(langArr.length);
      // console.log("this is old array");
      // console.log(inputArr);
    }
  });

  $('.login-inputs .accord-item-title').click(function() {
    for (var i = 0; i < langArr.length; i++) {
      $('.login-inputs .accord-item-body .addonInput').append('<div class="theme-list accord-body-list' + " " + langArr[i] + '"> <div class="language-title">' + langArr[i] + '</div> <input type="text" class="login-fields login-title" placeholder="title"> <input type="text" class="login-fields login-subtitle" placeholder="subtitle"> <input type="text" class="login-fields login-link-input" placeholder="link text"> <input type="text" class="login-fields login-link-url" placeholder="link url"> <div class="db-error-mgs"> <span>*Please enter the required fields</span> </div> <div class="db-btn input-submit sub-btn"> <span>submit</span> </div> </div>')
    }
  });

  // $('.lan-list').click(function() {
  //   $('.addonInput').empty();
  // })






  //************************************************************************theme change code**************************************************************************************************************//

  $('.theme-item').click(function() {
    var Childno = $(this).index();
    $('.dashboard-page').attr('class', 'main-content dashboard-page theme-v' + Childno)
  })

  //***********************************************************************closing div code ***********************************************************************//

  $(document).mouseup(function(e) {
    var container = $(".dropdown-list");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.slideUp();
    }
  });


  $(document).mouseup(function(e) {
    var container = $(".noti-wrap");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.fadeOut();
    }

  });

  $(document).mouseup(function(e) {
    var container = $(".right-block .menu-main-content");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.fadeOut();
    }

  });


  //tab code


  $('.tab-title-item').click(function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    var tabNo = $(this).index() + 1;
    $('.tab-content').siblings().fadeOut();
    $('.tab-content:nth-child(' + tabNo + ')').fadeIn();
  })



  //*****************************************login page*************************//

  $('.re-me').click(function() {
    $(this).toggleClass('active');
  });
  $('.pass-eye').click(function() {
    $(this).toggleClass('icon-visibility')

    if ($(this).parent().find('input').attr('type') === "password") {
      $(this).parent().find('input').attr("type", "text")
    } else {
      $(this).parent().find('input').attr("type", "password")
    }
  })


  //login page setting page

  $('.login-setting-icon').click(function() {
    $(this).parent().find('.setting-menu').animate({
      left: "0%"
    }, 300)
    $('.login-page').animate({
      left: "500px"
    }, 300)
  });

  var logChild = 1;

  $('.login-setup .theme-item').click(function() {
    logChild = $(this).index() + 1;
    $('.login-page').attr('class', 'main-content login-page screen-' + logChild);

    if (logChild === 2 | logChild === 3) {
      $('.login-page .login-inputs').slideUp();
    } else {
      $('.login-page .login-inputs').slideDown();
    }

    if (logChild === 3) {
      $('.login-page .punch-opt').slideUp();
    } else {
      {
        $('.login-page .punch-opt').slideDown();
      }
    }
  });


  //*******************************************************************************Apply button****************************************************************//

  $('.app-btn').click(function() {
    $('.confirm-popup').addClass('active');
    $('.confirm-btn .db-btn').click(function() {
      $('.confirm-popup').removeClass('active');
    })
  })


  $('.confirm-popup .confirm-btn .btn-yes').click(function() {
    var appArr = [{
      screen: "screen-" + logChild,
      overlay: overlayColor,
      bgImg: $('.img-display-block > img').attr('src'),
      punch: punchInVal,
      companyCode: ccVal,
      effDate: {
        StartDate: $('.esStDate').val(),
        EndDate: $('.esEdDate').val()
      },
      inputFields: {
        title: loginTitle,
        subTitle: loginSubtitle,
        linkText: loginLinkTxt,
        linkUrl: loginLinkUrl
      },
      languages: langArr.toString()

    }];

    var basicColor = {
      "mainBgColor":$('body').css("background-color"),
      "mainHdBgColor":$('.db-head').css("background-color"),
      "mainHdText":$('.login-head .right-block .imp-link a').css("color"),
      "mainTitleTxt":$('.dashboard-page h4,.loginTitle').css("color"),
      "mainTxtColor":$('body').css("color")
    }


    console.log(basicColor);

    console.log(appArr);
  })

  //*******************************************************************************Apply button****************************************************************//


  $('.overlay-setup .theme-item').click(function() {
    var logChild = $(this).index() + 1;
    $('.db-overlay').attr('class', 'db-overlay type-' + logChild)
  });

  //login input content

  var loginTitle = $('.zingo-content .loginTitle').html();
  var loginSubtitle = $('.zingo-content .loginSubtitle').html();
  var loginLinkTxt = $('.login-link').html();
  var loginLinkUrl = $('.login-link').attr('href');

  // $('.login-title').attr('placeholder',loginTitle)
  // $('.login-subtitle').attr('placeholder',loginSubtitle)
  // $('.login-link-input').attr('placeholder',loginLinkTxt)
  // $('.login-link-url').attr('placeholder',loginLinkUrl)


  console.log(loginTitle);

  $('.input-submit').click(function() {
    loginTitle = $('.login-title').val();
    loginSubtitle = $('.login-subtitle').val();
    loginLinkTxt = $('.login-link-input').val();
    loginLinkUrl = $('.login-link-url').val();

    if ((loginTitle.length) && (loginSubtitle.length) && (loginLinkTxt.length) && (loginLinkUrl.length) > 0) {

      $('.zingo-content .loginTitle').html(loginTitle)
      $('.zingo-content .loginSubtitle').html(loginSubtitle);
      $('.login-link').html(loginLinkTxt);
      $('.login-link').attr('href', loginLinkUrl);
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
  })




  var imgName;
  $('input[type="file"]').change(function(e) {
    imgName = e.target.files[0].name;
    // console.log(imgName);
    $('.img-display-block > img').attr('src', "../images/" + imgName);
    var imgNameExt = $('.img-display-block > img').attr('src').split('.').pop().toLowerCase();
    if ($.inArray(imgNameExt, ['gif', 'png', 'jpg', 'jpeg', 'bmp']) == -1) {
      $('.img-display-block > img').attr('src', "../images/" + "bg1.jpg");
      alert("Please select the valid file format")
    } else {
      $('.login-page').css("background-image", "url(../images/" + imgName + ")");
      $('.log-imgUplaod ').click(function() {
        $('.login-page').css("background-image", "url(../images/" + imgName + ")");
      })
    }

  });




  $('.setting-pull').click(function() {
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



  $('.pre-btn,.btn-yes,.history-btn > .flat-btn:first-child').click(function() {
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

  $('.history-btn > .flat-btn').click(function() {
    $('.db-history-ListItem').siblings().find('.history-btn > .flat-btn').removeClass('sub-btn');
    $(this).addClass("sub-btn");
  })

  var punchInVal = 1;
  var ccVal = 1;


  // $('.db-toggle-btn').click(function() {
  //
  //   if($('.cc-opt.db-toggle-btn').attr('class').indexOf('disabled') > 0 ){
  //     return false;
  //   }
  //   else {$(this).toggleClass('active')}
  // })
  //
  //
  //
  // $('.punch-opt .db-toggle-btn').click(function() {
  //   $('.btn-group.punch').toggle(200);
  //   if ($(this).attr('class') === 'db-toggle-btn active') {
  //     punchInVal = 0
  //   }
  // })
  //
  // $('.cc-opt .db-toggle-btn').click(function() {
  //   $('.input-group.com-code').toggle(200);
  //   if ($(this).attr('class') === 'db-toggle-btn active') {
  //     ccVal = 0
  //   }
  // })

  $('.cc-opt .db-toggle-btn').click(function(){
    if($('.db-toggle-btn').attr('class').indexOf('disabled') > 0){
      return false
    }
    $(this).toggleClass('active');
    $('.input-group.com-code').toggle(200);
  })



  $('.punch-opt .db-toggle-btn').click(function(){
    if($('.db-toggle-btn').attr('class').indexOf('disabled') < 0){
      return false;
    }
    $(this).toggleClass('active');
    $('.btn-group.punch').toggle(200);
  })


  //****************************************************************************datepicker***************************************************************************



  //**********************colorpicker*************************







  $('.ctc-tab .card-head-title span').click(function() {
    if ($(this).index() === 0) {
      $(this).addClass('active')
      $('.ctc-body').fadeIn();
      $('.nonctc-body').fadeOut();
      $(this).siblings().removeClass('active')
    } else {
      $(this).addClass('active')
      $(this).siblings().removeClass('active');
      $('.nonctc-body').fadeIn();
      $('.ctc-body').fadeOut();
    }

  });


  // const pickr = new Pickr({
  //   el: '.color-picker1',
  //   default: '#42445A',
  //   components: {
  //     preview: true,
  //     opacity: true,
  //     hue: true,
  //     interaction: {
  //       hex: true,
  //       rgba: true,
  //       hsva: true,
  //       input: true,
  //       clear: true,
  //       save: true
  //     }
  //   }
  // });




  /*****new code for color picker******/


  var overlayColor;
  $('.overlay-setup .sub-btn').click(function() {
    overlayColor = $('.pickr-child').css("backgroundColor");
    $('.db-overlay').css({
      "background-color": overlayColor,
    })

  });

  $('.overlay-setup .color-block').ColorPicker({
    onShow: function(colpkr) {
      $(colpkr).fadeIn(500);
      return false;
    },
    onHide: function(colpkr) {
      $(colpkr).fadeOut(500);
      return false;
    },
    onChange: function(hsb, hex, rgb) {
      $('.overlay-setup .color-block .pickr-child').css('backgroundColor', '#' + hex);
    }
  });


  $('.bc-var .color-block').ColorPicker({
    onShow: function(colpkr) {
      $(colpkr).fadeIn(500);
      return false;
    },
    onHide: function(colpkr) {
      $(colpkr).fadeOut(500);
      return false;
    },
    onChange: function(hsb, hex, rgb) {
      $('.bc-var .color-block .pickr-child').css('backgroundColor', '#' + hex);
    }
  });

  $('.hdBc-var .color-block').ColorPicker({
    onShow: function(colpkr) {
      $(colpkr).fadeIn(500);
      return false;
    },
    onHide: function(colpkr) {
      $(colpkr).fadeOut(500);
      return false;
    },
    onChange: function(hsb, hex, rgb) {
      $('.hdBc-var .color-block .pickr-child').css('backgroundColor', '#' + hex);
    }
  });

  $('.hdTxt-var .color-block').ColorPicker({
    onShow: function(colpkr) {
      $(colpkr).fadeIn(500);
      return false;
    },
    onHide: function(colpkr) {
      $(colpkr).fadeOut(500);
      return false;
    },
    onChange: function(hsb, hex, rgb) {
      $('.hdTxt-var .color-block .pickr-child').css('backgroundColor', '#' + hex);
    }
  });

  $('.titTxt-var .color-block').ColorPicker({
    onShow: function(colpkr) {
      $(colpkr).fadeIn(500);
      return false;
    },
    onHide: function(colpkr) {
      $(colpkr).fadeOut(500);
      return false;
    },
    onChange: function(hsb, hex, rgb) {
      $('.titTxt-var .color-block .pickr-child').css('backgroundColor', '#' + hex);
    }
  });

  $('.txt-var .color-block').ColorPicker({
    onShow: function(colpkr) {
      $(colpkr).fadeIn(500);
      return false;
    },
    onHide: function(colpkr) {
      $(colpkr).fadeOut(500);
      return false;
    },
    onChange: function(hsb, hex, rgb) {
      $('.txt-var .color-block .pickr-child').css('backgroundColor', '#' + hex);
    }
  });



  $('.colour-setup .sub-btn').click(function() {
    var bcvar = $('.bc-var .pickr-child').css('background-color');
    var hdBcvar = $('.hdBc-var .pickr-child').css('background-color');
    var hdTxtvar = $('.hdTxt-var .pickr-child').css('background-color');
    var titTxtvar = $('.titTxt-var .pickr-child').css('background-color');
    var txtvar = $('.txt-var .pickr-child').css('background-color');
    var mainColors = {
      "background": bcvar,
      "headerBackground": hdBcvar,
      "headerText": hdTxtvar,
      "titleText": titTxtvar,
      "text": txtvar
    }

    console.log(mainColors);

    $('body').css("background-color", mainColors.background);
    $('.db-head').css("background-color", mainColors.headerBackground);
    $('.login-head .right-block .imp-link a,.login-head .right-block .imp-link a .icon,.lang-sel,.loginSubtitle,.login-link').css("color", mainColors.headerText);
    $('.dashboard-page h4,.loginTitle').css("color", mainColors.titleText);
  })

  $('.login-body-block .input-group input').focusout(function() {
    $(this).css("border-color", "red")
  })

  // $('.disabled').click(function() {
  //   $(this).removeClass('active')
  //   $(this).off("click");
  // })

  $('.db-toggle-btn').on('click', function() {
    if ( $(this).hasClass('active') ) {
        // do whatever when it's active.
    }
    return false;
});

$('.box-radius').change(function(){
  var radiusVal =  $(this).val();
  $('.action-box').css({"border-radius":radiusVal + "px"})
})


//************************************************************************range slider*****************************************************//

var radiusSlider = document.getElementById("radiusRange");
  radiusSlider.oninput = function() {
  radiusSlider.value = this.value;
  $('.bx-radius .action-box').css({"border-radius":radiusSlider.value + "px"})
}

var shadowSlider = document.getElementById("shadowRange");
  shadowSlider.oninput = function() {
  shadowSlider.value = this.value;
  $('.bx-shadow .action-box').css({"box-shadow":"0 0"+" "+shadowSlider.value+"px 2px"})
}

var borderSlider = document.getElementById("borderRange");
  borderSlider.oninput = function() {
  borderSlider.value = this.value;
  $('.bx-border .action-box').css({"border-width":borderSlider.value + "px"})
}

})




//************************************************************************popup block*****************************************************//

//***********************************************************************ctc tab *******************************************************//
