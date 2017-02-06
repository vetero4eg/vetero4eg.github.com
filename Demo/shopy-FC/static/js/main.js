;
// Начинать писать отсюда!!!!
$(document).ready(function(){

	//Слайдер на главной
	$('.js-index-slider').bxSlider({
		pagerCustom: '.js-index-slider__pager',
		controls: false
	});

	//Слайдер карточки продукта при наведении
	$('.product-item__slider').bxSlider({
		pagerCustom: '.product-item__colors',
		controls: false
	});

	$('.sizes-list li').click(function(){
		$(this).siblings().removeClass('active');
		$(this).toggleClass('active');
	});

});
