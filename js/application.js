$(document).ready(function () {

	//implement jPlayer 
	$("#jquery_jplayer_1").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				m4a: "http://jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
				oga: "http://jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
			});
		},
		swfPath: "js",
		supplied: "m4a, oga",
		wmode: "window",
		smoothPlayBar: true,
		keyEnabled: true,
		remainingDuration: true,
		toggleDuration: true
	});

    //open-close submenu on mobile
    $('.cd-main-nav').on('click', function() {
    	if ($(window).width() < 768) {
			$(this).children('ul').toggleClass('is-visible short-animated slideInDown');
		}
    });

    $(window).on('scroll', function () {
        $('.jp-audio').each(function () {
            if ($(this).offset().top <= $(window).scrollTop() + 100) {
                $(this).addClass('hideMe').addClass('fadeOut');
            }
            else if ($(this).offset().top >= $(window).scrollTop() + $(window).height() * 0) {
                $(this).removeClass('hideMe');
            }
        });
    });

    $('.spin').mouseenter(function(){
    	$(this).addClass("animated rotateIn");
    });
    
});