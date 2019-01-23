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

  // $('.login-page .close-btn').click(function() {
  //   $('.icon-setting').addClass('icon-next')
  // });

  $('.setting-icon').click(function() {
    $('.setting-menu').animate({
      left: "0px"
    }, 300);
    $('.main-content').animate({
      left: "500px"
    }, 300);
    $('.left-block .menu-main-content').animate({
      left: "-50%"
    }, 300);
  })

  $('.setting-icon .icon-setting').click(function() {
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



  //****************************************************************************swiper code**********************************************************************//

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


  /**************personal blog code ******************/
  //travel blog slider

  // var galleryThumbs = new Swiper('.personal-blog .gallery-thumbs', {
  //   spaceBetween: 3,
  //   slidesPerView: 4,
  //   freeMode: true,
  //   watchSlidesVisibility: true,
  //   watchSlidesProgress: true,
  // });


  // var galleryTop = new Swiper('.personal-blog .gallery-top', {
  //   spaceBetween: 5,
  //   loop: true,
  //   effect: 'fade',
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  //   thumbs: {
  //     swiper: galleryThumbs
  //   }
  // });

  // var swiper = new Swiper('.personal-blog-container.db-slider', {
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  //   loop: true,
  //   autoHeight: true,
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },
  //   simulateTouch: false,
  // });





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



  $('.setting-icon .icon-setting').click(function() {

    var classArr = $('.main-container').attr('class').split(' ');

    if ($.inArray(classArr, ['active']) == -1) {
      //dashboard-changes

      $('.active .left-list,.active .right-list').sortable({
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
        connectWith: '.left-list,.right-list'
      });


      $('.__basic .option-list,.__basic2 .option-list,.menu-main-content .option-list').sortable({
        disabled: true
      })

      //dashboard-changes




      if ($(window).width() < 992) {
        $('.left-list,.right-list,.divide-block,.widget-list').sortable({
          disabled: true
        })

      }


      //dashboard-changes

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
            // dashboard-changes

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

            $('.img-click').click(function() {
              $(this).addClass('active');
              $(this).siblings().removeClass('active');
              $(this).parent().parent().parent().find('.img-display').find('img').attr('src', $(this).find('img').attr('src'));

            });

          })

      })



      //****************************************************************************delete btn code*******************************************************************//


      //
      var widLength = $('.widget-list > section').length;
      var newArr = [];

      console.log(widLength);

      console.log(newArr);
      for (var i = 1; i < widLength; i++) {
        console.log(newArr.push($('.widget-list section:nth-child(' + i + ') .main-markup > div').attr('class')));
      }

      $('.delete-btn').click(function() {

        // $('.widget-list section').find('.main-markup > div').each(function(index) {
        //   if (index > 0) {
        //     $(this).remove();
        //     // alert("working")
        //   }
        // });





        $(this).parent().remove();
        if (jQuery.inArray($(this).parent().find('.main-markup > div').attr('class'), newArr) === -1) {
          if ($(this).parent().attr('class') === "sec-50") {
            $('.widget-list').append('<section class="sec-50">' + $(this).parent().html() + '</section>');
          } else {
            $('.widget-list').append('<section>' + $(this).parent().html() + '</section>');
          }
        }
      });


      var mainListLeft = $('.left-list > section').length;
      var mainListRight = $('.right-list > section').length;

      var ListArr = [];

      for (var i = 1; i < mainListLeft + 1; i++) {
        console.log(ListArr.push($('.left-list section:nth-child(' + i + ') .main-markup > div').attr('class')));
      }

      for (var i = 1; i < mainListRight + 1; i++) {
        console.log(ListArr.push($('.right-list section:nth-child(' + i + ') .main-markup > div').attr('class')));
      }






      // new code

      // var sampleArr = [];
      // var widgetArr = [];
      // $('.delete-btn').click(function() {
      //   // $(this).removeClass('icon-wrong')
      //   // $(this).addClass('icon-plus-symbol')
      //   $(this).parent().remove();
      //   $('.widget-list').append('<section>' + $(this).parent().html() + '</section>');
      //   sampleArr.push($(this).parent().find('.main-markup > div').attr('class').split(" ").slice(-1)[0]);
      //   console.log(sampleArr);
      //
      //
      //   for (var i = 0; i < $('.widget-list section').length; i++) {
      //     widgetArr.push($('.widget-list section:nth-child(' + i + 1 + ')').find('.main-markup > div').attr('class').split(" ").slice(-1)[0])
      //   }
      //   console.log(widgetArr);
      //
      //   console.log($('.widget-list section').length);
      //
      //
      //
      //
      // })

      //
      // $('.delete-btn.icon-plus-symbol').click(function() {
      //   $(this).removeClass('icon-plus-symbol')
      //   $(this).addClass('icon-wrong')
      //   $(this).parent().remove();
      //   $('.widget-list').append('<section>' + $(this).parent().html() + '</section>')
      // })



      /************************************************on drag initiation functions***********************************************************************/

      $(function() {
        $('.active .left-list,.active .right-list').sortable()
          .on('sortable:receive', function(e, ui) {
            //changes




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



            // console.log('active');

            // $('.delete-btn').click(function() {
            //   // $(this).removeClass('icon-wrong')
            //   // $(this).addClass('icon-plus-symbol')
            //   $(this).parent().remove();
            //   $('.widget-list').append('<section>' + $(this).parent().html() + '</section>');
            //   sampleArr.push($(this).parent().find('.main-markup > div').attr('class').split(" ").slice(-1)[0]);
            //   console.log(sampleArr);
            // })

            // $('.delete-btn').click(function() {
            //   $(this).parent().remove();
            //   $('.widget-list').append('<section>' + $(this).parent().html() + '</section>')
            // })

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






  //************************************************************************theme change code**************************************************************************************************************//

  $('.theme-item').click(function() {
    var Childno = $(this).index();
    $('.dashboard-page').attr('class', 'main-content dashboard-page theme-v' + Childno);

    $(this).addClass('active');
    $(this).siblings().removeClass('active');
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

  //bookmark
  // $('.blog-bm').click(function() {
  //   $(this).toggleClass('active')
  // })

  //personal blog slider

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
    spaceBetween: 2
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




  // $('.widget-list section').each(function(index) {
  //   if (index > 0) {
  //     $(this).remove();
  //   }
  // });

  $('input[type="file"]').change(function(e) {
    var fileName = e.target.files[0].name;
    // alert('The file "' + fileName + '" has been selected.');
    $('.art-fileName').html(fileName)
  });



})