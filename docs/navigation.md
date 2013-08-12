## Cupcake responsive navigation v0.3

### General
- Responsive navigation that supports multi-level navigation.
- Calculates when it's necessary to switch to the small version.
- Based on BEM method.
- Jquery and vanilla-js version


### Required includes
- **Javascript**
 - jquery.navigation.js (and jQuery) or vanilla.navigation.js
 - modernizr.js (for support of IE8 and below)
- **Styles**
 - navigation.scss


### Dependencies
- Font-awesome (icons for toggles and active state of small version)
- Modernizr for the support of IE8 and below (HTML5 nav-element)


### Initialize
```javascript
cupcake.navigation.init();
```

### Basic html structure
The class '.navigation--big' is already on the nav-element because this is the default state and the state for when there is no javascript.
```html
<!-- Navigation -->
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
                <li class="navigation__item">
                    <a href="#" class="navigation__link">
                        Navitem L2
                    </a>
                </li>
                <li class="navigation__item">
                    <a href="#" class="navigation__link">
                        Navitem L2
                    </a>
                </li>
            </ul>
        </li>
    </ul>
</nav>
```
### Available scss variables
```scss
//General
$navigation-height: 3em!default;
$navigation-responsive-breakpoint: 40em!default;

//Menu item
$navigation-item-width: auto!default;
$navigation-item-text-align: center!default;
$navigation-item-small-text-align: left!default;
$navigation-item-link-padding: 1.5em!default;

//Sublevel
$navigation-sublevel-z-index: 10!default;

//Menu toggle
$navigation-toggle-top-text-align: right!default;

//Colors
$navigation-background: #444!default;
$navigation-sublevel-background: #ccc!default;

$navigation-item-color: #fff!default;
$navigation-item-active-background: #333!default;

$navigation-sublevel-item-color: #333!default;
$navigation-sublevel-item-active-background: #aaa;

$navigation-toggle-color: #fff!default;
$navigation-toggle-top-background: #333!default;
$navigation-toggle-submenu-border-color: #fff!default;

$navigation-small-link-border-top-color: #fff!default;

$navigation-item-hover-background: #ccc!default;
$navigation-item-hover-color: #333!default;

$navigation-sublevel-item-hover-background: #aaa!default;
$navigation-sublevel-item-hover-color: #333!default;

$navigation-item-link-hover-background: #333!default;
$navigation-item-link-hover-color: #ccc!default;

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
