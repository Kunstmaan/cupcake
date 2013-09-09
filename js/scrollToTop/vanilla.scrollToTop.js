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
        start = 0,
        to = 0,
        change = 0,
        duration = 300,
        currentTime = 0,
        increment = 20;

    console.log(currentTime, start, change, duration);

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
                start = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
                change = to - start;

                animateScroll();
            }, false);
            el.addEventListener('touchend', function() {
                start = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
                change = to - start;

                animateScroll();
            }, false);
        });
    };

    animateScroll = function() {
        currentTime += increment;

        console.log(currentTime, start, change, duration);

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
