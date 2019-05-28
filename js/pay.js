$(document).ready(function () {
    $('#btn').click(function () {
        $('#side')
            .append('<p>' + $('#recipient').val())
            .append('<p>' + $('select[id="pnum"]').val()+$('#num1').val() + $('#num2').val());
    });


});
