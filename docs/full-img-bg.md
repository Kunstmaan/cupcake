## Cupcake Full Image Background

CSS3 Full Image background with a fallback ([jquery-backstretch](https://github.com/srobbin/jquery-backstretch, 'jquery-backstretch')) for older browsers.
The image is placed inline for content-input of the image trough the CMS.

Default, `background-size:cover` will be used. For browsers that don't support this feature, modernizr will deliver the fallback scripts.


### HTML
#### On the Body tag
```html
    <body class="full-img-bg" style="background-image: url(imgUrl);" data-backstretch-img="imgUrl">
        ...
    </body>
```
#### On a block level element
```html
    <div class="full-img-bg" style="background-image: url(imgUrl);" data-backstretch-img="imgUrl">
        ...
    </div>
```

### Fallback
#### Needed scripts
##### Backstretch.js
`https://github.com/srobbin/jquery-backstretch`

##### Custom init function
`js/full-img-bg/full-img-bg.js`

#### Initiate
```js
Modernizr.load({
    test: Modernizr.backgroundsize,
    nope: ['../../vendor/jquery-backstretch/jquery.backstretch.min.js', '../../js/full-img-bg/full-img-bg.js'],
    callback: function(url, result, key) {
        if(key == 1) {
            cupcake.backstretch.init();
        }
    }
});
```
