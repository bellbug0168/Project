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
            }, 500);
            $('#cycle2').stop().animate({
                'left': '235px'
            }, 500);
            $('#menu').show();
            $('#menu').removeClass('hide');
        }else{
            $('#cycle2').stop().animate({
                'left': '0px'
            }, 500);
            $('#mslider').stop().animate({
                'left': '0px'
            }, 500);
            setTimeout(function(){
                $('#menu').addClass('hide');
                $('#menu').hide();
            },500);

        }
    })
})
