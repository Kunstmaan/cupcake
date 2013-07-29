# Cupcake responsive slider v0.1


### What

#### An extension of Flexslider which:

* ads a fully customizable thumbnail navigation block
* ads content animation options
* is built with scss variables to easily configure the position, colors, etc of elements like caption and prev / next buttons

### Support

#### Desktop
* IE 7 - 10
* Firefox
* Chrome
* Safari
* Opera

#### Mobile
* Mobile Safari (ipad + iPhone)
* Android Chrome
* Android Firefox (no swipe support)
* Android stock browser

### Dependencies
* Flexslider 2.2.0 beta (master branch of flexslider doesn't work well with version 1.9 / 1.10 of jquery because of the depricated .live function)
* Bourbon


### HTML structure

```html
<!-- Slider -->
<section class="slider-pp flexslider">
    <ul class="slides">
        <li>
            <img src="../../img/general/placeholder_img.png">
            <div class="slider-pp__caption">
                <h3 class="slider-pp__caption--title">Title</h3>
                <p class="slider-pp__caption--text">Caption text</p>
                <a href="#" class="slider-pp__caption--button btn" type="button">Button</a>
            </div>
        </li>
        <li>
            <img src="../../img/general/placeholder_img.png">
            <div class="slider-pp__caption">
                <h3 class="slider-pp__caption--title">Title</h3>
                <p class="slider-pp__caption--text">Caption text</p>
                <a href="#" class="slider-pp__caption--button btn" type="button">Button</a>
            </div>
        </li>
        <li>
            <img src="../../img/general/placeholder_img.png">
            <div class="slider-pp__caption">
                <h3 class="slider-pp__caption--title">Title</h3>
                <p class="slider-pp__caption--text">Caption text</p>
                <a href="#" class="slider-pp__caption--button btn" type="button">Button</a>
            </div>
        </li>
    </ul>
</section>
<!-- Slider Nav -->
<section class="slider-pp__nav">
    <div class="slider-pp__nav-wrapper">
        <div class="slider-pp__nav--item">
            <p>Thumbnail title</p>
        </div>
        <div class="slider-pp__nav--item">
            <p>Thumbnail title</p>
        </div>
        <div class="slider-pp__nav--item">
            <p>Thumbnail title</p>
        </div>
    </div>
</section>
```

### jquery goodness

```javascript
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
```

### SCSS Variables

```scss
/* ==========================================================================
   Slider

   Never add styles directly to this file - set up variables
   Style guide: https://github.com/necolas/idiomatic-css
   ========================================================================== */

/* Viewport max-height
   ========================================================================== */

    $viewportHeight:                100%!default;

/* Slide controls
   ========================================================================== */

   //Setup for caption aside of slides: change floats, imageWidth and captionPosition for other lay-out options

    $slideBackgroundColor:          #049cdb!default;
    $slidePosition:                 relative!default;

/* Caption Controls */

    $captionFloat:                  right!default;
    $captionWidth:                  20%!default;
    $captionHeight:                 100%!default;
    $captionPadding:                1.5% !default;
    $captionPosition:               static!default;
    $captionPositionTop:            auto!default;
    $captionPositionRight:          auto!default;
    $captionPositionBottom:         auto!default;
    $captionPositionLeft:           auto!default;

    $captionBackground:             none!default;

    //Fallbacks
    $captionPaddingFallback:        $captionPadding!default;
    $captionWidthFallback:          $captionWidth - ($captionPaddingFallback * 2)!default;

/* Image Controls */

    $imageWidth:                    80%!default;
    $imageFloat:                    right!default;

/* Direction Controls */

    $directionImage:                url(../img/buttons/slider_nav.svg) !default;
    $directionImageFallback:        url(../img/buttons/slider_nav.png) !default;
    $directionImageRepeat:          no-repeat;
    $directionImageWidth:           41px!default;
    $directionImageHeight:          50px!default;
    $directionImageMargin:          -25px 0 0 0!default;

    $directionPostion:              absolute!default;
    $directionPostionTop:           50%!default;
    $directionPostionRight:         auto!default;
    $directionPostionBottom:        auto!default;
    $directionPostionLeft:          auto!default;

    $nextPositionTop:               $directionPostionTop!default;
    $nextPositionRight:             -41px!default;
    $nextPositionBottom:            auto!default;
    $nextPositionLeft:              auto!default;
    $nextBackgroundPosition:        100% 0!default;

    $prevPositionTop:               $directionPostionTop!default;
    $prevPositionRight:             auto!default;
    $prevPositionBottom:            auto!default;
    $prevPositionLeft:              -41px!default;
    $prevBackgroundPosition:        0 0!default;

/* Navbar controls
   ========================================================================== */

   $idleItemBackground:             #fff!default;
   $idleItemText:                   #555!default;
   $hoverItemBackground:            #ddd!default;
   $hoverItemText:                  #555!default;
   $activeItemBackground:           #555!default;
   $activeItemText:                 #fff!default;

   $itemAmount:                     3!default;
   $itemWidth:                      100%/$itemAmount!default; //only change the amount of items, item width is calculated automatically
   $itemPadding:                    2%!default;

   $idleItemDevider:                1px solid #ddd!default;
   $activeItemDevider:              1px solid #555!default;

   //Fallbacks
    $itemPaddingFallback:           $itemPadding!default;
    $itemWidthFallback:             $itemWidth - ($itemPaddingFallback * 2)!default;

/* Slider Animations
   ========================================================================== */

   $animateContent :                true !default;

   @if $animateContent == true {
      .flex-animateIn .slider-pp__caption {
         @extend %slider-pp__caption__animate-in;
      }
   }
```

### Caption & navigation block SCSS

```scss
/* Caption */
.slider-pp__caption {
    float: $captionFloat;
    width: $captionWidth;
    height: $captionHeight;
    color: #fff;
    background: $captionBackground;
    position: $captionPosition;
    top: $captionPositionTop;
    right: $captionPositionRight;
    left: $captionPositionBottom;
    bottom: $captionPositionLeft;
    padding: 1em;
    h3 {
        margin: 0 0 .5em 0;
    }
    p {
        margin: 0;
    }
    .slider-pp__caption--button {
        @extend %button__small--white;
    }
}
/* Slider custom nav block */
/* Slider custom nav block */
.slider-pp__nav {
    padding: 0;
    z-index: 1;
    position: relative;
    width: 100%;
    display: table;
    &:before {
        content: 'shadow'; /* empty content = shadow won't appear */
        position: absolute;
        width: 100%;
        height: 10%;
        bottom: 0;
        left: 0;
        z-index: -1;

        border-radius: 50%;
        box-shadow: 0 0 20px rgba(0, 0, 0, .5);
        font-size: 0;
    }
}
.slider-pp__nav-wrapper {
    display: table-row;
}
.slider-pp__nav--item {
    margin: 0;
    width: $itemWidth;
    padding: $itemPadding;
    position: relative;
    display: table-cell;
    vertical-align: middle;

    background: $idleItemBackground;
    color: $idleItemText;
    border-left: $idleItemDevider;
    cursor: pointer;
    @include transition (all .3s ease-in);
    &:first-child {
        border: none;
    }
    p {
        margin: 0;
    }
    &:hover, &:focus {
        background: $hoverItemBackground;
        color: $hoverItemText;
    }
}

.flex-active {
    border-left: $activeItemDevider;
    background: $activeItemBackground;
    color: $activeItemText;
    &:hover {
        background: $activeItemBackground;
        color: $activeItemText;
    }
}
```
