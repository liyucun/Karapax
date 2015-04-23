/**
 * Created by yucunli on 2015-04-22.
 */
$(window).load(function(){
    $('img').on('click',function()
    {
        var sr=$(this).attr('src');
        $('#apartments-img').attr('src',sr);
        $('#apartment-pic-modal').modal('show');
    });
});