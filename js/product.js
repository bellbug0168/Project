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
                $(this).css('background', 'url("http://127.0.0.1:49261/img/freestocks-org-132631-unsplash.jpg")').css('background-size', 'cover').css('background-position', 'center');
            });
        });
    });

    // menu slide down
    var sl = $('.header_nav').find('ul').find('li');
    sl.on('mouseover', function () {
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
