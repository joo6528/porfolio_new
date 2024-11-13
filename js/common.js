$(function () {
    // light & dark js
    function lightCheck() {
        if ($('.button-cover .checkbox').prop('checked') == true) {
            $('body').addClass('active');
        } else {
            $('body').removeClass('active');
        }
    }

    lightCheck();

    $('.button-cover').click(function () {
        lightCheck();
    });

    // checked 확인 후 class 처리 js
    $('#lightCheck').change(function () {
        if ($(this).is(':checked')) {
            localStorage.setItem('lightStatus', 'checked');
        } else {
            localStorage.setItem('lightStatus', 'unchecked');
        }
    });

    let lightStatus = localStorage.getItem('lightStatus');

    if (lightStatus === 'checked') {
        $('#lightCheck').prop('checked', true);
        $('body').addClass('active');
    } else {
        $('#lightCheck').prop('checked', false);
        $('body').removeClass('active');
    }

    AOS.init();
});