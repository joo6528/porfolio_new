
$( window ).resize(function(){
    var wd = $(window).width();

    if(wd > 1280){
        mainSlide = 1.5;
        categorySlide = 8;
        themaSlide = 3;
    }else if(wd > 1080 && wd <= 1280){
        mainSlide = 1.2;
        categorySlide = 7;
        themaSlide = 3;
    }else if(wd > 600 && wd <= 1080){
        mainSlide = 1.2;
        categorySlide = 6;
        themaSlide = 3;
    }else{
        mainSlide = 1.1;
        categorySlide = 5;
        themaSlide = 2;
    }

    // main banner JS
    var swiper = new Swiper(".centerItem", {
        loop: true,
        slidesPerView: mainSlide,
        spaceBetween: 60,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type:'bullets'
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay:{
            delay:3500,
            disableOnInteraction:false,
        },
    });


    // main category JS
    var swiper = new Swiper(".categorySwiper", {
        slidesPerView: categorySlide,
    });

    // content03_테마 JS
    var swiper = new Swiper(".themaSwiper", {
        slidesPerView: themaSlide,
        spaceBetween: 30,
    });
});


$(document).ready(function(){

    var wd = $(window).width();

    if(wd > 1280){
        mainSlide = 1.5;
        categorySlide = 8;
        themaSlide = 3;
    }else if(wd > 1080 && wd <= 1280){
        mainSlide = 1.2;
        categorySlide = 7;
        themaSlide = 3;
    }else if(wd > 600 && wd <= 1080){
        mainSlide = 1.2;
        categorySlide = 6;
        themaSlide = 3;
    }else{
        mainSlide = 1.1;
        categorySlide = 5;
        themaSlide = 2;
    }


    // main banner JS
    var swiper = new Swiper(".centerItem", {
        loop: true,
        slidesPerView: mainSlide,
        spaceBetween: 60,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type:'bullets'
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay:{
            delay:3500,
            disableOnInteraction:false,
        },
    });


    // main category JS
    var swiper = new Swiper(".categorySwiper", {
        slidesPerView: categorySlide,
    });

    // content03_테마 JS
    var swiper = new Swiper(".themaSwiper", {
        slidesPerView: themaSlide,
        spaceBetween: 30,
    });
});

$(document).ready(function(){
    // 더보기 버튼 JS
    let productHiden = $('.productHiden article').slice(8,13);
    let moreBtn = $('.moreBtn');

    moreBtn.click(function(){
        productHiden.css('display','block');
        $(this).addClass('hiddenOn');
    });
});