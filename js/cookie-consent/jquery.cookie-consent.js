/* ==========================================================================
   Cookie Consent

   Initialize:
   cupcake.cookieconsent.init();

   Support:
   Latest Chrome
   Latest FireFox
   Latest Safari
   IE 8 and up
   Android 2.0 and up
   iOS 4.0 and up
   WP 7.5 and up
   ========================================================================== */

var cupcake = cupcake || {};

cupcake.cookieconsent = (function($, window, undefined) {

    var init;

    init = function() {
        var $cookieBar = $('#cookie-bar'),
            $cookieBarConsentBtn = $('#cookie-bar__consent-btn'),
            _hasCookie = document.cookie.match(/(?:(?:^|.*;\s*)cupcake\-cookie\-consent\s*\=\s*([^;]*).*$)|^.*$/)[1];

        if (typeof _hasCookie === 'undefined' || _hasCookie === 'false') {
            $cookieBar.addClass('cookie-bar--visible');
        }

        $cookieBarConsentBtn.on('click', function(e){
            e.preventDefault();
            document.cookie = 'cupcake-cookie-consent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
            $cookieBar.removeClass('cookie-bar--visible');
        });
    };

    return {
        init: init
    };

}(jQuery, window));
