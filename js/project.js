$(document).ready(function () {
    $.ajax({
        url: "../layout/daynight.html",
        method: "GET",
        dataType: "html",
        success: function (data) {
            $("#lightBtn").html(data);
        },
        error: function (xhr, status, error) {
            console.log('Error')
        }
    });

    $.ajax({
        url: "../layout/dockbar.html",
        method: "GET",
        dataType: "html",
        success: function (data) {
            $("#quickMenu").html(data);
        },
        error: function (xhr, status, error) {
            console.log('Error')
        }
    });
});

$(function () {
    // let lightStatus = localStorage.getItem('lightStatus');

    // if (lightStatus === 'checked') {
    //     alert('dark');
    //     $('#lightCheck').prop('checked', true);
    //     $('body').addClass('active');
    // } else {
    //     alert('light');
    //     $('#lightCheck').prop('checked', false);
    // }

    // 홈 클릭 후 뒤로가기 js
    setTimeout(function () {
        $("#goBack").click(function () {
            window.history.back();
        });
    }, 1000);

    function updateProgressBar() {
        const documentHeight = $(document).height(); // 문서의 총 높이
        const windowHeight = $(window).height(); // 윈도우 창의 높이
        // 현재 스크롤된 위치를 계산
        const scrollPosition = $(window).scrollTop();
        // 스크롤된 비율을 계산
        const scrolledPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
        // 프로그레스 바의 너비를 스크롤 비율에 따라 조정
        $(".progress .bar").css('width', scrolledPercentage + "%");
    }

    //updateProgressBar();

    // $(window).scroll(function () {
    //     updateProgressBar();
    // });

    // 컬러 색상에 맞게 background 변경 js
    $('.color_wrap > li').not(':has(.grad)').each(function () {
        let colorStyle = $(this).children('.color_txt').text();

        $(this).children('.color_box').css('background', colorStyle);
    });

    // 컬러 색상이 그라데이션일 경우 js
    let colorGrad = $('.color_wrap .grad');
    let colors = colorGrad.siblings('.color_txt').text().split(',');
    let color1 = colors[0];
    let color2 = colors[1];

    colorGrad.css('background', 'linear-gradient(310deg, ' + color1 + ' 0%, ' + color2 + ' 100%)');

    var swiper = new Swiper(".popup_wrap .mySwiper", {
        loop: false,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".popup_wrap .mySwiper2", {
        loop: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });

    // 미리보기 js
    function scrollEvent() {
        let mainHeight = $('.mySwiper2 .swiper-slide-active').height();
        let outerHeight = $('.mySwiper2 .swiper-slide-active img').height();

        $('.mySwiper2 .swiper-slide').stop().animate({ scrollTop: 0 });

        if (mainHeight < outerHeight) {
            if ($('.mySwiper2 .swiper-slide').hasClass('swiper-slide-active')) {
                $('.mySwiper2 .swiper-slide-active').stop().animate({ scrollTop: outerHeight - mainHeight }, 5000);
            } else {
            }
        }
    };

    $('.mySwiper .swiper-slide').click(function () {
        scrollEvent();
    });

    $('.preview').click(function () {
        $('.previewPopup').addClass('on');
        // $('.dim').addClass('on');
        $('body').addClass('hold');

        setTimeout(function () {
            scrollEvent();
        }, 300)
    });

    $('.previewPopup .closeBtn').click(function () {
        $('.previewPopup').removeClass('on');
        // $('.dim').removeClass('on');
        $('body').removeClass('hold');
    });

    $(".quick").addClass('on');

    $('.dim').click(function () {
        $('.previewPopup').removeClass('on');
        // $('.dim').removeClass('on');
        $('body').removeClass('hold');
    });
});