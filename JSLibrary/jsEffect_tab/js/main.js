$(function () {
    $(".tab-title li:first, .tab-content div:first").addClass("tab-active");
    $(".tab-title li").click(function () {
        $(this).addClass("tab-active");
        $(this).siblings().removeClass("tab-active");
        $(".tab-content div").siblings().removeClass("tab-active");
        $(".tab-content div").eq($(this).index()).addClass("tab-active");
    });
});
