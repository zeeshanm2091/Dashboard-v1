$(document).ready(function() {

  //popup close btns

  $('.widget-setting').click(function() {
    $('.setting-widget-popup').fadeIn()
  })

  $('.setting-widget-popup .setting-close').click(function() {
    $('.setting-widget-popup').fadeOut()
  })

  //attribute popup code

  $('.db-attri-btn').click(function() {
    $('.attributes-popup').fadeIn();
  })

  $('.attributes-popup .setting-close').click(function() {
    $('.attributes-popup').fadeOut()
  })

  //attribute popup

  $('.publ-sel').click(function() {
    $('.attributesUnit-popup').fadeIn();
  })

  $('.attributesUnit-popup .setting-close').click(function() {
    $('.attributesUnit-popup').fadeOut()
  })

  //attribute btn

  $('.db-attri-item').click(function() {
    $(this).toggleClass('active');
  })

  //common dropdown code

  $('.db-select-item').click(function() {
    $(this).parent().find('.db-dropdown-list').slideToggle();
  })


  //new topic delete code

  $('.db-popup-body').on('click', '.his-delete-btn', function() {
    $(this).parent().parent().remove();
  })



  //edit btn code

  $('.db-popup-body').on('click', '.his-edit-btn', function() {
    $(this).parent().parent().find('.topic-his-left input').fadeToggle();
    if ($(this).attr('class').indexOf('editMode') > 0) {
      $(this).removeClass('editMode');
      $(this).addClass('saveMode');
      $(this).parent().parent().find('.topic-his-left input').val("");
    } else {
      $(this).removeClass('saveMode');
      $(this).addClass('editMode');
      var editInput = $(this).parent().parent().find('.topic-his-left input').val();
      var editInputCount = $(this).parent().parent().find('.topic-his-left input').val().length;
      if (editInputCount > 0) {
        $(this).parent().parent().find('.topic-his-left .top-his-name').html(editInput);
      }
    }
    var changeHis = $(this).parent().parent().find('.topic-his-left input').val();
    if ($(this).find('.icon').attr('class').indexOf('icon-edit') > 0) {
      $(this).find('.icon').removeClass('icon-edit')
      $(this).find('.icon').addClass('icon-upload')
    } else {
      $(this).find('.icon').addClass('icon-edit')
      $(this).find('.icon').removeClass('icon-upload')
    }
  })


  //new topic add code

  $('.news-title-inputBlock .add-btn-block').click(function() {
    var topicValCount = $('.news-title-inputBlock input').val().length;
    var topicVal = $('.news-title-inputBlock input').val();
    if (topicValCount > 0) {
      $('.topic-history-list').append('<div class="topic-history-item added"> <div class="topic-his-left"> <span class="top-his-name">' + topicVal + '</span> <input type="text"> </div> <div class="topic-his-right"> <div class="his-edit-btn active"><span class="icon icon-edit"></span></div> <div class="his-delete-btn"><span class="icon icon-delete"></span></div> </div> </div>')
      $('.news-title-inputBlock input').val(" ");

    }



  })





})