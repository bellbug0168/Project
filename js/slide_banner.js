$(document).ready(function () {

    $('#up').on('click', function () {
        $('html, body').animate({
            scrollTop: '0'
        }, 600);
    });

    $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 3
    });


});
