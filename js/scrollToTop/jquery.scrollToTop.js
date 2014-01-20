/* ==========================================================================
   Scroll to top

   Initialize:
   cupcake.scrollToTop.init();

   Support:
   Latest Chrome
   Latest FireFox
   Latest Safari
   IE 7 and up
   Android 2.0 and up
   iOS 4.0 and up
   WP 7.5 and up
   ========================================================================== */

var cupcake = cupcake || {};

cupcake.scrollToTop = (function($, window, undefined) {

    var init,
        $hook = $('.js-scroll-to-top');

    init = function() {
        $hook.on('click', function(e) {
            e.preventDefault();

            $('html, body').animate({scrollTop: 0}, 300);
        });
    };

    return {
        init: init
    };

}(jQuery, window));
