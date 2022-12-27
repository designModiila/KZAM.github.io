$(document).ready(function(){
  AOS.init({
    once: true,
  });
  Splitting();

  $(".splitting").each(function(){
		var text = this;
		$(this).find(".word").each(function(i){
			$(this).addClass("num"+i+" ")
			var i = i / 5
			$(this).css("animation-delay", (i + 0.5)+"s")
		})
	});

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 350) {
      $(".header").addClass("fixed-header");
      $('.scroll-top-btn').addClass("on");
    } else {
      $(".header").removeClass("fixed-header");
      $('.scroll-top-btn').removeClass("on");
    }
  });

  function counterUp(){
    var counterUp = window.counterUp["default"];
    var $counters = $(".counter");
    $counters.off().each(function (ignore, counter) {
      var waypoint = new Waypoint( {
        element: $(this),
        handler: function() { 
          counterUp(counter, {
            duration: 2500,
            delay: 16
          }); 
          this.destroy();
        },
        offset: 'bottom-in-view',
      } );
    });
  }



  var $fullpage = $('#fullpage');
  $('#fullpage').fullpage({
    navigation: true,
    autoScrolling: true,
    scrollingSpeed:800,
    navigationTooltips: ['MAIN','BUSINESS','COMPANY','NEWS'],
    navigationPosition: 'left',
    responsiveWidth: 768,
    afterLoad: function(anchorLink, index){
      setTimeout(function () {
        $('.fp-table.active').addClass('loaded');
      }, 2500);
      $('.full'+index).addClass('ani');
      if((index == 1) || (index == 3)){
        $(".header").removeClass("dark");
        $('#fp-nav li a.active + .fp-tooltip').removeClass('dark');
       // $('.nav ul li, .logo, .menu-btn .menu span').removeClass('dark');
      }else{
        $(".header").addClass("dark");
        $('#fp-nav li a.active + .fp-tooltip').addClass('dark');
     //   $('.nav ul li, .logo, .menu-btn .menu span').addClass('dark');
      }
      if(index == 3){
        counterUp();
      }
    },
    onLeave: function(anchorLink, index, direction){
      if((anchorLink == 2) && direction == 'up'){
        $("header").removeClass("blur");
      }
      if((anchorLink == 4) && direction == 'up'){
        // counterUp();
      }
    },
    
  });


var chkScrollPages = function chkScrollPages() {
  var scrollTop = $(window).scrollTop();
  var $target = $fullpage.find('.section');
  var $body = $('body');
  var currentNum = 0;
  $target.each(function (idx, item) {
    // console.log(idx, item);
    var $target = $(item);
    var targetOffsetTop = $target.offset().top;
    $body.removeClass("fp-viewing-".concat(idx));

    if (scrollTop >= targetOffsetTop) {
      //console.log('idx : ', idx);
      //$body.addClass(`fp-viewing-${idx}`);
      if (!$target.hasClass('loaded') && idx === 4) {
        counterUp();
      }
      $target.addClass('loaded');
      currentNum = idx;
    }
  });
  $body.addClass("fp-viewing-".concat(currentNum));
};
chkScrollPages();
$(window).on('scroll', function (e) {
  chkScrollPages();
});
  var mainMenu = function () {
    $('.header .header-wrap .nav, .header .header-wrap .nav > ul > li').on('mouseover focus', function () {
      $('.header').addClass('on');
      if ($(this).children().hasClass('depth_2')) {
          $(this).addClass('on');
      } else {
          $(this).removeClass('on');
      }
    });
    $('.header .header-wrap .nav, .header .header-wrap .nav > ul > li').on('mouseout', function () {
        $('.header').removeClass('on')
        $('.depth_1 > li').removeClass('on');
        $('.nav').removeClass('on');
    });
  }
  mainMenu();
  // var mainMenu = function () {
  //   $('.header, .depth_1 > li').on('mouseover focus', function () {
  //     $(this).addClass('on');
  //     if ($(this).children().hasClass('depth_2')) {
  //         $(this).parents('.header, .nav').addClass('on');
  //     } else {
  //         $(this).parents('.header, .nav').removeClass('on');
  //     }
  //     if($('#gnb').hasClass('open') === true){
  //       $('#header').removeClass('on');
  //     }
  //   })

  //   $('.header, .depth_1 > li, .depth_2 > ul').on('mouseout', function () {
  //     $('.header').removeClass('on')
  //     $('.depth_1 > li').removeClass('on');
  //     $('.nav').removeClass('on');
  //   })
  // }
  // mainMenu();

  var gnb = function (){
    $('.menu, .close-btn').click(function(){
      $('#gnb').toggleClass('open');
      $('#gnb h2').removeClass('active');
      $('.gnb-depth2').removeClass('open');
    });
  }
  gnb();



  window.onresize = function() {
    checkWidth();
  }
  checkWidth();
  
  function checkWidth() {
    var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    if (vw < 1024) {
      $('#gnb h2').click(function(){
        $('#gnb h2').removeClass('active');
        $('.gnb-depth2').removeClass('open');
        $(this).toggleClass('active');
        $(this).parent('li').find('.gnb-depth2').addClass('open');
      });
    }
  }
  // var waypoint1 = new Waypoint({
  //   element: document.getElementById('waypoint1'),
  //   handler: function(direction) {
  
  //     if (direction == "up") {
  //       counter.reset();
  //     } else {
  //       counter.start();
  //     }
  //   },
  //   offset: '50%'
  // });


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


  $(".content-tab-box").find("li a.active").click(function (e) {
    e.preventDefault()
    $('.content-tab-box').toggleClass("active");
  });

  $(".affiliate-tabs").find("li").click(function(){
    var tab_id = $(this).attr('data-tab');

    $(".affiliate-tabs li").removeClass('current');
    $(".affiliate-content").removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  });

  //국내 해외 계열사
  function layerPopup(){
    var popup = $('.wrap-layer');
    var layerBg = $('.layer-dimm');
    var btnOpenPopup = $('.layer-open');
    var btnClosePopup = $('.btn-close');
    btnOpenPopup.each(function(){
        $(this).click(function(e){
            e.preventDefault();
            var btnData = $(this).data("value");
            popup.fadeOut();
            $('.wrap-layer.'+btnData).fadeIn();
            layerBg.fadeIn();
            // modalTop = $('.wrap-layer.'+btnData).height() / 2
            // modalLeft = $('.wrap-layer.'+btnData).width() / 2
            // $('.wrap-layer.'+btnData).center();
            // console.log(btnData);          
            // $('body').append('<div class="dim"></div>');
            $('body').css('overflow-y','hidden');
            // var dim = $('body').find('.dim');
            // dim.click(function(e){
            //     e.preventDefault();
            //     popup.fadeOut();
            //     $('.dim').remove();
            //     $('body').css('overflow-y','auto')
            // })        
        })
    })
    btnClosePopup.click(function(e){
        e.preventDefault();
        popup.fadeOut();
        layerBg.fadeOut();
        // $('.dim').remove();
        $('body').css('overflow-y','auto')
    });      
  }
  layerPopup();

  //해외계열사 모바일 탭

  $('.affiliate01-mo').on('click','li',function(){
    $('.affiliate01-mo li').removeClass('is-active');
    $('.affiliate01-mo ul').toggleClass('expanded');
    $(this).addClass('is-active');
    var tab_id = $(this).attr('data-tab');
    $('.affiliate01-mo .affiliate-mo-con').removeClass('current');
    $(this).addClass('current');
    $('#'+tab_id).addClass('current');
  });

  $('.affiliate02-mo').on('click','li',function(){
    $('.affiliate02-mo li').removeClass('is-active');
    $('.affiliate02-mo ul').toggleClass('expanded');
    $(this).addClass('is-active');
    var tab_id = $(this).attr('data-tab');
    $('.affiliate02-mo .affiliate-mo-con').removeClass('current');
    $(this).addClass('current');
    $('#'+tab_id).addClass('current');
  });

  function accordion(){
    $('#affiliate02 .accor-pane').hide();
    $('#affiliate02 .accor-top').click(function(){
      $(this).find('button').toggleClass('on');
      $(this).next('.accor-pane').slideToggle(500);
    })
  }
  accordion();



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

  //생산제품 탭 컨텐츠
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


  //사업소개 이미지 슬라이드
  var overviewImgSwiper = new Swiper('.overview-img-slide', {
    loop : true,
    effect : "slide",
    parallax : true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    },
  });

  var overviewTxtSwiper = new Swiper('.overview-txt-slide', {
    loop : true,
    effect : "fade",
    fadeEffect: {
			crossFade: true
		},
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    },
  });

  overviewImgSwiper.controller.control = overviewTxtSwiper;
  overviewTxtSwiper.controller.control = overviewImgSwiper;

  // //사회공헌
  // var secNavName = ["#기부봉사","#인재육성","#친환경","#문화예술"];
  // var socialswiper = new Swiper('.quality .swiper-container', {
  //   speed: 1000,
  //   direction: 'vertical',
  //   mousewheel: true,
  //   pagination: {
	// 		el: '.swiper-pagination',
	// 		clickable: true,
	// 		renderBullet: function (index, className) {
	// 			return '<div class="list '+className+'">'+
	// 			'<div class="text" data-txt="'+(secNavName[index])+'"><span>'+(secNavName[index])+'</span></div>'+
	// 			'</div>'
	// 		}
	// 	},
  //   on: {
  //     reachEnd: function () {
  //       socialswiper.mousewheel.disable();
  //     }
  //   }
  // });

  // // window.addEventListener('wheel', function (event) {
  // //   if (event.deltaY < 0) {
  // //     socialswiper.mousewheel.enable();
  // //   } else if (event.deltaY > 0) {
  // //     // swiper.mousewheel.disable();
  // //   }
  // // });

  //voc 개인정보처리방침
  $('.btn-toggle').click(function(){
    $(this).toggleClass('on');
    $('.privacy-agree').toggleClass('on');
  });

  function layerAlert(){
    $('.submit-btn').each(function(){
      $(this).click(function(e){
        e.preventDefault();
        $('.layer-alert, .layer-dimm').show();
      });
    });
    $('.layer-alert').click(function(e){
      e.preventDefault();
      $('.layer-alert, .layer-dimm').hide();
    });
  }

  layerAlert();

  function selectDirect(){
    $("#selectDirect").hide();
    $(".select-mail").change(function() {
      if($(this).val() == "direct") {
        $("#selectDirect").show();
        $('.select-mail').hide();
      }  else {
        $("#selectDirect").hide();
        $('.select-mail').show();
      }
    }) 
  }
  selectDirect();

});

// $(document).ready(function(){
  // $('#header').load('/webapp/src/rp/html/_include/header.html');
  // $('#footer').load('/webapp/src/rp/html/_include/footer.html');


  // $(window).scroll(function(){
  //   if ($(window).scrollTop() >= 500) {
  //       $('.hedaer').addClass('fixed-header');
  //   }
  //   else {
  //       $('.header').removeClass('fixed-header');

  //   }
  // });






  

  
  // $(".swiper-wrapper").hover(function () {
  //   swiper.autoplay.stop();
  //   $(".swiper-progress-bar").removeClass("animate");
  // }, function () {
  //   swiper.autoplay.start();
  //   $(".swiper-progress-bar").addClass("animate");
  // });


  

  
// });

