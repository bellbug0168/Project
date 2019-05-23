$(function () {
    $(window).on("load resize", function () {
        $('html').width($(this).width());
        $('html').height($(this).height());
        $('#cycle').height($(this).height());
        $('#mslider').height($(this).height());
        $('#cycle2').height($(this).height());
        $('#cycle2move').height($(this).height());
        $('#menu').height($(this).height());
    })

    $('#cycle').cycle({
        fx: 'scrollLeft',
        delay: -2000
    });
    $('#cycle2').cycle({
        delay: -2000
    });

    $('#mslider').children('a').on('click', function () {

        if ($('#menu').hasClass('hide')) {
            $('#mslider').stop().animate({
                'left': '235px'
            }, 300);
            $('#cycle2').stop().animate({
                'left': '235px'
            }, 300);
            $('#menu').show();
            $('#mslider div').css('background-color', 'darkgrey');
            $('#menu').removeClass('hide');
            setTimeout(function(){
                $('#menu').css('z-index', '3');
            },300)

        } else {
            $('#menu').css('z-index', '-1');
            $('#cycle2').stop().animate({
                'left': '0px'
            }, 300);
            $('#mslider').stop().animate({
                'left': '0px'
            }, 300);
            $('#mslider div').css('background-color', 'dimgrey');
            setTimeout(function () {
                $('#menu').addClass('hide');

                $('#menu').hide();

            }, 300);

        }
    });
    $('#menu li').eq(0).on('click',function(){
        $('#wrap').stop().animate({'left':'-47.5%'},400);
    });
})
