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
      left: "-50%"
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
      left: "-500px"
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

    // if ($(this).parent().attr('class') === "sec-50") {
    //   $('.widget-list').append('<section class="sec-50">' + $(this).parent().html() + '</section>');
    // } else {
    //   $('.widget-list').append('<section>' + $(this).parent().html() + '</section>');
    // }

    var widLength = $('.widget-list > section').length;
    var newArr = [];


    for (var i = 1; i < widLength + 1; i++) {
      console.log(newArr.push($('.widget-list section:nth-child(' + i + ') .main-markup > div').attr('class')));
    }

    console.log(newArr);

    if (jQuery.inArray($(this).parent().find('.main-markup > div').attr('class'), newArr) === -1) {
      if ($(this).parent().attr('class') === "sec-50") {
        $('.widget-list').append('<section class="sec-50">' + $(this).parent().html() + '</section>');
      } else {
        $('.widget-list').append('<section>' + $(this).parent().html() + '</section>');
      }
    } else {
      // alert("Widget Already present in the widget list");
    }








  });

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
    simulateTouch:false,
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
    simulateTouch:false,
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
    simulateTouch:false,
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
    simulateTouch:false,
  });




  if($(window).width() < 1200){
    var swiper = new Swiper('.small-card .swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 2,
      spaceBetween: 10,
      loop: true,
      autoHeight: true,
      simulateTouch:false,
    });
  }

  else if($(window).width() < 992){
    var swiper = new Swiper('.small-card .swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      autoHeight: true,
      simulateTouch:false,
    });
  }
  else{
    var swiper = new Swiper('.small-card .swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 2,
      spaceBetween: 10,
      loop: true,
      autoHeight: true,
      simulateTouch:false,
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

  $('.__basic2 .option-list').sortable({
    disabled: true
  })



  $(function() {
    $('.left-list,.right-list').sortable()
      .on('sortable:receive', function(e, ui) {
        var swiper = new Swiper('.swiper-container', {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          simulateTouch:false,
        });
        var swiper = new Swiper('.small-card .swiper-container', {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          slidesPerView: 3,
          spaceBetween: 20,
          simulateTouch:false,
        });
        var swiper = new Swiper('.moreLink-card .swiper-container', {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          slidesPerView: 4,
          spaceBetween: 20,
          simulateTouch:false,
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
    $('.main-content').addClass('theme-v' + Childno);


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





})
