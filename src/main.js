/* vim: set tabstop=4 softtabstop=4 shiftwidth=4 expandtab: */

require.config({
    urlArgs: "bust=" + Date.now(),
    paths: {
        'jquery': '../bower_components/jquery/jquery',
    }
});

require([
    'lego',
    'radio-group',
    'tabs',
    'panel-group',
    'draggable',
    'numeric-spinner',
    'flyout',
    'slideshow',
    'slider'
], function ( Lego, RadioGroup, Tabs, PanelGroup, Draggable, NumericSpinner, Flyout, Slideshow, Slider ) {
    var t = new RadioGroup( '.tabs a' );
    var p = new PanelGroup( '.panel', {
        tabGroups: [ t ]
    });

    var d = new Draggable( '.draggable' );

    var ns = new NumericSpinner( '.numeric-spinner-wrapper', {
        inputSelector: '.numeric-spinner'
    });

    var fo = new Flyout( '.flyout', {
        trigger: $( '.trigger' ),
        positionAround: {
            position: 'right',
            positionOffset: 15,
            align: 'top',
            alignOffset: -10
        }
    });

    var ss = new Slideshow( '.slideshow-wrapper' );

    var sl = new Slider( '.slider' );

    sl.on( 'slider-update-value', function ( evt, percent ) {
        $( '.slider-value' ).val( Math.round( percent * 100 ) / 100 );
    });
});
