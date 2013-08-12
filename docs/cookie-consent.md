## Cupcake Cookie Consent

###  Basic html structure
```html
    <div class="cookie-bar">
        <p>Bolero gebruikt cookies om uw surfervaring op deze website gemakkelijker te maken. Indien u meer informatie wenst kunt u <a href="#" class="cookie-bar__policy">hier ons cookiebeleid lezen</a>. <a href="#" class="btn btn-warning cookie-bar__btn">Doorgaan</a></p>
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
