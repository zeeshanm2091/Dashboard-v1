$(document).ready(function() {

  //****************************************************************************head menu code*******************************************************************//
  $('.menu-icon').click(function() {
    $(this).parent().find('.menu-main-content').animate({
      left: "0%"
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
      left: "230px"
    }, 300);
  })

  $('.setting-menu .icon-wrong').click(function() {
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

  $(document).on('click', function(e) {
    if ($(e.target).closest(".header-notification").length === 0) {
      $(".noti-wrap").hide();
    }
  });

  //****************************************************************************delete btn code*******************************************************************//

  $('.delete-btn').click(function() {
    $(this).parent().remove();
    if ($(this).parent().attr('class') === "sec-50") {
      $('.widget-list').append('<section class="sec-50">' + $(this).parent().html() + '</section>');
    } else {
      $('.widget-list').append('<section>' + $(this).parent().html() + '</section>');
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
    autoHeight:true,
  });


  var swiper = new Swiper('.small-card .swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoHeight:true,

  });

  var swiper = new Swiper('.moreLink-card .swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 6,
    spaceBetween: 20,
    loop: true,
    autoHeight:true,

  });


  //****************************************************************************drag and drop code*************************************************************************//


  $('.left-list,.right-list').sortable({
    items: 'section',
    cancel: '.db-arrow,.newsCard-img-block,.delete-btn,.emp-filter-item',
    forcePlaceholderSize: true,
  })

  $('.divide-block').sortable({
    items: 'li',
    cancel: '.db-arrow,.newsCard-img-block,.delete-btn,.emp-filter-item',
    forcePlaceholderSize: true,
  })

  $('.widget-list').sortable({
    items: 'section',
    cancel: '.db-arrow,.newsCard-img-block,.delete-btn,.emp-filter-item',
    forcePlaceholderSize: true,
    connectWith: '.left-list,.right-list',
  });



  $(function() {
    $('.left-list,.right-list').sortable()
      .on('sortable:receive', function(e, ui) {
        var swiper = new Swiper('.swiper-container', {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
        var swiper = new Swiper('.small-card .swiper-container', {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          slidesPerView: 3,
          spaceBetween: 20,
        });
        var swiper = new Swiper('.moreLink-card .swiper-container', {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          slidesPerView: 6,
          spaceBetween: 20,
        });
      })

  })




  $(function() {
    $('.left-list,.right-list').sortable()
      .on('sortable:activate', function(e, ui) {
        $('section').css("z-index", "10")
      })
  })




//*************************************************************************drop down code***************************************************************************************************************//

$('.selected-item').click(function(){
  $(this).parent().find('.dropdown-list').slideToggle();
})

$('.dropdown-item').click(function(){
  var selTxt = $(this).html();
  console.log(selTxt);
  $(this).parent().parent().find('.selected-item').html(selTxt);
  $(this).parent().slideUp();
})





})

//
