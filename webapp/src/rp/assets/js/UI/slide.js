$(()=>{

    if($('.main-swiper').length) {
        let ww = $(window).width();
        let swiperInstance = null;
        const initSwiper = ()=> {
            //console.log(ww, swiperInstance);
            //if (ww >= 1024 && swiperInstance === null) {
                swiperInstance = new Swiper('.main-swiper', {
                    // Optional parameters
                    slidesPerView: 1,
                    spaceBetween: 0,
                    effect: 'fade',
                    loop: true,
                    autoplay: {
                        delay: 10000,
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true,
                    },
                });
            //} else if (ww < 1024 && swiperInstance !== null) {
                //swiperInstance.destroy();
                //swiperInstance = null;
            //}
        };
        const popupSwiper = ()=> {
            swiperInstance = new Swiper('.list-main-popup', {
                slidesPerView: 1,
                spaceBetween: 0,
                effect: 'slide',
                loop: false,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".swiper-pagination",
                    type: "fraction",
                }
            });
        };

        initSwiper();
        popupSwiper();

        $(window).on('resize', ()=> {
            ww = $(window).width();
            initSwiper();
            popupSwiper();
        });

        // button controller
        $('.btn-start').on('click', function() {
            swiperInstance.autoplay.start();
            $(this).hide();
            $('.btn-stop').show();
            return false;
        });
        $('.btn-stop').on('click', function() {
            swiperInstance.autoplay.stop();
            $(this).hide();
            $('.btn-start').show();
            return false;
        });
    }

});
