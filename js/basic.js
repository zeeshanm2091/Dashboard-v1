$(document).ready(function() {

  //inbox tab code
  $('.tab-title-item').click(function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    var tabNo = $(this).index() + 1;
    $('.tab-content').siblings().fadeOut();
    $('.tab-content:nth-child(' + tabNo + ')').fadeIn();
  })


})