// Layout
var mainNav = new Vue({
    el: '.mainnav',
    data: {
        balls: [
            {
                name: 'NEW BB体育',
                link: 'sports_login.php',
                class: 'newbb'
            }, {
                name: 'NEW BB电竞',
                link: 'sports_login.php',
                class: 'newbb'
            }, {
                name: 'BB体育',
                link: 'sports_login.php',
                class: 'bb'
            }, {
                name: '皇冠体育',
                link: 'sports_login.php',
                class: 'cs'
            }, {
                name: '沙巴体育',
                link: 'sports_login.php',
                class: 'saba'
            }, {
                name: '波音体育',
                link: 'sports_login.php',
                class: 'bo'
            }
        ],
        lives: [
            {
                name: 'BB视讯',
                link: 'live.php',
                class: 'bb'
            }, {
                name: 'XBB视讯',
                link: 'live.php',
                class: 'xbb'
            }, {
                name: 'NBB区块链',
                link: 'live.php',
                class: 'nbb'
            }, {
                name: 'AG视讯',
                link: 'live.php',
                class: 'ag'
            }, {
                name: 'eBET视讯',
                link: 'live.php',
                class: 'ebet'
            }, {
                name: 'EVO视讯',
                link: 'live.php',
                class: 'evo'
            }, {
                name: '欧博视讯',
                link: 'live.php',
                class: 'allbet'
            }, {
                name: 'BG视讯',
                link: 'live.php',
                class: 'bg'
            }, {
                name: 'MG视讯',
                link: 'live.php',
                class: 'mg'
            }, {
                name: 'EG视讯',
                link: 'live.php',
                class: 'eg'
            }, {
                name: '完美视讯',
                link: 'live.php',
                class: 'wm'
            }, {
                name: 'SSG视讯',
                link: 'live.php',
                class: 'ssg'
            }, {
                name: 'AE视讯',
                link: 'live.php',
                class: 'ae'
            }
        ],
        games: [
            {
                name: 'BB电子',
                link: 'casino_login.php',
                class: 'bb'
            }, {
                name: 'PG电子',
                link: 'casino_login.php',
                class: 'pg'
            }, {
                name: 'BBP电子',
                link: 'casino_login.php',
                class: 'bbp'
            }, {
                name: '捕鱼机',
                link: 'casino_login.php',
                class: 'fishing'
            }, {
                name: 'XBB电子',
                link: 'casino_login.php',
                class: 'xbb'
            }, {
                name: 'JDB电子',
                link: 'casino_login.php',
                class: 'jdb'
            },   {
                name: 'MT电子',
                link: 'casino_login.php',
                class: 'mt'
            }, {
                name: 'AG电子',
                link: 'casino_login.php',
                class: 'ag'
            }, {
                name: 'PT电子',
                link: 'casino_login.php',
                class: 'pt'
            }, {
                name: 'CQ9电子',
                link: 'casino_login.php',
                class: 'cq9'
            }, {
                name: 'SW电子',
                link: 'casino_login.php',
                class: 'sw'
            }, {
                name: 'MG电子',
                link: 'casino_login.php',
                class: 'mg'
            }, {
                name: '大满贯电子',
                link: 'casino_login.php',
                class: 'mega'
            }, {
                name: 'FG电子',
                link: 'casino_login.php',
                class: 'fg'
            }, {
                name: 'AW电子',
                link: 'casino_login.php',
                class: 'aw'
            }, {
                name: '易游电子',
                link: 'casino_login.php',
                class: 'yg'
            }, {
                name: 'PP电子',
                link: 'casino_login.php',
                class: 'pp'
            }, {
                name: 'BNG电子',
                link: 'casino_login.php',
                class: 'bng'
            }, {
                name: 'SG电子',
                link: 'casino_login.php',
                class: 'sg'
            }, {
                name: 'KA电子',
                link: 'casino_login.php',
                class: 'ka'
            }, {
                name: 'GNS电子',
                link: 'casino_login.php',
                class: 'gns'
            }, {
                name: 'WM电子',
                link: 'casino_login.php',
                class: 'wm'
            }, {
                name: 'HB电子',
                link: 'casino_login.php',
                class: 'hb'
            }, {
                name: 'ISB电子',
                link: 'casino_login.php',
                class: 'isb'
            }, {
                name: 'PS电子',
                link: 'casino_login.php',
                class: 'ps'
            }, {
                name: 'Gti电子',
                link: 'casino_login.php',
                class: 'gti'
            }, {
                name: 'EG电子',
                link: 'casino_login.php',
                class: 'eg'
            }, {
                name: 'ACE电子',
                link: 'casino_login.php',
                class: 'ace'
            }, {
                name: 'DF电子',
                link: 'casino_login.php',
                class: 'df'
            }
        ],
        lotterys: [
            {
                name: 'XBB彩票',
                link: 'lottery.php',
                class: 'xbb'
            }, {
                name: 'BB彩票',
                link: 'lottery.php',
                class: 'bb'
            }, {
                name: 'VR彩票',
                link: 'lottery.php',
                class: 'vr'
            }
        ],
        cards: [
            {
                name: 'BB天豪棋牌',
                link: 'card.php',
                class: 'xbb'
            }, {
                name: '开元棋牌',
                link: 'card.php',
                class: 'kg'
            }, {
                name: 'JDB棋牌',
                link: 'card.php',
                class: 'jdb'
            }, {
                name: '乐游棋牌',
                link: 'card.php',
                class: 'leg'
            }, {
                name: 'BBP棋牌',
                link: 'card.php',
                class: 'bbp'
            }, {
                name: '易游棋牌',
                link: 'card.php',
                class: 'yg'
            }, {
                name: 'FG棋牌',
                link: 'card.php',
                class: 'fg'
            }, {
                name: 'MT棋牌',
                link: 'card.php',
                class: 'mt'
            }, {
                name: 'ACE棋牌',
                link: 'card.php',
                class: 'ace'
            }, {
                name: '幸运棋牌',
                link: 'card.php',
                class: 'xy'
            }
        ],
        mores: [
            {
                name: '关於我们',
                link: 'about.php'
            }, {
                name: '线路检测',
                link: '#'
            }
        ]
    }
})
var pageHeader = new Vue({
    el: '#page-header',
    data: {
        memAccount: 'admin',
        memTotal: '168.08',
        membalances: [
            {
                name: '体育投注余额',
                balance: '100.08'
            }, {
                name: 'AG视讯余额',
                balance: '---'
            }, {
                name: '欧博视讯余额',
                balance: '68.00'
            }
        ]
    }
})
