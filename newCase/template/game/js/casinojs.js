$(document).ready(function() {
    //輪播
    $('#game-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        pauseOnHover: true,
        dots: true,
        fade: true,
    });

    //彩金
    $('.game-jp-rank').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        vertical: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        draggable: false,
        pauseOnHover: false,
    });
    $(".game-jp-more").click(function() {
        $(".jp-top24").fadeIn(1);
    });
    $(".jp-top24-close").click(function() {
        $(".jp-top24").fadeOut(1);
    });
    $(".game-jp-grand").click(function() {
        $(".jp-rule").fadeIn(1);
    });
    $(".jp-rule-close").click(function() {
        $(".jp-rule").fadeOut(1);
    });

    $(".overlay").click(function() {
        $(".jp-rule").fadeOut(1);
        $(".jp-top24").fadeOut(1);
        $(".login").fadeOut(1);
    });
    //其他遊戲_多款彩金
    $('.more-jackpot-slider').slick({
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        arrows: false,
        responsive: [{
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    //選單
    $(".game-menu-filter li").click(function() {
        $(this).children('a').addClass('current');
        $(this).siblings().children('a').removeClass('current');
    });

    $(".game-submenu-wrap li").click(function() {
        $(this).children('a').addClass('current');
        $(this).siblings().children('a').removeClass('current');
        $(".slot i").removeClass('trun');
    });
    $(".slot").click(function() {
        $(".game-submenu-slot").slideToggle(300);
    });
    var submenuSlot = $('.game-submenu-wrap li').not('.slot');
    $(submenuSlot).click(function() {
        $(".game-submenu-slot").slideUp(300);
    });

    $('#game-menu').mouseleave(function() {
        $('.game-submenu-slot').slideUp(300);
        $(".slot i").removeClass('trun');
        $(".slot a").removeClass('current');
    });
    $(".submenu-slot-wrap li a").click(function() {
        $(this).toggleClass('on');
    });
    $(".game-column-menu li").click(function() {
        $(this).children('a').addClass('current');
        $(this).siblings().children('a').removeClass('current');
    });
    $(".game-search").click(function() {
        $(".game-search-box").toggleClass('open');
        $(this).toggleClass('color');
    });
    $('[data-search]').on('keyup', function() {
        var searchVal = $(this).val();
        var filterItems = $('[data-filter-item]');

        if (searchVal != '') {
            filterItems.addClass('hidden');
            $('[data-filter-item][data-filter-name*="' + searchVal.toLowerCase() + '"]').removeClass('hidden');
        } else {
            filterItems.removeClass('hidden');
        }
    });
    //篩選
    $(function() {
        var selectedClass = "";
        $(".game-menu-filter li").click(function() {
            selectedClass = $(this).attr("data-rel");
            $("#game-list").fadeTo(300, 1);
            $("#game-list .game-box").not("." + selectedClass).fadeOut();
            setTimeout(function() {
                $("." + selectedClass).fadeIn();
                $("#game-box").fadeTo(300, 1);
            }, 500);
        });
    });
    $(".game-grid").click(function() {
        $(this).toggleClass('game-list');
        $("#game-list").toggleClass('list');
    });

    //遊戲列表推薦
    $('.game-list-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 961,
            settings: {
                slidesToShow: 4
            }
        }]
    });
    //遊戲
    $(".game-box").hover(function() {
        $(this).children(".game-box-mask").css({ "display": "table" });
    }, function() {
        $(this).children(".game-box-mask").css({ "display": "none" });
    });
    $(".favorite-btn").click(function() {
        $(this).toggleClass('on');
    });
    $(".game-box-info").hover(function() {
        $(this).children(".game-list-block").toggleClass('game-list-expand');
    });
    $(".game-list-ad").hover(function() {
        $(this).children(".list-ad-expand").toggleClass('expand');
    });

    //收藏遊戲
    $('.game-collection-nav').slick({
        slidesToShow: 9,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        pauseOnHover: false,
        variableWidth: true,
        responsive: [{
            breakpoint: 960,
            settings: {
                slidesToShow: 7
            }
        }]
    });
    $(".game-collection-btn").click(function() {
        $(".collection-search-input").toggleClass('open');
        $(this).toggleClass('turn');
        $(".game-collection-container").toggleClass('expand');
    });
    $(".game-collection-search").click(function() {
        $(".collection-search-input").addClass('open');
        $(".game-collection-btn").addClass('turn');
        $(".game-collection-container").addClass('expand')
    });
    $('.game-collection-list').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 961,
            settings: {
                slidesToShow: 6,
            }
        }]
    });
    $(".game-collection-box").hover(function() {
        $(this).children(".game-box-mask").css({ "display": "table" });
    }, function() {
        $(this).children(".game-box-mask").css({ "display": "none" });
    });

    //收藏
    $('.collection-nav-title').click(function() {
        $(this).children('a').addClass('current');
        $(this).siblings().children('a').removeClass('current');
    });
    $('.recent').click(function() {
        $('.not-recent').css({ 'display': 'block' });
        $('.game-collection-list').css({ 'display': 'none' });
    });
    var collRecent = $('.collection-nav-title a').not('.recent');
    $(collRecent).click(function() {
        $('.not-recent').css({ 'display': 'none' });
        $('.game-collection-list').css({ 'display': 'block' });
    });
    //固定收藏
    $(function() {
        setTimeout(function() { placeFixedBottom(); })
        $(document).on('click', '.game-menu a', placeFixedBottom);
        $(window).scroll(function() {
            placeFixedBottom();
        });
        $(window).resize(function(event) {
            var windHeight = $(window).height(),
                docuHeight = $(document).height(),
                footerHeight = $('#page-footer').outerHeight(),
                scrollTop = $(window).scrollTop();

            if (scrollTop + windHeight < docuHeight - footerHeight) {
                placeFooter();
            } else { placeFixedBottom(); }
        });

        function placeFooter() {
            $('.game-collection').css({
                'position': 'fixed',
                'bottom': 0
            });
        };

        function placeFixedBottom() {
            var windHeight = $(window).height(),
                docuHeight = $(document).height(),
                footerHeight = $('#page-footer').outerHeight(),
                scrollTop = $(window).scrollTop();

            if (scrollTop + windHeight >= docuHeight - footerHeight && !$('body').hasClass('no-scroll')) {
                $('.game-collection').css({
                    'position': 'absolute',
                    // 'bottom': footerHeight,
                    'bottom': 0,
                });
            } else {
                placeFooter()
            }
        };
    });

    //推薦遊戲輪播
    $('.game-column-slider02').slick({
        variableWidth: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        responsive: [{
            breakpoint: 960,
            settings: {
                slidesToShow: 4
            }
        }]
    });
    $('.game-column-slider').slick({
        variableWidth: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        responsive: [{
            breakpoint: 960,
            settings: {
                slidesToShow: 3
            }
        }]
    });
    $(".tablet-game-nav").click(function() {
        $(".game-nav").slideToggle(300);
        $(".tablet-nav-arrow").toggleClass('trun');
    });

    //固定選單
    $(function() {
        var gameTop, gamenav;
            gameTop = $('.game-wrap').offset().top,
            gamenav = $('#ele-game-categories-menu-placeholder'),
            header = $('.header-wrap'),
            titleH = $('.page-title').height(),

        $(window).scroll(function(e) {
            var y = $(this).scrollTop();
            // console.log(y); //- 偵測高度;
            if (header.css('position')=='fixed') {
                if (y >= titleH) {
                    itemAdd();
                } else {
                    itemRemove();
                }
                e.preventDefault();
                e.stopPropagation();

                function itemAdd() {
                    gamenav.addClass('fixed'); //- navbar 置頂
                    $('.game-wrap').addClass('padding-top');
                }

                function itemRemove() {
                    gamenav.removeClass('fixed');
                    $('.game-wrap').removeClass('padding-top');
                }
            } else {
                if (y >= gameTop) {
                    itemAdd();
                } else {
                    itemRemove();
                }
                e.preventDefault();
                e.stopPropagation();

                function itemAdd() {
                    gamenav.addClass('fixed'); //- navbar 置頂
                    $('.game-wrap').addClass('padding-top');
                }

                function itemRemove() {
                    gamenav.removeClass('fixed');
                    $('.game-wrap').removeClass('padding-top');
                }
            }
        });
    });

    $(function() {
        var gameTop, gamemenu, gamelistslider;
        var gameslider = $("#game-slider").height();
            gameTop = $('.game-wrap').offset().top + gameslider,
            gamemenu = $('#game-menu'),
            gamelistslider = $(".game-list-slider"),
            header = $('.header-wrap'),
            gamenavH = $('.game-nav').height(),
            titleH = $('.page-title').height(),

            $(window).scroll(function(e) {
                var y = $(this).scrollTop();
                // console.log(y); //- 偵測高度
                if (header.css('position')=='fixed') {
                    if (y >= titleH + gameslider - 30) {
                        itemAdd();
                    } else {
                        itemRemove();
                    }
                    e.preventDefault();
                    e.stopPropagation();

                    function itemAdd() {
                        gamemenu.addClass('fixed'); //- gamemenu 置頂
                        gamelistslider.addClass('fixed');
                    }

                    function itemRemove() {
                        gamemenu.removeClass('fixed');
                        gamelistslider.removeClass('fixed');
                    }
                } else {
                    if (y >= gameTop - 30) {
                        itemAdd();
                    } else {
                        itemRemove();
                    }
                    e.preventDefault();
                    e.stopPropagation();

                    function itemAdd() {
                        gamemenu.addClass('fixed'); //- gamemenu 置頂
                        gamelistslider.addClass('fixed');
                    }

                    function itemRemove() {
                        gamemenu.removeClass('fixed');
                        gamelistslider.removeClass('fixed');
                    }
                }
                if (gamemenu.hasClass('fixed')) {
                    gamemenu.css({'top': gamenavH});
                } else {
                    gamemenu.removeAttr('style');
                }
            });
            $('#ele-game-categories-menu-placeholder').css({'padding-top': gamenavH});
    });

    //判斷高度
    var middleHeight = $(window).height() - $('#page-header').height() - $('#page-footer').height();
    $('.game-wrap').css({ 'min-height': middleHeight });

    window.addEventListener('resize', function(event) {
        var middleHeight = $(window).height() - $('#page-header').height() - $('#page-footer').height();
        $('.game-wrap').css({ 'min-height': middleHeight });
        $(function() {
            if ($(window).height() <= 1700) {
                $('.game-wrap').css({ 'min-height': middleHeight + 140 });
            }
        });
    });
    $(function() {
        if ($(window).height() <= 1700) {
            $('.game-wrap').css({ 'min-height': middleHeight + 140 });
        }
    });


    //FISHING捕魚
    $('#fishing-category').slick({
        variableWidth: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        responsive: [{
            breakpoint: 960,
            settings: {
                slidesToShow: 5,

            }
        }]
    });
    $('#fishing-slider-wrap').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });
    $('#fishing-category li').click(function() {
        $(this).addClass('current');
        $(this).siblings().removeClass('current');
    });
    $('.fishing-submenu li').click(function() {
        $(this).children('a').addClass('current');
        $(this).siblings().children('a').removeClass('current');
    });
    $('.fishing-odds-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });
    $('.menu-fishing-feature').click(function() {
        $('.fishing-slider').css({ 'z-index': 1 });
        $('.fishing-video').css({ 'z-index': 0 });
        $('.fishing-odds').css({ 'z-index': 0 });
    });
    $('.menu-fishing-video').click(function() {
        $('.fishing-video').css({ 'z-index': 1 });
        $('.fishing-slider').css({ 'z-index': 0 });
        $('.fishing-odds').css({ 'z-index': 0 });
    });
    $('.menu-fishing-odds').click(function() {
        $('.fishing-odds').css({ 'z-index': 1 });
        $('.fishing-slider').css({ 'z-index': 0 });;
        $('.fishing-video').css({ 'z-index': 0 });
    });

    //推薦
    $(".game-column-header").each(function() {
        gchW = $(this).outerWidth(),
            gctW = $(this).find(".game-column-title").outerWidth(),
            gcmW = $(this).find(".game-column-more").outerWidth();
        $(this).find(".game-column-dot").width(gchW - gctW - gcmW - 22);
    });
    $(window).resize(function() {
        $(".game-column-header").each(function() {
            gchW = $(this).outerWidth(),
                gctW = $(this).find(".game-column-title").outerWidth(),
                gcmW = $(this).find(".game-column-more").outerWidth();
            $(this).find(".game-column-dot").width(gchW - gctW - gcmW - 22);
        });
    });
})