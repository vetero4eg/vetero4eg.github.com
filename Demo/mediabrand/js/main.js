$(document).ready(function () {

  /**мобильное меню плагин*/
  var methods = {
  buttons:0,
    init : function(options) {

        var mpTemplate='<div class="mp__panel"><div class="mp__wr"><button class="mp__button mp__button-main"><span class="mp__line"></span></button></div></div><div class="mp__overlay"></div>';
        $('body').append(mpTemplate);

        if(options.navbar){
            $(options.navbar).addClass('mp__nav-panel mp__nav-panel_main');
          $('.mp__button-main').on('click', function(){
               // $('.mp__nav-panel').not('.mp__nav-panel_main').removeClass('mp--on');
              //  $('.mp__panel .mp__button').not(this).removeClass('mp--on');
            $(this).toggleClass('mp--on');
            $(options.navbar).toggleClass('mp--on');
            $(".mp__overlay").toggleClass('mp--on');
            return false;
          });
        }
        $(".mp__overlay").click( function() {
      $(this).removeClass('mp--on');
      $('.mp__button').removeClass('mp--on');
      $(options.navbar).removeClass('mp--on');
      return false;
    });
    },
    show : function( ) {
      $('.mp__panel').show();
    },
    hide : function( ) {
      $('.mp__panel').hide();
    },
    button : function(options) {

        methods.buttons++;

        var $button=$('<button class="mp__button mp__button-text '+
        'mp__button-'+methods.buttons+
        (options.center?' mp__button-text--center':'')+
        '">'+options.text+'</button>');

        $('.mp__wr').append($button);
/*
        $('.mp__wr').append('<button class="mp__button mp__button-text '+
          'mp__button-'+methods.buttons+
          (options.center?' mp__button-text--center':'')+
          '">'+options.text+'</button>');
*/

        if(options.navbar){
            $(options.navbar).addClass('mp__nav-panel mp__nav-panel_second mp__nav-panel_second-'+methods.buttons);
          $('.mp__button-'+methods.buttons).on('click', function(){
              //  $('.mp__nav-panel, .mp__panel .mp__button').removeClass('mp--on');
            $(this).toggleClass('mp--on');
            $(options.navbar).toggleClass('mp--on');
            $(".mp__overlay").toggleClass('mp--on');
            return false;
          });
        }

        $(".mp__overlay").click( function() {
      $(options.navbar).removeClass('mp--on');
      return false;
        });

        return $button;
    },

    notification:function(options){
  if($('.mp__notification', options.button).length){
    $('.mp__notification', options.button).html(options.value);
  } else {
    options.button.append('<div class="mp__notification">'+options.value+'</div>');
  }
}
};

$.mobilePanel = function(method) {
    if (methods[method]) {
        return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || ! method) {
        return methods.init.apply(this, arguments);
    } else {
        $.error( 'Метод с именем ' +  method + ' не существует' );
    }
};

/*меню*/
$.mobilePanel({navbar:'.header-nav'});
$.mobilePanel('button', {'text': '<a class="header__logo-mb" href="index.html"><img class="header__img" src="img/favicon/favicon-32x32.png" alt="logo mediabrand" title=""></a>'});
$.mobilePanel('button', {'text': '<a class="header-top__facebook" href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i><span>мы на facebook</span></a>', 'center': true});
$.mobilePanel('button', {'text': '<a class="header-top__enter" href="#">вход</a>', 'center': true});

  /** Слайдеры **/

    //слайдер спикеры на главной
    $('.spikers__slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      infinite: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 801,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });

    //слайдер победители на странице конкурса
    $('.photo-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true
    });

    //слайдер на карточке победителей
    $('.winner-popup__slidershow').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 7000,
      fade: true,
      asNavFor: '.winner-popup__slidernav'
    });

    $('.winner-popup__slidernav').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      centerPadding: '20px',
      centerMode: true,
      focusOnSelect: true,
      asNavFor: '.winner-popup__slidershow'
    });

    $('button.slick-arrow').html("");

  /*разворачивающиеся списки*/
    // click-item элементы
    $('.click-item__icon, .click-item__title').click(function() {
      $(this).parent().toggleClass('active');
      $(this).siblings('.click-item__content').slideToggle();
    });

    // свернуть/развернуть всё
    $('.winner-item__button').click(function() {
        var text = $(this).html();
      if(text != 'Свернуть всё'){
        $(this).addClass('active').html('Свернуть всё');
        $(this).parents('.winner-item__category').children('.click-item').not('.active').addClass('active').children('.click-item__content').slideDown();
      } else {
        $(this).removeClass('active').html('Развернуть всё');
        $(this).parents('.winner-item__category').children('.click-item').removeClass('active').children('.click-item__content').slideUp();
      }
    });

  /* попапы*/

  // победители

    function getNum(parent, child) {
      return $(parent).find(child).index();
    };

    function setNumActive(element, num) {
      return $(element).eq(num).addClass('active');
    }

    function disable(elements) {
      return $(elements).removeClass('active');
    }

    //табы победителей по годам
    $('.winner-tab .tabs__item').click(function() {
      var year = $(this).html();
      $('.winner-tab .tabs__item').removeClass('active');
      $(this).addClass('active');
      disable('.winner-item').hide();
      $('#' + year).addClass('active').show();
    });

    //показываем попап победителей
    $('.click-item__winner').on('click', function() {

      var popup = $(this).parent().siblings('.winner-popup');

      //уточняем клик
      var numWin = getNum('.click-item__content', this);
      var place = popup.find('.winner-popup__place');
      var tab = popup.find('.winner-popup__tab');
      var title = $(this).parent().siblings('.click-item__title').html();

      //задаем соответстующий title и таб и его контент
      popup.find('.winner-popup__title').html(title);
      disable('.winner-popup__place, .winner-popup__tab');
      setNumActive(tab, numWin);
      setNumActive(place, numWin);

      $('.winner-page').css("overflow", "hidden");
      popup.css("overflow-y", "auto");

      //вывод попапа
      popup.fadeIn(400).addClass('active');

      //смена табов на попапе победителей
      $('.winner-popup__tab').click(function() {
        disable('.winner-popup__place, .winner-popup__tab');
        $(this).addClass('active');
        var numTab = getNum('.winner-popup__tabs', '.active');
        setNumActive(place, numTab);
      });

      //навигация по номинациям через попап
      var popups = $('.click-item .winner-popup');
      var popupIndex = popups.index(popup);
      var prevLink = popup.find('.winner-popup__link:first-child');
      var nextLink = popup.find('.winner-popup__link:last-child');

      //делаем недоступными кнопки "предыдущая номинация" на первом попапе и "следующая" на последнем
      if(popups.eq(0).is('.active')){
          prevLink.css({
            'pointer-events': 'none',
            'cursor':'arrow',
            'opacity':'.5'
          });
        }
        if(popups.eq(-1).is('.active')){
          nextLink.css({
            'pointer-events': 'none',
            'cursor':'arrow',
            'opacity':'.5'
          });
        }

        //предыдущий/следующий попап
        $('.winner-popup__link').click(function(event) {
          event.preventDefault;
          $(this).parents('.winner-popup').find('.winner-popup__close').click();
          if($(this).is(':first-child')){
            popupIndex--;
          } else {
            popupIndex++;
          }
          popups.eq(popupIndex).parent('.click-item').find('.click-item__winner:first-child').click();
        });
    });

    //закрываем попап победителей
    $('.winner-popup__close , .winner-popup__link-more').click(function(event) {
      event.preventDefault();
      $(this).parents('.winner-popup').fadeOut(300).removeClass('active');
      $('.winner-page').css("overflow", "auto");
    });

    // попап программа, жюри, номинации

    $('.event-full__content, .bjuri-item, .cat-item').click(function() {
      $(this).next('.event-popup').fadeIn(500).css("overflow-y", "auto");
      $(this).parents('body').css("overflow", "hidden");
    });

    $('.event-popup__close').click(function() {
      $(this).parents('.event-popup').fadeOut(500);
      $(this).parents('body').css("overflow", "auto");
    });

});
