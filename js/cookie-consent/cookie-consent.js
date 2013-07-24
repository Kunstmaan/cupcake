/* ==========================================================================
   Cookie Consent

   Initialize:
   cupcake.cookieconsent.init();
   ========================================================================== */

var cupcake = cupcake || {};

cupcake.cookieconsent = (function($, window, undefined) {

    var init;

    init = function() {
        $('.js-cookie-bar__btn').on('touchstart mousedown', function(e){
            e.preventDefault();
            e.stopPropagation();
        }).on('touchend mouseup', function(){
            $(this).closest('.cookie-bar').addClass('cookie-bar__hide');
        });
    };

    return {
        init: init
    };

}(jQuery, window));
