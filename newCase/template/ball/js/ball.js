$(function(){
	//時間
	var clock = new Vue({
	    el: '.sport-time',
	    data: {
	        time: '',
	        date: ''
	    }
	})

	var timerID = setInterval(updateTime, 1000);
	updateTime();
	function updateTime() {
	    var cd = new Date();
	    clock.time = zeroPadding((cd.getHours() + 36) % 24, 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
	    clock.date = zeroPadding(cd.getFullYear(), 4) + '/' + zeroPadding(cd.getMonth()+1, 2) + '/' + zeroPadding(cd.getDate(), 2);
	};

	function zeroPadding(num, digit) {
	    var zero = '';
	    for(var i = 0; i < digit; i++) {
	        zero += '0';
	    }
	    return (zero + num).slice(-digit);
	}

	$('.event-header-select').click(function(){
		$(this).parent('.event-header').next('.header-select-list').fadeIn(300);
	})
	$('.header-select-list li').click(function(){
		$(this).addClass('is-select');
		$(this).siblings('.header-select-list li').removeClass('is-select');
		$('.header-select-list').fadeOut(300);
		$(this).parents('.header-select-list').prev('.event-header').children('.event-header-league').text($(this).text());
	})
	$('.event-header').click(function(){
		$('.event-header-arrow').addClass('is-open');
		$(this).parents('.event-group').siblings('.event-group').find('.event-header-arrow').removeClass('is-open');
		$(this).parent('.shrink-view').css({'height': 246 + 'px'});
		$(this).parents('.event-group').siblings('.event-group').children('.shrink-view').css({'height': 26 + 'px'});
	})
	$('.event-content-list').click(function(){
		$(this).addClass('is-active');
		$(this).siblings('.event-content-list').removeClass('is-active');
		$(this).parents('.event-group').siblings('.event-group').find('.event-content-list').removeClass('is-active');
		$('.team-home-name').text(($(this).find('.team-home')).text());
		$('.team-away-name').text(($(this).find('.team-away')).text());
		$('.battle-middle-title').text($(this).attr('name'));
		if ($(this).parent('.event-content').parent('.shrink-view').parent('.event-group').is('#event-group-basketball')) {
			$('.focus-live-battle').attr('id','basketball');
			$('.score-home').text(112);
			$('.score-away').text(94);
		} else {
			$('.focus-live-battle').attr('id','soccer');
			$('.score-home').text(0);
			$('.score-away').text(1);
		}
	})
	$('.vendor-list').each(function(index){
		if ($(this).hasClass('tgpball')) {
			$(this).children('.vendor-desc').css({'padding-left':'20px', 'padding-right': '20px'});
			$(this).children('.vendor-desc').children('div').remove();
		}
	})
	$('.today-live-even').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        draggable: false,
        speed: 1000
    });
})