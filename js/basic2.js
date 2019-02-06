$(document).ready(function() {


  /*******top banner slider*****/
  var swiper = new Swiper('.basic-banner-slider .swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // autoHeight: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    }
  });

})