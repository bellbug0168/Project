jQuery.noConflict();
jQuery(document).ready(function ($) {
    // 지역 show & hide
    $('.location').find('li').hide();
    $('.location').on('mouseover keyup', function () {
        $(this).find('li').show();
    });
    $('.location').on('mouseout keydown', function () {
        $('.location').find('li').hide();
    });

    // 판매처 위치 show & hide
    var a = $('.place').find('li');
    a.hide();
    $('.place').on('mouseover keyup', function () {
        $(this).find('li').show();
    });
    $('.place').on('mouseout keydown', function () {
        $(this).find('li').hide();
    });

    // menu slide down
    var sl = $('.header_nav').find('ul').find('li');
    sl.on('click', function () {
        if ($(this).children('div').hasClass('hide')) {
            var hi = sl.children('div').not('hide').slideUp(500);
            hi.addClass('hide');
            $(this).children('div').slideDown(500);
            $(this).children('div').removeClass('hide');
        } else {
            $(this).children('div').addClass('hide');
            $(this).children('div').slideUp(500);
        }
    });

    // mouseover 시 article 사진 확대
    var d = $('article').find('ul').find('li').find('a').find('img');
    d.on('mouseover', function () {
        $(this).css('transform', 'scale(1.5)');
    });
    d.on('mouseout', function () {
        $(this).css('transform', 'scale(1)');
    });

    // focus, blur tab 시 배경색 변경
    $('a').on('focus', function () {
        $(this).css('text-decoration', 'underline').css('text-decoration-color', 'floralwhite');
    });
    $('a').on('blur', function () {
        $(this).css('text-decoration', 'underline').css('text-decoration-color', 'floralwhite');
    });
});
