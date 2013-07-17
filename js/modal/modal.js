var cupcake = cupcake || {};

cupcake.Modal = (function($, window, undefined) {

    var _super = $.fn.modal,
    Modal;

    Modal = function(el, opts) {
        _super.Constructor.apply(this, arguments);
    };

    Modal.prototype = $.extend({}, _super.Constructor.prototype, {
        constructor: Modal,
        _super: function() {
            var args = $.makeArray(arguments);
            _super.Constructor.prototype[args.shift()].apply(this, args);
        },
        hide: function(e) {
            if(this.options.strictClose) {
                if($(e.target).data('dismiss') === 'modal') {
                    this._super('hide');
                }
            } else {
                this._super('hide');
            }
        },
        show: function() {
            this._super('show');
        }
    });

    $.fn.modal = $.extend(function(option) {
        var args = $.makeArray(arguments);

        return this.each(function() {
            var $this = $(this),
            data = $this.data('modal'),
            opts = $.extend({}, _super.defaults, $this.data(), typeof option === 'object' && option);

            if(! data) {
                $this.data('modal', (data = new Modal(this, opts)));
            }

            if(typeof option === 'string') {
                data[option].apply(data, args);
            } else if (opts.hide) {
                data.hide.apply(data, args);
            } else if (opts.show) {
                data.show.apply(data, args);
            }
        });

    }, $.fn.modal);

})(jQuery, window)
