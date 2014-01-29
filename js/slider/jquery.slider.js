/* ==========================================================================
   Slider

   Initialize:
   cupcake.slider.init();

   Support:
   Latest Chrome
   Latest FireFox
   Latest Safari
   IE 8 and up
   Android 2.0 and up
   iOS 4.0 and up
   WP 7.5 and up
   ========================================================================== */

var cupcake = cupcake || {};

cupcake.slider = (function ($, window, undefined) {

    var init, initSlider, destroySlider, initThumbs,
    $hook = $('.js-flexslider');

    init = function () {

        console.log('init flexslider');

        $hook.each(function (index, value) {

            if ($(window).width() > 768) {
                initSlider($(this));
            } else {
                destroySlider($(this));
            }
        });
    };

    initSlider = function ($el) {

        var $controls = $el.parent().find('.js-thumbs--item');

        if ($controls.length === 0) {
            $controls = false;
        } else {
            $controls.css('width', 100/$controls.length + '%');
        }

        $el.flexslider({
            animation: $el.data('animation'),
            controlNav: $el.data('controlNav'),
            slideshow: $el.data('slideshow'),
            startAt: $el.data('startAt'),
            manualControls: $controls
        });
    };

    destroySlider = function ($el) {

    };

    initThumbs = function ($el) {



    };

    return {
        init: init
    };

}(jQuery, window));