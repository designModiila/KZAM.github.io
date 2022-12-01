$(document).ready(function(){
  AOS.init();
  Splitting();

  $(".splitting").each(function(){
		var text = this;
		$(this).find(".word").each(function(i){
			$(this).addClass("num"+i+" ")
			var i = i / 14
			$(this).css("animation-delay", (i + 0.3)+"s")
		})
	})

  // $(window).scroll(function(){
  //   if ($(window).scrollTop() >= 500) {
  //       $('.hedaer').addClass('fixed-header');
  //   }
  //   else {
  //       $('.header').removeClass('fixed-header');

  //   }
  // });

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    //console.log(scroll);
    if (scroll >= 350) {
      //console.log('a');
      $(".header").addClass("fixed-header");
      $('.scroll-top-btn').addClass("on");
    } else {
      //console.log('a');
      $(".header").removeClass("fixed-header");
      $('.scroll-top-btn').removeClass("on");
    }
  });


  var gnb = function () {
    $('.header, .depth_1 > li').on('mouseover focus', function () {
      $(this).addClass('on');
      if ($(this).children().hasClass('depth_2')) {
          $(this).parent('.header, .depth_1, .nav-bg').addClass('on');
      } else {
          $(this).parent('.header, .depth_1, .nav-bg').removeClass('on');
      }
    })

    $('.header, .depth_1 > li, .depth_2 > ul').on('mouseout blur', function () {
      $('.header').removeClass('on')
      $('.depth_1 > li').removeClass('on');
      $('.depth_1').removeClass('on');
    })
  }
  gnb();

  $('#fullpage').fullpage({
    navigation: true,
    scrollingSpeed:800,
    navigationTooltips: ['MAIN','BUSINESS','COMPANY','NEWS'],
    navigationPosition: 'left',
    afterLoad: function(anchorLink, index){
      if((index == 1) || (index == 3)){
        $('#fp-nav li a.active + .fp-tooltip').removeClass('dark');
        $('.nav ul li, .logo, .menu-btn .menu span').removeClass('dark');
      }else{
        $('#fp-nav li a.active + .fp-tooltip').addClass('dark');
        $('.nav ul li, .logo, .menu-btn .menu span').addClass('dark');
      }
      if(index == 3){
        $('.counter').counterUp({
          delay: 1,
          time: 1000
        });
      }
    },
    onLeave: function(anchorLink, direction){
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
  });

  var swiper = new Swiper(".main-slide-wrap", {
    speed: 1000,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    // autoplay: false,
    loop: true,
    effect : 'fade', 
    fadeEffect: { 
    crossFade: true 
    },
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



  $('.content-tab-box li a').click(function(){
    $('.content-tab-box li a').removeClass('active');
    $(this).addClass('active');
  });

  // var conImgSwiper = $('.img-list .swiper-container');
  // var conTxtSwiper = $('.txt-list .swiper-container');

  // var conImgSwiper = new Swiper('.img-list .swiper-container', {
  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'bullets',
  //     clickable: true,
  //   },
  // });
  // var conTxtSwiper = new Swiper('.txt-list .swiper-container', {
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  // });
  // conImgSwiper.controller.control = conTxtSwiper;
  // conTxtSwiper.controller.control = conImgSwiper;

    var conListSwiper = new Swiper('.con-list .swiper-container', {
      loop : true,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction"
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
  });

});