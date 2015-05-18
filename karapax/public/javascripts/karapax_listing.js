/**
 * Created by Mia on 2015-05-16.
 */

$(window).scroll(function() {
    var top = $(document).height()-$('footer').outerHeight()-$('.sidebar-header').height()-$('.sidebar-body').height()-40;
    var scroll = $(window).scrollTop();
    //sidebar keep top
    if (scroll > 440 && scroll < top) {
        $('.sidebar-header').removeClass('bottom');
        $('.sidebar-body').removeClass('bottom');
        $('.sidebar-header').addClass('fix');
        $('.sidebar-body').addClass('fix');
        $('.sidebar-header').css('top',0);
        $('.sidebar-body').css('top',$('.sidebar-header').height());
    }
    else if(scroll < 440) {
        $('.sidebar-header').removeClass('fix');
        $('.sidebar-body').removeClass('fix');
        $('.sidebar-header').css('top',0-$('.sidebar-header').height());
        $('.sidebar-body').css('top',0);
    }
    else{
        $('.sidebar-header').removeClass('fix');
        $('.sidebar-body').removeClass('fix');
        $('.sidebar-header').addClass('bottom');
        $('.sidebar-body').addClass('bottom');
        $('.sidebar-header').css('top',top);
        $('.sidebar-body').css('top',top+$('.sidebar-header').height());
    }

});

$('#eight-btn').click(function(){
    //showEightMonthPrice()
    $('#eight-price').removeClass('hidden');
    $('#twelve-price').addClass('hidden');
    $('#eight-btn').addClass('active');
    $('#twelve-btn').removeClass('active');
    $('#deposit-eight').removeClass('hidden');
    $('#deposit-twelve').addClass('hidden');
});

$('#twelve-btn').click(function(){
    //showTwelveMonthPrice()
    $('#twelve-price').removeClass('hidden');
    $('#eight-price').addClass('hidden');
    $('#eight-btn').removeClass('active');
    $('#twelve-btn').addClass('active');
    $('#deposit-eight').addClass('hidden');
    $('#deposit-twelve').removeClass('hidden');
});
