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

    // menu event
    var b = $('.bn').find('div').eq(1); // 밤하늘
    var c = $('.header_nav').find('ul'); // 메뉴들

    b.on('mouseover', function () {
        b.fadeOut(2000, function() {
            b.fadeIn(2000, function() {

            });
        });
        // c.appendTo(this).css('background-color', 'lime')
    });


    // mouseover
    var d = $('article').find('ul').find('li').find('a').find('img');
    d.on('mouseover', function () {
        d.eq(0).css('transform', 'scale(1.5)');
    });
    d.on('mouseout', function () {
        d.eq(0).css('transform', 'scale(1)');
    });
});
