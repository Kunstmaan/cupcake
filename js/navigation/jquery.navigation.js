/* ==========================================================================
   jQuery responsive navigation - v0.1

   Initialize:
   cupcakeNavigation.init();
   ========================================================================== */

var cupcake = cupcake || {};

cupcake.Navigation = (function($, window, undefined) {

    var init;

    init = function() {
        $('.js-navigation__toggle').on('touchstart mousedown', function(e){
            e.preventDefault();
            e.stopPropagation();
        }).on('touchend mouseup', function(){
            $(this).toggleClass('navigation__toggle--active')
                   .next('.navigation')
                   .toggleClass('navigation--open');
        });
    };

    return {
        init: init
    };
    
}(jQuery, window));
