/* ==========================================================================
   Scroll to top

   Initialize:
   cupcake.scrollToTop.init();
   ========================================================================== */

var cupcake = cupcake || {};

cupcake.scrollToTop = (function($, window, undefined) {

    var init,
        $hook = $('.js-scroll-to-top');

    init = function() {
        $hook.on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            $('html, body').animate({scrollTop: 0}, 300);
        });
    };

    return {
        init: init
    };

}(jQuery, window));
