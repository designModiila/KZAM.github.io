$(()=>{

	/*
	//const mHtml = $('html, body');
	const mHtml = $('.main-html,.main-body');
	//const length = $('.section').length;
	//let page = 1;
	//console.log(length);

	mHtml.animate({scrollTop : 0}, 10);
	$(window).on('wheel', function(e) {
    if(mHtml.is(':animated')) return;
		const scrollTop = $(window).scrollTop();
		const winHeight = $(window).height();
		if(scrollTop < winHeight) {
			if(e.originalEvent.deltaY > 0) {
					mHtml.animate({scrollTop : winHeight});
			} else if(e.originalEvent.deltaY < 0) {
					mHtml.animate({scrollTop : 0});
			}
		}
		else return;
	});
	*/

	// history 
	const chkScrollScale = ()=> {
		const scrollTop = $(window).scrollTop();
		const $target = $('.history-scale .history-summary');

		$target.each((idx, item)=>{
			console.log(idx, item);
			const $target = $(item);
			const $targetImg = $target.find('img');
			const $targetText = $target.find('.summary');
			const $targetDimed = $target.find('.dimed');
			const scaleBoxOffset = $target.parent().offset().top;
			const scaleBoxHeight = $target.height();
			if(scrollTop >= scaleBoxOffset) {
				changeImgScale(scrollTop, scaleBoxOffset, scaleBoxHeight, $targetImg, -100);
				changeTextScale(scrollTop, scaleBoxOffset, scaleBoxHeight, $targetText, -100);
				changeDimedScale(scrollTop, scaleBoxOffset, scaleBoxHeight, $targetDimed, -100);
			}
			else {
				return;
			}
		});

		
	};

	const changeImgScale = (scrollTop, scaleBoxOffset, scaleBoxHeight, $targetImg, weightValue)=> {
		const scaleValue = scrollTop - (scaleBoxOffset + weightValue);
		const yMove = Number((scaleValue / scaleBoxHeight).toFixed(1));
		const changeValue = (yMove >= 1) ? 1 : yMove;
		console.log(
			'scrollTop :', scrollTop, 
			// 'scaleBoxHeight :', scaleBoxHeight,
			'scaleBoxOffset :', scaleBoxOffset,
			'yMove :', changeValue,
		);
		$targetImg.css({
			transform: `scale(${.8 + changeValue})`,
			opacity: `${1 - changeValue}`,
			// 'border-radius': `${100-(changeValue*100)}px`
		});
	};
	const changeTextScale = (scrollTop, scaleBoxOffset, scaleBoxHeight, $targetText, weightValue)=> {
		const scaleValue = scrollTop - (scaleBoxOffset + weightValue);
		const yMove = Number((scaleValue / scaleBoxHeight).toFixed(1));
		const changeValue = (yMove >= 1) ? 1 : yMove;
		console.log(
			'yMove :', changeValue,
		);
		$targetText.css({
			opacity: `${changeValue}`,
		});
	};
	const changeDimedScale = (scrollTop, scaleBoxOffset, scaleBoxHeight, $targetDimed, weightValue)=> {
		const scaleValue = scrollTop - (scaleBoxOffset + weightValue);
		const yMove = Number((scaleValue / scaleBoxHeight).toFixed(1));
		const changeValue = (yMove >= 1) ? 1 : yMove;
		console.log(
			'scrollTop :', scrollTop, 
			// 'scaleBoxHeight :', scaleBoxHeight,
			'scaleBoxOffset :', scaleBoxOffset,
			'yMove :', changeValue,
		);
		$targetDimed.css({
			// transform: `scale(${changeValue})`,
			opacity: `${changeValue}`,
			//'border-radius': `${100-(changeValue*100)}px`
		});
	};



	$(window).on('scroll', function(e) {
		//const maxScrollValue = document.body.offsetHeight - this.window.innerHeight;
		/*
		const scrollTop = $(window).scrollTop();
		const scaleBoxOffset = $('.history-scale .history-summary').offset().top - 400;
		const scaleBoxHeight = $('.history-scale .history-summary').height();
		const scaleValue = scrollTop - scaleBoxOffset;
		const $targetImg = $('.history-scale .history-summary img');
		let yMove = Number((scaleValue / scaleBoxHeight).toFixed(1));
		yMove = yMove >= 1 ? 1 : yMove;

		console.log(
			// 'maxScrollValue :', maxScrollValue,
		);
		if(scrollTop >= scaleBoxOffset) {
			console.log(yMove);
			$targetImg.css({
				transform: `scale(${yMove})`,
				opacity: `${yMove}`
			});
		}*/

		chkScrollScale();
	});

	// aos!!
	setTimeout(() => {
		AOS.init({
				once: true,
				delay: 200, // values from 0 to 3000, with step 50ms
				duration: 600, // values from 0 to 3000, with step 50ms
		});
	}, 500);

});
