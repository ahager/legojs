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
    'flyout'
], function ( Lego, RadioGroup, Tabs, PanelGroup, Draggable, NumericSpinner, Flyout ) {
    var t = new RadioGroup( '.tabs a' );
    var p = new PanelGroup( '.panel', {
        tabGroups: [ t ]
    });

    var d = new Draggable( '.draggable' );

    var ns = new NumericSpinner( '.numeric-input-wrapper' );
});
