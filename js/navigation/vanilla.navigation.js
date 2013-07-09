/* ==========================================================================
   Vanilla responsive navigation - v0.1

   Initialize:
   cupcake_navigation.init();

   Support:
   Android >=3.0
   iOS >=5.0
   WP >=7.8
   ========================================================================== */

var cupcake_navigation = (function(window, undefined) {
    var init, delayfix, addActiveClass, openNextMenu;

    init = function(){
        [].forEach.call( document.querySelectorAll('.js-cupcake-menu__toggle'), function(el) {
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
        el.classList.toggle('cupcake-menu__toggle--active');
    };

    // Open next menu
    openNextMenu = function(el){
        var nextMenu = el.nextElementSibling;
        nextMenu.classList.toggle('cupcake-menu--open');
    };

    return{
        init: init
    };
})(window);