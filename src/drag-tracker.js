/* vim: set tabstop=4 softtabstop=4 shiftwidth=4 expandtab: */

define( 'drag-tracker', [ 'lego' ],
function ( Lego ) {
    var DragTracker = Lego.extend({
        defaultOptions: {
            dragThreshold:  5,
            ignoreX: false,
            ignoreY: false,
            dragStart: null,
            dragUpdate: null,
            dragStop: null,
            startEvent: 'mousedown',
            updateEvent: 'mousemove',
            stopEvent: 'mouseup'
        },

        init: function ( el, options ) {
            this._super( el, options );

            var self = this,
                $el = this.$el,
                opts = this.options;

            this.dragStarted = false;

            this.startX = 0;
            this.startY = 0;

            this.mdFunc = function( e, data ) { return self._startDrag( e, data); };
            this.mmFunc = function( e, data ) { return self._handleDrag( e, data); };
            this.muFunc = function( e, data ) { return self._stopDrag( e, data); };

            $el.on( opts.startEvent, this.mdFunc );
        },

        dragStart: function ( dx, dy ) {
            var opts = this.options;
            if ( opts.dragStart ) {
                opts.dragStart( this, dx, dy );
            }
        },

        dragUpdate: function ( dx, dy ) {
            var opts = this.options;
            if ( opts.dragUpdate ) {
                opts.dragUpdate( this, dx, dy );
            }
        },

        dragStop: function ( dx, dy ) {
            var opts = this.options;
            if ( opts.dragStop ) {
                opts.dragStop( this, dx, dy );
            }
        },

        _startDrag: function ( evt, data ) {
            this.dragStarted = false;
            this.startX = evt.pageX;
            this.startY = evt.pageY;

            this._installDragHandlers();

            return false;
        },

        _handleDrag: function ( evt, data ) {
            var dx = evt.pageX - this.startX,
                dy = evt.pageY - this.startY,
                opts = this.options;

            if ( !this.dragStarted ) {
                if ( ( !opts.ignoreX && Math.abs( dx ) < opts.dragThreshold ) && ( !opts.ignoreY && Math.abs( dy ) < opts.dragThreshold ) ) {
                    return false;
                }

                this.dragStarted = true;

                this.dragStart( 0, 0 );
            }

            this.dragUpdate( opts.ignoreX ? 0 : dx, opts.ignoreY ? 0 : dy );

            return false;
        },

        _stopDrag: function ( evt, data ) {
            var opts = this.options;

            this._removeDragHandlers();

            if ( this.dragStarted ) {
                var dx = evt.pageX - this.startX,
                    dy = evt.pageY - this.startY;

                this.dragStop( opts.ignoreX ? 0 : dx, opts.ignoreY ? 0 : dy );
            }

            this.dragStarted = false;

            return false;
        },

        _installDragHandlers: function () {
            var opts = this.options;

            $( document )
                .on( opts.updateEvent, this.mmFunc )
                .on( opts.stopEvent, this.muFunc );
        },

        _removeDragHandlers: function () {
            var opts = this.options;

            $( document )
                .off( opts.updateEvent, this.mmFunc )
                .off( opts.stopEvent, this.muFunc );
        }
    });

    return DragTracker;
});
