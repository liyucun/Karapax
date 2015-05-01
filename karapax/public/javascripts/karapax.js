/**
 * Created by yucunli on 2015-05-01.
 */

// the pop up modal for showing apartment picture
$(window).load(function(){
    $('img').on('click',function()
    {
        var sr=$(this).attr('src');
        $('#apartments-img').attr('src',sr);
        $('#apartment-pic-modal').modal('show');
    });
});

// navbar animation while scrolling
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});