$(document).ready(function() {

  //****************************************************************************head menu code*******************************************************************//
  $('.menu-tab .menu-icon').click(function() {
    $(this).parent().find('.menu-main-content').animate({
      left: "0%"
    }, 300)
    $('.setting-menu').animate({
      left: "-100%"
    }, 300);
    $('.main-content').animate({
      left: "0px"
    }, 300)
  })

  $('.close-btn').click(function() {
    $(this).parent().animate({
      left: "-80%"
    }, 300)
  });

  $('.setting-icon').click(function() {
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

  $('.setting-menu .setting-head > .icon-wrong').click(function() {
    $('.setting-menu').animate({
      left: "-600px"
    }, 300)
    $('.main-content').animate({
      left: "0px"
    }, 300)
  })

  $('.accord-item-title').click(function() {
    $('.accord-item-title span.icon').toggleClass('icon-up');
    $(this).parent().siblings().find('.accord-item-title span.icon').removeClass('icon-up');
    $(this).parent().find('.accord-item-body').slideToggle();
    $(this).parent().siblings().find('.accord-item-body').slideUp();
  });

  $('.header-notification').click(function() {
    $('.noti-wrap').fadeToggle();
  });


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

  console.log(ListArr);
  console.log(newArr);


  // $('.widget-list section').droppable()
  //   .on('droppable:activate', function(e, ui) {
  //     // $(this).find('.main-markup > div').attr('class')
  //     console.log($(this).find('.main-markup > div').attr('class'));
  //   })



  $(function() {
    $('.widget-list').sortable({
        items: 'section',
        cancel: '.db-arrow,.newsCard-img-block,.delete-btn,.emp-filter-item,.card-head,div',
        activeClass: 'active'
      })
      .on('sortable:activate', function(e, ui) {


      // console.log($(this).find('.main-markup > div').attr('class'));

      // $('.widget-list').sortable({ disabled: true })




      })

  })






  // if (jQuery.inArray($('.widget-list').find('.main-markup > div').attr('class'), ListArr) === -1) {
  //   alert("not in the list")
  // }
  // else{
  //   alert("In the list")
  // }







  // console.log(mainList);

  // console.log(ListArr);

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


  $('.left-list,.right-list').sortable({
    items: 'section',
    cancel: '.db-arrow,.newsCard-img-block,.delete-btn,.emp-filter-item,.card-head',
    forcePlaceholderSize: true,
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
    $('.left-list,.right-list').sortable()
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
    $('.left-list,.right-list').sortable()
      .on('sortable:activate', function(e, ui) {
        $('section').css("z-index", "10")
      })
  })

  $(function() {
    $('.option-list').sortable()
      .on('sortable:activate', function(e, ui) {
        $('li').css("z-index", "10")
      })
  })








  //*************************************************************************drop down code***************************************************************************************************************//

  $('.selected-item').click(function() {
    $(this).parent().find('.dropdown-list').slideToggle();
  })

  $('.dropdown-item').click(function() {
    var selTxt = $(this).html();
    console.log(selTxt);
    $(this).parent().parent().find('.selected-item').html(selTxt);
    $(this).parent().slideUp();
  })



  //************************************************************************theme change code**************************************************************************************************************//



  $('.theme-item').click(function() {
    var Childno = $(this).index();
    $('.dashboard-page').attr('class', 'main-content dashboard-page theme-v' + Childno)


  })


  //***********************************************************************closing div code ***********************************************************************//

  $(document).mouseup(function(e) {
    var container = $(".dropdown-list");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.slideUp();
    }
  });


  $(document).mouseup(function(e) {
    var container = $(".noti-wrap");

    // if the target of the click isn't the container nor a descendant of the container
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

  $('.login-setup .theme-item').click(function() {
    var logChild = $(this).index() + 1;
    $('.login-page').attr('class', 'main-content login-page screen-' + logChild)
  });

  $('.overlay-setup .theme-item').click(function() {
    var logChild = $(this).index() + 1;
    $('.db-overlay').attr('class', 'db-overlay type-' + logChild)
  });



  //login title content

  $('.title-submit').click(function() {
    var loginTitle = $('.login-title').val();
    var loginSubtitle = $('.login-subtitle').val();
    var loginLinkTxt = $('.login-link-input').val();
    var loginLinkUrl = $('.login-link-url').val();

    $('.zingo-content span:nth-child(1)').html(loginTitle)
    $('.zingo-content span:nth-child(2)').html(loginSubtitle);
    $('.login-link').html(loginSubtitle);
    $('.login-link').attr('href', loginLinkUrl);
  })


  // $('.bgImg-list .theme-item').click(function() {
  //   // var Childno = $(this).index() + 1;
  //   // $('.login-page').css("background-image", "url(../images/bg" + Childno + ".jpg)")
  //
  //
  //
  //
  //
  // })

  //bg image upload code

  $('input[type="file"]').change(function(e) {
    var fileName = e.target.files[0].name;
    $('.img-display-block img').attr('src', "../images/" + fileName);
    $('.log-imgUplaod ').click(function() {
      $('.login-page').css("background-image", "url(../images/" + fileName + ")");
    })
  });



  $('.setting-pull').click(function() {




    $(this).toggleClass("active");

    if ($(this).attr('class') === "setting-pull active") {
      $('.setting-menu').animate({
        left: "0%"
      }, 300)

      $('.login-page').animate({
        left: "500px"
      }, 300)

      $(this).find('.icon').removeClass('icon-next')
      $(this).find('.icon').addClass('icon-setting')
    } else {
      $('.setting-menu').animate({
        left: "-500px"
      }, 300)
      $('.main-content').animate({
        left: "0px"
      }, 300)

      $(this).find('.icon').removeClass('icon-setting');
      $(this).find('.icon').addClass('icon-next ')
    }

  });


  $('.login-btn').click(function() {

  })








})
