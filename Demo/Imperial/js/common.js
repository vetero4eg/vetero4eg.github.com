$(function() {
  $('<style>' + '.scrollTop{ display:none; z-index:9999; position:fixed;' + 'bottom:230px; right: 110px; width:77px; height:57px;' + 'background:url(i/top-button.png) 0 0 no-repeat; }' + '.scrollTop:hover{ opacity: .6;}' + '</style>').appendTo('body');
  var speed = 550,
    $scrollTop = $('<a href="#" class="scrollTop">').appendTo('body');
  $scrollTop.click(function(e) {
    e.preventDefault();
    $('html:not(:animated),body:not(:animated)').animate({
      scrollTop: 0
    }, speed);
  });

  //появление
  function show_scrollTop() {
    ($(window).scrollTop() > 330)
      ? $scrollTop.fadeIn(700)
      : $scrollTop.fadeOut(700);
  }
  $(window).scroll(function() {
    show_scrollTop();
  });
  show_scrollTop();

});
