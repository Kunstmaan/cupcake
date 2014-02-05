## Cupcake responsive slider v0.2

### What
An extension of Flexslider which:
* Implement the default FlexSlider theme in SCSS
* Added data-attributes for animation, controlNav, slideshow & start position.

### Support
##### Desktop
* IE 8 - 10
* Firefox
* Chrome
* Safari
* Opera

##### Mobile
* Mobile Safari (iPad)
* Android Chrome
* Android Firefox (no swipe support)
* Android stock browser

### Dependencies
* Flexslider 2.2.2
* Bourbon
* jQuery EqualHeights


### HTML structure
Note: The navigation block position is deprecetad. 
For now we follow this standard procedure for sliders. You can easily change some FlexSlider params by editing data-attributes.

```html
<section class="slider-pp">
    <!-- Slider -->
    <div class="slider-pp__flexslider js-flexslider flexslider" data-animation="slide" data-controlNav="true" data-slideshow="slideshow" data-startAt="0">
        <ul class="slides">
            <li>
                <img src="http://placehold.it/1440x900" alt="#">
            </li>
            <li>
                <img src="http://placehold.it/1440x900" alt="#">
            </li>
            <li>
                <img src="http://placehold.it/1440x900" alt="#">
            </li>
        </ul>
    </div>
    <!-- Slider Navigation -->
    <nav class="slider--pp__thumbs js-thumbs">
        <div class="slider-pp__thumbs-wrapper">
            <div class="slider-pp__thumbs--item js-thumbs--item">
                <p>Narratives of failure</p>
            </div>
            <div class="slider-pp__thumbs--item js-thumbs--item">
                <p>Dialectic nationalism a study of structural symbolism</p>
            </div>
            <div class="slider-pp__thumbs--item js-thumbs--item">
                <p>Contexts of dialectic</p>
            </div>
        </div>
    </nav>
</section>
```

### jQuery

```javascript
cupcake.slider.init();
```

```javascript
var cupcake = cupcake || {};

cupcake.slider = (function ($, window, undefined) {

    var init, initSlider, destroySlider, initThumbs,
    $hook = $('.js-flexslider');

    init = function () {

        $hook.each(function (index, value) {

            if ($(window).width() > 768) {
                initSlider($(this));
            } else {
                destroySlider($(this));
            }
        });

        $(window).resize(function(event) {
            $hook.each(function (index, value) {
                initThumbs($hook);
            });
        });
    };

    initSlider = function ($el) {

        var $controls = $el.parent().find('.js-thumbs--item');
        
        initThumbs($el);

        $el.flexslider({
            animation: $el.data('animation'),
            controlNav: $el.data('controlNav'),
            slideshow: $el.data('slideshow'),
            startAt: $el.data('startAt'),
            manualControls: $controls
        });
    };

    initThumbs = function ($el) {
        var $controls = $el.parent().find('.js-thumbs--item');

        if ($controls.length === 0) {
            $controls = false;
        } else {
            $controls.css('width', 100/$controls.length + '%');
            $controls.equalHeights();
        }
    };

    return {
        init: init
    };

}(jQuery, window));
```

### SCSS Variables
```scss
/* ==========================================================================
   Slider

   Never add styles directly to this file - set up variables
   Style guide: https://github.com/necolas/idiomatic-css
   ========================================================================== */

/* Icon Fonts
   ========================================================================== */

$slider-icon-font:              '../vendor/flexslider/fonts' !default;

/* Custom Navigation
   ========================================================================== */

$slider-nav-background:             rgba(black, .85) !default;
$slider-nav-color:                  white !default;
$slider-nav-padding:                1.5em !default;
```