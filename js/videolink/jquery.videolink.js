/* ==========================================================================
   Videolink

   Initialize:
   cupcake.videolink.init();

   Dependencies:
   jQuery
   Modernizr.csstransitions (check css-transitions)
   fidVids (when you want make the video's fluid)

   Support:
   Latest Chrome
   Latest FireFox
   Latest Safari
   IE 8 and up
   Android 2.0 and up
   iOS 4.0 and up
   WP 7.5 and up
   ========================================================================== */

var cupcake = cupcake || {};

cupcake.videolink = (function($, window, undefined) {

    var init,
        videolinkInit;

    init = function() {
        videolinkInit();
    };

    videolinkInit = function() {
        $('.js-videolink-play-link').on('click', function(e) {
            e.preventDefault();

            var $this = $(this),
                provider = $this.data('video-provider'),
                id = $this.data('video-id'),
                makeFluid = $this.data('make-fluid'),
                $videoContainer = $this.next('.js-videolink-container'),
                template;

            // Construct template
            if(provider === 'youtube') {
                template = '<iframe src="http://www.youtube.com/embed/' + id + '?autoplay=1&amp;rel=0&amp;showinfo=0&amp;modestbranding&amp;wmode=transparent" width="560" height="315" frameborder="0"  webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
            } else if (provider === 'vimeo') {
                template = '<iframe src="http://player.vimeo.com/video/' + id + '?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autoplay=1" width="500" height="290" frameborder="0"  webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
            } else {
                template = '<p>Sorry, this provider is not supported yet.</p>';
            }

            // Append template
            $videoContainer.html(template);

            // Make iframe fluid
            if(makeFluid) {
                $videoContainer.fitVids();
            }

            // Hide link
            if(Modernizr.csstransitions) {
                $this.one('transitionend webkitTransitionEnd', function() {
                    $this.addClass('videolink__video-link--hidden');
                });
                $this.addClass('videolink__video-link--hide');
            } else {
                $this.addClass('videolink__video-link--hidden');
            }
        });
    };

    return {
        init: init
    };

}(jQuery, window));
