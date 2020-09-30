//選單
$('.search-btn').click(function(){
    $('.search-input').stop().toggleClass('show');
});

//搜尋

var selectedClass = '';
$('.menu-item').click(function() {
    selectedClass = $(this).attr('data-rel');
    $('.card-game').fadeTo(300, 1);
    $('.card-game .card-box').not("." + selectedClass).fadeOut();
    setTimeout(function() {
        $('.' + selectedClass).fadeIn();
        $('.card-game').fadeTo(300, 1);
    }, 500);

    $(this).addClass('current');
    $(this).siblings().removeClass('current');
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

//寬度

var cardWrap = $('.card-wrap').width();
var cardGame = $('.card-game');

if (cardWrap <= 1000) {
    cardGame.addClass('broad');
}