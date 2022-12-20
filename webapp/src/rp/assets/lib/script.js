
$(document).ready(function(){
  AOS.init();
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
  $('#fullpage').fullpage({
    navigation: true,
    scrollingSpeed:800,
    navigationTooltips: ['MAIN','BUSINESS','COMPANY','NEWS'],
    navigationPosition: 'left',
    responsiveWidth: 768,
    afterLoad: function(anchorLink, index){
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
        $('.counter').counterUp({
          delay: 1,
          time: 750
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
          time: 750
        });
      }
    },
    
  });


  var f = function () {
    if (!$this.data('counter-nums')) {
        return;
    }
    $this.text($this.data('counterup-nums').shift());
    if ($this.data('counterup-nums').length) {
        setTimeout($this.data('counterup-func'), $settings.delay);
    } else {
        delete $this.data('counterup-nums');
        $this.data('counterup-nums', null);
        $this.data('counterup-func', null);
    }
};


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
    if(window.innerWidth < 769){
      $('#gnb h2').click(function(){
        $('#gnb h2').removeClass('active');
        $('.gnb-depth2').removeClass('open');
        $(this).toggleClass('active');
        $(this).parent('li').find('.gnb-depth2').addClass('open');
      });
    }
  }
  gnb();

});

$(document).ready(function(){
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

  $('.affiliate02-mo').on('click','li',function(){
    $('li').removeClass('is-active');
    $('ul').toggleClass('expanded');
    $(this).addClass('is-active');
    var tab_id = $(this).attr('data-tab');
    $('.affiliate-mo-con').removeClass('current');
    $(this).addClass('current');
    $('#'+tab_id).addClass('current');
  });

  function accordion(){
    $('.accor-pane').hide();
    $('.accor-top').click(function(){
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



  //비전
  function vision_core_slider(){

    // slider
    var $slider = $('#vision_core_slider'), 
    fx_mode = 'none';

    if( !$slider.length ){ return; }

    // svg motion variables
    var $line = $('#vision_core_circle_line'),
    open_values = "0% 25%;25% 50%;50% 75%;75% 100%".split(";"),
    close_values = "25% 25%;50% 50%;75% 75%;100% 100%".split(";"),
    line_index = 0,
    pager_index = 0,
    tm_object;

    // line setting
    TweenMax.set($line, {drawSVG:'0', visibility:"visible"});

    // flip setting
    TweenMax.set($slider, {perspective: 1000});
    TweenMax.set(".vision_core_slider_img", {transformStyle: 'preserve-3d', autoAlpha: 0});
    TweenMax.set(".vision_core_slider_img.back", {rotationY: -180});

    // pre init
    $(document).on('cycle-initialized', $slider, function( event, opts ){
      if($(event.target).hasClass('vision_core_slider')){
        // settings
        TweenMax.set($('.vision_core_slider_item:eq(0) .vision_core_slider_img'), {autoAlpha:1});

        $('#vision_core_pager > li:eq(0)').addClass('active');
        $('#vision_core_list > li:eq(0)').addClass('active');
        change_motion();

        // slider pause
        tm_object.pause();
        $slider.cycle('pause');

        // slider play (waypoint)
        $('#vision_core_slider').waypoint(function() {
          tm_object.resume();
          $slider.cycle('resume');
        }, {
          offset: "80%"
        });
      }
    });

    // Run cycle
    $slider.cycle({
      slides          : '> div',
      timeout         : 2000,
      speed           : 3000,
      swipe           : false,
      log			        : false,
      fx              : fx_mode
    });

    // cycle before
    $slider.on( 'cycle-before', function(event, opts, currEl, nextEl, fwdFlag) {
      // disable click during the transition
      $('#vision_core_pager > li, #vision_core_list > li').off('click', switch_slide_on_click);

      // get index
      var now_index = $(currEl).index();
      var next_index = $(nextEl).index();
      
      // set back image
      var back_src = $('.vision_core_slider_item:eq('+ next_index +')').attr('data-image');
      $('.vision_core_slider_item:eq('+ now_index +') .vision_core_slider_img.back').empty().append('<img src="'+ back_src +'" />');
      
      // flag check
      var rotate;
      if(fwdFlag) {
        rotate = -180;
        TweenMax.set(".vision_core_slider_img.back", {rotationY: 180});
      } else {
        rotate = 180;
        TweenMax.set(".vision_core_slider_img.back", {rotationY: -180});
      }
      
      // action
      var front_item = $('.vision_core_slider_item:eq('+ now_index +') .front');
      var back_item = $('.vision_core_slider_item:eq('+ now_index +') .back');
      var tl_motion = new TimelineMax({paused:true, onComplete: function(){
        TweenMax.set($('.vision_core_slider_item:eq('+ next_index +') .vision_core_slider_img'),{autoAlpha: 1});
        TweenMax.set($('.vision_core_slider_item:eq('+ now_index +') .vision_core_slider_img'),{autoAlpha: 0});
        TweenMax.set($('.vision_core_slider_item:eq('+ now_index +') .front'),{rotationY: 0});
        TweenMax.set($('.vision_core_slider_item:eq('+ now_index +') .back'),{rotationY: -180});
      }});
      
      tl_motion.to(front_item, 3, {rotationY: rotate, ease: Back.easeOut.config(0.2)})
      .to(back_item, 3, {rotationY: 0, ease: Back.easeOut.config(0.2)}, 0);
      
      tl_motion.play();
    });

    // cycle after
    $slider.on( 'cycle-after', function(event, opts, currEl, nextEl, fwdFlag) {

      line_index = $(nextEl).index()-1;
      change_motion();

      // reinit click event after transition
      $('#vision_core_pager > li, #vision_core_list > li').on('click', switch_slide_on_click);
    });

    // controler hover
    $('#vision_core_pager > li, #vision_core_list > li').hover(function(){
      $('#vision_core_pager > li:eq('+ $(this).index() +')').addClass('hover');
      $('#vision_core_list > li:eq('+ $(this).index() +')').addClass('hover');
    },function() {
      $('#vision_core_pager > li, #vision_core_list > li').removeClass('hover');
    });

    // controler action
    $('#vision_core_pager > li, #vision_core_list > li').on('click', switch_slide_on_click);

    function switch_slide_on_click(){

      if($(this).hasClass('active')) { return; }

      var current_index = $(this).index();

      if(current_index === 0) {
        TweenMax.set($line, {drawSVG:'0% 0%'});
      } else {
        TweenMax.set($line, {drawSVG:close_values[current_index-1]});
      }

      $('#vision_core_pager > li').removeClass('active');
      $('#vision_core_pager > li:eq('+current_index+')').addClass('active');

      $('#vision_core_list > li').removeClass('active');
      $('#vision_core_list > li:eq('+current_index+')').addClass('active');

      $slider.cycle('goto', current_index);

    }

    // motion
    function change_motion() {

      TweenMax.killTweensOf($line);

      if(line_index === 3) {
          pager_index = 0;
      } else {
          pager_index = line_index+1;
      }

      tm_object = TweenMax.to($line, 2, {drawSVG:open_values[line_index], ease:Power0.easeNone, onComplete: function(){
        TweenMax.to($line, .9, {drawSVG:close_values[line_index], ease:Power0.easeNone,
          onStart: function(){
            $('#vision_core_pager > li').removeClass('active');
            $('#vision_core_pager > li:eq('+pager_index+')').addClass('active');
            $('#vision_core_list > li').removeClass('active');
            $('#vision_core_list > li:eq('+pager_index+')').addClass('active');
          },
          onComplete: function(){
            if(line_index === 3) {
                TweenMax.set($line, {drawSVG:'0% 0%'});
            }
          }
        });
      }});
    }

    // focus check
    $(window).on("blur focus", function(e) {
      var prevType = $(this).data("prevType");

      if (prevType != e.type) { //  reduce double fire issues
        switch (e.type) {
          case "blur":
          tm_object.pause();
          $slider.cycle('pause');
          break;
          case "focus":
          tm_object.resume();
          $slider.cycle('resume');
          break;
        }
      }

      $(this).data("prevType", e.type);
    });

  }

  vision_core_slider();

  //사회공헌
  var secNavName = ["#기부봉사","#인재육성","#친환경","#문화예술"];
  var swiper = new Swiper('.quality .swiper-container', {
    speed: 1000,
    direction: 'vertical',
    mousewheel: true,
    pagination: {
			el: '.swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return '<div class="list '+className+'">'+
				'<div class="text" data-txt="'+(secNavName[index])+'"><span>'+(secNavName[index])+'</span></div>'+
				'</div>'
			}
		},
    on: {
      reachEnd: function () {
        swiper.mousewheel.disable();
      }
    }
  });

  // window.addEventListener('wheel', function (event) {
  //   if (event.deltaY < 0) {
  //     swiper.mousewheel.enable();
  //   } else if (event.deltaY > 0) {
  //     // swiper.mousewheel.disable();
  //   }
  // });

  //voc 개인정보처리방침
  $('.btn-toggle').click(function(){
    $(this).toggleClass('on');
    $('.privacy-agree').toggleClass('on');
  });

  
});

