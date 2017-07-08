$(document).ready(function() {
    $('.navigater').click(function() {
        var clicked_id =  $(this).attr('id');
        console.log('====================================');
        console.log(clicked_id);
        console.log('====================================');
        $('.navigater').children().addClass('inactive');
        $('.navigater').children().removeClass('active');
        $('#'+clicked_id).children().removeClass('inactive');
        $('#'+clicked_id).children().addClass('active');
    });

})
