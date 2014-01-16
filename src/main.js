/* vim: set tabstop=4 softtabstop=4 shiftwidth=4 expandtab: */

require.config({
    urlArgs: "bust=" + Date.now(),
    paths: {
        'jquery': '../bower_components/jquery/jquery',
    }
});

require([
    'lego'
], function ( Lego ) {
    var t = new Lego();
    console.log(t.options);
});
