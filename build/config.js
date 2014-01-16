({
  baseUrl: '../src',

  out: '../lego.min.js',
  optimize: 'uglify2',

  name: 'almond',
  include: [ 'namespace' ],
  wrap: {
    startFile: 'start.frag',
    endFile: 'end.frag'
  },
  // Remove license comments for almond, jquery, etc
  preserveLicenseComments: false,

  paths: {
    'jquery': '../bower_components/jquery/jquery'
  }
})
