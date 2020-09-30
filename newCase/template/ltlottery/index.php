<link rel="stylesheet" href="../template/ltlottery/css/style.css">

<div class="lottery-wrap">
	<div id="menu-wrap" class="lottery-menu">
		<ul class="clearfix">
            <li v-for="(item, index) in lottery">
                <a href="javascript:void(0)" :class="['lotteryhall', { 'current': index === 0 }]">{{ item.name }}</a>
            </li>
        </ul>
	</div>
    <div class="lottrey-center-box">
        <div class="lottery-slider-wrap">
            <!-- 輪播圖 slideshow -->
            <div id="js-ele-slideshow" class="ele-slideshow-wrap">
                <div class="js-ele-slideshow-scroll ele-slideshow-scroll">
                    <ul>
                        <li data-autoplaytime="5000">
                            <a href="#">
                                <img src="../template/ltlottery/image/lang/zh-cn/slider01.jpg">
                            </a>
                        </li>
                        <li data-autoplaytime="5000">
                            <a href="#">
                                <img src="../template/ltlottery/image/lang/zh-cn/slider02.jpg">
                            </a>
                        </li>
                        <li data-autoplaytime="5000">
                            <a href="#">
                                <img src="../template/ltlottery/image/lang/zh-cn/slider03.jpg">
                            </a>
                        </li>
                        <li data-autoplaytime="5000">
                            <a href="#">
                                <img src="../template/ltlottery/image/lang/zh-cn/slider04.jpg">
                            </a>
                        </li>
                        <li data-autoplaytime="5000">
                            <a href="#">
                                <img src="../template/ltlottery/image/lang/zh-cn/slider05.jpg">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="lottery-gamepanel-wrap">
            <div class="gamepanel-box unlogin">
                <div class="gamepanel-title">
                    <span>BB 竞速六合彩</span>
                    <a href="#" class="rule-icon"></a>
                </div>
            </div>
            <a href="#" class="game-star-btn">进入游戏</a>
        </div>
    </div>

    <div class="lottery-guesslike-wrap">
        <div class="guesslike-title">猜你喜欢</div>
        <div class="guesslike-game-box">
            <a href="#" class="guesslike-game" v-for="item in list">
                <div :class="'guesslike-game-icon guesslike-' + item.class +'-icon'">
                    <p>
                        <span class="guesslike-game-name">{{ item.name }}</span>
                        <span class="guesslike-game-subtitle">{{ item.title }}</span>
                    </p>
                </div>
            </a>
        </div>
    </div>
    
    <div class="lottery-hero-board">
        <marquee class="hero-board-box" scrollamount="8" scrolldelay="100" onmouseover="this.stop();" onmouseout="this.start();">
            <span class="hero-block">恭喜 a********05 在<a hrfe="#">BB Quick Mark Six Bingo</a>盈利<p>1,854.00</p>元</span>
            <span class="hero-block">恭喜 sss****41 在<a hrfe="#">BB 竞速六合彩</a>盈利<p>3,591.08</p>元</span>
            <span class="hero-block">恭喜 ta*******ery 在<a hrfe="#">BB 射龙门</a>盈利<p>3,190.11</p>元</span>
            <span class="hero-block">恭喜 hwq*** 在<a hrfe="#">新疆时时彩</a>盈利<p>3,352.24</p>元</span>
            <span class="hero-block">恭喜 w5***05 在<a hrfe="#">BB 幸运28</a>盈利<p>8,192.43</p>元</span>
            <span class="hero-block">恭喜 280*** 在<a hrfe="#">BB 射龙门</a>盈利<p>12,581.12</p>元</span>
        </marquee>
    </div>

    <div class="lottery-trandition-box">
        <div class="lottery-trandition-wrap">
            <ul>
                <li class="trandition-game-list hot-icon">
                    <div class="trandition-list-title">BB射龙门</div>
                    <a href="#" class="trandition-rule-icon"></a>
                </li>
                <li class="trandition-game-list new-icon">
                    <div class="trandition-list-title">BB3D</div>
                    <a href="#" class="trandition-rule-icon"></a>
                </li>
                <li class="trandition-game-list">
                    <div class="trandition-list-title">上海时时乐</div>
                    <a href="#" class="trandition-rule-icon"></a>
                </li>
                <li class="trandition-game-list">
                    <div class="trandition-list-title">BB竞速六合彩</div>
                    <a href="#" class="trandition-rule-icon"></a>
                </li>
                <li class="trandition-game-list">
                    <div class="trandition-list-title">BB番摊</div>
                    <a href="#" class="trandition-rule-icon"></a>
                </li>
            </ul>
        </div>
        <div class="lottery-trandition-wrap">
            <ul>
                <li class="trandition-game-list">
                    <div class="trandition-list-title">重庆时时彩</div>
                    <a href="#" class="trandition-rule-icon"></a>
                </li>
                <li class="trandition-game-list">
                    <div class="trandition-list-title">BB十分彩</div>
                    <a href="#" class="trandition-rule-icon"></a>
                </li>
                <li class="trandition-game-list">
                    <div class="trandition-list-title">BB竞速3D</div>
                    <a href="#" class="trandition-rule-icon"></a>
                </li>
                <li class="trandition-game-list">
                    <div class="trandition-list-title">江苏快3</div>
                    <a href="#" class="trandition-rule-icon"></a>
                </li>
                <li class="trandition-game-list">
                    <div class="trandition-list-title">BB淘金蛋</div>
                    <a href="#" class="trandition-rule-icon"></a>
                </li>
            </ul>
        </div>
        <div class="lottrey-ad-wrap"><a href="#"></a></div>
    </div>

    <div class="lottery-official-wrap">
        <ul>
            <li class="official-game-info lotto">
                <div class="official-game-icon"></div>
                <div class="official-game-list-box">
                    <div class="official-game-title">一般彩票</div>
                    <ul class="officical-game-list">
                        <li><a hfef="#" class="officical-list-name">六合彩</a></li>
                        <li>|</li>
                        <li><a hfef="#" class="officical-list-name current">BB竞速六合彩</a></li>
                        <li>|</li>
                        <li><a hfef="#" class="officical-list-name">排列三</a></li>
                    </ul>
                    <a href="#" class="official-game-more">...</a>
                </div>
                
                <a href="#" class="official-btn">全开</a>
            </li>
            <li class="official-game-info fastbb">
                <div class="official-game-icon"></div>
                <div class="official-game-list-box">
                    <div class="official-game-title">BB快开</div>
                    <ul class="officical-game-list">
                        <li><a hfef="#" class="officical-list-name">BB番摊</a></li>
                        <li>|</li>
                        <li><a hfef="#" class="officical-list-name">经典梯子</a></li>
                        <li>|</li>
                        <li><a hfef="#" class="officical-list-name current">BB淘金蛋</a></li>
                    </ul>
                    <a href="#" class="official-game-more">...</a>
                </div>
                
                <a href="#" class="official-btn">全开</a>
            </li>
            <li class="official-game-info pk115">
                <div class="official-game-icon"></div>
                <div class="official-game-list-box">
                    <div class="official-game-title">PK&11选5</div>
                    <ul class="officical-game-list">
                        <li><a href="#" class="officical-list-name current">BB北京PK拾</a></li>
                        <li>|</li>
                        <li><a href="#" class="officical-list-name current">BBPK3</a></li>
                        <li>|</li>
                        <li><a href="#" class="officical-list-name">BB11选5</a></li>
                    </ul>
                    <a href="#" class="official-game-more">...</a>
                </div>
                
                <a href="#" class="official-btn">全开</a>
            </li>
        </ul>
        <ul>
            <li class="official-game-info lottofast3">
                <div class="official-game-icon"></div>
                <div class="official-game-list-box">
                    <div class="official-game-title">时时彩&快3</div>
                    <ul class="officical-game-list">
                        <li><a href="#" class="officical-list-name current">BB重庆时时彩</a></li>
                        <li>|</li>
                        <li><a href="#" class="officical-list-name">BB快3</a></li>
                        <li>|</li>
                        <li><a href="#" class="officical-list-name">天津时时彩</a></li>
                    </ul>
                    <a href="#" class="official-game-more">...</a>
                </div>
                
                <a href="#" class="official-btn">全开</a>
            </li>
            <li class="official-game-info keno">
                <div class="official-game-icon"></div>
                <div class="official-game-list-box">
                    <div class="official-game-title">KENO</div>
                    <ul class="officical-game-list">
                        <li><a href="#" class="officical-list-name">BB竞速快乐彩</a></li>
                        <li>|</li>
                        <li><a href="#" class="officical-list-name current">北京快乐8</a></li>
                    </ul>
                </div>
                
                <a href="#" class="official-btn">全开</a>
            </li>
            <li class="official-game-info happy10">
                <div class="official-game-icon"></div>
                <div class="official-game-list-box">
                    <div class="official-game-title">十分彩</div>
                    <ul class="officical-game-list">
                        <li><a href="#" class="officical-list-name">BB十分彩</a></li>
                        <li>|</li>
                        <li><a href="#" class="officical-list-name">天津十分彩</a></li>
                        <li>|</li>
                        <li><a href="#" class="officical-list-name current">广西十分彩</a></li>
                    </ul>
                    <a href="#" class="official-game-more">...</a>
                </div>
                
                <a href="#" class="official-btn">全开</a>
            </li>
        </ul>
    </div>
</div>

<script src="../template/js/vue.js"></script>
<script src="../template/js/vue-game.js"></script>
<script src="../template/js/TweenMax.min.js"></script>
<script src="../template/js/tween.slideshow.js"></script>
<script>
    $('#js-ele-slideshow').slideshow({
        animationType: 'fade', // lottery 目前只能用fade
        isNav: 1, // 是否需要 dots 是=1, 否=0
        navPosition: 'right', // 繼承上一問題__dots 位置
    });
</script>
<script>
    var guessLike = new Vue({
        el: '.lottery-guesslike-wrap',
        data: {
            list: [
                {
                    name: 'BB彩票',
                    class: 'bb',
                    title: '区块链梯子游戏'
                }, {
                    name: 'BB彩票',
                    class: 'bb',
                    title: 'BB 北京PK拾'
                }, {
                    name: 'BB彩票',
                    class: 'bb',
                    title: 'BB 重庆时时彩'
                }, {
                    name: 'BB彩票',
                    class: 'bb',
                    title: 'BB 强力球'
                }, {
                    name: 'BB彩票',
                    class: 'bb',
                    title: 'BB 区块链幸运熊猫'
                }
            ]
        }
    });
</script>
<script>
    if ($('.guesslike-game').width() <= 178) {
        $('.guesslike-game-subtitle').addClass('text-over');
    }
</script>