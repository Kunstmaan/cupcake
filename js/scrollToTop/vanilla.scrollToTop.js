/* ==========================================================================
   Scroll to top

   Initialize:
   cupcake.scrollToTop.init();

   Support:
   Latest Chrome
   Latest FireFox
   Latest Safari
   IE9 and up
   Android 3.0 and up
   iOS 5.0 and up
   WP 7.8 and up
   ========================================================================== */

var cupcake = cupcake || {};

cupcake.scrollToTop = (function(window, undefined) {

    var init, animateScroll,
        start, currentTime, change,
        to = 0,
        duration = 300,
        increment = 20;

    init = function() {
        [].forEach.call( document.querySelectorAll('.js-scroll-to-top'), function(el) {
            el.addEventListener('click', function(e) {
                e.preventDefault();

                start = document.body.scrollTop;
                change = to - start;
                currentTime = 0;

                animateScroll();
            }, false);
        });
    };

    animateScroll = function() {
        currentTime += increment;

        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        document.body.scrollTop = val;

        if (currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };

    Math.easeInOutQuad = function(t, b, c, d) {
        t /= d/2;
        if (t < 1) {
            return c/2*t*t + b;
        }
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    };

    return {
        init: init
    };

}(window));
