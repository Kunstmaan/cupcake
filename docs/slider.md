## Cupcake responsive slider v0.1

### What
An extension of Flexslider which:
* ads a fully customizable thumbnail navigation block on top, right, bottom or left of the slider
* ads content animation options
* is built with scss variables to easily configure the position, colors, etc of elements like caption and prev / next buttons

### Support
##### Desktop
* IE 7 - 10
* Firefox
* Chrome
* Safari
* Opera

##### Mobile
* Mobile Safari (ipad + iPhone)
* Android Chrome
* Android Firefox (no swipe support)
* Android stock browser

### Dependencies
* Flexslider 2.2.0 beta (master branch of flexslider doesn't work well with version 1.9 / 1.10 of jquery because of the depricated .live function)
* Bourbon


### HTML structure
Note: for semantic reasons it's advised to place the thumb navigation block according to which lay-out you're using i.e. if you're using the top or left lay-out, place the navigation above the slider-pp__flexslider, when you're using the right or bottom set-up the nav block has to go below the slider-pp__flexslider.

```html
<!-- Slider -->
<section class="slider-pp slider-pp--left">
    <nav class="slider-pp__thumbs js-thumbs">
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
    <div class="slider-pp__flexslider js-flexslider flexslider">
        <ul class="slides">
            <li>
                <img src="../../img/general/placeholder_img.png">
                <div class="slider-pp__caption">
                    <h3 class="slider-pp__caption--title">Title</h3>
                    <p class="slider-pp__caption--text">In the works of Stone, a predominant concept is the concept of postsemioticist consciousness.</p>
                    <a href="#" class="slider-pp__caption--button btn" type="button">Button</a>
                </div>
            </li>
            <li>
                <img src="../../img/general/placeholder_img.png">
                <div class="slider-pp__caption">
                    <h3 class="slider-pp__caption--title">Title</h3>
                    <p class="slider-pp__caption--text">In the works of Stone, a predominant concept is the concept of postsemioticist consciousness.</p>
                    <a href="#" class="slider-pp__caption--button btn" type="button">Button</a>
                </div>
            </li>
            <li>
                <img src="../../img/general/placeholder_img.png">
                <div class="slider-pp__caption">
                    <h3 class="slider-pp__caption--title">Title</h3>
                    <p class="slider-pp__caption--text">In the works of Stone, a predominant concept is the concept of postsemioticist consciousness.</p>
                    <a href="#" class="slider-pp__caption--button btn" type="button">Button</a>
                </div>
            </li>
        </ul>
    </div>
</section>
```

### jquery goodness

```javascript
<script>
    $(function() {
        $('.js-flexslider').flexslider({
            animation: "slide",
            controlNav: true,
            slideshow: false,
            startAt: 0,
            manualControls: ".js-thumbs .js-thumbs--item",
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
    });
</script>
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

    $viewportHeight:                100% !default;

/* Slide controls
   ========================================================================== */

    $slideBackgroundColor:          lighten(tomato, 5%) !default;
    $slidePosition:                 relative !default;

/* Aside nav controls */

    $asideThumbWidth:               20% !default;
    $asideSlideWidth:               (100% - $asideThumbWidth) !default;
    $asideLeftMarginLeft:           $asideThumbWidth !default;

/* Caption Controls */

    //Setup for caption aside of slides: change floats, imageWidth and captionPosition for other lay-out options

    $captionFloat:                  left !default;
    $captionWidth:                  20% !default;
    $captionHeight:                 100% !default;
    $captionPadding:                1.5% !default;
    $captionPosition:               static !default;
    $captionPositionTop:            auto !default;
    $captionPositionRight:          auto !default;
    $captionPositionBottom:         auto !default;
    $captionPositionLeft:           auto !default;

    $captionBackground:             none !default;

    //Button
    $buttonBackground:              #FFF !default;
    $buttonStateBackground:         #F5F5F5 !default;
    $buttonColor:                   tomato !default;
    $buttonBorder:                  none !default;
    $buttonBorderRadius:            5px !default;
    $buttonPadding:                 0 .6em !default;

    //Fallbacks
    $captionPaddingFallback:        $captionPadding !default;
    $captionWidthFallback:          $captionWidth - ($captionPaddingFallback * 2) - 0.3% !default;

/* Image Controls */

    $imageWidth:                    (100% - $captionWidth) !default; //defines the width of the images ackording to the width of the caption defined above. (When using the caption aside of the slides and not on top of them)
    $imageFloat:                    left !default;

/* Direction Controls */

    $directionDisplay:              none !default;
    $directionColor:                tomato !default;
    $directionHoverColor:           lighten($directionColor, 10%) !default;

    $directionImage:                url(../img/buttons/slider_nav.svg) !default;
    $directionImageFallback:        url(../img/buttons/slider_nav.png) !default;
    $directionImageRepeat:          no-repeat !default;
    $directionImageWidth:           50px !default;
    $directionImageHeight:          50px !default;
    $directionImageMargin:          -25px 0 0 0 !default;

    $directionPostion:              absolute !default;
    $directionPostionTop:           50% !default;
    $directionPostionRight:         auto !default;
    $directionPostionBottom:        auto !default;
    $directionPostionLeft:          auto !default;

    $nextPositionTop:               $directionPostionTop !default;
    $nextPositionRight:             -50px !default;
    $nextPositionBottom:            auto !default;
    $nextPositionLeft:              auto !default;
    $nextBackgroundPosition:        100% 0 !default;

    $prevPositionTop:               $directionPostionTop !default;
    $prevPositionRight:             auto !default;
    $prevPositionBottom:            auto !default;
    $prevPositionLeft:              -50px !default;
    $prevBackgroundPosition:        0 0 !default;

/* Navbar controls
   ========================================================================== */

   $idleItemBackground:             #555 !default;
   $idleItemText:                   #EBEBEB !default;
   $hoverItemBackground:            #EBEBEB !default;
   $hoverItemText:                  #555 !default;
   $activeItemBackground:           tomato !default;
   $activeItemText:                 #fff !default;

   $itemAmount:                     3 !default;
   $itemSize:                       100%/$itemAmount !default; //only change the amount of items, item width is calculated automatically
   $itemPadding:                    3% !default;

   $idleItemDevider:                1px solid #ddd !default;
   $activeItemDevider:              1px solid #555 !default;

   //Fallbacks
    $itemPaddingFallback:           $itemPadding !default;
    $itemSizeFallback:              $itemSize - ($itemPaddingFallback * 2) !default;

    //IE 7 doesn't calculate the padding of elements which are stacked vertically logically.
    //(Normaly padding is added on top and bottom of the element, hence the previous line of code
    //which calculates the size of the item minus 2 times the padding value).
    //This does not work in IE 7 for which you only have to subtract the padding value once.
    //The following two lines of code are fixes for that problem. Review needed.
    $itemIE7HeightFallback:         $itemSize - ($itemPaddingFallback) !default;
    $itemIE7WidthFallback:          100% - ($itemPaddingFallback * 2) !default;

/* Slider Animations
   ========================================================================== */

   $animateContent :                true !default;
   $animateKeyframe0:               translateX(220px) !default;
   $animateKeyframe50:              translateX(220px) !default;
   $animateKeyframe100:             translateX(0) !default;

   @if $animateContent == true {
      .flex-animateIn .slider-pp__caption {
         @extend %slider-pp__caption__animate-in;
      }
   }

```
