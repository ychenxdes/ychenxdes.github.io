<link rel="stylesheet" href="../template/ball/css/style.css">

<div class="sport-wrap">
	<div id="menu-wrap" class="sport-menu">
		<ul class="clearfix">
			<li v-for="(item, index) in ball">
				<a href="javascript:void(0)" :class="['ballhall', { 'current': index === 2 }]">{{ item.name }}</a>
			</li>
		</ul>
	</div>

	<div class="sport-login">
		<div class="sport-logo"></div>
		<div class="sport-info">
			<div class="sport-time">
				美东时间 :
				<p class="date">{{ date }}</p>
    			<p class="time">{{ time }}</p>
			</div>
			<div class="bet-slip">
				<a href="#">未结算注单 0 張</a>
				<a href="#">已结算注单 0 張</a>
			</div>
			<a href="#" class="sport-login-btn">进入BB体育</a>
		</div>
	</div>
	<div class="sport-middle-wrap">
		<div class="sport-today-live">
			<div v-for="item in list" class="today-live-wrap">
				<div :class="'today-live-left today-live-left-' + item.class">
					<div class="today-live-left-top">
						<div class="today-live-icon"></div>
						<div class="today-live-enter">进入</div>
						<div class="today-live-top">{{ item.title }}</div>
					</div>
				</div>
				<div class="today-live-even">
                    <div class="today-live-even-wrap">
    					<div class="today-live-date">{{ item.date }}</div>
    					<div class="today-live-category">{{ item.category }}</div>
    					<div class="today-live-home">
    						<div class="today-live-name">{{ item.teamh }}</div>
    						<div class="today-live-handica">{{ item.handica }}</div>
    						<div class="today-live-odds">{{ item.oddsh }}</div>
    					</div>
    					<div class="today-live-away">
    						<div class="today-live-name">{{ item.teama }}</div>
    						<div class="today-live-odds">{{ item.oddsa }}</div>
    					</div>
                    </div>
                    <div class="today-live-even-wrap">
                        <div class="today-live-date">{{ item.date }}</div>
                        <div class="today-live-category">{{ item.category }}</div>
                        <div class="today-live-home">
                            <div class="today-live-name">{{ item.teamh }}</div>
                            <div class="today-live-handica">{{ item.handica }}</div>
                            <div class="today-live-odds">{{ item.oddsh }}</div>
                        </div>
                        <div class="today-live-away">
                            <div class="today-live-name">{{ item.teama }}</div>
                            <div class="today-live-odds">{{ item.oddsa }}</div>
                        </div>
                    </div>  
				</div>
			</div>
		</div>
		<div class="sport-right-wrap">
			<div class="sport-event-wrap">
				<div class="event-top">焦点直播</div>
				<div class="event-container-wrap">
					<div class="focus-live-event">
						<div class="event-group" id="event-group-soccer">
							<div class="shrink-view" style="height: 246px;">
								<div class="event-header">
									<div class="event-header-title">足球</div>
									<div class="event-header-league">白俄罗斯超级杯(2x20分钟)</div>
									<div class="event-header-arrow is-open"></div>
									<div class="event-header-select">联盟选择</div>
								</div>
								<div class="header-select-list">
									<ul>
										<li>全部</li>
										<li class="is-select">白俄罗斯超级杯(2x20分钟)</li>
										<li>VS - FIFA意大利锦标赛(18分钟)</li>
										<li>VS - FIFA电子竞技对战 超级联赛(8分钟)</li>
									</ul>
								</div>
								<div class="event-content">
									<div v-for="(item, index) in list" :class="['event-content-list', { 'is-active': index === 2 }]" :name="item.name">
										<div class="event-content-time">{{ item.time }}</div>
										<div class="event-content-team">
											<span class="team-home">{{ item.teamh }}</span>
											<span class="team-to">vs</span>
											<span class="team-away">{{ item.teama }}</span>
										</div>
									</div>
								</div>
							</div> 
						</div>
						<div class="event-group" id="event-group-basketball">
							<div class="shrink-view" style="height: 26px;">
								<div class="event-header">
									<div class="event-header-title">籃球</div>
									<div class="event-header-league">NBA</div>
									<div class="event-header-arrow"></div>
									<div class="event-header-select">联盟选择</div>
								</div>
								<div class="header-select-list">
									<ul>
										<li>全部</li>
										<li class="is-select">NBA</li>
										<li>ES - Cyber Basketball 2K20 Matches</li>
									</ul>
								</div>
								<div class="event-content">
									<div v-for="item in list" class="event-content-list" :name="item.name">
										<div class="event-content-time">{{ item.time }}</div>
										<div class="event-content-team">
											<span class="team-home">{{ item.teamh }}</span>
											<span class="team-to">vs</span>
											<span class="team-away">{{ item.teama }}</span>
										</div>
									</div>
								</div>
							</div> 
						</div>
					</div>
					<div class="focus-live-battle" id="soccer">
						<div class="battle-team">
							<span class="team-home-name">上海绿地申花</span>
							<span class="team-away-name">北京中赫國安</span>
						</div>
						<div class="battle-info">
							<div class="battle-home"></div>
							<div class="battle-middle">
								<div class="battle-middle-title">白俄罗斯超级杯(2x20分钟)</div>
								<div class="battle-middle-score">
									<span class="score-home">1</span>
									<span class="score-to">:</span>
									<span class="score-away">0</span>
								</div>
							</div>
							<div class="battle-away"></div>
						</div>
						<div class="focus-live-video">
							<div class="video-open-btn"><i></i>开启直播首页</div>
						</div>
					</div>
				</div>
			</div>
			<div class="sport-slider-wrap">
            <!-- 輪播圖 slideshow -->
	            <div id="js-ele-slideshow" class="ele-slideshow-wrap">
	                <div class="js-ele-slideshow-scroll ele-slideshow-scroll">
	                    <ul>
	                        <li data-autoplaytime="5000">
	                            <a href="#" style="background-image: url('../template/ball/image/lang/zh-cn/slider01.jpg')"></a>
	                        </li>
	                        <li data-autoplaytime="5000">
	                            <a href="#" style="background-image: url('../template/ball/image/lang/zh-cn/slider02.jpg')"></a>
	                        </li>
	                        <li data-autoplaytime="5000">
	                            <a href="#" style="background-image: url('../template/ball/image/lang/zh-cn/slider03.jpg')"></a>
	                        </li>
	                    </ul>
	                </div>
	            </div>
	        </div>
		</div>
	</div>
	<div class="sport-vendor-wrap">
		<div v-for="item in list" :class="'vendor-list ' + item.class">
			<div class="vendor-name-wrap">
				<span class="vendor-name">{{ item.title }}</span>
				<i class="arrow"></i>
			</div>
			<div class="vendor-desc">{{ item.info }}
				<div class="vendor-title">
					<div class="vendor-time">{{ item.date }}</div>
					<div class="vendor-league">{{ item.league }}</div>
				</div>
				<div class="vendor-home">
					<div class="vendor-team">{{ item.teamh}}</div>
					<div class="vendor-handica">{{ item.handica }}</div>
					<div class="vendor-odds">{{ item.oddsh }}</div>
				</div>
				<div class="vendor-away">
					<div class="vendor-team">{{ item.teama }}</div>
					<div class="vendor-odds">{{ item.oddsa }}</div>
				</div>
			</div>
		</div>
	</div>
</div>

<script src="../template/js/vue.js"></script>
<script src="../template/js/vue-game.js"></script>
<script src="../template/js/TweenMax.min.js"></script>
<script src="../template/js/tween.slideshow.js"></script>
<script src="../template/ball/js/slick.js"></script>
<script src="../template/ball/js/ball.js"></script>
<script>
	$('#js-ele-slideshow').slideshow({
        animationType: 'fade', // lottery 目前只能用fade
        isNav: 1, // 是否需要 dots 是=1, 否=0
        navPosition: 'right', // 繼承上一問題__dots 位置
    });
</script>
<script>
	var todayLive = new Vue({
		el: '.sport-today-live',
        data: {
            list: [
                {
                	class: '0',
                    title: '今日-足球',
                    date: '11/07 16:00',
                    category: '墨西哥女子超级联赛',
                    teamh: '蒙特瑞(女)',
                    handica: '0.5',
                    oddsh: '0.96',
                    teama: '普马斯(女)',
                    oddsa: '0.88'
                },
                {
                	class: '1',
                    title: '今日-篮球',
                    date: '11/07 16:00',
                    category: 'NBA',
                    teamh: '新奥尔良鹈鹕',
                    handica: '6.5',
                    oddsh: '0.93',
                    teama: '波特兰开拓者',
                    oddsa: '0.97'
                },
                {
                	class: '2',
                    title: '滚球-足球',
                    date: '04:30 滚球',
                    category: '亚洲-ASIAN SCHOOLS CHAMPIONSHIP',
                    teamh: '中国学校',
                    handica: '1',
                    oddsh: '0.85',
                    teama: 'Sri Lanka School',
                    oddsa: '0.85'
                },
                {
                	class: '3',
                    title: '滚球-篮球',
                    date: '11/07 16:00',
                    category: '欧洲-UEFA 欧洲杯',
                    teamh: '圣马力诺',
                    handica: '5',
                    oddsh: '0.95',
                    teama: '俄罗斯',
                    oddsa: '0.97'
                },
                {
                	class: '4',
                    title: '滚球-其他',
                    date: '12/12 23:00',
                    category: '夢幻联赛',
                    teamh: 'Royal Never Give Up',
                    handica: '',
                    oddsh: '2.37',
                    teama: 'Revive',
                    oddsa: '4.43'
                },
            ]
        }
	})
	var focusLive = new Vue({
		el: '#event-group-soccer',
        data: {
            list: [
                {
                	name: '白俄罗斯超级杯(2x20分钟)',
                    time: '89',
                    teamh: '上海绿地申花',
                    teama: '北京中赫國安'
                },
                {
                	name: '白俄罗斯超级杯(2x20分钟)',
                    time: '12',
                    teamh: '北京人和',
                    teama: '深圳家兆業'
                },
                {
                	name: 'VS - FIFA意大利锦标赛(18分钟)',
                    time: '26',
                    teamh: '廣州恆大淘寶',
                    teama: '上海上港'
                },
                {
                	name: 'VS - FIFA电子竞技对战 超级联赛(8分钟)',
                    time: '32',
                    teamh: '石家莊永昌',
                    teama: '天津天海'
                },
                {
                	name: 'VS - FIFA电子竞技对战 超级联赛(8分钟)',
                    time: '56',
                    teamh: '上海聯成',
                    teama: '河北華夏幸福'
                },
                {
                	name: 'VS - FIFA意大利锦标赛(18分钟)',
                    time: '29',
                    teamh: '重慶當代立帆',
                    teama: '天津泰達'
                },
          	]
      	}
  	})
  	var focusLive = new Vue({
		el: '#event-group-basketball',
        data: {
            list: [
                {
                	name: 'ES - Cyber Basketball 2K20 Matches',
                    time: '第三节 04:12',
                    teamh: 'Los Angeles Lakers',
                    teama: 'Los Angeles Clippers'
                },
                {
                	name: 'NBA',
                    time: '上半场 01:00',
                    teamh: '布鲁克林篮网',
                    teama: '迈阿密热火'
                },
                {
                	name: 'NBA',
                    time: '第一节 10:29',
                    teamh: '克里夫兰骑士',
                    teama: '布鲁克林篮网'
                }
          	]
      	}
  	})
  	var vendorList = new Vue({
		el: '.sport-vendor-wrap',
        data: {
            list: [
                {
                	class: 'nbbball',
                    title: 'NEW BB体育',
                    date: '11/07',
                    league: '欧洲冠军联赛',
                    teamh: '普夫迪夫火车头',
                    handica: '0/0.5',
                    oddsh: '0.950',
                    teama: '利华古逊',
                    oddsa: '0.950'
                },
                {
                	class: 'nbbesport',
                    title: 'NEW BB电竞',
                    date: '11/07',
                    league: '欧洲-IBERIAN CUP',
                    teamh: 'For The Win eSports',
                    handica: '0/0.5',
                    oddsh: '0.950',
                    teama: 'The Queso',
                    oddsa: '0.950'
                },
                {
                	class: 'csball',
                    title: '皇冠体育',
                    date: '11/07',
                    league: '德国-德国足球乙级联赛',
                    teamh: '卡斯鲁厄',
                    handica: '0/0.5',
                    oddsh: '0.950',
                    teama: '艾格比治',
                    oddsa: '0.880'
                },
                {
                	class: 'sababall',
                    title: '沙巴体育',
                    date: '11/07',
                    league: '世界-莫斯科职业联赛',
                    teamh: '安德鲁・奥夫钦尼科夫',
                    handica: '0/0.5',
                    oddsh: '0.950',
                    teama: '伊戈尔・安索夫',
                    oddsa: '0.880'
                },
                {
                	class: 'boball',
                    title: '音波体育',
                    date: '11/07',
                    league: '世界-飞镖大满贯',
                    teamh: '彼得・怀特',
                    handica: '0/0.5',
                    oddsh: '0.950',
                    teama: '丹尼・诺伯特',
                    oddsa: '0.880'
                }
          	]
      	}
  	})
</script>