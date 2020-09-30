$(".live-rule-open").click(function() {
    $(this).removeClass('active');
    $('.bbin-links-wrap').removeClass('active');
    $(".rule-text-wrap").css("display", "block");
    $('.live-bbin-title').addClass('active');
    $('.live-rule-back').addClass('active');
});

$(".live-rule-back").click(function() {
    $(this).removeClass('active');
    $('.bbin-links-wrap').addClass('active');
    $(".rule-text-wrap").addClass('active');
    $('.live-bbin-title').removeClass('active');
    $('.live-rule-open').addClass('active');
    $(".rule-text-wrap").css("display", "none");
});