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


  //new topic add code

  $('.news-title-inputBlock .add-btn-block').click(function() {
    var topicValCount = $('.news-title-inputBlock input').val().length;
    var topicVal = $('.news-title-inputBlock input').val();
    if (topicValCount > 0) {
      $('.topic-history-list').append('<div class="topic-history-item"> <div class="topic-his-left"> <span class="top-his-name">' + topicVal + '</span> <input type="text"> </div> <div class="topic-his-right"> <div class="his-edit-btn active"><span class="icon icon-edit"></span></div> <div class="his-delete-btn"><span class="icon icon-delete"></span></div> </div> </div>')
      $('.news-title-inputBlock input').val(" ");
    }
  })

  //new topic delete code

  $('.his-delete-btn').click(function() {
    $(this).parent().parent().remove();
  })

  //edit btn code

  $('.his-edit-btn').click(function() {
    $(this).parent().parent().find('.topic-his-left input').fadeToggle();
    $(this).toggleClass('active');

    var changeHis = $(this).parent().parent().find('.topic-his-left input').val();

    console.log();

  })



})