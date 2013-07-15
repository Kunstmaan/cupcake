/* ==========================================================================
   Vanilla responsive navigation - v0.1

   Initialize:
   cupcakeNavigation.init();

   Support:
   Android >=3.0
   iOS >=5.0
   WP >=7.8
   ========================================================================== */

var cupcakeNavigation = (function(window, undefined) {
    var init, delayfix, addActiveClass, openNextMenu;

    init = function(){
        [].forEach.call( document.querySelectorAll('.js-navigation__toggle'), function(el) {
            el.addEventListener('mousedown', function(e) {
                delayfix(e);
            }, false);
            el.addEventListener('touchstart', function(e) {
                delayfix(e);
            }, false);
            el.addEventListener('mouseup', function() {
                addActiveClass(this);
                openNextMenu(this);
            }, false);
            el.addEventListener('touchend', function() {
                addActiveClass(this);
                openNextMenu(this);
            }, false);
        });
    };

    // Fix 300ms delay by removing events
    delayfix = function(e){
        e.preventDefault();
        e.stopPropagation();
    };

    // Toggle active class
    addActiveClass = function(el){
        el.classList.toggle('navigation__toggle--active');
    };

    // Open next menu
    openNextMenu = function(el){
        var nextMenu = el.nextElementSibling;
        nextMenu.classList.toggle('navigation--open');
    };

    return{
        init: init
    };
})(window);
