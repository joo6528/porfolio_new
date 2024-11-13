(function($){
    $.fn.picZoomer = function(options){
        var opts = $.extend({}, $.fn.picZoomer.defaults, options), 
            $this = this,
            $picBD = $('<div class="picZoomer-pic-wp"></div>').css({'width':100+'%', 'height':100+'%'}).appendTo($this),
            $pic = $this.children('img').addClass('picZoomer-pic').appendTo($picBD),
            $cursor = $('<div class="picZoomer-cursor"><i class="f-is picZoomCursor-ico"></i></div>').appendTo($picBD),
            cursorSizeHalf = {w:$cursor.width()/2 ,h:$cursor.height()/2},
            $zoomWP = $('<div class="picZoomer-zoom-wp"><img src="" alt="" class="picZoomer-zoom-pic"></div>').appendTo($this),
            $zoomPic = $zoomWP.find('.picZoomer-zoom-pic'),
            picBDOffset = {x:$picBD.offset().left,y:$picBD.offset().top};

        
        opts.zoomWidth = opts.zoomWidth||opts.picWidth;
        opts.zoomHeight = opts.zoomHeight||opts.picHeight;
        var zoomWPSizeHalf = {w:opts.zoomWidth/2 ,h:opts.zoomHeight/2};

        $zoomWP.css({'width':opts.zoomWidth+'px', 'height':opts.zoomHeight+'px'});
        $zoomWP.css(opts.zoomerPosition || {top: 0, left: opts.picWidth+30+'px'});

        $zoomPic.css({'width':opts.picWidth*opts.scale+'px', 'height':opts.picHeight*opts.scale+'px'});

        $picBD.on('mouseenter',function(event){
            $cursor.show();
            $zoomWP.show();
            $zoomPic.attr('src',$pic.attr('src'))
        }).on('mouseleave',function(event){
            $cursor.hide();
            $zoomWP.hide();
        }).on('mousemove', function(event){
            var x = event.pageX-picBDOffset.x,
                y = event.pageY-picBDOffset.y;

            $cursor.css({'left':x-cursorSizeHalf.w+'px', 'top':y-cursorSizeHalf.h+'px'});
            $zoomPic.css({'left':-(x*opts.scale-zoomWPSizeHalf.w)+'px', 'top':-(y*opts.scale-zoomWPSizeHalf.h)+'px'});

        });
        return $this;

    };
    $.fn.picZoomer.defaults = {
        picWidth: 550,
        picHeight: 550,
        scale: 2.5,
        zoomerPosition: {bottom: '15px', right: '15px'},

        zoomWidth: 200,
        zoomHeight: 200
    };
})(jQuery); 



$(document).ready(function () {
    $('.picZoomer').picZoomer();
    $('.piclist li').on('click', function (event) {
        var $pic = $(this).find('img');
        $('.picZoomer-pic').attr('src', $pic.attr('src'));
    });
    
    var owl = $('#recent_post');
        owl.owlCarousel({
        margin:20,
        dots:false,
        nav: true,
        navText: [
            "<i class='fa fa-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>"
        ],
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
            items: 2
            },
            600: {
            items:3
            },
            1000: {
            items:5
            },
            1200: {
            items:4
            }
        }
    });    
    
    $('.decrease_').click(function () {
        decreaseValue(this);
    });
    $('.increase_').click(function () {
        increaseValue(this);
    });
    function increaseValue(_this) {
        var value = parseInt($(_this).siblings('input#number').val(), 10);
        value = isNaN(value) ? 0 : value;
        value++;
        $(_this).siblings('input#number').val(value);
    }

    function decreaseValue(_this) {
        var value = parseInt($(_this).siblings('input#number').val(), 10);
        value = isNaN(value) ? 0 : value;
        value < 1 ? value = 1 : '';
        value--;
        $(_this).siblings('input#number').val(value);
    }
});


$( window ).resize(function(){

    var wd = $(window).width();

    if(wd > 1280){
        slideNum = 4;
        otherslideNum = 4;
        
    }else if(wd > 1080 && wd <= 1280){
        slideNum = 3;
        otherslideNum = 4;
        
    }else if(wd > 600 && wd <= 1080){
        slideNum = 2;
        otherslideNum = 3;
        
    }else{
        slideNum = 1;
        otherslideNum = 2;
    }

    // otherProduct_Box JS
    var swiper = new Swiper(".cntmySwiper", {
        slidesPerView: otherslideNum, 
        spaceBetween:20,
        pagination: {
          el: ".swiper-pagination",
        },
    });
    
    // best review JS
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: slideNum,
        spaceBetween:20,
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
    });
});

$(document).ready(function(){

    var wd = $(window).width();

    if(wd > 1280){
        slideNum = 4;
        otherslideNum = 4;
        
    }else if(wd > 1080 && wd <= 1280){
        slideNum = 3;
        otherslideNum = 4;
        
    }else if(wd > 600 && wd <= 1080){
        slideNum = 2;
        otherslideNum = 3;
        
    }else{
        slideNum = 1;
        otherslideNum = 2;
    }

    // otherProduct_Box JS
    var swiper = new Swiper(".cntmySwiper", {
        slidesPerView: otherslideNum,
        spaceBetween:20,
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
    });

    // best review JS
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: slideNum,
        spaceBetween:20,
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
    });
});