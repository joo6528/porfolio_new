$(document).ready(function () {
    $.ajax({
        url: "layout/dockbar_main.html",
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
    // $('#lightCheck').change(function () {
    //     if ($(this).is(':checked')) {
    //         localStorage.setItem('lightStatus', 'checked');
    //     } else {
    //         localStorage.setItem('lightStatus', 'unchecked');
    //     }
    // });

    // cnt04 : 포트폴리오 리스트
    var cnt04_01 = new Swiper(".cnt04_wrap .article01 .mySwiper", {
        slidesPerView: 'auto',
        spaceBetween: 50,
        speed: 1000,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".cnt04_wrap .article01 .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            1280: {
                spaceBetween: 50,
            },
            600: {
                spaceBetween: 40,
            },
            200: {
                spaceBetween: 30,
            },
        },
    });

    var cnt04_02 = new Swiper(".cnt04_wrap .article02 .mySwiper", {
        slidesPerView: 'auto',
        spaceBetween: 50,
        speed: 1000,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".cnt04_wrap .article02 .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            1280: {
                spaceBetween: 50,
            },
            600: {
                spaceBetween: 40,
            },
            200: {
                spaceBetween: 30,
            },
        },
    });

    var cnt04_03 = new Swiper(".cnt04_wrap .article03 .mySwiper", {
        slidesPerView: 'auto',
        spaceBetween: 50,
        speed: 1000,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".cnt04_wrap .article03 .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            1280: {
                spaceBetween: 50,
            },
            600: {
                spaceBetween: 40,
            },
            200: {
                spaceBetween: 30,
            },
        },
    });

    $('.cnt04_wrap .article01 .swiper-slide').on('mouseover', function () {
        cnt04_01.autoplay.stop();
    });
    $('.cnt04_wrap .article01 .swiper-slide').on('mouseout', function () {
        cnt04_01.autoplay.start();
    });

    $('.cnt04_wrap .article02 .swiper-slide').on('mouseover', function () {
        cnt04_02.autoplay.stop();
    });
    $('.cnt04_wrap .article02 .swiper-slide').on('mouseout', function () {
        cnt04_02.autoplay.start();
    });

    $('.cnt04_wrap .article03 .swiper-slide').on('mouseover', function () {
        cnt04_03.autoplay.stop();
    });
    $('.cnt04_wrap .article03 .swiper-slide').on('mouseout', function () {
        cnt04_03.autoplay.start();
    });

    // slide 오버 시 해당 타이틀 addClass js
    $('.cnt04_wrap .cnt_section .article_cnt .cnt_list').mouseenter(function () {
        $(this).parents('.cnt_article').children('.article_title').addClass('on')
    })
    $('.cnt04_wrap .cnt_section .article_cnt .cnt_list').mouseleave(function () {
        $(this).parents('.cnt_article').children('.article_title').removeClass('on')
    })

    // 탑 버튼
    $(".top_btn").click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});