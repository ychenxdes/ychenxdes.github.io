<link rel="stylesheet" href="../template/livetop/css/style.css">

<div class="live-wrap"><!-- hall0 / hallBelow3 -->
    <div id="menu-wrap" class="live-menu-wrap">
        <ul class="clearfix">
            <li v-for="(item, index) in live">
                <a href="javascript:void(0)" :class="['livehall-' + item.class, { 'current': index === 0 }]">{{ item.name }}</a>
            </li>
        </ul>
    </div>
    <div class="live-content">
        <div class="live-top">
            <!-- BBIN大窗 -->
            <div class="live-bbin-wrap">
                <div class="live-bbin-main">
                    <h2 class="live-bbin-title"></h2>
                    <span class="live-rule-open active"></span>
                    <span class="live-rule-back"></span>
                    <!-- 大廳連結 -->
                    <div class="bbin-links-wrap active clearfix">
                        <div class="bbin-block01 clearfix">
                            <a href="javascript:void(0)" class="bbin-livehall-38">
                                <i></i>
                                <span>快速厅</span>
                            </a>
                            <a href="javascript:void(0)" class="bbin-livehall-40">
                                <i></i>
                                <span>多台下注</span>
                            </a>
                            <a href="javascript:void(0)" class="bbin-livehall-1">
                                <i></i>
                                <span>全新BB</span>
                            </a>
                        </div>
                        <div class="bbin-block02 clearfix">
                            <a href="javascript:void(0)" class="bbin-livehall-99">
                                <i></i>
                                <span>区块链</span>
                            </a>
                            <a href="javascript:void(0)" class="bbin-livehall-7">
                                <i></i>
                                <span>国际厅</span>
                            </a>
                        </div>
                    </div>
                    <!-- 規則說明 -->
                    <div class="rule-text-wrap">
                        <ul class="clearfix">
                            <li><a href="javascript:void(0)">百家乐</a></li>
                            <li><a href="javascript:void(0)">龙虎斗</a></li>
                            <li><a href="javascript:void(0)">三公</a></li>
                            <li><a href="javascript:void(0)">温州牌九</a></li>
                            <li><a href="javascript:void(0)">轮盘</a></li>
                            <li><a href="javascript:void(0)">骰宝</a></li>
                            <li><a href="javascript:void(0)">色碟</a></li>
                            <li><a href="javascript:void(0)">牛牛</a></li>
                            <li><a href="javascript:void(0)">番摊</a></li>
                            <li><a href="javascript:void(0)">鱼虾蟹</a></li>
                            <li><a href="javascript:void(0)">保险百家乐</a></li>
                            <li><a href="javascript:void(0)">炸金花</a></li>
                            <li><a href="javascript:void(0)">HiLo</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- 強力廠商 -->
            <div class="livehall-favor-wrap">
                <ul>
                    <li class="livehall-bbblockchain">
                        <a href="javascript:void(0)">
                            <span>BB区块链视讯</span>
                        </a>
                    </li>
                    <li class="livehall-xbb">
                        <a href="javascript:void(0)">
                            <span>XBB视讯</span>
                        </a>
                    </li>
                    <li class="livehall-nbbblockchain">
                        <a href="javascript:void(0)">
                            <span>NBB区块链</span>
                        </a>
                    </li>
                    
                </ul>
            </div>
            <!-- 輪播圖 -->
            <div id="js-ele-slideshow" class="ele-slideshow-wrap">
                <div class="js-ele-slideshow-scroll ele-slideshow-scroll">
                    <ul>
                        <li data-autoplaytime="5000">
                            <a href="#">
                                <div class="img" style="background-image: url('../template/livetop/image/not-use/slider01.jpg');"></div>
                            </a>
                        </li>
                        <li data-autoplaytime="5000">
                            <a href="#">
                                <div class="img" style="background-image: url('../template/livetop/image/not-use/slider02.jpg');"></div>
                            </a>
                        </li>
                        <li data-autoplaytime="5000">
                            <a href="#">
                                <div class="img" style="background-image: url('../template/livetop/image/not-use/slider03.jpg');"></div>
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- <div class="js-ele-slideshow-control-wrap ele-slideshow-control-wrap"></div> -->
            </div>
        </div>
        <div class="livehall-row">
            <ul class="clearfix">
                <!-- BBIN與強力廠商 -->
                <li class="livehall-ag">
                    <a href="javascript:void(0)">
                        <img src="../template/livetop/image/live_hall_ag_m.jpg">
                        <span>AG视讯</span>
                    </a>
                </li>
                <li class="livehall-ebet">
                    <a href="javascript:void(0)">
                        <img src="../template/livetop/image/live_hall_ebet_m.jpg">
                        <span>eBET视讯</span>
                    </a>
                </li>
                <li class="livehall-evo">
                    <a href="javascript:void(0)">
                        <img src="../template/livetop/image/live_hall_evo_m.jpg">
                        <span>EVO视讯</span>
                    </a>
                </li>
                <li class="livehall-ab">
                    <a href="javascript:void(0)">
                        <img src="../template/livetop/image/live_hall_ab_m.jpg">
                        <span>欧博视讯</span>
                    </a>
                </li>
                <li class="livehall-bg"> 
                    <a href="javascript:void(0)">
                        <img src="../template/livetop/image/live_hall_bg_m.jpg">
                        <span>BG视讯</span>
                    </a>
                </li>
                <li class="livehall-mg">
                    <a href="javascript:void(0)">
                        <img src="../template/livetop/image/live_hall_mg_m.jpg">
                        <span>MG视讯</span>
                    </a>
                </li>
                <li class="livehall-eg">
                    <a href="javascript:void(0)">
                        <img src="../template/livetop/image/live_hall_eg_m.jpg">
                        <span>EG视讯</span>
                    </a>
                </li>
                <li class="livehall-wm">
                    <a href="javascript:void(0)">
                        <img src="../template/livetop/image/live_hall_wm_m.jpg">
                        <span>完美视讯</span>
                    </a>
                </li>
                <li class="livehall-ssg">
                    <a href="javascript:void(0)">
                        <img src="../template/livetop/image/live_hall_ssg_m.jpg">
                        <span>SSG视讯</span>
                    </a>
                </li>
                <li class="livehall-ae">
                    <a href="javascript:void(0)">
                        <img src="../template/livetop/image/live_hall_ae_m.jpg">
                        <span>AE视讯</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>


<script src="../template/js/vue.js"></script>
<script src="../template/js/vue-game.js"></script>
<script src="../template/livetop/js/ele-common.js"></script>
<script src="../template/js/TweenMax.min.js"></script>
<script src="../template/js/tween.slideshow.js"></script>
<script>
    $('#js-ele-slideshow').slideshow({
        animationType: 'fade',
        isNav        : 1,
        isNumber     : 0,
        navPosition  : 'right',
        isArrow      : 0,
        isRunLine    : 0,
        isAutoPlay   : 1
    });
</script>