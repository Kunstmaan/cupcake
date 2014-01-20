## Cupcake _v1.3.2_

Cupcake is a html, scss/css, js component library with some usefull and commonly used components and snippits.


### Includes
- [A responsive navigation (jQuery and Vanilla-js version)](docs/navigation.md)
- [A scroll-to-top snippit (jQuery and Vanilla-js version)](docs/scroll-to-top.md)
- [A scroll-to snippit (jQuery version)](docs/scroll-to.md)
- [Videolink - lazy-load youtube and vimeo embeds (jQuery version)](docs/videolink.md)
- [Full background-image implementation with fallback](docs/full-img-bg.md)
- [Cookie consent bar](docs/cookie-consent.md)
- [Adjustments to the flexslider plugin](docs/slider.md)
- [Responsive audioplayer](docs/audioplayer.md)
- Fix aggressive required focus state (Bootstrap 2.3)
- Place-image mixin


### Installing using Bower
```
bower install cupcake
```


### Contribution

##### Git Flow
Cupcake works with [git-flow](https://github.com/nvie/gitflow).

For a contribution to cupcake, you need to follow the [following workflow](https://github.com/nvie/gitflow#initialization) with the addtion of a pull-request.

Example for adding a feature:
- Start from develop (make sure to pull first)
- `git flow feature start -your feature name-`
- `git flow feature publish -your feature name-`
- start making your changes (commit and push regularly)
- when done, make a pull-request from your feature branch to develop
- after the pull-request is accepted, do `git flow feature finish -your feature name-`


### License
Cupcake is licensed under the [MIT license](http://opensource.org/licenses/MIT).
