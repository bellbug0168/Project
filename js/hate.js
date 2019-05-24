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
        $(this).find('li').show();
    });
    $('.place').on('mouseout keydown', function() {
        $('.place').find('li').hide();
    });
});
