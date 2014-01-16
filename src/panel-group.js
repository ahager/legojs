/* vim: set tabstop=4 softtabstop=4 shiftwidth=4 expandtab: */

define( 'panel-group', [ 'radio-group' ],
function ( RadioGroup ) {
    var PanelGroup = RadioGroup.extend({
        defaultOptions: {
            activeClass: 'active',
            tabGroups: []
        },

        init: function ( el, options ) {
            this._super( el, options );

            var opts = this.options,
                tabGroups = opts.tabGroups;

            this.tabGroups = [];
            this.addTabGroup( tabGroups );
        },

        addTabGroup: function ( tabGroups ) {
            if ( !$.isArray( tabGroups ) ) {
                tabGroups = [ tabGroups ];
            }

            var self = this,
                tabCallback = function ( evt, data ) {
                    self._handleTabSelect( evt, data );
                };

            for ( var i = 0, len = tabGroups.length; i < len; i++ ) {
                var tg = tabGroups[i];

                this.tabGroups.push( tg );
                tg.on( 'lego-radio-activate', tabCallback );
            }
        },

        _handleTabSelect: function( evt, item ) {
            this.deactivate();

            var self = this,
                id = $( item ).attr( 'href' ).replace( /^#/, '' ),
                $panels = $( '[data-id="' + id + '"]' );

            $panels.each( function activePanel() {
                var $panel = $( this );

                if ( self.$el.index( $panel ) != -1 ) {
                    self.activate( $panel );
                }
            });

        }
    });

    return PanelGroup;
});
