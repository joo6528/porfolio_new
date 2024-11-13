$(function () {
    // light & dark js
    $('.button-cover').click(function () {
        if ($('.button-cover .checkbox').prop('checked') == true) {
            $('body').addClass('active');
        } else {
            $('body').removeClass('active');
        }
    });

    AOS.init();
});