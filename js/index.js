$(function(){
   $('#cycle').cycle({
       fx: 'scrollLeft',
       delay: -2000
   });
    $('#cycle2').cycle({
       delay: -2000
   });

    $('#mslider').children('a').on('click', function(){
        $('#mslider').stop().animate({'left': '47%'},500);
        $('#cycle2move').stop().animate({'left': '54%'},500);
        $('#menu').css('display', 'inline-block');
    })
})
