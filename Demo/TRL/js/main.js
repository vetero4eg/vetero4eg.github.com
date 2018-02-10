$(document).ready(function() {
  var e = $(".sticky").css("top");
  $(window).scroll(function() {
    var t = $(".header").outerHeight(),
      n = $(".main__descr").outerHeight(!0),
      i = $(this).scrollTop();
    i >= t
      ? $(".aside").css("top", i)
      : $(".aside").css("top", 0),
    i >= n
      ? $(".sticky").css("top", i)
      : $(".sticky").css("top", e)
  }),
  $(".header__link").click(function() {
    event.preventDefault();
    var e,
      t = $(this).attr("href");
    "#left" == t
      ? e = ".aside--left"
      : "#right" == t && (e = ".aside--right"),
    $(e).toggleClass("active").siblings(".aside.active").removeClass("active")
  })
});