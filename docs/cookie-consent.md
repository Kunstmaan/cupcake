## Cupcake Cookie Consent

### General

### Required includes
- **Javascript**
 - jquery.cookie-consent.js or vanilla.cookie-consent.js

- **Styles**
 - cookie-consent.scss

### Dependencies
- jQuery (only for jquery.cookie-consent.js)

### Initialize
```javascript
cupcake.cookieconsent.init();
```

###  Basic html structure
```html
    <div id="cookie-bar" class="cookie-bar">
        <p>
            Deze site gebruikt cookies om uw surfervaring op deze website gemakkelijker te maken. Indien u meer informatie wenst kunt u <a href="#">hier ons cookiebeleid lezen</a>.
            <button type="button" id="cookie-bar__consent-btn" class="btn btn-warning cookie-bar__btn">Doorgaan</button>
        </p>
    </div>
```

### Available scss variables
```scss
//General
$cookie-bar-position-bottom: 0 !default;
$cookie-bar-position-top: auto !default;
$cookie-bar-position-left: auto !default;
$cookie-bar-position-right: auto !default;
$cookie-bar-color: rgba(86,86,86,0.95) !default;
$cookie-bar-text-align: center !default;
$cookie-bar-width: 100% !default;
$cookie-bar-padding: 10px 0 0 0 !default;
$cookie-bar-font-color: #fff !default;
$cookie-bar-font-size: 13px !default;

//Policy link
$cookie-bar-policy-link-color: #fff !default;
$cookie-bar-policy-link-text-decoration: underline !default;

//Button
$cookie-bar-button-margin: 0 0 0 5px !default;
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

#### Vanilla version
- Latest Chrome
- Latest FireFox
- Latest Safari
- IE 9 and up
- Android 3.0 and up
- iOS 5.0 and up
- WP 7.8 and up
