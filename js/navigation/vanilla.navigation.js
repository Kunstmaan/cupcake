/* ==========================================================================
   Vanilla responsive navigation - v0.3

   Initialize:
   cupcake.navigation.init();

   Support:
   Android >=3.0
   iOS >=5.0
   WP >=7.8
   ========================================================================== */

var cupcake = cupcake || {};

cupcake.navigation = (function(window, undefined) {

    var init, smallNavigationToggles, calcBigViewWidth, toggleNavigationState,
        navigationHook = document.getElementsByClassName('js-navigation')[0],
        bigViewWidth = 0,
        availableSpace = 0;

    init = function() {
        smallNavigationToggles();
        calcBigViewWidth();
        toggleNavigationState();

        window.onresize = toggleNavigationState;
    };

    smallNavigationToggles = function() {
        [].forEach.call( document.querySelectorAll('.js-navigation__toggle'), function(el) {
            el.addEventListener('mousedown', function(e) {
                e.preventDefault();
                e.stopPropagation();
            }, false);
            el.addEventListener('touchstart', function(e) {
                e.preventDefault();
                e.stopPropagation();
            }, false);
            el.addEventListener('mouseup', function() {
                el.classList.toggle('navigation__toggle--active');
                el.nextElementSibling.classList.toggle('navigation__level--open');
            }, false);
            el.addEventListener('touchend', function() {
                el.classList.toggle('navigation__toggle--active');
                el.nextElementSibling.classList.toggle('navigation__level--open');
            }, false);
        });
    };

    calcBigViewWidth = function() {
         [].forEach.call( document.querySelectorAll('.js-main-navigation-level > .navigation__item'), function(el) {
            bigViewWidth += parseInt(el.offsetWidth, 10);
         });
    };

    toggleNavigationState = function() {
        availableSpace = navigationHook.offsetWidth;

        if (bigViewWidth > availableSpace) {
            navigationHook.classList.add('navigation--small');
            navigationHook.classList.remove('navigation--big');
        } else {
            navigationHook.classList.add('navigation--big');
            navigationHook.classList.remove('navigation--small');
        }
    };

    return{
        init: init
    };

})(window);
