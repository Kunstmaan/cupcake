## Cupcake responsive navigation

### General
- Responsive navigation that supports second-level navigation.
- Calculates when it's necessary to switch to the small version.
- Based on BEM method.
- Jquery and vanilla-js version


### Required includes
- **Javascript**
 - jquery.navigation.js (and jQuery) or vanilla.navigation.js
- **Styles**
 - navigation.scss


### Dependencies
- Font-awesome (icons for toggles and active state of small version)


### Initialize
```javascript
cupcake.navigation.init();
```

### Basic html structure
The class '.navigation--big' is already on the nav-element because this is the default state and the state for when there is no javascript.

Use the js-navigation class to switch between big and small and use the js-navigation-space-hook to calc the available space for the navigation.
```html
<!-- Navigation -->
<div class="container-fluid js-navigation-space-hook">

    <nav role="navigation" class="js-navigation navigation navigation--big">

        <!-- Mobile navigation toggle -->
        <div class="js-navigation__toggle navigation__toggle navigation__toggle--top">
            MENU
            <i class="icon-reorder"></i>
            <i class="icon-remove"></i>
        </div>

        <!-- Navigation-level -->
        <ul class="js-main-navigation-level navigation__level">

            <!-- Navigation-item -->
            <li class="navigation__item">
                <a href="#" class="navigation__link">
                    Navitem L1
                </a>
            </li>

            <!-- Active navigation-item -->
            <li class="navigation__item navigation__item--active">
                <a href="#" class="navigation__link">
                    Navitem L1
                </a>
            </li>

            <!-- Navigation-item with sub-menu -->
            <li class="navigation__item">
                <a href="#" class="navigation__link">
                    Navitem L1
                </a>
                <div class="js-navigation__toggle navigation__toggle navigation__toggle--submenu">
                    <i class="icon-chevron-down"></i>
                    <i class="icon-chevron-up"></i>
                </div>
                <ul class="navigation__level navigation__level--sublevel">
                    <li class="navigation__item navigation__item--sublevel">
                        <a href="#" class="navigation__link navigation__link--sublevel">
                            Navitem L2
                        </a>
                    </li>
                    <li class="navigation__item navigation__item--sublevel">
                        <a href="#" class="navigation__link navigation__link--sublevel">
                            Navitem L2
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>

</div>

```
### Available scss variables
```scss

/* ==========================================================================
   Navigation

   This file is exclusively intended for setting up variables.
   Never add styles directly to this file
   ========================================================================== */


/* General
   ========================================================================== */
$use-navigation-small:                              true!default;
$use-navigation-animated:                           true!default;



/* Scafolding
   ========================================================================== */
//General
$navigation-height:                                 3em!default;


//Navigation item
$navigation-item-float:                             left!default;
$navigation-item-width:                             auto!default;
$navigation-item-text-align:                        center!default;
$navigation-item-small-text-align:                  left!default;
$navigation-item-link-padding:                      1.5em!default;


//Sublevel
$navigation-sublevel-z-index:                       10!default;
$navigation-sublevel-width:                         100%!default;

$navigation-sublevel-item-float:                    left!default;
$navigation-sublevel-item-text-align:               center!default;


//Navigation toggle
$navigation-toggle-top-text-align:                  right!default;



/* Colors
   ========================================================================== */
//General
$navigation-background:                             #444!default;
$navigation-small-background:                       #444!default;


//Navigation item
$navigation-item-color:                             #fff!default;

$navigation-item-active-background:                 #333!default;
$navigation-item-active-color:                      #fff!default;

$navigation-item-hover-background:                  #ccc!default;
$navigation-item-hover-color:                       #333!default;

$navigation-small-item-color:                       #fff!default;

$navigation-small-item-active-background:           #333!default;
$navigation-small-item-active-color:                #fff!default;


//Sublevel
$navigation-sublevel-background:                    #ccc!default;

$navigation-sublevel-item-color:                    #333!default;
$navigation-sublevel-item-active-background:        #aaa!default;
$navigation-sublevel-item-hover-background:         #aaa!default;
$navigation-sublevel-item-hover-color:              #333!default;

$navigation-small-sublevel-item-color:              #fff!default;
$navigation-small-sublevel-background:              #ccc!default;

$navigation-small-sublevel-item-active-background:  #333!default;
$navigation-small-sublevel-item-active-color:       #fff!default;


//Navigation toggle
$navigation-toggle-color:                           #fff!default;
$navigation-toggle-top-background:                  #333!default;

$navigation-sublevel-toggle-color:                  #333!default;
$navigation-sublevel-toggle-border-color:           #fff!default;
$navigation-sublevel-toggle-active-color:           #fff!default;


//Navigation small
$navigation-small-link-border-top-color:            #fff!default;



/* Animation
   ========================================================================== */
$navigation-big-animation-duration:                 .4s!default;
$navigation-animation-duration:                     .6s!default;

```


### Support

#### Jquery version
- Android 2.0 and up
- iOS 4.0 and up
- WP 7.5 and up

#### Vanilla version
- Android 3.0 and up
- iOS 5.0 and up
- WP 7.8 and up
