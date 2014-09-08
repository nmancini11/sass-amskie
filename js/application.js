$(document).ready(function () {

    // Grab all songs on the page then callback the js_audioPlayer
    // to create a jp-player for each post / song
    function loadSongs(){
        var x = 0;
        $('.audio-song').each(function(){
           var m4a = $(this).find(".jp-audio").data( "audio-ma" ),
               ogg = $(this).find(".jp-audio").data( "audio-ogg" );

           x++;

           $(this).find(".jp-jplayer").attr('id', 'jquery_jplayer_'+x);
           $(this).find(".jp-audio").attr('id', 'jp_container_'+x);
           // $(this).find(".jp-gui").addClass("jp-interface_"+x);
           js_audioPlayer(m4a, ogg, x);
           console.log(m4a +"  "+ogg +"  "+ x);
        });
    }

    loadSongs();

    function js_audioPlayer(fileM4a, fileOgg,location) {
        $("#jquery_jplayer_" + location).jPlayer( {
            ready: function () {
              $(this).jPlayer("setMedia", {
                    m4a: fileM4a,
                    ogg: fileOgg
              });
            },
            cssSelectorAncestor: "#jp_container_" + location,
            swfPath: "/swf",
            wmode: "window",
            supplied: "m4a, oga",
            smoothPlayBar: true,
            keyEnabled: true,
            remainingDuration: true,
            toggleDuration: true
          });
        // pause all other players
        $("#jquery_jplayer_" + location).bind($.jPlayer.event.play, function() {
          $(this).jPlayer("pauseOthers"); // pause all players except this one.
        });
    return;
    }

    function stopAll(){
        $(".jplyrselectr").jPlayer("stop");
        console.log("Aye aye captain! Pausing all");
    }

    $('.jp-play').on("click", stopAll);


    //open-close submenu on mobile
    $('.cd-main-nav').on('click', function() {
    	if (!$('.cd-main-nav input').is(':focus') && $(window).width() < 768) {
			$(this).children('ul').toggleClass('is-visible short-animated slideInDown');
		}
    });

    $(window).on('scroll', function () {
    	var $headerHeight = 100;
    	if ($(window).width() < 768){
    		$headerHeight = 45;
    	}
    	else if ($(window).width() < 960){
    		$headerHeight = 70;
    	}

        $('.jp-audio').each(function () {
            if ($(this).offset().top <= $(window).scrollTop() + $headerHeight) {
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