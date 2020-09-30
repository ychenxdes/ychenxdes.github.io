<link rel="stylesheet" href="../template/card/css/style.css">

<!-- 輪播圖區塊 -->
<div class="card-banner">
    <!-- 連結項 -->
    <div id="menu-wrap" class="ele-card-menu clearfix">
        <div class="ele-card-item" v-for="(item, index) in card">
            <a href="javascript:void(0)" class="card-item-link" :class="{'current': index === 0}">{{ item.name }}</a>
        </div>
    </div>
    <!-- 輪播圖 -->
    <div id="js-ele-slideshow" class="ele-slideshow-wrap">
        <div class="js-ele-slideshow-scroll ele-slideshow-scroll">
            <ul>
                <li data-autoplaytime="5000">
                    <a href="javascript:void(0)">
                        <div class="img">
                            <img src="../template/card/image/not-use/ad01.jpg">
                        </div>
                    </a>
                </li>
                <li data-autoplaytime="5000">
                    <a href="javascript:void(0)">
                        <div class="img">
                            <img src="../template/card/image/not-use/ad02.jpg">
                        </div>
                    </a>
                </li>
                <li data-autoplaytime="5000">
                    <a href="javascript:void(0)">
                        <div class="img">
                            <img src="../template/card/image/not-use/ad03.jpg">
                        </div>
                    </a>
                </li>
                <li data-autoplaytime="5000">
                    <a href="javascript:void(0)">
                        <div class="img">
                            <img src="../template/card/image/not-use/ad04.jpg">
                        </div>
                    </a>
                </li>
                <li data-autoplaytime="5000">
                    <a href="javascript:void(0)">
                        <div class="img">
                            <img src="../template/card/image/not-use/ad05.jpg">
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="js-ele-slideshow-control-wrap ele-slideshow-control-wrap"></div>
        <!-- ↓↓↓提供輪播模組參數沒有圖片高度的設定，以不更改模組參數前提下壓一張底圖來支撐高度做等比縮放示意 -->
        <div class="height">
            <img src="../template/card/image/not-use/ad01.jpg">
        </div>
    </div>
</div>

<!-- 選單 -->
<div class="card-menu">
    <div class="menu-bar">
        <div data-rel="card" class="menu-item">棋牌游戏</div>
        <div data-rel="blockchain" class="menu-item">区块链</div>
        <div data-rel="casino" class="menu-item">电子</div>
        <div data-rel="fishing" class="menu-item">捕鱼机</div>
        <div data-rel="all" class="menu-item current">全部</div>
        <div class="search-input-wrap">
            <div class="search-input">
                <input type="search" placeholder="请输入游戏名称" name="search" data-search>
            </div>
            <div class="search-btn"></div>
        </div>
    </div>
</div>

<!-- 主內容 -->
<div class="card-game clearfix">
    <ul>
        <li v-for="item in games" data-filter-item :data-filter-name="item.name" class="card-box all" :class="[item.card ? 'card' : '', item.casino ? 'casino' : '', item.fishing ? 'fishing' : '', item.blockchain ? 'blockchain' : '']">
            <a href="#0">
                <div class="img">
                    <img :src="'../template/card/image/not-use/' + item.img + '.png'">
                    <span></span>
                </div>
                <h2>{{ item.name }}</h2>
            </a>
        </li>
    </ul>
</div>

<script src="../template/js/vue.js"></script>
<script src="../template/js/vue-game.js"></script>
<script src="../template/card/js/ele-common.js"></script>
<script src="../template/js/TweenMax.min.js"></script>
<script src="../template/js/tween.slideshow.js"></script>
<script>
    $('#js-ele-slideshow').slideshow({
        animationType: 'fade',
        isNav        : 1,
        isNumber     : 0,
        navPosition  : 'right',
        isArrow      : 0,
        isRunLine    : 1,
        isAutoPlay   : 1
    });
</script>
<script>
    var cardGame = new Vue({
        el: '.card-game',
        data: {
            games: [
                {
                    name: '区块链二八杠',
                    img: 'Game_66052',
                    card: true,
                    casino: false,
                    fishing: false,
                    blockchain: true
                }, {
                    name: '21点',
                    img: 'Game_66050',
                    card: false,
                    casino: true,
                    fishing: false,
                    blockchain: true
                }, {
                    name: '抢庄三公',
                    img: 'Game_66038',
                    card: false,
                    casino: false,
                    fishing: true,
                    blockchain: true
                }, {
                    name: '炸金花',
                    img: 'Game_66001',
                    card: true,
                    casino: false,
                    fishing: false,
                    blockchain: true
                }, {
                    name: '二八杠',
                    img: 'Game_66002',
                    card: false,
                    casino: true,
                    fishing: false,
                    blockchain: true
                }, {
                    name: '通比牛牛',
                    img: 'Game_66003',
                    card: false,
                    casino: false,
                    fishing: true,
                    blockchain: true
                }, {
                    name: '抢庄牛牛',
                    img: 'Game_66004',
                    card: false,
                    casino: true,
                    fishing: false,
                    blockchain: true
                }, {
                    name: '大话骰',
                    img: 'Game_66005',
                    card: true,
                    casino: false,
                    fishing: false,
                    blockchain: false
                }, {
                    name: '看三张抢庄牛牛',
                    img: 'Game_66006',
                    card: true,
                    casino: false,
                    fishing: false,
                    blockchain: false
                }, {
                    name: '看四张抢庄牛牛',
                    img: 'Game_66007',
                    card: false,
                    casino: true,
                    fishing: false,
                    blockchain: false
                }, {
                    name: '新百人牌九',
                    img: 'Game_66012',
                    card: false,
                    casino: true,
                    fishing: false,
                    blockchain: false
                }, {
                    name: '新百人牛牛',
                    img: 'Game_66013',
                    card: false,
                    casino: false,
                    fishing: true,
                    blockchain: false
                }, {
                    name: '新对战牛牛',
                    img: 'Game_66014',
                    card: false,
                    casino: true,
                    fishing: false,
                    blockchain: true
                }, {
                    name: '新通比牛牛',
                    img: 'Game_66015',
                    card: false,
                    casino: false,
                    fishing: true,
                    blockchain: true
                }, {
                    name: '新通杀牛牛',
                    img: 'Game_66016',
                    card: false,
                    casino: false,
                    fishing: true,
                    blockchain: true
                }, {
                    name: '新抢庄牌九',
                    img: 'Game_66017',
                    card: true,
                    casino: false,
                    fishing: false,
                    blockchain: true
                }, {
                    name: '新抢庄牛牛',
                    img: 'Game_66018',
                    card: true,
                    casino: false,
                    fishing: false,
                    blockchain: false
                }, {
                    name: '新看牌抢牛',
                    img: 'Game_66019',
                    card: false,
                    casino: true,
                    fishing: false,
                    blockchain: false
                }, {
                    name: '新运气牛牛',
                    img: 'Game_66020',
                    card: true,
                    casino: false,
                    fishing: false,
                    blockchain: false
                }, {
                    name: '新通比梭哈',
                    img: 'Game_66021',
                    card: false,
                    casino: true,
                    fishing: false,
                    blockchain: true
                }, {
                    name: '新四人梭哈',
                    img: 'Game_66023',
                    card: false,
                    casino: false,
                    fishing: true,
                    blockchain: true
                }, {
                    name: '新百家乐',
                    img: 'Game_66025',
                    card: false,
                    casino: false,
                    fishing: true,
                    blockchain: true
                }, {
                    name: '新二八杠',
                    img: 'Game_66026',
                    card: false,
                    casino: true,
                    fishing: false,
                    blockchain: false
                }, {
                    name: '新龙虎斗',
                    img: 'Game_66027',
                    card: false,
                    casino: true,
                    fishing: false,
                    blockchain: false
                }, {
                    name: '新红包扫雷',
                    img: 'Game_66043',
                    card: false,
                    casino: true,
                    fishing: false,
                    blockchain: false
                }, {
                    name: '新三公',
                    img: 'Game_66044',
                    card: false,
                    casino: true,
                    fishing: false,
                    blockchain: false
                }
            ]
        }
    })
</script>