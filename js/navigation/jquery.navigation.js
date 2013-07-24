/* ==========================================================================
   jQuery responsive navigation - v0.2

   Initialize:
   cupcake.navigation.init();
   ========================================================================== */

var cupcake = cupcake || {};

cupcake.navigation = (function($, window, undefined) {

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

        $('.js-navigation li').each(function() {
            totalWidth += parseInt($(this).width(), 10);
        });

        $(window).resize(toggleResponsivenavigation);
        toggleResponsivenavigation();
    };
    toggleResponsivenavigation = function() {
        var windowWidth = $(window).width();

        if (totalWidth > windowWidth) {
            $('.js-responsive-nav').addClass('responsive-nav').removeClass('desktop-nav');
        } else {
            $('.js-responsive-nav').removeClass('responsive-nav').addClass('desktop-nav');
        }
    };

    return {
        init: init
    };

}(jQuery, window));

