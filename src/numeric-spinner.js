/* vim: set tabstop=4 softtabstop=4 shiftwidth=4 expandtab: */

define( 'numeric-spinner', [ 'lego', 'drag-tracker' ],
function ( Lego, DragTracker ) {
    var NumericSpinner = Lego.extend({
        defaultOptions: {
            buttonsSelector: ".buttons",
            upButtonSelector: ".up.button",
            downButtonSelector: ".down.button",
            inputSelector: ".numeric-input",
            incrementKeyCodes: [ 38 ],
            decrementKeyCodes: [ 40 ],
            pressAndHoldInterval: 100
        },

        init: function ( el, options ) {
            this._super( el, options );

            var self = this,
                options = this.options,
                incrementKeyCodes = this.options.incrementKeyCodes,
                decrementKeyCodes = this.options.decrementKeyCodes;

            this.intervalId = 0;


            this.$buttons = this.$el.find( options.buttonsSelector );
            this.$up = this.$buttons.find( options.upButtonSelector );
            this.$down = this.$buttons.find( options.downButtonSelector );
            this.$input = this.$el.find( options.inputSelector );
            this.value = 0;

            var dragTracker = new DragTracker( this.$buttons, {
                ignoreX: true,

                dragStart: function ( tracker, dx, dy ) {
                    self.value = parseInt( self.$input.val() ) || 0;
                },

                dragUpdate: function ( tracker, dx, dy ) {
                    self.$input.val( Math.floor( self.value - ( dy / 3 ) ) );
                }
            });

            this.$input.on( 'keydown', function ( evt ) {
                if ( incrementKeyCodes.indexOf( evt.which ) != -1 ) {
                    evt.preventDefault();
                    self._incrementValue();
                } else if ( decrementKeyCodes.indexOf( evt.which ) != -1 ) {
                    evt.preventDefault();
                    self._decrementValue();
                }
            });

            this.$up.on( 'click', function ( evt ) {
                evt.preventDefault();
                self._incrementValue();
            });

            this.$down.on( 'click', function ( evt ) {
                evt.preventDefault();
                self._decrementValue();
            });

            this.$up.on( "mousedown", function() {
                self.intervalID = setInterval( function() {
                    self._incrementValue();
                }, self.options.pressAndHoldInterval );
            }).on( "mouseup mouseleave", function() {
                clearInterval( self.intervalID );
            });

            this.$down.on( "mousedown", function() {
                self.intervalID = setInterval( function() {
                    self._decrementValue();
                }, self.options.pressAndHoldInterval );
            }).on( "mouseup mouseleave", function() {
                clearInterval( self.intervalID );
            });
        },

        _decrementValue: function () {
            var val = parseInt( this.$input.val() ) || 0;

            this.$input.val( val - 1 );
        },

        _incrementValue: function () {
            var val = parseInt( this.$input.val() ) || 0;

            this.$input.val( val + 1 );
        }
    });

    return NumericSpinner;
});
