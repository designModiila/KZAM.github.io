$(document).ready(function(){
  AOS.init();

  $(window).scroll(function(){
    if ($(window).scrollTop() >= 500) {
        $('.company-tab-box').addClass('fixed-header');
        $('.header').hide();
    }
    else {
        $('.company-tab-box').removeClass('fixed-header');
        $('.header').show();

    }
});

  var gnb = function () {
    $('.header, .depth_1 > li').on('mouseover focus', function () {
      $(this).addClass('on');
      if ($(this).children().hasClass('depth_2')) {
          $(this).parent('.header, .depth_1').addClass('on');
      } else {
          $(this).parent('.header, .depth_1').removeClass('on');
      }
    })

    $('.header, .depth_1 > li, .depth_2 > ul').on('mouseout blur', function () {
      $('.header').removeClass('on')
      $('.depth_1 > li').removeClass('on');
      $('.depth_1').removeClass('on');
    })
  }
  gnb();

  function textMotion(){
    TweenMax.staggerTo($(".txt-box .visual-title1"), 0.5, {opacity: 1, top: 0, delay: 0.5, ease: Power1.easeInOut}, 0.1);
    TweenMax.staggerTo($(".txt-box .visual-title2"), 0.5, {opacity: 1, top: 0, delay: 0.8, ease: Power1.easeInOut}, 0.1);
  }

  function textMotionInit(){
    TweenMax.staggerTo($(".txt-box .visual-title1"), 0, {opacity: 0, top: '100px', ease: Power1.easeInOut});
    TweenMax.staggerTo($(".txt-box .visual-title2"), 0, {opacity: 0, top: '100px', ease: Power1.easeInOut});
  }


  $('#fullpage').fullpage({
    navigation: true,
    navigationTooltips: ['MAIN','BUSINESS','COMPANY','NEWS'],
    navigationPosition: 'left',
    afterLoad: function(anchorLink, index){
      jQuery('.section.active .aos-init').addClass("aos-animate");
      if((index == 1) || (index == 3)){
        $('#fp-nav li a + .fp-tooltip').css('color','#bbb');
        $('#fp-nav li a.active + .fp-tooltip').css('color','#fff');
        $('.nav ul li, .logo').css('color','#fff')
        $('.menu-btn .menu span').css('background','#fff');
      }else{
        $('#fp-nav li a + .fp-tooltip').css('color','#bbb');
        $('#fp-nav li a.active + .fp-tooltip').css('color','#222');
        $('.nav ul li, .logo').css('color','#222')
        $('.menu-btn .menu span').css('background','#222')
      }
      if(index == 1){
        textMotion();
        // $("header").removeClass("blur");
      }else{
        textMotionInit();
        // $("header").addClass("blur");
      }
      if(index == 3){
        $('.counter').counterUp({
          delay: 1,
          time: 1000
        });
      }
    },
    afterSlideLoad: function(){
      jQuery('.section.active [data-aos]').addClass("aos-animate");
    },
    onLeave: function(anchorLink, direction){
      jQuery('.section [data-aos]').removeClass("aos-animate");
      if((anchorLink == 1) && direction == 'down'){
        $('#fp-nav li a.active + .fp-tooltip').css('color','#bbb');
      }
      if((anchorLink == 1) && direction == 'up'){
        $('#fp-nav li a.active + .fp-tooltip').css('color','#222');
      }else{
        $('#fp-nav li a + .fp-tooltip').css('color','#bbb');
      }
      if((anchorLink == 2) && direction == 'up'){
        $("header").removeClass("blur");
      }
      if((anchorLink == 4) && direction == 'up'){
        $('.counter').counterUp({
          delay: 1,
          time: 1000
        });
      }
    },
    onSlideLeave: function(){
      jQuery('.section [data-aos]').removeClass("aos-animate");
    }
  });

  var swiper = new Swiper(".main-slide-wrap", {
    speed: 1000,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    // autoplay: false,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {
      init: function () {
        $(".swiper-progress-bar").removeClass("animate");
        $(".swiper-progress-bar").removeClass("active");
        $(".swiper-progress-bar").eq(0).addClass("animate");
        $(".swiper-progress-bar").eq(0).addClass("active");
      },
      slideChangeTransitionStart: function () {
        $(".swiper-progress-bar").removeClass("animate");
        $(".swiper-progress-bar").removeClass("active");
        $(".swiper-progress-bar").eq(0).addClass("active");
        textMotion();
        textMotionInit();
      },
      slideChangeTransitionEnd: function () {
        $(".swiper-progress-bar").eq(0).addClass("animate");
      },
    }
  });
  // $(".swiper-wrapper").hover(function () {
  //   swiper.autoplay.stop();
  //   $(".swiper-progress-bar").removeClass("animate");
  // }, function () {
  //   swiper.autoplay.start();
  //   $(".swiper-progress-bar").addClass("animate");
  // });
  
});