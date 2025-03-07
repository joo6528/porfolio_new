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

    // `pageshow` 이벤트를 추가로 처리
    $(window).on('pageshow', function (event) {
        if (event.originalEvent.persisted) {
            // 캐싱된 페이지가 복원될 경우 초기화
            initializePage();
        }
    });

    function initializePage() {
        let lightStatus = localStorage.getItem('lightStatus');

        if (lightStatus === 'checked') {
            $('#lightCheck').prop('checked', true); // 체크박스 상태 설정
            $('body').addClass('active');          // 클래스 추가
        } else {
            $('#lightCheck').prop('checked', false); // 체크박스 상태 해제
            $('body').removeClass('active');        // 클래스 제거
        }
    }

    setTimeout(() => {
        // 체크박스 상태 변경 시 이벤트 처리
        $('#lightCheck').change(function () {
            const isChecked = $(this).is(':checked');
            updateLightStatus(isChecked);
        });

        initializePage();
    }, 500);

    // 상태 업데이트 함수
    function updateLightStatus(isChecked) {
        if (isChecked) {
            localStorage.setItem('lightStatus', 'checked');
            $('body').addClass('active');
        } else {
            localStorage.setItem('lightStatus', 'unchecked');
            $('body').removeClass('active');
        }
    };

    function resize() {
        let wdWidth = $(window).width();

        if (wdWidth >= 600) {
            // 퀵메뉴 딤처리
            $('.quick').mouseenter(function () {
                $('.dim').addClass('on');
                $(".quick").addClass('active');
            });
            $('.quick').mouseleave(function () {
                $('.dim').removeClass('on');
                $(".quick").removeClass('active');
            });
            $(".quick").removeClass('active');
        } else {
            $('.quick').mouseenter(function () {
                $('.dim').removeClass('on');
            });
            $(".quick").addClass('active');

            $('.menu_btn').click(function () {
                $('.quick').toggleClass('active');
                $('.dim').toggleClass('on');
            })
        }
    }

    resize();

    $(window).resize(function () {
        let wdWidth = $(window).width();

        resize();
    });

    AOS.init();
});