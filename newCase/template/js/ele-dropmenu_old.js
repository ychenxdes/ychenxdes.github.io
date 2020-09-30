
var lsub_group = '.ele-drop-group';


//下拉樣式
$(function(){
	var mainNavH = $('.mainnav').height(),
		dropStyle = {
		position: 'absolute',
		top: mainNavH,
		width: 100 + '%',
		//left: '50%',
		'z-index': 999,
		opacity: 1,
	},
		morePositionX = $('#LS-more').offset().left - 65,
		morePositionY = $('#LS-more').offset().top + $('#LS-more').height(),
		moreStyle = {
		top: morePositionY,
		left: morePositionX,
		width: 130 + 'px',
		'min-width': 130 + 'px'
	}

	$(lsub_group).css(dropStyle);
	$('.lsub-inner-wrap').addClass('clearfix');
	$('#nav-more').css(moreStyle);
	//$('.mainnav li').css({'position': 'relative'});
});

//下拉子選單
$(function(){
	$('.mainnav li').hover(function() {
		//lsub_group.stop().fadeToggle(100);
		$(this).children('a').stop().toggleClass('current');

		//$(lsub_group).css({'margin-left': lsub_middle});

		// var test = 'ball';
		// if ($(this).hasClass('LS-' + test)) {
		// 	$('#nav-' + test).stop().fadeToggle(100);
		// }
		if ($(this).hasClass('LS-ball')) {
			$('#nav-ball').stop().fadeIn(1);
			$('#nav-ball').siblings(lsub_group).stop().fadeOut(1);
		}
		else if ($(this).hasClass('LS-live')) {
			$('#nav-live').stop().fadeIn(1);
			$('#nav-live').siblings(lsub_group).stop().fadeOut(1);
		}
		else if ($(this).hasClass('LS-game')) {
			$('#nav-game').stop().fadeIn(1);
			$('#nav-game').siblings(lsub_group).stop().fadeOut(1);
		}
		else if ($(this).hasClass('LS-lottery')) {
			$('#nav-lottery').stop().fadeIn(1);
			$('#nav-lottery').siblings(lsub_group).stop().fadeOut(1);
		}
		else if ($(this).hasClass('LS-card')) {
			$('#nav-card').stop().fadeIn(1);
			$('#nav-card').siblings(lsub_group).stop().fadeOut(1);
		}
		else if ($(this).hasClass('LS-more')) {
			$('#nav-more').stop().fadeIn(1);
			$('#nav-more').siblings(lsub_group).stop().fadeOut(1);
		}
		else {
			$(lsub_group).stop().fadeOut(1);
		}
		

		//直立式選單下拉樣式
		var lsub_middle = $(this).find(lsub_group).width() /2 * -1;
		var mainNav = $('.mainnav'),
			styleRight = {
				top: '-1px',
				left: 'auto',
				right: mainNav.width() + 1,
				'margin-left': lsub_middle * 0,
			},
			styleLeft = {
				top: '-1px',
				left: mainNav.width() + 1,
				'margin-left': lsub_middle * 0,
			}
		if ((mainNav).hasClass('vertical-right')){
			$(lsub_group).css(styleRight);
		} else if ((mainNav).hasClass('vertical-left')){
			$(lsub_group).css(styleLeft);
		}
	});
	$(lsub_group).mouseleave(function(){
		$(this).stop().fadeOut(1);
	});
});

// //add bg
// var lsub_inner = lsub_group.find(".lsub-inner-wrap");
// 	lsub_inner.prepend('<span class="ele-subnav-title"></span>');
// 	$('#nav-live').find('.ele-subnav-title').text('反点0.8%无上限');