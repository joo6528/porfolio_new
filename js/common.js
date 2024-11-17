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

    initializePage();

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

$(function () {
    $.ajax({
        url: "layout/dockbar.html", // 가져올 파일 경로
        method: "GET", // HTTP 메서드 (GET, POST 등)
        dataType: "html", // 기대하는 데이터 타입
        success: function (data) {
            // 성공적으로 데이터를 가져온 경우
            $("#quickMenu").html(data); // 데이터를 #content에 삽입
        },
        error: function (xhr, status, error) {
            // 요청이 실패한 경우
            $("#content").html("<p>Error: " + xhr.status + " " + error + "</p>");
        }
    });
});