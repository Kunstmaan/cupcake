/* ==========================================================================
   Cookie Consent

   Initialize:
   cupcake.cookieconsent.init();
   ========================================================================== */

var cupcake = cupcake || {};

cupcake.cookieconsent = (function($, window, undefined) {

    var init;

    init = function() {
        var cookie = document.cookie.match(/(?:(?:^|.*;\s*)cupcake\-cookie\-consent\s*\=\s*([^;]*).*$)|^.*$/)[1];

        if (cookie === 'true') {
            $('.cookie-bar').addClass('cookie-bar__hide');
        }

        $('.js-cookie-bar__btn').on('click', function(e){
            e.preventDefault();

            document.cookie = 'cupcake-cookie-consent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';

            $(this).closest('.cookie-bar').addClass('cookie-bar__hide');
        });
    };

    return {
        init: init
    };

}(jQuery, window));
