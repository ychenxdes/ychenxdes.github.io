<!DOCTYPE html>
<html class="madvertis at1 zh-cn">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no" />
    <title>关于我们</title>
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
                                        <a href="card.php"><span>棋牌游戏</span></a>
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
                        <img src="image/lang/zh-cn/title_welcome.png">
                    </div>
                    <div class="page-sidebar">
                        <div class="sidemenu-header"></div>
                        <div class="sidemenu-body">
                            <ul class="sidemenu">
                                <li><a href="#0" class="active">关于我们</a></li>
                                <li><a href="#0">联系我们</a></li>
                                <li><a href="#0">合作伙伴</a></li>
                                <li><a href="#0">存款帮助</a></li>
                                <li><a href="#0">取款帮助</a></li>
                                <li><a href="#0">常见问题</a></li>
                                <li><a href="#0">责任博彩</a></li>
                            </ul>
                        </div>
                        <div class="sidemenu-footer"></div>
                    </div>
                    <div class="page-right">
                        <div class="page-article">
                            <div class="case-article-title">关于我们</div>
                            <div class="case-article-content">
                                <p>与BBIN进行技术合作，共同打造高品质游戏平台，目前拥有菲律宾合法注册之博彩公司。我们一切博彩营业行为皆遵从菲律宾政府博彩条约。我们在越来越热络的网博彩市场中，不断地求新求变，寻找最新的创意，秉持最好的服务。以带给客户高品质的服务、产品、娱乐，是我们的企业永恒宗旨。</p>
                                <p>我们的运动博彩拥有顶级的盘房操盘，投入大量的人力以及资源，提高完整赛事，丰富玩法给热爱体育的玩家。真人视讯游戏拥有经国际赌场专业训练的荷官，进行各种赌场游戏，所有赌局都依荷官动作，而不是预设的电脑机率结果，以高科技的网路直播技术，带给玩家身历赌场的刺激经验! 各式彩票游戏，是依官方赛果产生游戏结果，让玩家在活泼的投注界面，享受最公正的娱乐。而我们的电子游戏使用最公平的随机数产生机率，让玩家安心​​享受多元的娱乐性游戏。 BBIN所有的游戏皆有共同的优点:无须下载、介面操作简易、功能齐全、画面精致、游戏秉持公平、公正、公开 !</p>
                                <p>在市场上众多的博彩网站中，玩家选择BBIN，除了多元化的产品，也是因为BBIN-波音公司良好的信誉，以及高品质的服务，我们的用心随处可见，并获得GEOTRUST国际认证，确保网站公平公正性，所有会员资料均经过加密，保障玩家隐私。 BBIN以服务会员不打烊的精神，24小时处理会员出入款相关事宜，令我们骄傲的客服团队，亲切又专业，解决玩家对于网站、游戏的种种疑难杂症，让每位玩家有宾至如归的感觉!我们自豪的以业界最强的各种优惠方式回馈我们的会员，BBIN绝对是玩家最明智的选择!</p>
                            </div>
                        </div>
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