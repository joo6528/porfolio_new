$(document).ready(function(){
    // 노트폴리오 아티클 페이지 JS
    // cnt02 크레이티브 분야 카테고리 JS
    
    let categoryBoxArticleLI = $('.categoryBox_article > li');

    categoryBoxArticleLI.click(function(){
        categoryBoxArticleLI.removeClass('clickShow');
        $(this).addClass('clickShow');
    });

    var swiper = new Swiper(".categorySwiper", {
        slidesPerView: "auto",
        spaceBetween: 30,
    });
});