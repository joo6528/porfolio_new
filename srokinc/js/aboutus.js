$(window).resize(function(){});

$(document).ready(function(){

    // 연혁 JS
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: { 
            0: { 
                slidesPerView: 1, 
            },
            1028: {
                slidesPerView: 2,
            },
        }
    });
});