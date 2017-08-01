$(document).ready(function () {
    $(window).scroll(function () {
        $('.hidden').each(function (i) {

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height() + 150;
            if (bottom_of_window > bottom_of_object) {

                $(this).animate({ 'opacity': '1' }, 500);

            }

        });

    });

    $('#to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    $('.topnav').hover(function() {
        $('.middle').css("opacity","1")
    });

});

