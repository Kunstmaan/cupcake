/* ==========================================================================
   Vanilla responsive navigation - v0.1

   UNTESTED - DONT USE

   ToDo:
   - Testing

   Initialize:
   cupcake_navigation.init();
   ========================================================================== */

var cupcake_navigation = (function(window, undefined) {
    var init, delayfix, addActiveClass, openNextMenu, nextElementSibling;

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
        // (el.nextElementSibling || nextElementSibling(el)) --> http://stackoverflow.com/questions/7788529/setting-innerhtml-of-nextsibling
        var nextMenu = el.nextElementSibling;

        nextMenu.classList.toggle('cupcake-menu--open');
    };

    // Fallback for nextElementSibling
    nextElementSibling = function(el){
        if(el) {
            while((el = el.nextSibling) && el.nextSibling.nodeType !== 1);
            return el;
        }
    };

    return{
        init: init
    };
})(window);
