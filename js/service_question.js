$(document).ready(function(){

    // 스크롤 위로
    $(window).scroll(function() {
	   if ($(this).scrollTop() > 120 ){
		  $('.top').fadeIn();
	   } else {
		  $('.top').fadeOut();
	   }
    });

    $('.top').click(function() {
	   $('html, body').animate({scrollTop:0},400);
	   return false;
    });
    // 스크롤 위로 끝


    // width가 1024 이상일떄
    $(window).on('resize load', function(){
        if($(window).width() > 1023) {
            //스크롤 이동 시 메뉴 on/off
            var didScroll;
            var lastScrollTop = 0;
            var delta = 100;
            var navbarHeight = $('header').outerHeight();

        $(window).scroll(function(event){
            didScroll = true;
        });

        setInterval(function() {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 250);

        function hasScrolled() {
            var st = $(this).scrollTop();

            if(Math.abs(lastScrollTop - st) <= delta)
                return;

            if (st > lastScrollTop && st > navbarHeight){
                $('nav').removeClass('nav-down').addClass('nav-up');
            } else {
                if(st + $(window).height() < $(document).height()) {
                    $('nav').removeClass('nav-up').addClass('nav-down');
                }
            }
        lastScrollTop = st;
        }
        //스크롤 기능 끝
            $('.menu li').show();
        }
    });


    // width가 1023이하 일때
    $(window).on('resize load', function(){
        if($(window).width() < 1024) {
            $('.menu li').hide();
            $('.menu img').on('click', function(){
                    $('.menu li').toggle();
            });
        }

    });

});


