$(document).ready(function() {

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

            // 전화 이벤트
        $('.service_tel').on('mouseover', function(){
            $('.service_tel_view').show();
            $('.service_tel>p').hide();
            $('.service_tel .tel').hide();
        });

        $('.service_tel a').on('focusin', function(){
            $('.service_tel_view').show();
            $('.service_tel>p').hide();
            $('.service_tel .tel').hide();
        });

        $('.service_tel').on('mouseout', function(){
            $('.service_tel_view').hide();
            $('.service_tel>p').show();
            $('.service_tel .tel').show();
        });

        $('.service_tel a').on('focusout', function(){
            $('.service_tel_view').hide();
            $('.service_tel>p').show();
            $('.service_tel .tel').show();
        });
        // 전화이벤트 끝

        // 이메일 이벤트
        $('.service_email').on('mouseover', function(){
            $('.service_email_view').show();
            $('.service_email>p').hide();
            $('.service_email .email').hide();
        });

        $('.service_email a').on('focusin', function(){
            $('.service_email_view').show();
            $('.service_email>p').hide();
            $('.service_email .email').hide();
        });

        $('.service_email').on('mouseout', function(){
            $('.service_email_view').hide();
            $('.service_email>p').show();
            $('.service_email .email').show();
        });

        $('.service_email a').on('focusout', function(){
            $('.service_email_view').hide();
            $('.service_email>p').show();
            $('.service_email .email').show();
        });
        // 이메일 이벤트 끝
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


    // width가 768이하 일때
    $(window).on('resize load', function(){
        if($(window).width() < 768) {

        }
    });






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

});
