
$( window ).resize(function(){
    let wd = $(window).width();

    if(wd > 1400){
        cnt01 = 4;
        banner = 4;
    }else if(wd > 1024 && wd <= 1400){
        cnt01 = 3;
        banner = 3;
    }
    else if(wd > 480 && wd <= 1024){
        cnt01 = 2;
        banner = 2;
    }
    else{
        cnt01 = 1;
        banner= 1;
    }

    // HOT 크리에이터 slide JS
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: cnt01,
        spaceBetween: 24,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // 크리에이티브 분야 메뉴 slide JS
    var swiper = new Swiper(".menuSwiper", {
        slidesPerView: 7,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },    
    });

    // 노트폴리오 아카데미 slide JS
    var swiper = new Swiper(".cntSwiper", {
        slidesPerView:banner,
        spaceBetween:24,
    });

});

$(document).ready(function(){
    let wd = $(window).width();

    if(wd > 1400){
        i=4;
    }else if(wd > 1024 && wd <= 1400){
        i=3;
    }
    else{
        i=2
    }

    // HOT 크리에이터 scroll JS
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: i,
        spaceBetween: 24,
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    });

    // 노트폴리오 픽 선정 hover JS
    $('.pick_label').mouseover(function(){
        $(this).next('.pick_hover').css('opacity', '1');
    });

    $('.pick_label').mouseleave(function(){
        $(this).next('.pick_hover').css('opacity', '0');
    });

    // cnt02 크레이티브 분야 카테고리 JS
    let categoryItemGroup = $('.category_itemGroup');
    let prevBtnBox = $('.prevBtn');
    let nextBtnBox = $('.nextBtn');
    let prevBtn = $('.prevBtn .categoryBtn');
    let nextBtn = $('.nextBtn .categoryBtn');

    let categoryItemGroupDiv = $('.category_itemGroup > div');
    let categoryItem = $('.category_item');

    // nextBtn.click(function(){
    //     categoryItemGroup.addClass('slideOn');

    //     if(categoryItemGroup.hasClass('slideOn')){
    //         nextBtnBox.addClass('hide');
    //         prevBtnBox.removeClass('hide');
    //     } 
    // });

    prevBtn.click(function(){
        categoryItemGroup.removeClass('slideOn');

        if(nextBtnBox.hasClass('hide')){
            prevBtnBox.addClass('hide');
            nextBtnBox.removeClass('hide');
        }
    });

    categoryItem.click(function(){
        categoryItemGroupDiv.removeClass('clickShow');
        $(this).addClass('clickShow');
    });

});