var cupcake = cupcake || {};

cupcake.slider = (function(jQuery, window, undefined) {
    var init, initSliders;

    init = function() {
        initSliders();
    };

    initSliders = function() {
        $('.slider-pp').flexslider({
            animation: "slide",
            controlNav: true,
            slideshow: false,
            startAt: 0,
            manualControls: ".slider-pp__nav .slider-pp__nav--item",
            start: function(slider){
                $(slider.slides.eq(0)).addClass('flex-animateIn');
            },
            before: function(slider){
                var thisSlide = slider.slides.eq(slider.currentSlide),
                    animateSlide = slider.slides.eq(slider.animatingTo);
                $(thisSlide).removeClass('flex-animateIn');
                $(animateSlide).addClass('flex-animateIn');
            }
        });
    };

    return {
        init: init
    }
})(jQuery, window);
