jQuery.noConflict();
jQuery(document).ready(function ($) {
    // 지역 show & hide
    $('.location').find('li').hide();
    $('.location').on('mouseover keyup', function() {
        $(this).find('li').show();
    });
    $('.location').on('mouseout keydown', function() {
        $('.location').find('li').hide();
    });

    // 판매처 위치 show & hide
     $('.place').find('li').hide();
    $('.place').on('mouseover keyup', function() {
        $('.bn').find('div').eq(1).show(function() {
            $(this).find('li').show();
        });

    });
    $('.place').on('mouseout keydown', function() {
        $('.bn').find('div').eq(1).hide();
    });

    // mouseover
    var d = $('article').find('ul').find('li').find('a').find('img');
    d.on('mouseover', function() {
        d.eq(0).css('transform', 'scale(1.5)');
    });
    d.on('mouseout', function() {
        d.eq(0).css('transform', 'scale(1)');
    });
});
