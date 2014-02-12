/* vim: set tabstop=4 softtabstop=4 shiftwidth=4 expandtab: */

define( 'namespace', [
    'lego',
    'drag-tracker',
    'draggable',
    'radio-group',
    'tabs',
    'panel-group',
    'numeric-spinner',
    'slideshow',
    'slider',
    'colorpicker'
], function ( Lego, DragTracker, Draggable, RadioGroup, Tabs, PanelGroup, NumericSpinner, Slideshow, Slider, Colorpicker ) {
    Lego.DragTracker = DragTracker;

    Lego.Draggable = Draggable;

    Lego.RadioGroup = RadioGroup;

    Lego.Tabs = Tabs;

    Lego.PanelGroup = PanelGroup;

    Lego.NumericSpinner = NumericSpinner;

    Lego.Slideshow = Slideshow;

    Lego.Slider = Slider;

    Lego.Colorpicker = Colorpicker;

    window.Lego = Lego;

    return Lego;
});
