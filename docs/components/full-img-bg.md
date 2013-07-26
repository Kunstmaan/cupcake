# Cupcake Full Image Background

The image is placed inline for content input of the image via the CMS.
Default, `background-size:cover` will be used.
For browsers that don't support `background-size:cover`, modernizr will use feature detection to get the fallback scripts.

### Fallback jquery plugin
`https://github.com/srobbin/jquery-backstretch`

### Fallback custom jquery script
`js/full-img-bg/full-img-bg.js`

### html structure
#### Body
```html
    <body class="full-img-bg" style="background-image: url(imgUrl);">
    </body>
```
#### Block level element
```html
    <div class="full-img-bg" style="background-image: url(imgUrl);">
    </div>
```

#### Initiate
`Modernizr.load({
    test: Modernizr.backgroundsize,
    nope: ['../../js/full-img-bg/jquery.backstretch.min.js', '../../js/full-img-bg/full-img-bg.js']
});`
