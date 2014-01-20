## Cupcake videolink

### General
- Support for youtube and vimeo
- Replaces image with video (lazy-load video's)


### Required includes
- **Javascript**
 - jQuery.videolink.js

- **Styles**
 - videolink.scss

### Dependencies
- jQuery
- Modernizr.csstransitions (check css-transitions)
- FidVids (if you want make the video's fluid)


### Initialize
```javascript
cupcake.videolink.init();
```

### Basic html structure
```html
<div class="videolink">
    <a href="http://www.youtube.com/embed/AAQjn6_JaJ0" target="_blank" class="js-videolink-play-link videolink__video-link" data-video-provider="youtube" data-video-id="AAQjn6_JaJ0" data-make-fluid="true">
        <img src="../img/dummy/videolink.jpg" alt="videolink-image" class="videolink__video-link__image" />
    </a>
    <div class="js-videolink-container videolink__video-container"></div>
</div>
```

### Available scss variables
```scss
/* ==========================================================================
   Video link

   This file is exclusively intended for setting up variables.
   Never add styles directly to this file
   ========================================================================== */

//Background
$videolink-background:          #000;
```

### Support

#### Jquery version
- Latest Chrome
- Latest FireFox
- Latest Safari
- IE 8 and up
- Android 2.0 and up
- iOS 4.0 and up
- WP 7.5 and up
