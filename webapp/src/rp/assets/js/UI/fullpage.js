$(()=>{
    const FullpagePrototype = $.fn.fullpage;
    const $fullpage = $('#fullpage');
    const $btnTop = $('.fixedLeft');
    const fullpageOptions = {
        //anchors: ['first', 'business', 'product', 'esg', 'news', 'recruit', 'ir', 'footer'],
        //menu: '#menu',
        //lazyLoad: true,
        autoScrolling: false,
        continuousVertical: true,
        //navigation: true,
        //navigationPosition: 'right',
        verticalCentered: true,
        //navigationTooltips: ['INTRO', 'HIT소식', 'WHY HIT', 'HIT 생활', 'HIT SNS'],
        //responsiveWidth: 1200,
        //scrollOverflow: true,
        afterLoad(index) {
            setTimeout(()=>{
                $('.fp-table.active').addClass('loaded');
            }, 2500);
        },
        onLeave(index, nextIndex, direction) {
            //console.log('onLeave', index, nextIndex);
            //
            if (nextIndex === 2 || nextIndex === 7) {
                setTimeout(()=>{
                    UI.callCount.init('counter1-1', '650100', true).counter();
                    UI.callCount.init('counter1-2', '435000', true).counter();
                    UI.callCount.init('counter1-3', '26300', true).counter();
                    UI.callCount.init('counter1-4', '506000', true).counter();
                    UI.callCount.init('counter1-5', '2000', true).counter();
                }, 500)           
            };
        },
    };

    /*
    $(window).on("mousewheel",function(e){
        if(e.originalEvent.wheelDelta < 0){
            e.preventDefault()
            e.stopPropagation()
            var height = $(document).scrollTop();
            var hei = $(window).height()
            console.log(height ,  hei)
            if(height < hei){ 
                $("html, body").animate({"scrollTop":$(window).height()},700)
            }
            return false;
        }
        
    });
    */

    
    //$fullpage.fullpage(fullpageOptions);
    $fullpage.find('.section > .inner').wrap('<div class="fp-tableCell"></div>')

    $btnTop.find('.btn-goTop').on('click', () => {
        FullpagePrototype.moveTo(1, 1);
    });

    const chkSectionHeight = () => {
        const $target = $('#section-visual .fp-tableCell, #section-product .fp-tableCell');
        const winHeight = $(window).height();

        $target.height(winHeight);
    };

    chkSectionHeight();

    $(window).on('resize', function() {
        chkSectionHeight();
    });

    const chkScrollPages = () => {
        const scrollTop = $(window).scrollTop();
        const $target = $fullpage.find('.section');
        const $body = $('body');
        let currentNum = 0;
        $target.each((idx, item) => {
            // console.log(idx, item);
            const $target = $(item);
            const targetOffsetTop = $target.offset().top;
            $body.removeClass(`fp-viewing-${idx}`);
            if(scrollTop >= targetOffsetTop) {
                //console.log('idx : ', idx);
                //$body.addClass(`fp-viewing-${idx}`);
                if(!$target.hasClass('loaded') && idx === 4) {
                    UI.callCount.init('counter1-1', '650100', true).counter();
                    UI.callCount.init('counter1-2', '435000', true).counter();
                    UI.callCount.init('counter1-3', '26300', true).counter();
                }
                else if(!$target.hasClass('loaded') && idx === 6) {
                    UI.callCount.init('counter1-4', '506000', true).counter();
                    UI.callCount.init('counter1-5', '2000', true).counter();
                }
                $target.addClass('loaded');
                currentNum = idx;
            }
        });
        $body.addClass(`fp-viewing-${currentNum}`);
    };

    chkScrollPages();
    $(window).on('scroll', function(e) {
        chkScrollPages();
    });


/*
    UI.Fullpage.calcList($('.main-info-list ul'));

    $(document).on({
        mouseenter(){
            FullpagePrototype.setAllowScrolling(false);
        },
        mouseleave(){
            FullpagePrototype.setAllowScrolling(true);
        },
    }, '.main-info-list ul');
    
*/
});
