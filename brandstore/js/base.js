$(document).ready(function(){

    // header scroll fix JS
    let tmuWrap = $('.tmuWrap');
    let hdrWrap = $('.hdrWrap');
    let headerBox = $('.hdrWrap .headerBox');

    $(window).bind("scroll", function(){
        if($(window).scrollTop() >= 100){
            tmuWrap.addClass('hide');
            headerBox.addClass('hide');
            hdrWrap.addClass('scrollShow');
        }else {
            tmuWrap.removeClass('hide');
            headerBox.removeClass('hide');
            hdrWrap.removeClass('scrollShow');
        }

        if($(window).scrollTop() >= 100){
            hdrWrap.addClass('scrollShow');
        }else {
            hdrWrap.removeClass('scrollShow');
        }
    });
    
    // search modal JS
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    });

    // to top JS
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.to-top').fadeIn(200);
        } else {
            $('.to-top').fadeOut(200);
        }
    });
    
    // Animate the scroll to top
    $('.to-top').click(function(event) {
        event.preventDefault();
        
        $('html, body').animate({scrollTop: 0}, 800);
    })

    // 좋아요 버튼 JS
    let likeBtnO = $('.likeBtn_o');

    likeBtnO.click(function(){
        $(this).toggleClass('activeOn');
        $(this).next('.likeBtn').toggleClass('activeOn');
    });

});

