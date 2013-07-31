/* ==========================================================================
   Full image background fallback with Backstretch
   https://github.com/srobbin/jquery-backstretch

   Initialize:
   cupcake.backstretch.init();
   ========================================================================== */

var cupcake = cupcake || {};

cupcake.backstretch = (function($, window, undefined) {

    var init;

    init = function() {
        var imageUrl = $('.full-img-bg').css("background-image")
                          .replace('url(','')
                          .replace(')','');

        $('.full-img-bg').backstretch(imageUrl);
    };

    return {
        init: init
    };

}(jQuery, window));