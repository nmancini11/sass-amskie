$(document).ready(function () {

    //open-close submenu on mobile
    $('.cd-main-nav').on('click', function (event) {
        if ($(event.target).is('.cd-main-nav')) {
        	$(this).children('ul').toggleClass('is-visible animated slideInDown');
        }
    });

    $('.spin').mouseenter(function(){
    	$(this).addClass("animated rotateIn");
    });
    
});