/* vim: set tabstop=4 softtabstop=4 shiftwidth=4 expandtab: */

define( 'namepsace', [
    'lego',
    'drag-tracker',
    'draggable',
    'radio-group',
    'tabs',
    'panel-group'
], function ( Lego, DragTracker, Draggable, RadioGroup, Tabs, PanelGroup ) {
    Lego.DragTracker = DragTracker;

    Lego.Draggable = Draggable;

    Lego.RadioGroup = RadioGroup;

    Lego.TabGroup = TabGroup;

    Lego.PanelGroup = PanelGroup;

    return Lego;
});
