$(()=>{
    //gnb
    $(".header-wrap .nav-header a").on('mouseenter', function() {
        const idx = $(this).closest('li').index();
        if(idx != 6 ){
            $(".header-wrap").parents("header").addClass("header-active");
            $(".header-wrap .nav-header a").removeClass("active");
            $(this).addClass("active");
    
            $('.sub-grid > div').eq(idx).addClass('is-active').siblings().removeClass('is-active');
        } else {
            $(".header-active").removeClass("header-active")
            $(".header-wrap .nav-header a").removeClass("active")
            $('.sub-grid > div').removeClass('is-active');
        }
    });
    $(".header-pane").on('mouseleave', function() {
        $(".header-active").removeClass("header-active")
        $(".header-wrap .nav-header a").removeClass("active")
        $('.sub-grid > div').removeClass('is-active');
    });
    
    $(window).scroll(function(){ 
        const height = docu.scrollTop();
        if(height > 10){
            mainHeader.addClass("header-active");
            $(".header-pane").on('mouseleave', function() {
                mainHeader.addClass("header-active");
            })
        }else{
            $(".header-active").removeClass("header-active")
        }
    });
    
    // 제품정보 Aritcle view 영역이동 
        var viewArticleT = $('.view-article').parents(".section-media");
        var offset = viewArticleT.offset();
        if(viewArticleT.length) {
            $("html, body").animate({scrollTop: offset.top-65},0);
            
        }


    //breadcrumb fixed, header-active
    const docu = $(document)
    const breadcrumb = $('#section-breadcrumb')
    const header = $(".document .header")
    const mainHeader = $(".main-body .header")
    const subChk = $(".noVisual").length
    $(window).scroll(function(){ 
        const height = docu.scrollTop();
        var visual = $("#section-visual-sub"),
            selectmenu = $(".ui-selectmenu-menu"),
            btnGotop = $(".btn-gotop")
        let chkPos = visual.height();
        //console.log(chkPos)
        if(visual.length > 0) chkPos = visual.height() - 64
        // if(subChk){
        //     chkPos = 40;
        // }
        if(height > chkPos){ 
            breadcrumb.addClass("fixed-breadcrumb");
            header.addClass("header-hide");
            selectmenu.addClass("fixed-selectmenu");
            btnGotop.addClass("active");
            
        }else{
            breadcrumb.removeClass("fixed-breadcrumb"); 
            header.removeClass("header-hide");
            selectmenu.removeClass("fixed-selectmenu").css("top",chkPos+128);
            btnGotop.removeClass("active");
            var viewArticleT = $('.view-article').parents(".section-media");
            // var offset = viewArticleT.offset();
            // $("html, body").animate({scrollTop: offset.top-65},0);
        };
    });

    //main business tab
    $(".list-tab .title").on("mouseenter",function(){
        $(".list-tab a").parent().removeClass("active");
        $(this).parent().addClass("active");
        const changesrc = $(this).attr("data-src");
        return false;
    });

    // tab menu
    UI.Event.taps('.map'); //company > location
    UI.Event.taps('.map-onsan'); //company > location
    UI.Event.taps('.history'); //company > history
    UI.Event.taps('.statement-tab', "chartResize"); //investment > statement
    UI.Event.taps('.product'); //product
    UI.Event.taps('.oversea-tab-01'); //oversea australia
    UI.Event.taps('.oversea-tab-02'); // oversea vietnam
    UI.Event.taps('.environmental-tab'); // 환경정책 전용 탭 
    UI.Event.taps('.contents-tap'); // 환경정책 전용 탭 
    UI.Event.taps('.company-tap-01');
    UI.Event.taps('.company-tap-02');
    UI.Event.taps('.company-tap-03');
    UI.Event.taps('.company-tap-04');
    UI.Event.taps('.media-tap'); //미디어 홍보영상 컨텐츠

    //accordian menu
    UI.Event.toggle('.btn-toggle','.pane');
5
    
    //layer popup
    UI.Layer.openClick('.js-layer', '.layer-dimm', '.wrap-layer');
    UI.Layer.closeClick('.js-btn-cancel', '.layer-dimm', '.wrap-layer');

    //sidemenu
    UI.Layer.openClick('.js-layer-sidemenu', '.layer-dimm', '.side-menu');
    UI.Layer.closeClick('.js-btn-cancel-sidemenu', '.layer-dimm', '.side-menu');

    //icheck UI
    $('.checkbox').iCheck();
    $('.radio').iCheck();

    //select menu
    $( ".select-menu" ).selectmenu();

    //go Top
    UI.Event.goTop('.btn-gotop');

    //datepicker 
    $(".js-datepicker" ).datepicker();
    $('.btn-calendar').click(function() {
        $(this).siblings(".js-datepicker" ).datepicker("show")
    });

    //useragent
    const bodyAgent = document.querySelector("body");
    if(navigator.userAgent.match(/iPad/i)){
        bodyAgent.classList.add("ipad");
    }else if(navigator.userAgent.match(/Tablet/i)){
        bodyAgent.classList.add("tablet");
    }else if(navigator.userAgent.match(/Android/i)){
        bodyAgent.classList.add("android");
    }else if(navigator.userAgent.match(/iPhone|iPod/i)){
        bodyAgent.classList.add("iphone");
    }else{
        bodyAgent.classList.add("desktop");
    }
    
});
//masonry UI
function masonryList(){
    const elem = document.querySelector('.grid-list');
    const msnry = new Masonry( elem, {
      itemSelector: 'li',
      percentPosition: true, //이미지 로딩 후 레이아웃 적용
      horizontalOrder: true // masonry 순서대로 정렬
    });
}

//tab split
function goTabNum(){ 
    const goUrl = window.location.href;
    const goTab = goUrl.split('?tab=');
    const getTabNum = goTab[1];
    //console.log(getTabNum)
    $('.tab_nav>li').eq(getTabNum).addClass('on').siblings().removeClass('on');
    $('.tab_cont').find('> div').eq(getTabNum).show().siblings().hide();
};