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
            delay: 6500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".cnt04_wrap .article01 .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            1280: {
                spaceBetween: 50,
                autoplay: {
                    delay: 6500,
                    disableOnInteraction: false,
                },
            },
            600: {
                spaceBetween: 40,
                autoplay: false,
            },
            200: {
                spaceBetween: 30,
                autoplay: false,
            },
        },
    });

    var cnt04_02 = new Swiper(".cnt04_wrap .article02 .mySwiper", {
        slidesPerView: 'auto',
        spaceBetween: 50,
        speed: 1000,
        autoplay: {
            delay: 6500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".cnt04_wrap .article02 .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            1280: {
                spaceBetween: 50,
                autoplay: {
                    delay: 6500,
                    disableOnInteraction: false,
                },
            },
            600: {
                spaceBetween: 40,
                autoplay: false,
            },
            200: {
                spaceBetween: 30,
                autoplay: false,
            },
        },
    });

    var cnt04_03 = new Swiper(".cnt04_wrap .article03 .mySwiper", {
        slidesPerView: 'auto',
        spaceBetween: 50,
        speed: 1000,
        autoplay: {
            delay: 6500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".cnt04_wrap .article03 .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            1280: {
                spaceBetween: 50,
                autoplay: {
                    delay: 6500,
                    disableOnInteraction: false,
                },
            },
            600: {
                spaceBetween: 40,
                autoplay: false,
            },
            200: {
                spaceBetween: 30,
                autoplay: false,
            },
        },
    });

    function resize() {
        let wdWidth = $(window).width();

        if (wdWidth >= 1280) {
            cnt04_01.autoplay.start();
            cnt04_02.autoplay.start();
            cnt04_03.autoplay.start();

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
        } else {
            $('.cnt04_wrap .swiper-slide').off('mouseover');
            $('.cnt04_wrap .swiper-slide').off('mouseout');

            cnt04_01.autoplay.stop();
            cnt04_02.autoplay.stop();
            cnt04_03.autoplay.stop();
        }
    };

    resize();

    $(window).resize(function () {
        let wdWidth = $(window).width();

        resize();
    });

    // slide 오버 시 해당 타이틀 addClass js
    $('.cnt04_wrap .cnt_section .article_cnt .cnt_list').mouseenter(function () {
        $(this).parents('.cnt_article').children('.article_title').addClass('on')
    })
    $('.cnt04_wrap .cnt_section .article_cnt .cnt_list').mouseleave(function () {
        $(this).parents('.cnt_article').children('.article_title').removeClass('on')
    });

    setTimeout(function () {
        // 퀵 메뉴 클릭 js
        $('.quick li').click(function () {
            $('.quick li').removeClass('on');
            $(this).addClass('on');

            var targetId = $(this).attr('data-scroll');
            var targetElement = $('#' + targetId);
            if (targetElement.length) {
                $('html, body').stop().animate({
                    scrollTop: targetElement.offset().top - 30
                }, 800);
            }
        });
    }, 1000);

    $(window).scroll(function () {
        let wdHeight = $(window).scrollTop();
        let cnt02offsetTop = $('.cnt02_wrap').offset().top;
        let cnt03offsetTop = $('.cnt03_wrap').offset().top;

        if (wdHeight > cnt02offsetTop) {
            $(".quick").addClass('on');
        } else {
            $(".quick").removeClass('on');
        }

        if (wdHeight > cnt03offsetTop) {
            $(".menu_btn").addClass('on');
            $(".top_btn").addClass('on');
        } else {
            $(".menu_btn").removeClass('on');
            $(".top_btn").removeClass('on');
        }
    });

    // 탑 버튼
    $(".top_btn").click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});