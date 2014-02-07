var t = new Lego.RadioGroup( '.tabs a' );
var p = new Lego.PanelGroup( '.panel', {
    tabGroups: [ t ]
});

var d = new Lego.Draggable( '.draggable' );

var ns = new Lego.NumericSpinner( '.numeric-input-wrapper' );

$( '.nav-link.toggle-dropdown' ).on( 'click', function ( evt ) {
    evt.preventDefault();

    $( this ).toggleClass( 'active' );
    $( '.slideout' ).toggleClass( 'active' );
});
