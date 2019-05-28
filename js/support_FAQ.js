$(document).ready(function(){
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
    // 리스트 메뉴

    $('.tab>li').find('ul').hide();
    $('.tab>li:eq(0)').find('h2').next().show().css('background-color', 'white');

    $('.tab>li>h2').on('click', function(){
        $('.tab>li').find('ul').hide();
        $('.tab>li').find('h2').css('background-color', 'white');
        $(this).css('background-color', 'red').next().show().css('background-color', 'white');
    });

    // 리스트 메뉴 끝
    // menu 클래스 바로 하위에 있는 a 태그를 클릭했을때
    $(".list_menu>a").click(function(){
       if($(this).next("ul").hasClass('hide')){
           var hid = $('.list_menu>a').next("ul").not("hide");
           hid.slideUp();
           hid.addClass('hide');
           $(this).next("ul").slideDown();
           $(this).next("ul").removeClass("hide");
       }else{
           $(this).next("ul").slideUp();
           $(this).next("ul").addClass("hide");
       }
    });


    // width가 1024 이상일떄
    $(window).on('resize load', function(){
        if($(window).width() > 1023) {
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

    $('.list ol li a').on('click', function(){
        $('.list ol li>ul:eq(0)').toggle();
    })


});

