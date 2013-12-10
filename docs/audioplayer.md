## Cupcake Audioplayer

### General
- Responsive audioplayer that uses html5 audio.
- Uses embed as fallback (includes check on type).
- Based on BEM method.
- Jquery only.
- Based on http://tympanus.net/codrops/2012/12/04/responsive-touch-friendly-audio-player


### Required includes
- **Javascript**
 - jQuery
 - jquery.audioplayer.js
- **Styles**
 - audioplayer.scss


### Dependencies
- Font-awesome (icons)


### Initialize
```javascript
cupcake.navigation.init();
```

### Basic html structure
Don't forget to specify the type, as it uses this for the support-check.
```html
<audio controls preload="auto" class="js-audio-player">
    <source src="../js/audioplayer/testfiles/test.mp3" type="audio/mp3"/>
    <source src="../js/audioplayer/testfiles/test.ogg" type="audio/ogg"/>
    <source src="../js/audioplayer/testfiles/test.wav" type="audio/wav"/>
</audio>
```
### Available scss variables
```scss
/* ==========================================================================
   Audio Player

   This file is exclusively intended for setting up variables.
   Never add styles directly to this file
   ========================================================================== */


/* General
   ========================================================================== */
$audioplayer-height:                            2.5em!default;
$audioplayer-background:                        #1D3037!default;

$audioplayer-max-width:                         30em!default;
$audioplayer-breakpoint-mobile-version:         30em!default;


/* Play-Pause
   ========================================================================== */
$audioplayer-playpause-width:                   2.5em!default;
$audioplayer-playpause-height:                  100%!default;
$audioplayer-playpause-color:                   #fff!default;
$audioplayer-playpause-background:              #C7C400!default;

$audioplayer-playpause-playing-background:      #000!default;
$audioplayer-playpause-playing-color:           #fff!default;


/* Bar
   ========================================================================== */
$audioplayer-bar-background:                    #333!default;
$audioplayer-bar-loaded-background:             #000!default;
$audioplayer-bar-played-background:             #C7C400!default;


/* Time
   ========================================================================== */
$audioplayer-time-font-size:                    .7em!default;
$audioplayer-time-color:                        #fff!default;
$audioplayer-time-mobile-color:                 #000!default;


/* Volume
   ========================================================================== */
$audioplayer-volume-width:                      2.5em!default;
$audioplayer-volume-height:                     100%!default;

$audioplayer-volume-button-background:          #C7C400!default;
$audioplayer-volume-button-color:               #fff!default;

$audioplayer-volume-adjust-height:              6.25em!default;
$audioplayer-volume-adjust-background:          #1D3037!default;

$audioplayer-volume-adjust-control-background:        #000!default;
$audioplayer-volume-adjust-control-state-background:  #C7C400!default;

```


### Support

- Latest Chrome
- Latest FireFox
- Latest Safari
- IE 7 and up
- Android 2.0 and up
- iOS 4.0 and up
- WP 7.5 and up
