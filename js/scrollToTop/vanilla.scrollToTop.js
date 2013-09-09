/* ==========================================================================
   Scroll to top

   DOESN'T WORK YET
   (problem with start)

   Initialize:
   cupcake.scrollToTop.init();
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
            el.addEventListener('mousedown', function(e) {
                e.preventDefault();
                e.stopPropagation();
            }, false);
            el.addEventListener('touchstart', function(e) {
                e.preventDefault();
                e.stopPropagation();
            }, false);
            el.addEventListener('mouseup', function() {
                start = document.body.scrollTop;
                change = to - start,
                currentTime = 0;

                animateScroll();
            }, false);
            el.addEventListener('touchend', function() {
                start = document.body.scrollTop;
                change = to - start,
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
