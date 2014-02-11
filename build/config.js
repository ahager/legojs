({
  baseUrl: '../src',

  out: '../lego.min.js',
  // optimize: 'uglify2',

  include: [ 'namespace' ],
  // Remove license comments for almond, jquery, etc
  preserveLicenseComments: false,

  paths: {
    'jquery': '../bower_components/jquery/jquery'
  },

  onBuildWrite: function (moduleName, path, contents) {
    return module.require('amdclean').clean(contents);
  }
})
