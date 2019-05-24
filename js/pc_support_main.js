$(document).ready(function() {
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

    $('.service_tel a').on('mouseover focus', function(){

    })
});
