/* vim: set tabstop=4 softtabstop=4 shiftwidth=4 expandtab: */

define( 'slider', [ 'lego', 'draggable' ],
function ( Lego, Draggable ) {
    var Slider = Lego.extend({
        defaultOptions: {
            thumbSelector: '.thumb',
            dragStartEvent: 'mousedown',
            dragUpdateEvent: 'mousedown',
            dragStopEvent: 'mousedown',
            type: 'horizontal'
        },

        init: function ( el, options ) {
            this._super( el, options );

            var self = this,
                opts = this.options;

            this.$thumb = this.$el.find( opts.thumbSelector );
            this.rightBoundary = this.$el.width() - this.$thumb.width();
            this.bottomBoundary = this.$el.height() - this.$thumb.height();

            if ( opts.type == '2d' ) {
                this.draggable = new Draggable( this.$thumb );
            } else if ( opts.type == 'vertical' ){
                this.draggable = new Draggable( this.$thumb, { ignoreX: true } );
            } else {
                this.draggable = new Draggable( this.$thumb, { ignoreY: true } );
            }

            this.draggable.on( 'draggable-set-position', function ( evt, data ) {
                var x = data.x,
                    y = data.y,
                    pos = self.$thumb.position();

                if ( pos.left < 0 ) {
                    x = 0;
                }
                if ( pos.left > self.rightBoundary ) {
                    x = self.rightBoundary;
                }
                if ( pos.top < 0 ) {
                    y = 0;
                }
                if ( pos.top > self.bottomBoundary ) {
                    y = self.bottomBoundary;
                }

                self.draggable.setPosition( x, y );
                if ( opts.type == 'horizontal' ) {
                    self.trigger( 'slider-update-value', { x: ( x + ( self.$thumb.width() / 2 ) ) / self.$el.width() } );
                } else if ( opts.type == 'vertical' ){
                    self.trigger( 'slider-update-value', { y: ( y + ( self.$thumb.height() / 2 ) ) / self.$el.height() } );
                } else {
                    self.trigger( 'slider-update-value', {
                        x: ( x + ( self.$thumb.width() / 2 ) ) / self.$el.width(),
                        y: ( y + ( self.$thumb.height() / 2 ) ) / self.$el.height()
                    });
                }
            });
        }
    });

    return Slider;
});
