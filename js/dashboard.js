$(document).ready(function() {

  /****************************************travel blog**************************************/

  //like btn

  $('.like-count').click(function() {
    $(this).toggleClass('active');
    var likeCount = parseInt($(this).find('.action-count').html());
    if ($(this).attr('class').indexOf('active') > 0) {
      $(this).find('.action-count').html(likeCount + 1);
    } else {
      $(this).find('.action-count').html(likeCount - 1);
    }
  })

  $('.more-option').click(function() {
    $('.more-option-block').fadeToggle();
  })

})