var filterES6Modules = require('broccoli-es6-module-filter');
var pickFiles = require('broccoli-static-compiler');

module.exports = filterES6Modules(pickFiles('lib', {
    srcDir: '/',
    destDir: '/'
  }), {
    moduleType: 'amd'
  });