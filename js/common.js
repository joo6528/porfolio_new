$(function () {
    // light & dark js
    function lightCheck() {
        if ($('.button-cover .checkbox').prop('checked') == true) {
            $('body').addClass('active');
        } else {
            $('body').removeClass('active');
        }
    }

    $('.button-cover').click(function () {
        lightCheck();
    });

    let lightStatus = localStorage.getItem('lightStatus');

    // 초기 상태 설정
    if (lightStatus === 'checked') {
        $('#lightCheck').prop('checked', true);
        $('body').addClass('active');
    } else {
        $('#lightCheck').prop('checked', false);
        $('body').removeClass('active');
    }

    // 체크박스 상태 변경 시 이벤트 처리
    $('#lightCheck').change(function () {
        const isChecked = $(this).is(':checked');
        updateLightStatus(isChecked);
    });

    // 상태 업데이트 함수
    function updateLightStatus(isChecked) {
        if (isChecked) {
            localStorage.setItem('lightStatus', 'checked');
            $('body').addClass('active');
        } else {
            localStorage.setItem('lightStatus', 'unchecked');
            $('body').removeClass('active');
        }
    }

    AOS.init();
});