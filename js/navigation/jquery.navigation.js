/* ==========================================================================
   jQuery responsive navigation
   ========================================================================== */

$(function() {
    $('.js-cupcake-menu__toggle').on('touchstart mousedown', function(e){
        e.preventDefault();
        e.stopPropagation();
    }).on('touchend mouseup', function(){
        var $this = $(this);
        $this.toggleClass('cupcake-menu__toggle--active');
        $this.next('.cupcake-menu').toggleClass('cupcake-menu--open');
    });
});
