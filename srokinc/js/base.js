$(document).ready(function(){

    AOS.init();
    
    // header scroll fix JS
    let hdrWrap = $('.hdrWrap header');

    $(window).bind("scroll", function(){
        if($(window).scrollTop() >= 100){
            hdrWrap.addClass('scrollShow');
        }else {
            hdrWrap.removeClass('scrollShow');
        }

        if($(window).scrollTop() >= 100){
            hdrWrap.addClass('scrollShow');
        }else {
            hdrWrap.removeClass('scrollShow');
        }
    });

    //to top JS
    
    $("#toTop").hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#toTop').click(function () {
        $('#toTop').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        });
        return false;
    });

    
    // subpage mob_categoryBox JS
    let mainTitle = $('.mob_categoryBox .mainTitle');
    let categoryIist = $('.mob_categoryBox .categoryTxt');

    mainTitle.click(function(){
        categoryIist.slideToggle(300);
    });

    categoryIist.mouseleave(function(){
        $(this).css('display', 'none');
    });
});
