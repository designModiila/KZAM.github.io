$(function() {
  $('.sliderImage').removeClass('load');
});

function eventTextChange(currentItem, stage) {

  if (stage === 'active') {
    if (currentItem.hasClass('active')) {

    } else  {
      currentItem.addClass('active');
      $('.sliderTextFloat').addClass('visible');
      $('.sliderTitleText span').text(currentItem.attr('data-title'));
      $('.sliderTextFloat p').text(currentItem.attr('data-text'));
    }
  } else if (stage === 'above-active'){
    if(currentItem.index() == 0){
      $('.sliderTextFloat').removeClass('visible');
      currentItem.removeClass('active');       
    } else {
      currentItem.removeClass('active'); 
    }
  } else if (stage === 'below-active'){
    if(currentItem.index() == sliderLength){
      $('.sliderTextFloat').removeClass('visible');
      currentItem.removeClass('active');       
    } else {
      currentItem.removeClass('active'); 
    }
  }
}

var $output = $('#output'),
  sliderLength = $('.sliderImageWrapper').children().length - 1,
  currentIndex = $('.sliderImageItem.active').index(),
  windowHalfHeight = $(window).height() / 2;

$('.sliderWrapperEnd').css('top', windowHalfHeight);

$(window).on('scroll', function() {
  $('.sliderImageItem').each(function() {
    var scrollTop = $(window).scrollTop(),
      elementOffsetTop = $(this).offset().top,
      elementHeight = $(this).height(),
      elementOffsetBottom = elementOffsetTop + elementHeight,
      distanceTop = Math.round(elementOffsetTop - (scrollTop + windowHalfHeight)),
      distanceBottom = Math.round(elementOffsetBottom - scrollTop);
    
    $output.prepend('<p>distanceTop :' + distanceTop + ' - height : ' + (distanceTop < -elementHeight) + '</p>');
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
    // $output.prepend('<p>Scroll-Down: ' + $(this).index() + ' : ' + distance + '</p>');
  });

});