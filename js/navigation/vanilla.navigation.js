/* ==========================================================================
   Vanilla responsive navigation - UNDER DEVELOPMENT - DONT USE

   ToDo:
   - Fix openNextMenu function
   - Testing
   ========================================================================== */

function delayfix(e) {
    e.preventDefault();
    e.stopPropagation();
}

function addActiveClass(el){
    el.classList.toggle('cupcake-menu__toggle--active');
}

function openNextMenu(el){
    // TO DO -- NOT WORKING

    var nextMenu = el.nextSibling;

    console.log(nextMenu);
    nextMenu.classList.toggle('cupcake-menu--open');
}

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
