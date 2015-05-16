/**
 * Created by Mia on 2015-05-16.
 */
$(window).scroll(function() {
    // navbar animation while scrolling
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    }
    if ($(".navbar").offset().top < 50){
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});
