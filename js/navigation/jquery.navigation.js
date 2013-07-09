/* ==========================================================================
   jQuery responsive navigation - v0.1

   Initialize:
   cupcake_navigation.init();
   ========================================================================== */

var cupcake_navigation = (function($, window, undefined) {

    var init;

    init = function() {
        $('.js-cupcake-menu__toggle').on('touchstart mousedown', function(e){
            e.preventDefault();
            e.stopPropagation();
        }).on('touchend mouseup', function(){
            $(this).toggleClass('cupcake-menu__toggle--active')
                   .next('.cupcake-menu')
                   .toggleClass('cupcake-menu--open');
        });
    };

    return {
        init: init
    };
}(jQuery, window));