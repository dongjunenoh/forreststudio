$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 200) {
        $('.all_left').addClass('fixed');
    } else {
        $('.all_left').removeClass('fixed');
    }
});
