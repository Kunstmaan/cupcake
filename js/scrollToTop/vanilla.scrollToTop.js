/* ==========================================================================
   Scroll to top

   DOESN'T WORK YET

   Initialize:
   cupcake.scrollToTop.init();
   ========================================================================== */

var cupcake = cupcake || {};

cupcake.scrollToTop = (function(window, undefined) {

    var init, animateScroll,
        body = document.body,
        start = 1000,
        to = 0,
        duration = 5000,
        change = to - start,
        currentTime = 0,
        increment = 20,
        val;

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
                animateScroll();
            }, false);
            el.addEventListener('touchend', function() {
                animateScroll();
            }, false);
        });
    };

    animateScroll = function() {
        currentTime += increment;

        console.log(currentTime, start, change, duration);

        val = Math.easeInOutQuad(currentTime, start, change, duration);
        body.scrollTop = val;

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
