$(function(){
    var ele_obalance_item_wrap_html = $('<div>').append($('#js-ele-obalance-item-wrap')).html(),
        obalanceCloseTimer, // 自動關閉 timer
        $obalanceWrap, // 額度包裹物件
        obalanceWrapH, // 額度包裹高度
        obalanceWrapW, // 額度包裹寬度
        $miBody = top.mem_index ? $('body', top.mem_index.document) : $('body');

        $miBody.prepend(ele_obalance_item_wrap_html);

    $obalanceWrap = top.mem_index ? $('#js-ele-obalance-item-wrap', top.mem_index.document) : $('#js-ele-obalance-item-wrap');
    obalanceWrapW = $obalanceWrap.width();

    $obalanceWrap.css({
        display: 'none',
    });

    obalanceCloseTimer = setTimeout(obalanceAutoClose, 500);

    $('#js-ele-obalance-wrap')
        .on("mouseenter", function() {
            if (typeof obalanceCloseTimer != 'undefined') {
                clearTimeout(obalanceCloseTimer);
            }
            obalanceOpen($(this));
        })
        .on("mouseleave", function() {
            obalanceAutoClose();
        });

    $obalanceWrap
        .on("mouseenter", function() {
            clearTimeout(obalanceCloseTimer);
            obalanceOpen($('#js-ele-obalance-wrap'));
        })
        .on("mouseleave", function() {
            obalanceAutoClose();
        });

    $(window).scroll(function() {
        obalanceAutoClose();
    });

    function obalanceOpen(o) {
        var centerSet = $miBody.width() - $('body').width();
        centerSet = (centerSet > 0) ? centerSet / 2 : 0;

        var offSet = o.offset(),
            objLeft = offSet.left + centerSet,
            objTop = offSet.top + o.height(),
            MaxLeft = offSet.left + obalanceWrapW,
            MaxBody = $('body').width() - obalanceWrapW,
            parentHeight = $(window).height();

        if (MaxLeft > MaxBody) {
            objLeft = (objLeft - obalanceWrapW) + $('#js-ele-obalance-wrap').width();
        };

        if (offSet.top > obalanceWrapH && (objTop + obalanceWrapH) > parentHeight + $(window).scrollTop()) {
            var objBottom = parentHeight - offSet.top;
            $obalanceWrap
                .stop()
                .css({
                    display: 'block',
                    'left': objLeft,
                    'bottom': objBottom,
                    'top': 'auto'
                })
                .animate({
                    opacity: '1',
                }, 300);
            return;
        }

        $obalanceWrap
            .stop()
            .css({
                display: 'block',
                'left': objLeft,
                'top': objTop,
                'bottom': 'auto'
            })
            .animate({
                opacity: '1',
            }, 300);
    }

    function obalanceAutoClose() {
        $obalanceWrap.stop().animate({
            opacity: '0',
        }, 300, function() {
            $obalanceWrap.css({
                display: 'none'
            });
        });
    }
});
