/* ==========================================================================
   Cookie Consent

   Initialize:
   cupcake.cookieconsent.init();

   Support:
   Latest Chrome
   Latest FireFox
   Latest Safari
   IE9 and up
   Android 3.0 and up
   iOS 5.0 and up
   WP 7.8 and up
   ========================================================================== */

var cupcake = cupcake || {};

cupcake.cookieconsent = (function(window, undefined) {

    var init;

    init = function() {
        var cookieBar = document.getElementById('cookie-bar'),
            cookieBarConsentBtn = document.getElementById('cookie-bar__consent-btn'),
            _hasCookie = document.cookie.match(/(?:(?:^|.*;\s*)cupcake\-cookie\-consent\s*\=\s*([^;]*).*$)|^.*$/)[1];

        if (typeof _hasCookie === 'undefined' || _hasCookie === 'false') {
            cookieBar.classList.add('cookie-bar--visible');
        }

        cookieBarConsentBtn.addEventListener('click', function(e) {
            e.preventDefault();
            document.cookie = 'cupcake-cookie-consent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
            cookieBar.classList.remove('cookie-bar--visible');
        });
    };

    return {
        init: init
    };

}(window));
