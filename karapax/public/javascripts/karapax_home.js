/**
 * Created by yucunli on 2015-05-01.
 */

// the pop up modal for showing apartment picture
/*$(window).load(function(){
    $('img').on('click',function()
    {
        var sr=$(this).attr('src');
        $('#apartments-img').attr('src',sr);
        $('#apartment-pic-modal').modal('show');
    });
});*/


$(window).scroll(function() {
    // navbar animation while scrolling
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    }
    if ($(".navbar").offset().top < 50){
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }

    // "how it works" disappear
    /*
    if(window.location.pathname == "/"){
        if($(window).scrollTop() > $("#how-it-works").height()){
            if(!$("#how-it-works").hasClass("hide")){
                $(window).scrollTop(0);
                $("#how-it-works").addClass("hide");

            }

        }
    }
    */

});
// "how it works" pop out
/*
$("#how-it-works-btn").click(function(){
    $("#how-it-works").removeClass("hide");
})
*/

