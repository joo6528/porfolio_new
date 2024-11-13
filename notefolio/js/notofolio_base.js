$(document).ready(function(){

    // header scroll fix JS
    let tbnWrap = $('.tbnWrap');
    let tmuWrap = $('.tmuWrap');
    let hdrWrap = $('.hdrWrap');

    $(window).bind("scroll", function(){
        if($(window).scrollTop() >= 100){
            tbnWrap.addClass('hide');
            tmuWrap.addClass('hide');
            hdrWrap.addClass('scrollShow');
        }else {
            tbnWrap.removeClass('hide');
            tmuWrap.removeClass('hide');
            hdrWrap.removeClass('scrollShow');
        }

        if($(window).scrollTop() >= 100){
            hdrWrap.addClass('scrollShow');
        }else {
            hdrWrap.removeClass('scrollShow');
        }
    });

    // footer JS
    let personInfoBox = $('.person_infoBox');
    let siteInfoMoreBox = $('.site_info_moreBox');

    personInfoBox.click(function(){
        siteInfoMoreBox.toggleClass('toggleOn');

        if(siteInfoMoreBox.hasClass('toggleOn')){
            $(this).children('i').addClass('rotate');
        }else{
            $(this).children('i').removeClass('rotate');
        }
    });

    // mobile menu JS

    let mobileMenu = $('.mobileMenuIcon');
    let mobileMenuBox = $('.mnuWrap');
    let mobileMenuCloseBtn = $('.mobileMenuCloseBtn');

    mobileMenu.click(function(){
        mobileMenuBox.toggle();
    });

    mobileMenuCloseBtn.click(function(){
        mobileMenuBox.hide();
    });
    
});