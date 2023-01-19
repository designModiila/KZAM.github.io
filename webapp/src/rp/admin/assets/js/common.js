$(function() {
	var header = $("header");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 60) {
            header.removeClass('clearHeader').addClass("darkHeader");
        } else {
            header.removeClass("darkHeader").addClass('clearHeader');
        }
    });

	// $('li.nav-item-title a').on('click', function() {

	// })
	$('li.nav-item-title a').on('click', function() {
		$('.nav-item-title').click(function () {
			$(".nav-item-title").removeClass("open");
			$(this).addClass("open");
		});
		$(".nav-item").click(function() {  
			$(".nav-item").removeClass("active");
			$(this).addClass("active");  
		});
	}); 


	var trigger = $('.toggle-sidebar-btn'),
	bodyWrap = $('body'),
    menu = $('nav');
  	trigger.on('click', function(e) {
		e.preventDefault();
		trigger.toggleClass('open');
		menu.toggleClass('open');
		bodyWrap.toggleClass('nav-x');
	}); 


	var selectBox3 = new tui.SelectBox('#btnLanguage', {
		placeholder: '선택',
		data: [
				{ label: '국문', value: 'kor' },
				{ label: '영문', value: 'eng' }
			]
	});

}); 
 