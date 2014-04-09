/* ==========================================================================
   Scroll To

   Initialize:
   cupcake.scrollTo.init();

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

cupcake.scrollTo = (function($, window, undefined) {

    var init,
        $hook = $('.js-scroll-to');

    init = function() {
        $hook.on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            var $this = $(this),
                target = $this.attr('href'),
                targetOffset = 0,
                dataOffset = $this.data('offset'),
                targetTop;

            if (typeof dataOffset !== 'undefined' && !isNaN(dataOffset)) {
                targetOffset = dataOffset;
            }

            targetTop = $(target).offset().top - targetOffset;

            $('html, body').animate({scrollTop: targetTop}, 300);
        });
    };

    return {
        init: init
    };

}(jQuery, window));
