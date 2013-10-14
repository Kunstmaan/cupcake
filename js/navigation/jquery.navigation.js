/* ==========================================================================
   jQuery responsive navigation

   Initialize:
   cupcake.navigation.init();

   Support:
   Android >=2.0
   iOS >=4.0
   WP >=7.5
   ========================================================================== */

var cupcake = cupcake || {};

cupcake.navigation = (function($, window, undefined) {

    var init, smallNavigationToggles, calcBigViewWidth, toggleNavigationState,
        $navigationHook = $('.js-navigation'),
        $navigationAvailableSpaceHook = $('.js-navigation-space-hook'),
        bigViewWidth = 0,
        availableSpace = 0;

    init = function() {
        smallNavigationToggles();
        calcBigViewWidth();
        toggleNavigationState();

        $(window).resize(toggleNavigationState);
    };

    smallNavigationToggles = function() {
        $('.js-navigation__toggle').on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
        }).on('touchstart mousedown', function(e) {
            e.preventDefault();
            e.stopPropagation();
        }).on('touchend mouseup', function() {
            $(this).toggleClass('navigation__toggle--active')
                   .next('.navigation__level')
                   .toggleClass('navigation__level--open');
        });
    };

    calcBigViewWidth = function() {
        $('.js-main-navigation-level > .navigation__item').each(function() {
            bigViewWidth += parseInt($(this).width(), 10);
        });
    };

    toggleNavigationState = function() {
        availableSpace = $navigationAvailableSpaceHook.width();

        if (bigViewWidth > availableSpace) {
            $navigationHook.addClass('navigation--small')
                           .removeClass('navigation--big');
        } else {
            $navigationHook.addClass('navigation--big')
                           .removeClass('navigation--small');
        }
    };

    return {
        init: init
    };

}(jQuery, window));
