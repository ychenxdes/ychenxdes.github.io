(function() {
    'use strict';
    pluginEffect.fade = {

        initial: function(index) {
            var main = this,
                $li = main.param.slideUl.find('li'),
                $liCurrent = $li.eq(index),
                $control = $('.js-ele-slideshow-control-wrap');
            $liCurrent.hasClass('has-link') ? $control.addClass('has-link') : $control.removeClass('has-link');

            main.param.slideUl
                .find('li')
                .css({ display: 'none', opacity: '0', 'position': 'absolute' })
                .eq(0)
                .css({ display: 'list-item', opacity: '1', 'position': 'relative' });

        },
        move: function(index) {
            var main = this,
                param = main.settings,
                $li = main.param.slideUl.find('li'),
                $liCurrent = $li.eq(index),
                $control = $('.js-ele-slideshow-control-wrap');

            $liCurrent.hasClass('has-link') ? $control.addClass('has-link') : $control.removeClass('has-link');

            main.moveTl
                .to($li.not($liCurrent), param.animationTime, { display: 'none', opacity: 0, 'position': 'absolute' }, 0)
                .to($liCurrent, param.animationTime, { display: 'list-item', opacity: 1, 'position': 'relative' }, 0);
        },
        reSet: function(main) {
            main.moveTl.clear();
            main.clickLock = false;
        },
    };
}());