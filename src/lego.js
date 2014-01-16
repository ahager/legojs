/* vim: set tabstop=4 softtabstop=4 shiftwidth=4 expandtab: */

define( 'lego', [ 'jquery', 'class' ],
function( $, Class ) {
    var Lego = Class._extend({
        defaultOptions: {},

        init: function ( el, options ) {
            // auto-assign jQuery object
            this.$el = $( el );

            // options merge
            this.options = $.extend( {}, this.defaultOptions, options );
        },

        // event publishing/subscription
        trigger: function ( evt, data ) {
            $( this ).trigger( evt, data );
        },

        on: function ( evt, fn ) {
            $( this ).on( evt, fn );
        }
    });

    // Custom extend does an automatic extend of defaultOptions
    Lego.extend = function ( proto ) {
        proto.defaultOptions = $.extend( {}, this.prototype.defaultOptions, proto.defaultOptions );
        var newClass = this._extend( proto );
        newClass.extend = Lego.extend;
        return newClass;
    }

    return Lego;
});
