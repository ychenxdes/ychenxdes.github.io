<!DOCTYPE html>
<html class="card zh-cn">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no;" />
    <title>棋牌游戏</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="../template/js/jquery.js"></script>
</head>
<body>
    <div id="mainBody">
        <!-- page-header -->
        <div id="page-header">
            <div class="header-main clearfix">
                <div class="header-wrap">
                    <div class="header-nav">
                        <!-- logo -->
                        <div class="logo">
                            <a href="index.php"></a>
                        </div>
                        <!-- nav -->
                        <div class="mainnav-wrap">
                            <div class="mainnav">
                                <ul class="clearfix">
                                    <li id="LS-first" class="LS-first">
                                        <a href="index.php"><span>首页</span></a>
                                    </li>
                                    <li id="LS-ball" class="LS-ball">
                                        <a href="sports_login.php"><span>体育赛事</span></a>
                                        <div id="nav-ball" class="ele-drop-group" style="display: none;">
                                            <div class="lsub-inner-wrap">
                                                <a v-for="ball in balls" :href="ball.link" :class="['ball-subnavlink-' + ball.class]">{{ ball.name }}</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li id="LS-live" class="LS-live">
                                        <a href="live.php"><span>视讯直播</span></a>
                                        <div id="nav-live" class="ele-drop-group" style="display: none;">
                                            <div class="lsub-inner-wrap">
                                                <a v-for="lives in lives" :href="lives.link" :class="['live-subnavlink-' + lives.class]">{{ lives.name }}</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li id="LS-game" class="LS-game">
                                        <a href="casino_login.php"><span>电子游艺</span></a>
                                        <div id="nav-game" class="ele-drop-group" style="display: none;">
                                            <div class="lsub-inner-wrap">
                                                <a v-for="game in games" :href="game.link" :class="['game-subnavlink-' + game.class]">{{ game.name }}</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li id="LS-lottery" class="LS-lottery">
                                        <a href="lottery.php"><span>彩票游戏</span></a>
                                        <div id="nav-lottery" class="ele-drop-group" style="display: none;">
                                            <div class="lsub-inner-wrap">
                                                <a v-for="lotterys in lotterys" :href="lotterys.link" :class="['lottery-subnavlink-' + lotterys.class]">{{ lotterys.name }}</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li id="LS-card" class="LS-card">
                                        <a href="card.php" class="current"><span>棋牌游戏</span></a>
                                        <div id="nav-card" class="ele-drop-group" style="display: none;">
                                            <div class="lsub-inner-wrap">
                                                <a v-for="cards in cards" :href="cards.link" :class="['card-subnavlink-' + cards.class]">{{ cards.name }}</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li id="LS-memberexclusiveii" class="LS-memberexclusiveii">
                                        <a href="promotions.php"><span>优惠活动</span></a>
                                    </li>
                                    <li id="LS-mobile" class="LS-mobile">
                                        <a href="#"><span>手机下注</span></a>
                                    </li>
                                    <li id="LS-affiliation" class="LS-affiliation">
                                        <a href="#"><span>合作伙伴</span></a>
                                    </li>
                                    <li id="LS-service" class="LS-service">
                                        <a href="#"><span>在线客服</span></a>
                                    </li>
                                    <li id="LS-more" class="LS-more">
                                        <a href="#"><span></span></a>
                                        <div id="nav-more" class="ele-drop-group" style="display: none;">
                                            <div class="lsub-inner-wrap">
                                                <a v-for="mores in mores" :href="mores.link">{{ mores.name }}</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- lang -->
                    <div class="lang-wrap">
                        <div id="ele-lang-wrap" class="ele-lang-wrap">
                            <a href="#0" class="flag01"></a>
                            <a href="#0" class="flag02"></a>
                            <a href="#0" class="flag03"></a>
                        </div>
                    </div>
                    <!-- login -->
                    <div class="login-wrap">
                        <form id="LoginForm">
                            <p class="login-unit login-unit-user">
                                <label name="username" for="username" class="login-placeholder">帐号</label>
                                <input name="username" type="text" class="login-input">
                            </p>
                            <p class="login-unit login-unit-pwd">
                                <label name="passwd" for="passwd" class="login-placeholder">密码</label>
                                <input name="passwd" type="password" class="login-input">
                                <span class="login-pwd-icon"></span>
                            </p>
                        </form>
                        <div class="login-btn-wrap">
                            <a class="login-forgetpw" href="#">忘记密码</a>
                            <a class="login-join" href="#">加入会员</a>
                            <a class="login-submit" href="index_login.php">登入</a>
                        </div>
                    </div>
                    <!-- news -->
                    <div class="news-wrap">
                        <div class="news-title"></div>
                        <div class="news-item">
                            <marquee scrollamount="3" scrolldelay="100" onmouseover="this.stop();" onmouseout="this.start();">
                                <a href="#0">两岸三地最热门的机台游戏，结合4层Jackpot累积彩金玩法，移植到你的计算机里！在家就可以等待从天而降的彩金，你还在等什么？</a>
                            </marquee>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- page-container -->
        <div id="page-container">
            <div id="page-body">
                <div class="page-main clearfix">
                    <div class="page-title">
                        <img src="image/lang/zh-cn/title_card.png">
                    </div>
                    <div class="card-wrap">
                        <?php include "../template/card/index.php"; ?>
                    </div>
                </div>
            </div>
        </div>
        <!-- page-footer -->
        <div id="page-footer">
            <div class="footer-main clearfix">
                <div class="article-menu">
                    <ul>
                        <li>
                            <a href="about.php">关于我们</a>
                        </li>
                        <li>|</li>
                        <li>
                            <a href="#0">联系我们</a>
                        </li>
                        <li>|</li>
                        <li>
                            <a href="#0">合作伙伴</a>
                        </li>
                        <li>|</li>
                        <li>
                            <a href="#0">存款帮助</a>
                        </li>
                        <li>|</li>
                        <li>
                            <a href="#0">取款帮助</a>
                        </li>
                        <li>|</li>
                        <li>
                            <a href="#0">常见问题</a>
                        </li>
                        <li>|</li>
                        <li>
                            <a href="#0">责任博彩</a>
                        </li>
                    </ul>
                </div>
                <div class="copyright">COOPYRIGHT © BBIN RESERVED</div>
                <div class="footer-info"></div>
                <a class="bblogo" href="#0">
                    <img src="image/not-use/white.png" width="77">
                </a>
                <a class="browser-logo" href="#0">
                    <img src="image/not-use/ublogo/ublogo_e.png" width="130">
                </a>
            </div>
        </div>
    </div>
    <?php include '../template/base.php'; ?>
</body>
</html>