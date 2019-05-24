$(function () {
     $("#carousel").flipster({
                buttons:true,
                style:'coverflow',
                loop:true,
                autoplay:2000,
                scrollwheel:false
            });
    var width = 0;
    $(window).on("resize load", function () {
        width = $(window).width();
        console.log(width);
        $('body').height($(this).height());
        $('#cycle').height($(this).height());
        $('#mslider').height($(this).height());
        $('#cycle2').height($(this).height());
        $('#menu').height($(this).height());
        console.log(width);
        if (width > 480 && width < 874) {
            $('#mslider').children('a').on('click', function () {

                if ($('#menu').hasClass('hide')) {
                    $('#section article').css('z-index', '-1');
                    $('#section article').not('.hide').stop().slideUp(100).addClass('hide');
                    $('#mslider').stop().animate({
                        'left': '235px'
                    }, 1000);
                    $('#cycle').stop().animate({
                        'left': '311px'
                    }, 1000);
                    $('#menu').show();
                    $('#mslider div').css('background-color', 'floralwhite');
                    $('#menu').removeClass('hide');
                    setTimeout(function () {
                        $('#menu').css('z-index', '100');
                    }, 1000)
                    $('#mslider img:eq(0)').attr('src', 'img/icon2.png');

                } else {
                    $('#section article').css('z-index', '-1');
                    $('#menu').css('z-index', '-1');
                    $('#cycle').stop().animate({
                        'left': '76px'
                    }, 100);
                    $('#mslider').stop().animate({
                        'left': '0px'
                    }, 100);
                    $('#mslider div').css('background-color', 'floralwhite');
                    setTimeout(function () {
                        $('#menu').addClass('hide');

                        $('#menu').hide();

                    }, 100);
                    $('#mslider img:eq(0)').attr('src', 'img/icon.png');

                }
            });
            $('#menu li:eq(0)').on('click', function () {

                $('#section article').not('.hide').stop().slideUp(5).addClass('hide');
                $('#menu').css('z-index', '-1');
                $('#cycle').stop().animate({
                    'left': '76px'
                }, 300);
                $('#mslider').stop().animate({
                    'left': '0px'
                }, 300);
                $('#mslider div').css('background-color', 'floralwhite');
                setTimeout(function () {
                    $('#menu').addClass('hide');
                    $('#menu').hide();
                }, 300);
                $('#mslider img:eq(0)').attr('src', 'img/icon.png');


            })
            $('#menu li:eq(1)').on('click', function () {

                $('#section article').not('.hide').stop().slideUp(500).addClass('hide');
                $('#menu').css('z-index', '-1');
                $('#cycle').stop().animate({
                    'left': '76px'
                }, 300);
                $('#mslider').stop().animate({
                    'left': '0px'
                }, 300);
                $('#mslider div').css('background-color', 'floralwhite');
                setTimeout(function () {
                    $('#menu').addClass('hide');

                    $('#menu').hide();

                }, 300);
                $('#mslider img:eq(0)').attr('src', 'img/icon.png');

                setTimeout(function () {
                    $('#section article').css('z-index', '100');
                    $('#section article:eq(2)').stop().slideDown(1000).removeClass('hide');
                }, 500);

            })
            $('#menu li:eq(2)').on('click', function () {
                $('#section article').not('.hide').stop().slideUp(500).addClass('hide');
                $('#menu').css('z-index', '-1');
                $('#cycle').stop().animate({
                    'left': '76px'
                }, 300);
                $('#mslider').stop().animate({
                    'left': '0px'
                }, 300);
                $('#mslider div').css('background-color', 'floralwhite');
                setTimeout(function () {
                    $('#menu').addClass('hide');

                    $('#menu').hide();

                }, 300);
                $('#mslider img:eq(0)').attr('src', 'img/icon.png');

                setTimeout(function () {
                    $('#section article').css('z-index', '100');
                    $('#section article:eq(0)').stop().slideDown(1000).removeClass('hide');
                }, 500);
                for (let i = 0; i < 3; i++) {
                    setTimeout(function () {
                        $('#content >div').eq(i).animate({
                            'left': '0'
                        }, 2000);
                    })
                }
            })
            $('#menu li:eq(3)').on('click', function () {
                $('#section article').not('.hide').stop().slideUp(500).addClass('hide');
                $('#menu').css('z-index', '-1');
                $('#cycle').stop().animate({
                    'left': '76px'
                }, 300);
                $('#mslider').stop().animate({
                    'left': '0px'
                }, 300);
                $('#mslider div').css('background-color', 'floralwhite');
                setTimeout(function () {
                    $('#menu').addClass('hide');

                    $('#menu').hide();

                }, 300);
                $('#mslider img:eq(0)').attr('src', 'img/icon.png');

                setTimeout(function () {
                    $('#section article').css('z-index', '100');
                    $('#section article:eq(1)').stop().slideDown(1000).removeClass('hide');
                }, 500);

            })
            $('#menu li:eq(4)').on('click', function () {
                $('#section article').not('.hide').stop().slideUp(500).addClass('hide');
                $('#menu').css('z-index', '-1');
                $('#cycle').stop().animate({
                    'left': '76px'
                }, 300);
                $('#mslider').stop().animate({
                    'left': '0px'
                }, 300);
                $('#mslider div').css('background-color', 'floralwhite');
                setTimeout(function () {
                    $('#menu').addClass('hide');

                    $('#menu').hide();

                }, 300);
                $('#mslider img:eq(0)').attr('src', 'img/icon.png');

                setTimeout(function () {
                    $('#section article').css('z-index', '100');
                    $('#section article:eq(3)').stop().slideDown(1000).removeClass('hide');
                }, 500);

            })
        } else if (width >= 874) {
            $('#mslider').children('a').on('click', function () {

                if ($('#menu').hasClass('hide')) {

                    $('#mslider').stop().animate({
                        'left': '235px'
                    }, 300);
                    $('#cycle2').stop().animate({
                        'left': '235px'
                    }, 300);
                    $('#menu').show();
                    $('#mslider div').css('background-color', 'floralwhite');
                    $('#menu').removeClass('hide');
                    setTimeout(function () {
                        $('#menu').css('z-index', '3');
                    }, 300)
                    $('#mslider img:eq(0)').attr('src', 'img/icon2.png');

                } else {

                    $('#menu').css('z-index', '-1');
                    $('#cycle2').stop().animate({
                        'left': '0px'
                    }, 300);
                    $('#mslider').stop().animate({
                        'left': '0px'
                    }, 300);
                    $('#mslider div').css('background-color', 'floralwhite');
                    setTimeout(function () {
                        $('#menu').addClass('hide');

                        $('#menu').hide();

                    }, 300);
                    $('#mslider img:eq(0)').attr('src', 'img/icon.png');

                }
            });
            $('#menu li:eq(1)').on('click', function () {

                if (!($('#wrap').hasClass('mainhide'))) {
                    $('.keyhandler').removeClass('keyhandler');
                    $('#menu').css('z-index', '-1');
                    $('#cycle2').stop().animate({
                        'left': '0px'
                    }, 300);
                    $('#mslider').stop().animate({
                        'left': '0px'
                    }, 300);
                    $('#mslider div').css('background-color', 'floralwhite');
                    $('#mslider img:eq(0)').attr('src', 'img/icon.png');
                    setTimeout(function () {
                        $('#menu').addClass('hide');

                        $('#menu').hide();

                    }, 300);
                    setTimeout(function () {
                        $('#wrap').stop().animate({
                            'left': '-47.5%'
                        }, 400);
                        $('#wrap').addClass('mainhide');
                    }, 400);
                    setTimeout(function () {
                        $('#section article:eq(2)').stop().slideDown(1000).removeClass('hide');
                    }, 400);
                } else {
                    $('#section article').not('.hide').stop().slideUp(500).addClass('hide');
                    setTimeout(function () {
                        $('#section article:eq(2)').stop().slideDown(1000).removeClass('hide');
                    }, 500);
                }
            });
            $('#menu li:eq(0)').on('click', function () {


                $('#section article').not('.hide').slideUp(500).addClass('hide');

                if (($('#wrap').hasClass('mainhide'))) {
                    $('#wrap').stop().animate({
                        'left': '0'
                    }, 1000);
                    $('#wrap').removeClass('mainhide');
                };
            });
            $('#menu li:eq(2)').on('click', function () {

                if (!($('#wrap').hasClass('mainhide'))) {
                    $('.keyhandler').removeClass('keyhandler');
                    $('#menu').css('z-index', '-1');
                    $('#cycle2').stop().animate({
                        'left': '0px'
                    }, 300);
                    $('#mslider').stop().animate({
                        'left': '0px'
                    }, 300);
                    $('#mslider div').css('background-color', 'floralwhite');
                    $('#mslider img:eq(0)').attr('src', 'img/icon.png');
                    setTimeout(function () {
                        $('#menu').addClass('hide');

                        $('#menu').hide();

                    }, 300);
                    setTimeout(function () {
                        $('#wrap').stop().animate({
                            'left': '-47.5%'
                        }, 400);
                        $('#wrap').addClass('mainhide');
                    }, 400);
                    setTimeout(function () {
                        $('#section article:eq(0)').stop().slideDown(1000).removeClass('hide');
                    }, 400);
                    for (let i = 0; i < 3; i++) {
                        setTimeout(function () {
                            $('#content >div').eq(i).animate({
                                'left': '0'
                            }, 2000);
                        })
                    }

                } else {
                    $('#section article').not('.hide').stop().slideUp(500).addClass('hide');
                    setTimeout(function () {
                        $('#section article:eq(0)').stop().slideDown(1000).removeClass('hide');
                    }, 500);
                    for (let i = 0; i < 3; i++) {
                        setTimeout(function () {
                            $('#content >div').eq(i).animate({
                                'left': '0'
                            }, 2500);
                        })
                    }
                }
            });
            $('#menu li:eq(3)').on('click', function () {

                if (!($('#wrap').hasClass('mainhide'))) {
                    $('.keyhandler').removeClass('keyhandler');
                    $('#menu').css('z-index', '-1');
                    $('#cycle2').stop().animate({
                        'left': '0px'
                    }, 300);
                    $('#mslider').stop().animate({
                        'left': '0px'
                    }, 300);
                    $('#mslider div').css('background-color', 'floralwhite');
                    $('#mslider img:eq(0)').attr('src', 'img/icon.png');
                    setTimeout(function () {
                        $('#menu').addClass('hide');

                        $('#menu').hide();

                    }, 300);
                    setTimeout(function () {
                        $('#wrap').stop().animate({
                            'left': '-47.5%'
                        }, 400);
                        $('#wrap').addClass('mainhide');
                    }, 400);
                    setTimeout(function () {
                        $('#section article:eq(1)').stop().slideDown(1000).removeClass('hide');
                    }, 400);
                } else {
                    $('#section article').not('.hide').stop().slideUp(500).addClass('hide');
                    setTimeout(function () {
                        $('#section article:eq(1)').stop().slideDown(1000).removeClass('hide');
                    }, 500);
                }
            });
            $('#menu li:eq(4)').on('click', function () {

                if (!($('#wrap').hasClass('mainhide'))) {
                    $('.keyhandler').removeClass('keyhandler');
                    $('#menu').css('z-index', '-1');
                    $('#cycle2').stop().animate({
                        'left': '0px'
                    }, 300);
                    $('#mslider').stop().animate({
                        'left': '0px'
                    }, 300);
                    $('#mslider div').css('background-color', 'floralwhite');
                    $('#mslider img:eq(0)').attr('src', 'img/icon.png');
                    setTimeout(function () {
                        $('#menu').addClass('hide');

                        $('#menu').hide();

                    }, 300);
                    setTimeout(function () {
                        $('#wrap').stop().animate({
                            'left': '-47.5%'
                        }, 400);
                        $('#wrap').addClass('mainhide');
                    }, 400);
                    setTimeout(function () {
                        $('#section article:eq(3)').stop().slideDown(1000).removeClass('hide');
                    }, 400);
                } else {
                    $('#section article').not('.hide').stop().slideUp(500).addClass('hide');
                    setTimeout(function () {
                        $('#section article:eq(3)').stop().slideDown(1000).removeClass('hide');
                    }, 500);
                }
            });
            $('#menu nav li a').on("focus", function () {
                $(this).parent().css('background-color', '#B2CCFF');
                $('.keyhandler').removeClass('keyhandler');
                $(this).addClass('keyhandler');
            })
            $('#menu nav li a').on("blur", function () {
                $(this).parent().css('background-color', 'floralwhite');
            })
            $('#menu nav li').on("mouseover", function () {
                $(this).css('background-color', '#B2CCFF');
            })
            $('#menu nav li').on("mouseleave", function () {
                $(this).css('background-color', 'floralwhite');
            })
            $('#mslider a:eq(0)').on("focus", function () {
                $('.keyhandler').removeClass('keyhandler');
                $(this).addClass('keyhandler');
            })
            $(document).keydown(function (event) {
                var keyhandler = $('.keyhandler');
                console.log(keyhandler);
                switch (event.which) {
                    case 40:
                        if ($('#menu').hasClass('hide')) {
                            $('#mslider a:eq(0)').focus();
                            console.log('menu focus');
                        } else {
                            console.log('down');
                            if ($('#menu nav ul li a:eq(4)').hasClass('keyhandler')) {
                                $('#menu nav ul li a:eq(0)').focus();
                            } else if ($('#mslider a:eq(0)').hasClass('keyhandler')) {
                                console.log('main has key');
                                $('#mslider a:eq(0)').focus();
                            } else {
                                console.log('dd');
                                keyhandler.parent().next().children('a').focus();
                            }
                        }
                        break;
                    case 37:
                        console.log('left');
                        if ($('#menu').hasClass('hide')) {
                            $('#mslider a:eq(0)').focus();
                            console.log('menu focus');
                        } else if ($('#mslider a:eq(0)').hasClass('keyhandler')) {
                            console.log('focus');
                            $('#menu nav ul li a:eq(0)').focus();

                        } else {

                        }
                        break;
                    case 39:
                        console.log('right');
                        if ($('#menu').hasClass('hide')) {
                            $('#mslider a:eq(0)').focus();
                            console.log('menu focus');
                        } else if ($('#mslider a:eq(0)').hasClass('keyhandler')) {
                            console.log('focus');

                        } else {
                            $('#mslider a:eq(0)').focus();
                        }
                        break;
                    case 38:
                        if ($('#menu').hasClass('hide')) {
                            console.log('menu focus');
                        } else {
                            console.log('up');
                            if ($('#menu nav ul li a:eq(0)').hasClass('keyhandler')) {
                                $('#menu nav ul li a:eq(4)').focus();
                            } else if ($('#mslider a:eq(0)').hasClass('keyhandler')) {
                                console.log('main has key');
                                $('#mslider a:eq(0)').focus();
                            } else {
                                console.log('dd');
                                keyhandler.parent().prev().children('a').focus();
                            }
                        }
                        break;
                }
            })
        } else {
            $('select').selectric();
            $('#msel').on('change', function () {
                var sel = $('#msel').val();
                console.log(sel);
                $('#cycle2move').slideUp(100);
                $('#section article').slideUp(500);
                switch (sel) {
                    case "1":
                        $('#cycle2move').slideDown(300);
                        console.log("1");
                        break;
                    case "2":
                        console.log("2");
                        $('#section article').eq(2).slideDown(1000);
                        break;
                    case "3":
                        console.log("3");
                        $('#section article').eq(0).slideDown(1000);
                        break;
                    case "4":
                        console.log("4");
                        $('#section article').eq(1).slideDown(1000);
                        break;
                    case "5":
                        $('#section article').eq(3).slideDown(1000);
                        break;
                }
            })

        }

    })
})
