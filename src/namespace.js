/* vim: set tabstop=4 softtabstop=4 shiftwidth=4 expandtab: */

define( 'namespace', [
    'lego',
    'drag-tracker',
    'draggable',
    'radio-group',
    'tabs',
    'panel-group',
    'numeric-spinner'
], function ( Lego, DragTracker, Draggable, RadioGroup, Tabs, PanelGroup, NumericSpinner ) {
    Lego.DragTracker = DragTracker;

    Lego.Draggable = Draggable;

    Lego.RadioGroup = RadioGroup;

    Lego.Tabs = Tabs;

    Lego.PanelGroup = PanelGroup;

    Lego.NumericSpinner = NumericSpinner;

    return Lego;
});
