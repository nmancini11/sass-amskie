$(document).ready(function () {

    //open-close submenu on mobile
    $('.cd-main-nav').on('click', function() {
    	if ($(window).width() < 768) {
			$(this).children('ul').toggleClass('is-visible short-animated slideInDown');
		}
    });

    $('.spin').mouseenter(function(){
    	$(this).addClass("animated rotateIn");
    });
    
});