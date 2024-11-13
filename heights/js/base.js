$(document).ready(function(){

    // headerSubNav hover JS
    let headerSubNavLi = $('.headerSubNav li')

    headerSubNavLi.click(function(){
        headerSubNavLi.removeClass('clickOn');
        $(this).addClass('clickOn');

        $('.headerSubNav li:eq(1)').removeClass('clickOn');
        $('.headerSubNav li:eq(3)').removeClass('clickOn');
        $('.headerSubNav li:eq(4)').removeClass('clickOn');
        $('.headerSubNav li:eq(8)').removeClass('clickOn');
    });

    // 검색 open JS
    let hdrWrap = $('.hdrWrap');
    let searchBtn = $('.searchBtn');
    let searchBox = $('.searchBox');
    let closeIcon = $('.closeIcon');
    let languageBtn = $('.languageModal');
    let languageBox = $('.languageBox');
    let guideBtn = $('.guideBtn');
    let guideBox = $('.guideBox');
    let popularBrand = $('.popularBrand');
    
    let menu_mob = $('.menu_mob');
    let menulistMob = $('.menulist_mob');
    let menulistModal = $('.memberBox');
    let searchBtn_Mob = $('.searchBtn_mob');

    searchBtn.click(function(){
        searchBox.css('display','block');
        guideBox.css('display','none');
        languageBox.css('display','none');
    });

    closeIcon.click(function(){
        searchBox.css('display','none');
        headerSubNavLi.removeClass('clickOn');
    });2

    languageBtn.click(function(){
        searchBox.css('display','none');
        guideBox.css('display','none');
        languageBox.toggle();
    });

    guideBtn.click(function(){
        searchBox.css('display','none');
        languageBox.css('display','none');
        guideBox.toggle();
    });

    // mob JS
    // 검색 open mob JS
    searchBtn_Mob.click(function(){
        searchBox.toggleClass('check');
        menulistMob.removeClass('check');
        menu_mob.removeClass('check');
        hdrWrap.removeClass('check');

        if(searchBox.hasClass('check')){
            $('body').addClass('overflowH');
            popularBrand.addClass('openH');
        }else {
            $('body').removeClass('overflowH');
            popularBrand.removeClass('openH');
        }
    });

    // menu mob JS
    menu_mob.click(function(){
        $(this).toggleClass('check');
        menulistMob.toggleClass('check');
        searchBox.removeClass('check');
        hdrWrap.addClass('check');

        if($(this).hasClass('check')){
            $('body').addClass('overflowH');
            menulistMob.addClass('openH');
            hdrWrap.addClass('check');
        }else {
            $('body').removeClass('overflowH');
            menulistMob.removeClass('openH');
            hdrWrap.removeClass('check');
        } 
    });

    menulistModal.click(function(){
        $(this).toggleClass('clickOn');
    });

    // listBtn JS
    let listChange = $('.subStore')
    let listBtn = $('.listBtnBox button');

    listBtn.click(function(){
        listBtn.removeClass('showOn')
        $(this).addClass('showOn');

        if($(this).hasClass('list01')){
            listChange.removeClass('listOn');
        }else{
            listChange.addClass('listOn');
        }
    });

    // filter modal JS
    let categoryTitle = $('.categoryTitleBox');
    let categorySubMenu = $('.categorySubMenuBox');

    categoryTitle.click(function(){
        $(this).next('.categorySubMenuBox').toggleClass('showOn');

        if(categorySubMenu.hasClass('showOn')) {
            $(this).children('i').css('transform', 'rotate(180deg)');
        }else {
            $(this).children('i').css('transform', 'rotate(0deg)');
        }
    });

});


$(document).ready(function(){
    //header JS
    var swiper = new Swiper(".categorySwiper", {
        slidesPerView: "auto",
    });
});