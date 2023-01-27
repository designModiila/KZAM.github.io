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
    if (scroll >= 10) {
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

  ScrollTrigger.create({
    trigger: ".sub-visual",
    start: "+=30px top",
    toggleClass: {targets: '.sub-visual', className: 'ani'},
    toggleActions: "play pause resume reset"
  });
  


//   const inner = document.querySelector(".sub-bg");
//   const section = document.querySelector(".sub-content");

// window.onscroll = function() {
//   let value = (window.pageYOffset / 5 ) / section.offsetTop + 1;
//   inner.style.transform = `scale(${value})`;
// };


// $(function(){
  
//   var $window = $(window);    //Window object
  
//   var scrollTime = 1.2;     //Scroll time
//   var scrollDistance = 170;   //Distance. Use smaller value for shorter scroll and greater value for longer scroll
    
//   $window.on("mousewheel DOMMouseScroll", function(event){
    
//     event.preventDefault(); 
                    
//     var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
//     var scrollTop = $window.scrollTop();
//     var finalScroll = scrollTop - parseInt(delta*scrollDistance);
      
//     TweenMax.to($window, scrollTime, {
//       scrollTo : { y: finalScroll, autoKill:true },
//         ease: "Power3.easeOut",
//         autoKill: true,
//         overwrite: 5,             
//       });
          
//   });
  
// });
function selectHide() {
  $('.lang-select').removeClass('active');
}
var selectHideTimer = setTimeout(selectHide, 3000);
$('.lang-select .current').on("click", function (e) {
  e.preventDefault();
  clearTimeout(selectHideTimer);
  if ($(this).parent('.lang-select').hasClass('active')) {
      $(this).parent('.lang-select').removeClass('active');
  } else {
      $('.lang-select').removeClass('active');
      $(this).parent('.lang-select').addClass('active');
  }
});

$('.lang-select').on("mouseleave", function (e) {
  selectHideTimer = setTimeout(selectHide, 2000);
});

$('.lang-select li a').on("click", function (e) {
  selectHide();
  $(this).parents('.lang-select').find('.current').text($(this).text());
});

$('.lang-select .eng').on("click", function () {
  selectHide();
  alert('준비중입니다');
});


function tabHide() {
  $('.content-tab-box').removeClass('active');
}
var tabHide = setTimeout(selectHide, 3000);
$('.content-tab-box .current').on("click", function (e) {
  e.preventDefault();
  clearTimeout(tabHide);
  if ($(this).parent('.content-tab-box').hasClass('active')) {
      $(this).parent('.content-tab-box').removeClass('active');
  } else {
      $('.content-tab-box').removeClass('active');
      $(this).parent('.content-tab-box').addClass('active');
  }
});

$('.content-tab-box').on("mouseleave", function (e) {
  tabHide = setTimeout(selectHide, 2000);
});

$('.content-tab-box li a').on("click", function (e) {
  selectHide();
  $(this).parents('.content-tab-box').find('.current').text($(this).text());
});


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
      if((anchorLink == 4) && direction == 'down'){
        $("#fp-nav").css('display','none')
      }
      if((anchorLink == 5) && direction == 'up'){
        $("#fp-nav").css('display','block')
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


  function subTitleChange(){
    var subTitle = $('.sub-main-title');
    var tabBox = $('.tab-list li.active');

    subTitle.find('p').append(function(){
      $(this).text(tabBox.text())
    });
  }
  subTitleChange();

  var swiper = new Swiper(".main-slide-wrap", {
    speed: 1000,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    //autoplay: false,
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



  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const subTitle = gsap.utils.toArray('.sub-main-title p');

  subTitle.forEach((element) => {
    gsap.fromTo(subTitle, {opacity: 0, y: 80}, {opacity: 1, y: 0, ease: Power2.inOut})
  })


  const sections = gsap.utils.toArray('.panel');

  var scroller = {
    target: document.querySelector(".qualityContainer"),
    ease: 0.05, // <= scroll speed
    endY: 0,
    y: 0,
    resizeRequest: 1,
    scrollRequest: 0,
  };


  sections.forEach(section => {
    gsap.to(section, {
      ease: "power1.inOut",
      opacity: 1,
      scale: 0.9,
      y: -100,
      scrollTrigger: {
        trigger: section,
        scrub: true,
        start: "top top",
        pin: true,
        snap: 1,
        pinSpacing: false,
      }
    })
  })

  const fullImg = gsap.utils.toArray('.full-img');

  fullImg.forEach(fullImg => {
    ScrollTrigger.matchMedia({
      "(min-width: 769px)":function(){
        gsap.to(fullImg, {
          ease: "power1.inOut",
          scale: 1,
          y: 0,
          scrollTrigger: {
            trigger: fullImg,
            scrub: true,
            start: "-=200% top",
            end: "+=100 bottom",
            toggleActions: "play pause resume reset"
          }
        })
      }
    })
  })

  const chartAni = document.querySelectorAll('.chart-wrap');


  chartAni.forEach((element) => {
    ScrollTrigger.matchMedia({
      "(min-width: 768px)": function(){
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".section03",
            start: "+=200px top",
          }
        });

        tl.fromTo('.item .years, .item .dot',{opacity: 0}, {opacity: 1, ease: Power2.easeInOut})
          .fromTo('.bar01', {height: 0, y: 60},{height: '60px', y: 0, ease: Power2.easeInOut},'<0.05')
          .fromTo('.bar02', {height: '0px', y: 120},{height: '120px', y: 0, ease: Power2.easeInOut}, '<0.15')
          .fromTo('.bar03', {height: '0px', y: 230},{height: '230px', y: 0, ease: Power2.easeInOut}, '<0.15')
          .fromTo('.bar04', {height: '0px', y: -120},{height: '120px', y: 0, ease: Power2.easeInOut}, '<0.15')
          .fromTo('.bar05', {height: '0px', y: -260},{height: '260px', y: 0, ease: Power2.easeInOut}, '<0.15')
          .fromTo('.box .txt-box',{opacity: 0}, {opacity: 1, ease: Power2.easeInOut},'<0.25')
          .fromTo('.redBox',{opacity: 0}, {opacity: 1, ease: Power2.easeInOut},'<0.35')
        // tl.fromTo('.item01 .years, .item01 .dot',{opacity: 0}, {opacity: 1, ease: Power2.easeInOut})
        //   .fromTo('.bar01', {height: 0, y: 60},{height: '60px', y: 0, ease: Power2.easeInOut},'<0.05')
        //   .fromTo('.box01 .txt-box',{opacity: 0}, {opacity: 1, ease: Power2.easeInOut},'<0.1')
        //   .fromTo('.item02 .years, .item02 .dot',{opacity: 0}, {opacity: 1, ease: Power2.easeInOut},'<0.15')
        //   .fromTo('.bar02', {height: '0px', y: 120},{height: '120px', y: 0, ease: Power2.easeInOut}, '<0.2')
        //   .fromTo('.box02 .txt-box',{opacity: 0}, {opacity: 1, ease: Power2.easeInOut},'<0.25')
        //   .fromTo('.item03 .years, .item03 .dot',{opacity: 0}, {opacity: 1, ease: Power2.easeInOut},'<0.3')
        //   .fromTo('.box04 .txt-box',{opacity: 0}, {opacity: 1, ease: Power2.easeInOut},'<0.35')
        //   .fromTo('.item04 .years, .item04 .dot',{opacity: 0}, {opacity: 1, ease: Power2.easeInOut},'<0.4')
        //   .fromTo('.bar03', {height: '0px', y: 230},{height: '230px', y: 0, ease: Power2.easeInOut}, '<0.45')
        //   .fromTo('.box03 .txt-box',{opacity: 0}, {opacity: 1, ease: Power2.easeInOut},'<0.5')
        //   .fromTo('.redBox',{opacity: 0, scale: 2}, {opacity: 1, scale: 1, ease: Power2.easeInOut},'<0.55')
        //   .fromTo('.bar04', {height: '0px', y: -120},{height: '120px', y: 0, ease: Power2.easeInOut}, '<0.6')
        //   .fromTo('.box05 .txt-box',{opacity: 0}, {opacity: 1, ease: Power2.easeInOut},'<0.65')
        //   .fromTo('.item05 .years, .item05 .dot',{opacity: 0}, {opacity: 1, ease: Power2.easeInOut},'<0.7')
        //   .fromTo('.box06 .txt-box',{opacity: 0}, {opacity: 1, ease: Power2.easeInOut},'<0.75')
        //   .fromTo('.item06 .years, .item06 .dot',{opacity: 0}, {opacity: 1, ease: Power2.easeInOut},'<0.8')
        //   .fromTo('.bar05', {height: '0px', y: -260},{height: '260px', y: 0, ease: Power2.easeInOut}, '<0.85')
        //   .fromTo('.box07 .txt-box',{opacity: 0}, {opacity: 1, ease: Power2.easeInOut},'<0.9')
      },
      "(max-width: 767px)": function(){
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".section03",
            start: "-=50px top",
          }
        });
        tl.fromTo('.chart', {opacity: 0, y: 200},{opacity: 1, y: 0, ease: Power2.easeInOut, duration: 1})
      }
    })

  });

  $('.privacy .item').on('click',function(){
    $('.privacy .item').not(this).removeClass('current')
    $(this).toggleClass('current')
  });
  
});
