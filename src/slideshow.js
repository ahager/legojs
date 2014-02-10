/* vim: set tabstop=4 softtabstop=4 shiftwidth=4 expandtab: */

define( 'slideshow', [ 'lego', 'radio-group', 'panel-group' ],
function( Lego, RadioGroup, PanelGroup ) {
    var Slideshow = Lego.extend({
        defaultOptions: {
            playBtnSelector: '.slideshow-play-btn',
            stopBtnSelector: '.slideshow-stop-btn',
            thumbSelector: '.slideshow-slide-link',
            slideSelector: '.slideshow-slide',
            activeEvent: 'click',
            activeClass: 'active',
            autoPlay: true,
            interval: 1000
        },

        init: function ( el, options ) {
            this._super( el, options );

            var self = this,
                opts = this.options;

            // initialize tabs and panels (thumbs and slides)
            this.tabGroup = new RadioGroup( this.$el.find( opts.thumbSelector ), {
                activeEvent: opts.activeEvent,
                activeClass: opts.activeClass
            });
            this.panelGroup = new PanelGroup( this.$el.find( opts.slideSelector ), {
                tabGroups: [ this.tabGroup ],
                activeEvent: opts.activeEvent,
                activeClass: opts.activeClass
            });

            // Event bindings for play, stop, and thumbs
            this.$el.find( opts.playBtnSelector ).on( opts.activeEvent, function onPlayClick( evt ) {
                evt.preventDefault();
                self.play();
            });
            this.$el.find( opts.stopBtnSelector ).on( opts.activeEvent, function onStopClick( evt ) {
                evt.preventDefault();
                self.stop();
            });
            this.tabGroup.$el.on( opts.activeEvent, function onThumbClick( evt ) {
                evt.preventDefault();
                self.stop();
                self.tabGroup._handleActiveEvent( $( this ) );
            });

            // Start the slideshow if autoplay is set
            if ( opts.autoPlay ) {
                this.play();
            }
        },

        play: function () {
            var self = this;

            this.intId = setInterval( function nextSlide() {
                self.next();
            }, this.options.interval );
        },

        stop: function () {
            clearInterval( this.intId );
        },

        next: function () {
            var $active = null,
                opts = this.options;

            // Get current active element (should be method on the RadioGroup)
            this.tabGroup.$el.each( function () {
                if ( $( this ).hasClass( opts.activeClass ) ) {
                    $active = $( this );
                    return;
                }
            });

            // Get next element
            var $next = $active.next();
            if ( $next.length ) {
                this.tabGroup._handleActiveEvent( $next );
            } else {
                this.tabGroup._handleActiveEvent( $active.parent().find( ':first' ) );
            }
        }
    });

    return Slideshow;
});
