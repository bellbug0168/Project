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
        b.fadeOut(2000, function () {
            b.fadeIn(2000, function () {

            });
        });
        // c.appendTo(this).css('background-color', 'lime')
    });

    // menu slide down
    var slide = $(".header_nav").find('ul').find('li').eq(0);
    slide.on('click', function () {
        $(this)

        slide.slideDown();
    });


    // 필터링
    var ar_fil = $('article').find('.pronum');
    console.log(ar_fil);

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
        $(this).css('background-color', 'chartreuse');
    });
    $('a').on('blur', function () {
        $(this).css('background-color', 'white');
    });
});
