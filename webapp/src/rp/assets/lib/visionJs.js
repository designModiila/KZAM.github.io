$(function() {
  $('.slider-image').removeClass('load');
});

function eventTextChange(currentItem, stage) {

  if (stage === 'active') {
    if (currentItem.hasClass('active')) {

    } else  {
      currentItem.addClass('active');
      $('.slider-text-float').addClass('visible');
      $('.slider-title-text span').text(currentItem.attr('data-title'));
      $('.slider-text-float p').text(currentItem.attr('data-text'));
    }
  } else if (stage === 'above-active'){
    if(currentItem.index() == 0){
      $('.slider-text-float').removeClass('visible');
      currentItem.removeClass('active');       
    } else {
      currentItem.removeClass('active'); 
    }
  } else if (stage === 'below-active'){
    if(currentItem.index() == sliderLength){
      $('.slider-text-float').removeClass('visible');
      currentItem.removeClass('active');       
    } else {
      currentItem.removeClass('active'); 
    }
  }
  if($('.slider-image-item').hasClass('active')){

  }else{
    $('.slider-text-float').removeClass('visible');
  }
}

var sliderLength = $('.slider-image-wrapper').children().length - 1,
  currentIndex = $('.slider-image-item.active').index(),
  windowHalfHeight = $(window).height() / 2.8;


$(window).on('scroll', function() {
  $('.slider-image-item').each(function() {
    var scrollTop = $(window).scrollTop(),
      elementOffsetTop = $(this).offset().top,
      elementHeight = $(this).height(),
      elementOffsetBottom = elementOffsetTop + elementHeight,
      distanceTop = Math.round(elementOffsetTop - (scrollTop + windowHalfHeight)),
      distanceBottom = Math.round(elementOffsetBottom - scrollTop);

    if ((distanceTop < 0) && (distanceTop > -elementHeight)) {
      // If the Center of the viewport falls upon a element - Add active class
      eventTextChange($(this), 'active');
    } else if (distanceTop < -elementHeight) {
      //If the Center of the viewport drops below the element - Remove active class
      eventTextChange($(this), 'below-active');
    } else if (distanceTop > 0) {
      //If the Center of the viewport rises above the element - Remove active class
      eventTextChange($(this), 'above-active');
    }
  });

});