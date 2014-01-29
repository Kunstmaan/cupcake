## Cupcake responsive slider v0.1

### What
An extension of Flexslider which:
* ads a fully customizable thumbnail navigation block on bottom of the slider

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


### HTML structure
Note: for semantic reasons it's advised to place the thumb navigation block according to which lay-out you're using i.e. if you're using the top or left lay-out, place the navigation above the slider-pp__flexslider, when you're using the right or bottom set-up the nav block has to go below the slider-pp__flexslider.

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
<script>cupcake.slider.init();</script>
```

```javascript
<script>
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
            $controls.css('width', 100 / $controls.length + '%');
        }

        $el.flexslider({
            animation: $el.data('animation'),
            controlNav: $el.data('controlNav'),
            slideshow: $el.data('slideshow'),
            startAt: $el.data('startAt'),
            manualControls: $controls
        });
    };

    return {
        init: init
    };

}(jQuery, window));
</script>
```

### SCSS Variables