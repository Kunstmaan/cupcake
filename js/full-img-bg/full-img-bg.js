/* ==========================================================================
   Full image background fallback with Backstretch
   https://github.com/srobbin/jquery-backstretch

   Initialize:
   cupcake.fullimagebackground.init();
   ========================================================================== */

var cupcake = cupcake || {};

cupcake.fullimagebackground = (function($, window, undefined) {

    var init, imageUrl;



    init = function() {
        var imageUrl = $('.full-img-bg').css("background-image");
        imageUrl = imageUrl.replace('url("','').replace('")','');
        $('.full-img-bg').backstretch(imageUrl);
    };

    return {
        init: init
    };

}(jQuery, window));

$(function() {
    cupcake.fullimagebackground.init();
});