$(document).ready(function() {
  alert('Задача решалась исходя из того, что данные карточек мы получаем неким json массивом, и что вся информация в каждой карточке может быть различной. Для простоты реализации тестовой задачи, но сохранения некой наглядности используется 2 различных набора контента для карточки. Также показалось логичным добавить подгрузку в список карточек по 5 штук по нажатию кнопки "ещё". Задача решена в рамках тех условий, в которых мне обычно приходилось работать. Исходника psd не предоставлялось, поэтому внешний вид карточки повторяется условно, преимущественно по структуре. Так как не указывалось, что должно происходить по клику на карточку, реализован переход по указанной в json ссылке.')

  $('.cardItem__title').textTailor({
    fit: false
  });

  $('.cardlist').append('<button class="cardlist__more">Ещё</button>');

  $('.cardlist__items .cardItem').eq(9).nextAll().hide().addClass('hide');


  $('.cardlist__more').click(function(){
    $('.cardItem.hide').slice(0, 5).removeClass('hide').fadeIn(700);

    if(!$('.cardItem').is('.hide')){
      $('.cardlist__more').addClass('hide').hide();
    }
  });

  $('.cardItem__bottomline i').click(function(event) {
    event.preventDefault();
    $(this).toggleClass('active');
  })

  $('.cardslider__items').slick({
    arrows: true,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 801,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });


});

ajax_get('./data/content.json',
  function(data) {
    var list = data,
        count = data.length;
    for(var i = 0; i < count; i++) {
      var iconLeft = data[i]['iconLeft'],
          iconRight = data[i]['iconRight'],
          img = data[i]['img'],
          iconLabel = data[i]['iconLabel'],
          label = data[i]['label'],
          title = data[i]['title'],
          text = data[i]['text'],
          userName = data[i]['userName'],
          rate = data[i]['rate'],
          votes = data[i]['votes'],
          cost = data[i]['cost'],
          href = data[i]['href'],
          path = 'img/';

    var item = '<a class="cardItem" href="' + href +'" target="_blank"><div class="cardItem__topline"><img class="cardItem__iconLeft" src="' + path + iconLeft + '" alt=""/><img class="cardItem__iconRight" src="' + path + iconRight + '" alt=""/></div><img class="cardItem__img" src="' + path + img + '" alt=""/><div class="cardItem__label-wrap"><img class="cardItem__iconLabel" src="' + path + iconLabel + '" alt=""/><p class="cardItem__label">' + label +'</p></div><h2 class="cardItem__title">' + title + '</h2><div class="cardItem__middleline"><p class="cardItem__username">' + userName + '</p><div class="cardItem__rate"><i class="fa fa-star" aria-hidden="true"></i><span class="cardItem__num">' + rate + '</span><span class="cardItem__votes">('+ votes + ')</span></div></div><div class="cardItem__bottomline"><i class="fa fa-heart" aria-hidden="true"></i><p class="cardItem__cost">' + cost +'</p></div></a>';

    $('.cardlist__items').append(item);
    $('.cardslider__items').append(item);
  }
});

function ajax_get(url, callback) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      //console.log('responseText:' + xmlhttp.responseText);
      try {
        var data = JSON.parse(xmlhttp.responseText);
      } catch (err) {
        console.log(err.message + " in " + xmlhttp.responseText);
        return;
      }
      callback(data);
    }
  };

  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
