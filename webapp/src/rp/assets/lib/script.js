


$(document).ready(function(){
  $('#header').load('../_include/header.html');
  $('#footer').load('../_include/footer.html');

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


  $(".content-tab-box").find("li a.active").click(function (e) {
    e.preventDefault()
      $('.content-tab-box').addClass("active");
    });


  var conListSwiper = new Swiper('.con-recent .swiper-container', {
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

  var product = $(".product.section04");
  var productTabNav = $(".product-tab-menu a")
  var productTabCon =  product.find(".product-tab-content > div");

  productTabCon.hide();
  productTabNav.click(function() {
    productTabCon.hide().filter(this.hash).fadeIn();
    productTabNav.parent('li').removeClass('active');
    $(this).parent('li').addClass('active');
    return false;
  }).filter(':eq(0)').click();

	var overviewImgSwiper = $('.overview-img-slide').find('.swiper-slide');
	var overviewTxtSwiper = $('.overview-txt-slide').find('.overview-txt-slide');

  var overviewImgSwiper = new Swiper('.overview-img-slide', {
    loop : true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    },
  });

  var overviewTxtSwiper = new Swiper('.overview-txt-slide', {
    loop : true,
    effect : 'fade',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
  });

  overviewImgSwiper.controller.control = overviewTxtSwiper;
  overviewTxtSwiper.controller.control = overviewImgSwiper;

});