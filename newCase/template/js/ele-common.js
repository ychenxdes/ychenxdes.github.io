/**
 * 文字閃爍
 * @param id   jquery selecor
 * @param arr  ['#FFFFFF','#FF0000']
 * @param s    milliseconds
 */
function toggleColor(id, arr, s) {
    var self = this;
    self._i = 0;
    self._timer = null;

    self.run = function() {
        if (arr[self._i]) {
            $(id).css('color', arr[self._i]);
        }
        self._i == 0 ? self._i++ : self._i = 0;
        self._timer = setTimeout(function() {
            self.run(id, arr, s);
        }, s);
    }
    self.run();
}

/**
 * 登入表單效果
 * @param _o object {
 *     Opacity : 標題透明度
 *     MS      : 標題顯示速度
 *   }
 */
$.fn.InputLabels = function(_o) {
    var o = {
        'Opacity' : 0.5,
        'MS'      : 300,
        'next'    : false
    };
    $.extend(o, _o);

    return this.each(function() {
        var label = $(this);
        var input = o.next ? $(this).next('input[name=' + $(this).attr('name') + ']') : $('input[name=' + $(this).attr('name') + ']');
        var show = true;

        // 預防瀏覽器記帳密機制
        setTimeout(function() {
            this.opacity = (input.val() == "") ? 1.0 : 0;
            label.css('opacity' , this.opacity);
        }, 300);

        if (label.attr('for') == undefined) {
            label.attr('for', $(this).attr('name'));
        }

        input.focus(function() {
            if (input.val() == "") {
                setOpacity(o.Opacity);
            }
        }).blur(function() {
            if (input.val() == "") {
                if (!show) {
                    label.css({opacity: 0.0}).show();
                }
                setOpacity(1.0);
            } else {
                setOpacity(0.0);
            }
        }).keydown(function(e) {
            if ((e.keyCode == 16) || (e.keyCode == 9) || (e.keyCode == 13)) return;
            if (show) {
                label.hide();
                show = false;
            }
        });

        var setOpacity = function(opacity) {
            label.stop().animate({'opacity': opacity }, o.MS);
            show = (opacity > 0.0);
        };
    });
};
$('#LoginForm').find('label').InputLabels();


$(function() {
    // form placeholder
    $('[placeholder]').focus(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
            input.val('');
            input.removeClass('placeholder');
        }
    }).blur(function() {
        var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
            input.addClass('placeholder');
            input.val(input.attr('placeholder'));
        }
    }).blur();
    $('[placeholder]').parents('form').submit(function() {
        $(this).find('[placeholder]').each(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
            }
        })
    });

    // 語系展開
    $('#ele-lang-wrap').click(function() {
        $('#ele-lang-group').stop().slideToggle('fast');
    });

    // 密碼顯示
    var loginPWD = $('.login-unit-pwd').children('.login-input');
    $('.login-pwd-icon').click(function() {
        $(this).stop().toggleClass('is-show');
        if (loginPWD.prop('type') == 'text') {
            loginPWD.prop('type', 'password');
        } else {
            loginPWD.prop('type', 'text');
        }
    });


    // 優惠活動
    $("#ele-mem-exclusive-dialog-area").fadeIn("slow");
    // 優惠活動: 滑入滑出opacity效果
    $('.eventcontent-dialog').on({
        mouseenter: function() {
            if (window.innerWidth <= 768) {
                return;
            }
            $(this).find('.js-exclusive-dialog-default').stop().animate({
                'opacity': 0
            }, 300);
        },
        mouseleave: function() {
            if (window.innerWidth <= 768) {
                return;
            }
            $(this).find('.js-exclusive-dialog-default').stop().animate({
                'opacity': 1
            }, 300);
        }
    });

    $(window).resize(function() {
        if (window.innerWidth <= 768) {
            $('.js-exclusive-dialog-default').stop().animate({ 'opacity': 0 }, 300);
        } else {
            $('.js-exclusive-dialog-default').stop().animate({ 'opacity': 1 }, 300);
        }
    });

});