$(document).ready(function() {
  /**************************************************tab code **********************************************************************************************/
  $('.sp-tab .tab-head-item').click(function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    var tabTitleNo = $(this).index() + 1;
    $('.sp-tab .sp-tab-body .sp-tab-content').fadeOut();
    $('.sp-tab .sp-tab-body .sp-tab-content:nth-child(' + tabTitleNo + ')').fadeIn();
  })
})



/******************************pai chart js****************************************************/
var options = {
  scaleColor: false,
  trackColor: '#ddd',
  barColor: 'green',
  lineWidth: 4,
  lineCap: 'butt',
  size: 40
};

window.addEventListener('DOMContentLoaded', function() {
  var charts = [];
  [].forEach.call(document.querySelectorAll('.chart'), function(el) {
    charts.push(new EasyPieChart(el, options));
  });

});