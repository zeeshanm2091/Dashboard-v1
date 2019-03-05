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



  $('.setting-icon').click(function() {
    $('.setting-menu').animate({
      left: "0px"
    }, 300);
    $('.main-content').animate({
      left: "350px"
    }, 300);
    $('.left-block .menu-main-content').animate({
      left: "-80%"
    }, 300);
  });




  $('.setting-swipe-btn .icon').click(function() {
    $(this).parent().toggleClass('active');
    if ($('.dashboard-page .db-body.main-container').attr('class').split(' ').pop() === 'deactive') {
      $('.dashboard-page .db-body.main-container').removeClass('deactive');
      $('.dashboard-page .db-body.main-container').addClass('active')
    } else {
      $('.dashboard-page .db-body.main-container').addClass('deactive');
      $('.dashboard-page .db-body.main-container').removeClass('active');
      $('.left-list,.right-list').sortable('destroy');
    }
  })

  $('.setting-menu .setting-head > .icon-wrong').click(function() {
    $('.setting-menu').animate({
      left: "-600px"
    }, 300)
    $('.main-content').animate({
      left: "0px"
    }, 300)
  })



  /***************setting accordion********************/




  $('.accord-item-title').click(function() {
    $('.accorrd-main-body').css({
      "right": "0px"
    })
    $('.widget-click-desc h4').html($(this).text());
  })

  $('.dashboard-page').on('click', '.theme-change-block .db-btn', function() {
    $('.accorrd-main-body').css({
      "right": "0px"
    })
    $('.widget-click-desc h5').html("Your customising theme");
    $('.widget-click-desc h4').html("theme");


    var themeTabNo;
    themeTabNo = parseInt($('.dashboard-page').attr('class').split(" ").pop().split("").pop());

    if (!isNaN(themeTabNo)) {
      $('.theme-list .theme-item:nth-child(' + themeTabNo + ')').addClass('active');
    }

  })


  $('.accord-closing .icon-back').click(function() {
    $(this).parent().parent().css({
      "right": "-350px"
    });
    $('.accord-main-content').empty();
    $(this).parent().parent().removeClass('no-pd')
  })


  /*****widget tab item******/

  $('.widget-btn').click(function() {
    $('.accord-main-content').append('<div class="accord-content-info"> <p>Select widget here to appear in your Portal Home for all users,data and widget actions will be changed based on the user role.</p> </div> <div class="accord-content"> <div class="accord-body-list widget-list"> <div class="widget-block-item wt-main-banner"> <div class="sp-widget-img"> <span class="icon icon-goals"></span> </div> <div class="sp-widget-title"> <h4>Banner</h4> </div> <span class="icon icon-ok-filled"></span> </div> <div class="widget-block-item wt-ol-fw"> <div class="sp-widget-img"> <span class="icon icon-goals"></span> </div> <div class="sp-widget-title"> <h4>option list (Full Width)</h4> </div> <span class="icon icon-ok-filled"></span> </div> <div class="widget-block-item wt-news"> <div class="sp-widget-img"> <span class="icon icon-tweets"></span> </div> <div class="sp-widget-title"> <h4>Company News</h4> </div> <span class="icon icon-ok-filled"></span> </div> <div class="widget-block-item wt-myTeam"> <div class="sp-widget-img"> <span class="icon icon-team"></span> </div> <div class="sp-widget-title"> <h4>My Team</h4> </div> <span class="icon icon-ok-filled"></span> </div> <div class="widget-block-item wt-wk-anni"> <div class="sp-widget-img"> <span class="icon icon-birthday"></span> </div> <div class="sp-widget-title"> <h4>Work Anniversary</h4> </div> <span class="icon icon-ok-filled"></span> </div> <div class="widget-block-item wt-bday"> <div class="sp-widget-img"> <span class="icon icon-birthday"></span> </div> <div class="sp-widget-title"> <h4>Birthdays &amp; Anniversary</h4> </div> <span class="icon icon-ok-filled"></span> </div> <div class="widget-block-item wt-all-bna"> <div class="sp-widget-img"> <span class="icon icon-birthday"></span> </div> <div class="sp-widget-title"> <h4>All</h4> </div> <span class="icon icon-ok-filled"></span> </div> <div class="widget-block-item wt-rnr"> <div class="sp-widget-img"> <span class="icon icon-winners"></span> </div> <div class="sp-widget-title"> <h4>Rewards &amp; Recognition</h4> </div> <span class="icon icon-ok-filled"></span> </div> <div class="widget-block-item my-goals-item"> <div class="sp-widget-img"> <span class="icon icon-goals"></span> </div> <div class="sp-widget-title"> <h4>My Goals</h4> </div> <span class="icon icon-ok-filled"></span> </div> <div class="widget-block-item wt-atten"> <div class="sp-widget-img"> <span class="icon icon-attendance"></span> </div> <div class="sp-widget-title"> <h4>Attendance</h4> </div> <span class="icon icon-ok-filled"></span> </div> <div class="widget-block-item wt-claim"> <div class="sp-widget-img"> <span class="icon icon-claims"></span> </div> <div class="sp-widget-title"> <h4>Claims</h4> </div> <span class="icon icon-ok-filled"></span> </div> <div class="widget-block-item wt-payslip"> <div class="sp-widget-img"> <span class="icon icon-payslip"></span> </div> <div class="sp-widget-title"> <h4>Payslips</h4> </div> <span class="icon icon-ok-filled"></span> </div> <div class="widget-block-item wt-pms"> <div class="sp-widget-img"> <span class="icon icon-payslip"></span> </div> <div class="sp-widget-title"> <h4>My PMS</h4> </div> <span class="icon icon-ok-filled"></span> </div> <div class="widget-block-item my-ln-summary"> <div class="sp-widget-img"> <span class="icon icon-learning"></span> </div> <div class="sp-widget-title"> <h4>My Learning summary</h4> </div> <span class="icon icon-ok-filled"></span> </div> <div class="widget-block-item my-learning-item"> <div class="sp-widget-img"> <span class="icon icon-learning"></span> </div> <div class="sp-widget-title"> <h4>My Learning</h4> </div> <span class="icon icon-ok-filled"></span> </div> <div class="widget-block-item wt-moreLink"> <div class="sp-widget-img"> <span class="icon icon-link"></span> </div> <div class="sp-widget-title"> <h4>More Links</h4> </div> <span class="icon icon-ok-filled"></span> </div> <div class="widget-block-item wt-inbox"> <div class="sp-widget-img"> <span class="icon icon-email"></span> </div> <div class="sp-widget-title"> <h4>My Inbox</h4> </div> <span class="icon icon-ok-filled"></span> </div> <div class="widget-block-item wt-ol"> <div class="sp-widget-img"> <span class="icon icon-goals"></span> </div> <div class="sp-widget-title"> <h4>option list</h4> </div> <span class="icon icon-ok-filled"></span> </div> <div class="widget-block-item wt-csr"> <div class="sp-widget-img"> <span class="icon icon-goals"></span> </div> <div class="sp-widget-title"> <h4>CSR</h4> </div> <span class="icon icon-ok-filled"></span> </div> <div class="widget-block-item wt-wellness"> <div class="sp-widget-img"> <span class="icon icon-goals"></span> </div> <div class="sp-widget-title"> <h4>Wellness</h4> </div> <span class="icon icon-ok-filled"></span> </div> <div class="widget-block-item wt-art"> <div class="sp-widget-img"> <span class="icon icon-goals"></span> </div> <div class="sp-widget-title"> <h4>Artisan</h4> </div> <span class="icon icon-ok-filled"></span> </div> </div> </div>');
  })



  $('.body-color').click(function() {
    $('.accord-main-content').append('<div class="accord-content-info"> <p>Select widget here to appear in your Portal Home for all users,data and widget actions will be changed based on the user role.</p> </div> <div class="accord-content"> <div class="accord-body-list"> <div class="color-change-block body-col-cng"> <div class="common-label">body colour</div> <div class="color-block"> <div class="pickr-child"></div> </div> </div> <div class="color-change-block header-col-cng"> <div class="common-label">Header colour</div> <div class="color-block"> <div class="pickr-child"></div> </div> </div> <div class="color-change-block headerTxt-col-cng"> <div class="common-label">header text colour</div> <div class="color-block"> <div class="pickr-child"></div> </div> </div> <div class="color-change-block main-col-cng"> <div class="common-label">main colour</div> <div class="color-block"> <div class="pickr-child"></div> </div> </div> </div> </div>')
  })

  $('.card-layout').click(function() {
    $('.accord-main-content').append('<div class="accord-content-info"> <p>Select widget here to appear in your Portal Home for all users,data and widget actions will be changed based on the user role.</p> </div> <div class="color-change-block card-col-cng"> <div class="common-label">card colour</div> <div class="color-block"> <div class="pickr-child"></div> </div> </div> <div class="color-change-block cardBorder-col-cng"> <div class="common-label">card border colour</div> <div class="color-block"> <div class="pickr-child"></div> </div> </div> <div class="accord-content"> <div class="accord-body-list"> <div class="card-layout-item bx-shadow"> <div class="card-action-block"> <div class="action-result"> <div class="action-box"></div> </div> <div class="action-values"> <div class="range-slider-container"><div class="common-label">box shadow</div> <input type="range" min="0" max="20" value="0" class="rangeSlider" id="shadowRange"> </div> <div class="range-slider-container"><div class="common-label">box radius</div> <input type="range" min="0" max="20" value="0" class="rangeSlider" id="radiusRange"> </div> <div class="range-slider-container"><div class="common-label">box border</div> <input type="range" min="1" max="5" value="0" class="rangeSlider" id="borderRange"> </div> </div> </div> </div> </div> </div>')
  })


  $('.theme-change-block .db-btn').click(function() {
    $('.accord-main-content').append('<div class="accord-content-info"> <p>Select widget here to appear in your Portal Home for all users,data and widget actions will be changed based on the user role.</p> </div><div class="accord-content"><div class="accord-body-list"><div class="theme-list accord-body-list"> <div class="theme-item theme-1"> <img src="../images/themes/dahsboard-theme1.jpg" alt=""> </div> <div class="theme-item theme-2"> <img src="../images/themes/dahsboard-theme2.jpg" alt=""> </div> <div class="theme-item theme-3"> <img src="../images/themes/dahsboard-theme3.jpg" alt=""> </div> <div class="theme-item theme-4"> <img src="../images/themes/dahsboard-theme4.jpg" alt=""> </div> <div class="theme-item theme-5"> <img src="../images/themes/dahsboard-theme5.jpg" alt=""> </div><div class="theme-item theme-6"> <img src="../images/themes/dahsboard-theme6.jpg" alt=""> </div><div class="theme-item theme-7"> <img src="../images/themes/dashboard-theme7.png" alt=""> </div><div class="theme-item theme-8"> <img src="../images/themes/dashboard-theme-8.png" alt=""> </div> </div></div></div>');
  })





  //************************************************************************range slider*****************************************************//

  $('.dashboard-page').on('input', '#shadowRange', function() {
    $('.bx-shadow .action-box,.com-card,.small-card,.newsCard').css({
      "box-shadow": "0 0" + " " + this.value + "px 0px"
    })
    $('.bdayAnn').css({
      "box-shadow": "none"
    })
  });


  $('.dashboard-page').on('input', '#radiusRange', function() {
    $('.bx-shadow .action-box,.com-card,.newsCard,.small-card,.wt-setting-list').css({
      "border-radius": this.value + "px"
    })
    $('.bdayAnn .delete-btn').css({
      "border-top-right-radius": this.value + "px"
    })
  });


  $('.dashboard-page').on('input', '#borderRange', function() {
    $('.bx-shadow .action-box,.com-card,.small-card,.newsCard').css({
      "border-width": this.value + "px"
    })
    $('.bdayAnn').css({
      "border-width": "0px"
    })
  });



  /*************************************card layout ************************************/


  $('.dashboard-page').on('click', '.card-layout', function() {

    $('.card-col-cng .pickr-child').css({
      "background": $('.com-card').css("background-color")
    })

    $('.cardBorder-col-cng .pickr-child').css({
      "background": $('.com-card').css("border-color")
    })

    $('.card-col-cng .color-block').ColorPicker({
      onShow: function(colpkr) {
        $(colpkr).fadeIn(500);
        return false;
      },
      onHide: function(colpkr) {
        $(colpkr).fadeOut(500);
        return false;
      },
      onChange: function(hsb, hex, rgb) {
        $('.body-color .card-col-cng .color-block .pickr-child').css('backgroundColor', '#' + hex);
        $('.dashboard-page .com-card,.card-block,.small-card,.com-card input[type=text],.rnr-award-img,.rnr-after,.newsCard').css('backgroundColor', '#' + hex);
        $('.com-card.bdayAnn').css('backgroundColor', 'transparent');
        $('.card-col-cng .pickr-child').css('backgroundColor', '#' + hex);
      }
    });

    $('.cardBorder-col-cng .color-block').ColorPicker({
      onShow: function(colpkr) {
        $(colpkr).fadeIn(500);
        return false;
      },
      onHide: function(colpkr) {
        $(colpkr).fadeOut(500);
        return false;
      },
      onChange: function(hsb, hex, rgb) {
        $('.com-card,.rnr-item').css('border-color', '#' + hex);
        $('.rnr-before').css('backgroundColor', '#' + hex);
        $('.cardBorder-col-cng .pickr-child').css('backgroundColor', '#' + hex);
      }
    });

  })

  /***********************************emp select code***********************************/

  $('.empConnect').on('click', '.sin-select', function() {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  })


  /*****************************color picker code *****************************************/


  $('.dashboard-page').on('click', '.body-color', function() {

    //initial colors
    $('.body-col-cng .pickr-child').css({
      "background": $('.dashboard-page').css("background-color")
    })

    $('.header-col-cng .pickr-child').css({
      "background": $('.db-head').css("background-color")
    })

    $('.headerTxt-col-cng .pickr-child').css({
      "background": $('.primary-head-bg').css("background-color")
    })

    $('.main-col-cng .pickr-child').css({
      "background": $('.primary-icon').css("color")
    })


    $('.body-col-cng .color-block').ColorPicker({
      onShow: function(colpkr) {
        $(colpkr).fadeIn(500);
        return false;
      },
      onHide: function(colpkr) {
        $(colpkr).fadeOut(500);
        return false;
      },
      onChange: function(hsb, hex, rgb) {
        $('.body-color .body-col-cng .color-block .pickr-child').css('backgroundColor', '#' + hex);
        $('.dashboard-page').css('backgroundColor', '#' + hex);
        $('.body-col-cng .pickr-child').css('backgroundColor', '#' + hex);
      }
    })

    $('.header-col-cng .color-block').ColorPicker({
      onShow: function(colpkr) {
        $(colpkr).fadeIn(500);
        return false;
      },
      onHide: function(colpkr) {
        $(colpkr).fadeOut(500);
        return false;
      },
      onChange: function(hsb, hex, rgb) {
        $('.db-head').css('backgroundColor', '#' + hex);
        $('.db-head').css('border-color', '#' + hex);
        $('.noti-count').css('color', '#' + hex);
        $('.header-col-cng .pickr-child').css('backgroundColor', '#' + hex);
      }
    })

    $('.headerTxt-col-cng .color-block').ColorPicker({
      onShow: function(colpkr) {
        $(colpkr).fadeIn(500);
        return false;
      },
      onHide: function(colpkr) {
        $(colpkr).fadeOut(500);
        return false;
      },
      onChange: function(hsb, hex, rgb) {
        $('.primary-head-text').css('color', '#' + hex);
        $('.primary-head-bg,.primary-text-bg').css('backgroundColor', '#' + hex);
        $('.setting-swipe-btn').css('border-color', '#' + hex)
        $('.headerTxt-col-cng .pickr-child').css('backgroundColor', '#' + hex);
      }
    })

    $('.card-col-cng .color-block').ColorPicker({
      onShow: function(colpkr) {
        $(colpkr).fadeIn(500);
        return false;
      },
      onHide: function(colpkr) {
        $(colpkr).fadeOut(500);
        return false;
      },
      onChange: function(hsb, hex, rgb) {
        $('.body-color .card-col-cng .color-block .pickr-child').css('backgroundColor', '#' + hex);
        $('.dashboard-page .com-card,.card-block,.small-card,.com-card input[type=text],.rnr-award-img,.rnr-after,.newsCard').css('backgroundColor', '#' + hex);
        $('.com-card.bdayAnn').css('backgroundColor', 'transparent');
        $('.card-col-cng .pickr-child').css('backgroundColor', '#' + hex);
      }
    });

    $('.cardBorder-col-cng .color-block').ColorPicker({
      onShow: function(colpkr) {
        $(colpkr).fadeIn(500);
        return false;
      },
      onHide: function(colpkr) {
        $(colpkr).fadeOut(500);
        return false;
      },
      onChange: function(hsb, hex, rgb) {
        $('.com-card').css('border-color', '#' + hex);
        $('.cardBorder-col-cng .pickr-child').css('backgroundColor', '#' + hex);
      }
    });

    $('.main-col-cng .color-block').ColorPicker({
      onShow: function(colpkr) {
        $(colpkr).fadeIn(500);
        return false;
      },
      onHide: function(colpkr) {
        $(colpkr).fadeOut(500);
        return false;
      },
      onChange: function(hsb, hex, rgb) {
        $('.primary-icon,.primary-font').css('color', '#' + hex);
        $('.primary-bg,').css('backgroundColor', '#' + hex);
        $('.primary-border').css('border-color', '#' + hex);

        $('.wt-main-block .db-btn').hover(function() {
          $(this).css('backgroundColor', '#' + hex);
          $(this).css('border-color', '#' + hex);
          var mainCrdCol = $('.wt-myGoals').css('backgroundColor');
          console.log(mainCrdCol);
          $(this).css('color', mainCrdCol)
        }, function() {
          $(this).css('backgroundColor', '')
          $(this).css('color', '#' + hex)
        });

        $('.main-col-cng .pickr-child').css('backgroundColor', '#' + hex);
      }
    });
  })


  /********************************banner image block**************************************/


  var imgName;
  $('.dashboard-page').on('change', '.slide-img-display input[type="file"]', function(e) {
    imgName = e.target.files[0].name;
    var imgSize = parseFloat((e.target.files[0].size / 1000).toPrecision(4));
    $('.slide-img-display').css('background-image', 'url(../images/' + imgName + ')');
    var imgNameExt = imgName.split(".").pop();
    console.log(imgNameExt);
    if ($.inArray(imgNameExt, ['gif', 'png', 'jpg', 'jpeg', 'bmp']) == -1) {
      $('.slide-img-display').css('background-image', 'url(../images/bg1.jpg)');
      alert("Please select the valid file format");
      if (imgSize > 500) {
        alert("Image size should not be more the 500kb.Your mage size is" + " " + imgSize + "Kb");
      }
    } else {
      $('.banner-img').css('background-image', 'url(../images/' + imgName + ')')
    }

  })


  /******************************banner card content change********************************************/

  $('.dashboard-page').on('keyup', '.banner-card-title textarea', function() {
    var titVal = $(this).val();
    $('.banner-title h2').html(titVal);
  })

  $('.dashboard-page').on('keyup', '.banner-card-text textarea', function() {
    var txtVal = $(this).val();
    $('.banner-text p').html(txtVal);
  })

  $('.dashboard-page').on('keyup', '.banner-card-link input', function() {
    var linkVal = $(this).val();
    $('.banner-desc-wrap').attr('href', "https://" + linkVal);
  })


  /***************notification tab code***************/

  $('.header-notification').click(function() {
    $('.noti-wrap').fadeIn();
  });

  $('.right-block .right-head-menu .menu-icon').click(function() {
    $('.right-block .menu-main-content').fadeIn()
  })



  /***************ctc tab code***************/

  $('.ctc-tab .card-head-title span').click(function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    console.log($(this).index() + 1);

    if ($(this).index() + 1 == 1) {
      $('.ctc-content-block:nth-child(2)').hide();
      $('.ctc-content-block:nth-child(1)').show();
    } else {
      $('.ctc-content-block:nth-child(2)').show();
      $('.ctc-content-block:nth-child(1)').hide();
    }

  })






  //****************************************************************************swiper code**********************************************************************//







  var swiper = new Swiper('.workAnni-card .db-slider.swiper-container', {
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

  var swiper = new Swiper('.db-slider.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
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


    var swiper = new Swiper('.workAnni-card .swiper-container', {
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
      spaceBetween: 10,
      loop: true,
      autoHeight: true,
      simulateTouch: false,
    });
  } else if ($(window).width() < 767) {
    var swiper = new Swiper('.workAnni-card .swiper-container', {
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



  //rnr swiper code

  if ($(window).width() < 767) {
    var swiper = new Swiper('.rnr-container.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 50,
      navigation: {
        nextEl: '.rnr-next',
        prevEl: '.rnr-prev',
      },
      autoHeight: false
    });
  }





  //****************************************************************************drag and drop code*************************************************************************//




  $('.setting-swipe-btn .icon').click(function() {

    var classArr = $('.dashboard-page .db-body.main-container').attr('class').split(' ');

    if ($.inArray(classArr, ['active']) == -1) {

      //dashboard-changes
      $('.active .left-list,.active .right-list').sortable({
        items: '.com-card,.bdayAnn',
        cancel: '.db-arrow,.newsCard-img-block,.com-filter-item,.noti-item-left,.noti-item-right,.tab-title-list,.noti-item-left,.noti-item-right',
        forcePlaceholderSize: true,
        connectWith: '.left-list,.right-list',
        disabled: false
      })

      if ($(window).width() < 992) {
        $('.left-list,.right-list,.divide-block,.widget-list').sortable('destroy')
      }

      $(function() {


        $('.active .left-list,.active .right-list').sortable()
          .on('sortable:receive', function(e, ui) {




            var swiper = new Swiper('.db-slider', {
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

            var swiper = new Swiper('db-slider.swiper-container', {
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
              simulateTouch: false,
            });

            var swiper = new Swiper('.workAnni-card .swiper-container', {
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


            var swiper = new Swiper('.mainBday-card .small-card .swiper-container', {
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
              slidesPerView: 3,
              spaceBetween: 20,
              simulateTouch: false,
              loop: true
            });


            var swiper = new Swiper('.moreLink-card .swiper-container', {
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
              slidesPerView: 4,
              spaceBetween: 20,
              simulateTouch: false,
              loop: true
            });

            var myswiper = new Swiper('.swiper-container.personal-blog-container', {
              navigation: {
                nextEl: '.personal-arrow-next',
                prevEl: '.personal-arrow-back',
              },
              loop: true,
              autoplay: {
                delay: 2000,
              }
            });

            $(".swiper-container").mouseenter(function() {
              myswiper.autoplay.stop();
            });

            $(".swiper-container").mouseleave(function() {
              myswiper.autoplay.start();
            });

            var swiper = new Swiper('.swiper-container.gallery-thumbs', {
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
              slidesPerView: 4,
              loop: true,
              spaceBetween: 2

            });

            if ($(window).width() < 767) {
              var swiper = new Swiper('.rnr-container.swiper-container', {
                slidesPerView: 1,
                spaceBetween: 50,
                navigation: {
                  nextEl: '.rnr-next',
                  prevEl: '.rnr-prev',
                },
                // loop: true,
                autoHeight: false
              });
            }

            $('.img-click').click(function() {
              $(this).addClass('active');
              $(this).siblings().removeClass('active');
              $(this).parent().parent().parent().find('.img-display').find('img').attr('src', $(this).find('img').attr('src'));

            });
          })
      })


      /************************************************on drag initiation functions***********************************************************************/

      $(function() {

        $('.active .left-list,.active .right-list').sortable()
          .on('sortable:receive', function(e, ui) {
            $('.db-left section,.db-right section').css("z-index", "10");
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

      })
    } else {
      $('.left-list,.right-list,.divide-block,.widget-list').sortable('destroy')
    }

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


  /*****************************************dropdown code****************************************************/

  $('.selected-item').click(function() {
    $(this).parent().find('.dropdown-list').slideToggle();
    $('.sin-select').siblings().removeClass('active');
  })

  $('.dropdown-item').click(function() {
    var selTxt = $(this).html();
    $(this).parent().parent().find('.selected-item').html(selTxt);
    $(this).parent().slideUp();
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

  $(document).mouseup(function(e) {
    var container = $(".wt-setting-list");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.removeClass('active');
    }
  });


  /************************************widget block***********************************/
  $('.widget-block-item').click(function() {
    $(this).toggleClass('active');
  })



  //new code

  /****************************************travel blog**************************************/

  //like btn

  $('.like-count,.bm-count').click(function() {
    $(this).toggleClass('active');
    var likeCount = parseInt($(this).find('.action-count').html());
    if ($(this).attr('class').indexOf('active') > 0) {
      $(this).find('.action-count').html(likeCount + 1);
    } else {
      $(this).find('.action-count').html(likeCount - 1);
    }
  })

  $('.share-count').click(function() {
    $('.more-option-block').fadeIn();
  })

  //close div on clicking outside

  $(document).click(function(e) {
    if ($(e.target).parents(".blog-action-item").length === 0) {
      $(".more-option-block").fadeOut();
    }
  });



  $('.img-click').click(function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $(this).parent().parent().parent().find('.img-display').find('img').attr('src', $(this).find('img').attr('src'));

  })


  var swiper = new Swiper('.swiper-container.gallery-thumbs', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 4,
    loop: true,
    spaceBetween: 2,
    // autoplay: {
    //   delay: 2000,
    // },
  });

  var myswiper = new Swiper('.swiper-container.personal-blog-container', {
    navigation: {
      nextEl: '.personal-arrow-next',
      prevEl: '.personal-arrow-back',
    },
    loop: true,
    // autoplay: {
    //   delay: 2000,
    // }
  });

  $(".swiper-container").mouseenter(function() {
    myswiper.autoplay.stop();
  });

  $(".swiper-container").mouseleave(function() {
    myswiper.autoplay.start();
  });


  $('input[type="file"]').change(function(e) {
    var fileName = e.target.files[0].name;
    $('.art-fileName').html(fileName)
  });


  /*************************************banner layout changes code **********************/



  $('.banner-layout').click(function() {
    $('.accorrd-main-body').addClass('no-pd');
    $('.accord-main-content ').append('<div class="accord-content"><div class="slide-accord"> <div class="slide-accord-item active"> <div class="slide-accort-title ot-pd"> <h4> <span class="slide-accored-arrow"></span> <span>Slider</span> <span class="ac-slide-no">1</span> </h4> <span class="slide-remove icon icon-cross"></span> </div> <div class="slide-accord-body"> <div class="slide-img"> <div class="slide-img-info"> <h4>Banner Image</h4> <p>Banner works best with an image with a size of 1400 x 380 pixels, crop your image before you upload it for a perfect fit</p> </div> <div class="slide-img-upload"> <div class="slide-img-display"><input type="file"> </div> <div class="slide-upload-info"> <h4>Click here to upload image</h4> </div> </div> <div class="slide-card-content"> <div class="slide-card-inputBlock banner-card-title"> <div class="slide-card-label"> <h4>Title</h4> <h5>Max 200 Characters</h5> </div> <div class="slide-card-inputContent"> <textarea name="name" rows="3" cols="80"></textarea> </div> </div> <div class="slide-card-inputBlock banner-card-text"> <div class="slide-card-label"> <h4>Text</h4> <h5>Max 500 Characters</h5> </div> <div class="slide-card-inputContent"> <textarea name="name" rows="3" cols="80"></textarea> </div> </div> <div class="slide-card-inputBlock banner-card-link"> <div class="slide-card-label"> <h4>Link</h4> </div> <div class="slide-card-inputContent"> <input type="text"> </div> </div> </div> </div> </div> </div> </div> <div class="slider-add-btn ot-pd"> <h4> <span class="icon icon-plus"></span> <span>Add Slider</span> </h4> </div></div>');

    $('.slide-accord .slide-accord-item:last-child .slide-accord-body').slideDown(100);
  })


  var slideChildNo;
  var bannerSwiper;

  $('.setting-menu').on('click', '.slider-add-btn', function() {

    var slideNo = $('.slide-accord .slide-accord-item').length + 1;
    console.log(slideNo);

    if (slideNo <= 5) {
      $('.slide-accord').append('<div class="slide-accord-item active"> <div class="slide-accort-title ot-pd"> <h4> <span class="slide-accored-arrow"></span> <span>Slider</span> <span class="ac-slide-no">' + slideNo + '</span> </h4><span class="slide-remove icon icon-cross"></span> </div> <div class="slide-accord-body"> <div class="slide-img"> <div class="slide-img-info"> <h4>Banner Image</h4> <p>Banner works best with an image with a size of 1400 x 380 pixels, crop your image before you upload it for a perfect fit</p> </div> <div class="slide-img-upload"> <div class="slide-img-display"> </div> <div class="slide-upload-info"> <h4>Click here to upload image</h4> </div> </div> <div class="slide-card-content"> <div class="slide-card-inputBlock banner-card-title"> <div class="slide-card-label"> <h4>Title</h4> <h5>Max 200 Characters</h5> </div> <div class="slide-card-inputContent"> <textarea name="name" rows="3" cols="80"></textarea> </div> </div> <div class="slide-card-inputBlock banner-card-text"> <div class="slide-card-label"> <h4>Text</h4> <h5>Max 500 Characters</h5> </div> <div class="slide-card-inputContent"> <textarea name="name" rows="3" cols="80"></textarea> </div> </div> <div class="slide-card-inputBlock banner-card-link"> <div class="slide-card-label"> <h4>Link</h4> </div> <div class="slide-card-inputContent"> <input type="text"> </div> </div> </div> </div> </div> </div>');

    } else {
      alert("you can only add five slides")
    }



    if (slideNo >= 2 && slideNo < 6) {
      //slide addition
      $('.banner-list').append('<div class="banner-list-item swiper-slide"> <div class="banner-img"></div> <div class="banner-desc-block"> <a href="javascript:;" class="banner-desc-wrap"> <div class="banner-title"> <h2>Banner title goes here' + '---------------' + slideNo + '</h2> </div> <div class="banner-text"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis maiores dolore saepe facere, at, quibusdam dolores molestias ut omnis quisquam expedita laboriosam ducimus eveniet? Tenetur similique id odio nobis, velit!</p> </div> </a> </div> </div>')

      bannerSwiper = new Swiper('.basic-banner-slider .swiper-container', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // loop: true,
        pagination: {
          el: '.banner-pagination',
        },
        simulateTouch: false,
        slideToClickedSlide: true
        // autoplay: {
        //   delay: 2000,
        // }
      });

      $('.swiper-pagination-bullet').fadeIn();
      $('.db-arrow').fadeIn();
    }

    $('.slide-accord .slide-accord-item').siblings().find('.slide-accord-body').slideUp();
    $('.slide-accord .slide-accord-item:last-child .slide-accord-body').slideDown();

    bannerSwiper.slideTo(slideNo, 1000, false);

  });


  $('.setting-menu').on('click', '.slide-accort-title', function() {
    $(this).parent().find('.slide-accord-body').slideToggle();
    $(this).parent().toggleClass('active');

    $(this).parent().siblings().find('.slide-accord-body').slideUp();
    $(this).parent().siblings().removeClass('active');

    slideChildNo = $(this).parent().index();
    // console.log(slideChildNo);
    bannerSwiper.slideTo(slideChildNo, 1000, false);
    // event.stopPropagation();
  });


  $('.setting-menu').on('click', '.slide-remove', function() {
    var delSlide = $(this).parent().parent().index() + 1;
    $(this).parent().parent().remove();
    $('.banner-list .banner-list-item:nth-child(' + delSlide + ')').remove();
    event.stopPropagation();


  })



  //************************************************************************theme change code**************************************************************************************************************//



  var allWidgetList = ["primary-newsCard", 'team-card', 'mainBday-card', 'rnr-card', "atten-card", "ctc-card", 'comp-card', 'pms-card', 'learnSumarry-card', "moreLink-card"];
  var fullWidthArr;
  var finalWtList = [];
  var finalWtList = finalWtList.concat(allWidgetList);

  function activeWidgets() {
    setTimeout(function() {
      //left widgets
      var widgetLeftlist = [];
      var leftListLen = $('.left-list .wt-main-block').length;
      for (var i = 1; i <= leftListLen; i++) {
        if ($('.left-list .wt-main-block:nth-child(' + i + ')').css('display') !== 'none') {
          widgetLeftlist.push($('.left-list .wt-main-block:nth-child(' + i + ') > *:nth-child(1)').attr('class').split(" ").pop());
        } else {

        }
      }

      //Right widgets
      var widgetRightlist = [];
      var rightListLen = $('.right-list .wt-main-block').length;
      for (var i = 1; i <= rightListLen; i++) {
        if ($('.right-list .wt-main-block:nth-child(' + i + ')').css('display') !== 'none') {
          widgetRightlist.push($('.right-list .wt-main-block:nth-child(' + i + ') > *:nth-child(1)').attr('class').split(" ").pop());
        } else {

        }
      }

      //top banner widgets
      fullWidthArr = [];
      for (var i = 1; i <= $('.fullwidth-top-block .com-card').length; i++) {
        if ($('.fullwidth-top-block .com-card:nth-child(' + i + ')').css('display') !== 'none') {
          fullWidthArr.push($('.fullwidth-top-block .com-card:nth-child(' + i + ')').attr('class').split(' ').pop());
        }
      }

      allWidgetList = widgetLeftlist.concat(widgetRightlist);
      finalWtList = allWidgetList.concat(fullWidthArr);
    }, 402);
  }



  $('.setting-menu').on('click', '.theme-item', function() {
    var Childno = $(this).index() + 1;
    $('.dashboard-page').attr('class', 'main-content dashboard-page theme-v' + Childno);
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.banner-setting-block').removeClass('active');



    //theme 1

    if (Childno === 1) {
      $('.newsCard').parent().removeClass('md-block');
      $('.db-body').slideDown();
      $('.banner-fw,.option-fw').slideUp();
      //left widget
      for (var i = 1; i <= $('.left-list .wt-main-block').length; i++) {
        if ($.inArray($('.left-list .wt-main-block:nth-child(' + i + ') >*').attr('class').split(" ").pop(), ['primary-newsCard', 'team-card', 'mainBday-card', 'rnr-card', 'goals-card']) === -1) {
          $('.left-list .wt-main-block:nth-child(' + i + ')').slideUp();
        } else {
          $('.left-list .wt-main-block:nth-child(' + i + ')').slideDown();
        }
      }
      //right widget
      for (var i = 1; i <= $('.right-list .wt-main-block').length; i++) {
        if ($.inArray($('.right-list .wt-main-block:nth-child(' + i + ') >*').attr('class').split(" ").pop(), ['atten-card', 'ctc-card', 'comp-card', 'pms-card', 'moreLink-card', 'learnSumarry-card', 'learnDetail-card']) === -1) {
          $('.right-list .wt-main-block:nth-child(' + i + ')').slideUp();
        } else {
          $('.right-list .wt-main-block:nth-child(' + i + ')').slideDown();
        }
      }

    }

    //theme 2

    if (Childno === 2) {
      $('.newsCard').parent().removeClass('md-block');
      $('.db-body').slideDown();
      $('.banner-fw,.option-fw').slideUp();
      //left widget
      for (var i = 1; i <= $('.left-list .wt-main-block').length; i++) {
        if ($.inArray($('.left-list .wt-main-block:nth-child(' + i + ') >*').attr('class').split(" ").pop(), ['primary-newsCard', 'team-card', 'mainBday-card', 'rnr-card']) === -1) {
          $('.left-list .wt-main-block:nth-child(' + i + ')').slideUp();
        } else {
          $('.left-list .wt-main-block:nth-child(' + i + ')').slideDown();
        }
      }
      //right widget
      for (var i = 1; i <= $('.right-list .wt-main-block').length; i++) {
        if ($.inArray($('.right-list .wt-main-block:nth-child(' + i + ') >*').attr('class').split(" ").pop(), ['option-list']) === -1) {
          $('.right-list .wt-main-block:nth-child(' + i + ')').slideUp();
        } else {
          $('.right-list .wt-main-block:nth-child(' + i + ')').slideDown();
        }
      }
    }

    //theme 3

    if (Childno === 3) {
      $('.banner-setting-block').addClass('active');
      $('.newsCard').parent().removeClass('md-block');
      $('.banner-fw,.option-fw').slideDown();

      //left widget
      for (var i = 1; i <= $('.left-list .wt-main-block').length; i++) {
        if ($.inArray($('.left-list .wt-main-block:nth-child(' + i + ') >*').attr('class').split(" ").pop(), []) === -1) {
          $('.left-list .wt-main-block:nth-child(' + i + ')').slideUp();
        } else {
          $('.left-list .wt-main-block:nth-child(' + i + ')').slideDown();
        }
      }
      //right widget
      for (var i = 1; i <= $('.right-list .wt-main-block').length; i++) {
        if ($.inArray($('.right-list .wt-main-block:nth-child(' + i + ') >*').attr('class').split(" ").pop(), []) === -1) {
          $('.right-list .wt-main-block:nth-child(' + i + ')').slideUp();
        } else {
          $('.right-list .wt-main-block:nth-child(' + i + ')').slideDown();
        }
      }

    }

    //theme 4

    if (Childno === 4) {
      $('.banner-setting-block').addClass('active');
      $('.newsCard').parent().removeClass('md-block');
      $('.option-fw').slideUp();
      $('.banner-fw').slideDown();



      //left widget
      for (var i = 1; i <= $('.left-list .wt-main-block').length; i++) {
        if ($.inArray($('.left-list .wt-main-block:nth-child(' + i + ') >*').attr('class').split(" ").pop(), ['inbox-card']) === -1) {
          $('.left-list .wt-main-block:nth-child(' + i + ')').slideUp();
        } else {
          $('.left-list .wt-main-block:nth-child(' + i + ')').slideDown();
        }
      }
      //right widget
      for (var i = 1; i <= $('.right-list .wt-main-block').length; i++) {
        if ($.inArray($('.right-list .wt-main-block:nth-child(' + i + ') >*').attr('class').split(" ").pop(), ['option-list']) === -1) {
          $('.right-list .wt-main-block:nth-child(' + i + ')').slideUp();
        } else {
          $('.right-list .wt-main-block:nth-child(' + i + ')').slideDown();
        }
      }

    }

    //theme 5

    if (Childno === 5) {
      $('.newsCard').parent().removeClass('md-block');
      $('.banner-fw,.option-fw').slideUp();
      //left widget
      for (var i = 1; i <= $('.left-list .wt-main-block').length; i++) {
        if ($.inArray($('.left-list .wt-main-block:nth-child(' + i + ') >*').attr('class').split(" ").pop(), ['primary-newsCard', 'team-card', 'mainBday-card', 'rnr-card']) === -1) {
          $('.left-list .wt-main-block:nth-child(' + i + ')').slideUp();
        } else {
          $('.left-list .wt-main-block:nth-child(' + i + ')').slideDown();
        }
      }
      //right widget
      for (var i = 1; i <= $('.right-list .wt-main-block').length; i++) {
        if ($.inArray($('.right-list .wt-main-block:nth-child(' + i + ') >*').attr('class').split(" ").pop(), ['option-list']) === -1) {
          $('.right-list .wt-main-block:nth-child(' + i + ')').slideUp();
        } else {
          $('.right-list .wt-main-block:nth-child(' + i + ')').slideDown();
        }
      }
    }

    //theme 6

    if (Childno === 6) {
      $('.newsCard').parent().addClass('md-block');

      console.log($('.newsCard').parent().attr('class'));

      $('.banner-fw,.option-fw').slideUp();
      //left widget
      for (var i = 1; i <= $('.left-list .wt-main-block').length; i++) {
        if ($.inArray($('.left-list .wt-main-block:nth-child(' + i + ') >*').attr('class').split(" ").pop(), ['team-card', 'inbox-card', 'primary-newsCard']) === -1) {
          $('.left-list .wt-main-block:nth-child(' + i + ')').slideUp();
        } else {
          $('.left-list .wt-main-block:nth-child(' + i + ')').slideDown();
        }
      }
      //right widget
      for (var i = 1; i <= $('.right-list .wt-main-block').length; i++) {
        if ($.inArray($('.right-list .wt-main-block:nth-child(' + i + ') >*').attr('class').split(" ").pop(), ['learnSumarry-card', 'anniSum-card']) === -1) {
          $('.right-list .wt-main-block:nth-child(' + i + ')').slideUp();
        } else {
          $('.right-list .wt-main-block:nth-child(' + i + ')').slideDown();

        }
      }
    }

    //theme 7

    if (Childno === 7) {
      $('.csr-card').parent().removeClass('md-block');

      console.log($('.newsCard').parent().attr('class'));

      $('.banner-fw,.option-fw').slideUp();
      //left widget
      for (var i = 1; i <= $('.left-list .wt-main-block').length; i++) {
        if ($.inArray($('.left-list .wt-main-block:nth-child(' + i + ') >*').attr('class').split(" ").pop(), ['team-card', 'mainBday-card', 'primary-newsCard']) === -1) {
          $('.left-list .wt-main-block:nth-child(' + i + ')').slideUp();
        } else {
          $('.left-list .wt-main-block:nth-child(' + i + ')').slideDown();
        }
      }
      //right widget
      for (var i = 1; i <= $('.right-list .wt-main-block').length; i++) {
        if ($.inArray($('.right-list .wt-main-block:nth-child(' + i + ') >*').attr('class').split(" ").pop(), ['csr-card', 'wellness-card', 'atten-card', 'ctc-card', 'artisan-card', 'anniSum-card']) === -1) {
          $('.right-list .wt-main-block:nth-child(' + i + ')').slideUp();
        } else {
          $('.right-list .wt-main-block:nth-child(' + i + ')').slideDown();

        }
      }
    }

    //theme 8
    if (Childno === 8) {
      $('.banner-setting-block').addClass('active');
      $('.newsCard').parent().removeClass('md-block');
      // $('.banner-fw,.option-fw').slideDown();
      $('.banner-fw').slideDown();

      //left widget
      for (var i = 1; i <= $('.left-list .wt-main-block').length; i++) {
        if ($.inArray($('.left-list .wt-main-block:nth-child(' + i + ') >*').attr('class').split(" ").pop(), []) === -1) {
          $('.left-list .wt-main-block:nth-child(' + i + ')').slideUp();
        } else {
          $('.left-list .wt-main-block:nth-child(' + i + ')').slideDown();
        }
      }
      //right widget
      for (var i = 1; i <= $('.right-list .wt-main-block').length; i++) {
        if ($.inArray($('.right-list .wt-main-block:nth-child(' + i + ') >*').attr('class').split(" ").pop(), []) === -1) {
          $('.right-list .wt-main-block:nth-child(' + i + ')').slideUp();
        } else {
          $('.right-list .wt-main-block:nth-child(' + i + ')').slideDown();
        }
      }

    }




    setTimeout(function() {
      if (Childno === 3 || Childno === 4) {


        fullWidthArr = [];
        for (var i = 1; i <= $('.fullwidth-top-block .com-card').length; i++) {
          if ($('.fullwidth-top-block .com-card:nth-child(' + i + ')').css('display') !== 'none') {
            fullWidthArr.push($('.fullwidth-top-block .com-card:nth-child(' + i + ')').attr('class').split(' ').pop());
          }
        }
      } else {
        fullWidthArr = [];
      }

    }, 401)

    /*********************************widget presence test*****************************/
    activeWidgets();


  })


  //******************************************************widget block item array code

  function wtActionBtnAct() {

    if (finalWtList.indexOf('banner-fw') >= 0) {
      $('.wt-main-banner').addClass('active')
    }

    if (finalWtList.indexOf('option-fw') >= 0) {
      $('.wt-ol-fw').addClass('active')
    }

    if (finalWtList.indexOf('option-list') >= 0) {
      $('.wt-ol').addClass('active')
    }

    if (finalWtList.indexOf('atten-card') >= 0) {
      $('.wt-atten').addClass('active')
    }

    if (finalWtList.indexOf('ctc-card') >= 0) {
      $('.wt-claim').addClass('active')
    }

    if (finalWtList.indexOf('workAnni-card') >= 0) {
      $('.wt-empCont').addClass('active')
    }

    if (finalWtList.indexOf('mainBday-card') >= 0) {
      $('.wt-bday').addClass('active')
    }

    if (finalWtList.indexOf('moreLink-card') >= 0) {
      $('.wt-moreLink').addClass('active')
    }

    if (finalWtList.indexOf('goals-card') >= 0) {
      $('.my-goals-item').addClass('active')
    }

    if (finalWtList.indexOf('learnDetail-card') >= 0) {
      $('.my-learning-item').addClass('active')
    }

    if (finalWtList.indexOf('learnSumarry-card') >= 0) {
      $('.my-ln-summary').addClass('active')
    }

    if (finalWtList.indexOf('team-card') >= 0) {
      $('.wt-myTeam').addClass('active')
    }

    if (finalWtList.indexOf('comp-card') >= 0) {
      $('.wt-payslip').addClass('active')
    }

    if (finalWtList.indexOf('pms-card') >= 0) {
      $('.wt-pms').addClass('active')
    }

    if (finalWtList.indexOf('comp-card') >= 0) {
      $('.wt-payslip').addClass('active')
    }

    if (finalWtList.indexOf('primary-newsCard') >= 0) {
      $('.wt-news').addClass('active')
    }

    if (finalWtList.indexOf('artisan-card') >= 0) {
      $('.wt-art').addClass('active')
    }

    if (finalWtList.indexOf('rnr-card') >= 0) {
      $('.wt-rnr').addClass('active')
    }

    if (finalWtList.indexOf('inbox-card') >= 0) {
      $('.wt-inbox').addClass('active')
    }

    if (finalWtList.indexOf('csr-card') >= 0) {
      $('.wt-csr').addClass('active')
    }

    if (finalWtList.indexOf('wellness-card') >= 0) {
      $('.wt-wellness').addClass('active')
    }

    if (finalWtList.indexOf('anniSum-card') >= 0) {
      $('.wt-all-bna').addClass('active')
    }
  }

  function wtActionBtnDeAct() {

    if (finalWtList.indexOf('banner-fw') < 0) {
      $('.wt-main-banner').removeClass('active')
    }

    if (finalWtList.indexOf('option-fw') < 0) {
      $('.wt-ol-fw').removeClass('active')
    }

    if (finalWtList.indexOf('option-list') < 0) {
      $('.wt-ol').removeClass('active')
    }

    if (finalWtList.indexOf('atten-card') < 0) {
      $('.wt-atten').removeClass('active')
    }

    if (finalWtList.indexOf('ctc-card') < 0) {
      $('.wt-claim').removeClass('active')
    }

    if (finalWtList.indexOf('workAnni-card') < 0) {
      $('.wt-empCont').removeClass('active')
    }

    if (finalWtList.indexOf('mainBday-card') < 0) {
      $('.wt-bday').removeClass('active')
    }

    if (finalWtList.indexOf('moreLink-card') < 0) {
      $('.wt-moreLink').removeClass('active')
    }

    if (finalWtList.indexOf('goals-card') < 0) {
      $('.my-goals-item').removeClass('active')
    }

    if (finalWtList.indexOf('learnDetail-card') < 0) {
      $('.my-learning-item').removeClass('active')
    }

    if (finalWtList.indexOf('learnSumarry-card') < 0) {
      $('.my-ln-summary').removeClass('active')
    }

    if (finalWtList.indexOf('team-card') < 0) {
      $('.wt-myTeam').removeClass('active')
    }

    if (finalWtList.indexOf('comp-card') < 0) {
      $('.wt-payslip').removeClass('active')
    }

    if (finalWtList.indexOf('pms-card') < 0) {
      $('.wt-pms').removeClass('active')
    }

    if (finalWtList.indexOf('comp-card') < 0) {
      $('.wt-payslip').removeClass('active')
    }

    if (finalWtList.indexOf('primary-newsCard') < 0) {
      $('.wt-news').removeClass('active')
    }

    if (finalWtList.indexOf('artisan-card') < 0) {
      $('.wt-art').removeClass('active')
    }

    if (finalWtList.indexOf('rnr-card') < 0) {
      $('.wt-rnr').removeClass('active')
    }

    if (finalWtList.indexOf('inbox-card') < 0) {
      $('.wt-inbox').removeClass('active')
    }

    if (finalWtList.indexOf('csr-card') < 0) {
      $('.wt-csr').removeClass('active')
    }

    if (finalWtList.indexOf('wellness-card') < 0) {
      $('.wt-wellness').removeClass('active')
    }

    if (finalWtList.indexOf('anniSum-card') < 0) {
      $('.wt-all-bna').removeClass('active')
    }
  }

  $('.dashboard-page').on('click', '.widget-btn', function() {

    activeWidgets();

    wtActionBtnAct();



  })

  /*****************************************widget setting btn code **********************************************************/

  $('.dashboard-page').on('click', '.wt-setting-dw .icon', function() {
    $(this).parent().find('.wt-setting-list').toggleClass('active');

  })

  $('.dashboard-page').on('click', '.wt-st-cust', function() {
    $('.setting-widget-popup').fadeIn();
  })

  $('.dashboard-page').on('click', '.wt-st-remove', function() {

    $(this).parent().parent().parent().parent().slideUp();
    var removeWt = $(this).parent().parent().parent().attr('class').split(' ').pop();

    for (var i = 0; i < finalWtList.length; i++) {
      if (removeWt === finalWtList[i]) {
        finalWtList.splice(i, 1)
      }
    }

    wtActionBtnDeAct()

  });

  /************************************widget btn action***********************************/

  $('.setting-menu').on('click', '.widget-block-item', function() {
    $(this).toggleClass('active');


    activeWidgets()

    if ($(this).attr('class').indexOf('active') >= 0) {
      $('.banner-setting-block').toggleClass('active');

    }








  });

  $('.setting-menu').on('click', '.wt-main-banner', function() {
    $('.banner-fw').fadeToggle();
  });

  $('.setting-menu').on('click', '.wt-ol-fw', function() {
    $('.option-fw').fadeToggle();
  });

  $('.setting-menu').on('click', '.wt-news', function() {
    $('.primary-newsCard').parent().fadeToggle();
  });

  $('.setting-menu').on('click', '.wt-myTeam', function() {
    $('.team-card').parent().fadeToggle();
  });

  $('.setting-menu').on('click', '.wt-wk-anni', function() {
    $('.workAnni-card').parent().fadeToggle();
  });

  $('.setting-menu').on('click', '.wt-bday', function() {
    $('.bdayAnn').fadeToggle();
  });

  $('.setting-menu').on('click', '.wt-rnr', function() {
    $('.rnr-card').parent().fadeToggle();
  });

  $('.setting-menu').on('click', '.my-goals-item', function() {
    $('.goals-card').parent().fadeToggle();
  });

  $('.setting-menu').on('click', '.wt-atten', function() {
    $('.atten-card').parent().fadeToggle();
  });

  $('.setting-menu').on('click', '.wt-claim', function() {
    $('.ctc-card').parent().fadeToggle();
  });

  $('.setting-menu').on('click', '.wt-payslip', function() {
    $('.comp-card').parent().fadeToggle();
  });

  $('.setting-menu').on('click', '.wt-pms', function() {
    $('.pms-card').parent().fadeToggle();
  });

  $('.setting-menu').on('click', '.my-ln-summary', function() {
    $('.learnSumarry-card').parent().fadeToggle();
  });

  $('.setting-menu').on('click', '.my-learning-item', function() {
    $('.learnDetail-card').parent().fadeToggle();
  });

  $('.setting-menu').on('click', '.wt-moreLink', function() {
    $('.moreLink-card').parent().fadeToggle();
  });

  $('.setting-menu').on('click', '.wt-inbox', function() {
    $('.inbox-card').parent().fadeToggle();
  });

  $('.setting-menu').on('click', '.wt-art', function() {
    $('.artisan-card').parent().fadeToggle();
  })

  $('.setting-menu').on('click', '.wt-ol', function() {
    $('.option-list').parent().fadeToggle();
  })

  $('.setting-menu').on('click', '.wt-csr', function() {
    $('.csr-card').parent().fadeToggle();
  })

  $('.setting-menu').on('click', '.wt-wellness', function() {
    $('.wellness-card').parent().fadeToggle();
  })

  $('.setting-menu').on('click', '.wt-all-bna', function() {
    $('.anniSum-card').parent().fadeToggle();
  })



  /*****************************************anniversary summary block**********************************************************/

  $('.bday-item .anni-type').html("Birthday");

  $('.anni-item .anni-type').html("Anniversary");

  $('.wk-anni-item .anni-type').html("Work Anniversary")


  $('.sum-tab-item').click(function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  })

  $('.bday-btn').click(function() {
    $('.anni-item').fadeOut(000);
    $('.wk-anni-item').fadeOut(000);
    $('.bday-item').fadeIn(200);
  });

  $('.anni-btn').click(function() {
    $('.bday-item').fadeOut(000);
    $('.wk-anni-item').fadeOut(000);
    $('.anni-item').fadeIn(200);
  })

  $('.wk-anni-btn').click(function() {
    $('.bday-item').fadeOut(000);
    $('.anni-item').fadeOut(000);
    $('.wk-anni-item').fadeIn(200);
  });

  $('.wk-all-btn').click(function() {
    $('.bday-item').fadeIn(200);
    $('.anni-item').fadeIn(200);
    $('.wk-anni-item').fadeIn(200);
  });


})