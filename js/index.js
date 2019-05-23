$(function () {

    $(window).on("resize load", function () {

        $('body').height($(this).height()); $('#cycle').height($(this).height());
        $('#mslider').height($(this).height());
        $('#cycle2').height($(this).height());
        $('#menu').height($(this).height());
    })



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
       if(!($('#wrap').hasClass('mainhide'))){
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
           setTimeout(function(){
               $('#wrap').stop().animate({'left':'-47.5%'},400);
           $('#wrap').addClass('mainhide');
           },400);

       }
    });
    $('#menu li').eq(1).on('click',function(){
       if(($('#wrap').hasClass('mainhide'))){
           $('#wrap').stop().animate({'left':'0'},400);
           $('#wrap').removeClass('mainhide');
       }
    });
})
