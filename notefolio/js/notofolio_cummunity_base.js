$(document).ready(function(){

    // mobile menu JS
    let mobilemenuBtn = $('.mobilemenuBtn');
    let openOn = $('.mnvWrap, .overlay');
    let closeOn = $('.btn-close, .overlay');

    mobilemenuBtn.click(function(){
        openOn.addClass('active');
    });

    closeOn.click(function(){
        openOn.removeClass('active');
    });
});
    