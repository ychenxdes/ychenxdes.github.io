//大廳選單
var gameNav = new Vue({
    el: '#menu-wrap',
    data: {
        ball: [
            { name: 'NEW BB体育' },
            { name: 'NEW BB电竞' },
            { name: 'BB体育' },
            { name: '皇冠体育' },
            { name: '沙巴体育' },
            { name: '波音体育' }
        ],
        live: [
            { 
                name: 'BB',
                class: 'bb'
            }, { 
                name: 'XBB',
                class: 'hot'
            }, { 
                name: 'NBB区块链',
                class: 'nbb'
            }, { 
                name: 'AG',
                class: 'ag'
            }, { 
                name: 'eBet',
                class: 'ebet'
            }, { 
                name: 'EVO',
                class: 'evo'
            }, { 
                name: '欧博',
                class: 'allbet'
            }, { 
                name: 'BG',
                class: 'bg'
            }, { 
                name: 'MG',
                class: 'mg'
            }, { 
                name: 'EG',
                class: 'eg'
            }, { 
                name: '完美',
                class: 'wm'
            }, { 
                name: 'SSG',
                class: 'ssg'
            }, { 
                name: 'AE',
                class: 'ae'
            }
        ],
        game: [
            {
                class: 'recommend', 
                name: '本站推荐'
            }, {
                class: 'hot',
                name: 'BB'
            }, {
                class: 'pgcasino',
                name: 'PG'
            }, {
                class: 'new',
                name: 'BBP'
            }, {
                class: 'hot',
                name: 'Fishing'
            }, {
                class: 'hot02',
                name: 'XBB'
            }, {
                class: 'jdbcasino',
                name: 'JDB'
            }, {
                class: 'mtcasino',
                name: 'MT'
            }, {
                class: 'agcasino',
                name: 'AG'
            }, {
                class: 'ptcasino',
                name: 'PT'
            }, {
                class: 'cq9casino',
                name: 'CQ9'
            }, {
                class: 'swcasino',
                name: 'SW'
            }, {
                class: 'mgcasino',
                name: 'MG'
            }, {
                class: 'mwcasino',
                name: '大满贯'
            }, {
                class: 'fgcasino',
                name: 'FG'
            }, {
                class: 'awcasino',
                name: 'AW'
            }, {
                class: 'ygcasino',
                name: '易游'
            }, {
                class: 'ppcasino',
                name: 'PP'
            }, {
                class: 'bngcasino',
                name: 'BNG'
            }, {
                class: 'sgcasino',
                name: 'SG'
            }, {
                class: 'kacasino',
                name: 'KA'
            }, {
                class: 'gnscasino',
                name: 'GNS'
            }, {
                class: 'wmcasino',
                name: 'WM'
            }, {
                class: 'hbcasino',
                name: 'HB'
            }, {
                class: 'isbcasino',
                name: 'ISB'
            }, {
                class: 'pscasino',
                name: 'PS'
            }, {
                class: 'gticasino',
                name: 'Gti'
            }, {
                class: 'egcasino',
                name: 'EG'
            }, {
                class: 'acecasino',
                name: 'ACE'
            }, {
                class: 'new',
                name: 'DF'
            }
        ],
        lottery: [
            { name: 'BB彩票' },
            { name: 'XBB彩票' },
            { name: 'VR彩票' }
        ],
        card: [
            { name: 'BB天豪棋牌' },
            { name: '开元棋牌' },
            { name: 'JDB棋牌' },
            { name: '乐游棋牌' },
            { name: 'BBP棋牌' },
            { name: '易游棋牌' },
            { name: 'FG棋牌' },
            { name: 'MT棋牌' },
            { name: 'ACE棋牌' },
            { name: '幸运棋牌' }
        ]
    }
})