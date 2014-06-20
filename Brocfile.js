var compileHandlebars = require( 'broccoli-ember-hbs-template-compiler' );
var compileLess       = require( 'broccoli-less-single' );
var concat            = require( 'broccoli-concat' );
var filterES6Modules  = require( 'broccoli-es6-module-filter' );
var mergeTrees        = require( 'broccoli-merge-trees' );
var pickFiles         = require( 'broccoli-static-compiler' );

var lib = pickFiles( 'lib', {
    files:   [ '**/*.js' ],
    srcDir:  '/',
    destDir: '/'
});

var styles = pickFiles( 'lib', {
    files:   [ '**/*.less' ],
    srcDir:  '/styles',
    destDir: '/styles'
});

var templates = pickFiles( 'lib', {
    files:   [ '**/*.hbs' ],
    srcDir:  '/templates',
    destDir: '/templates'
});
templates = compileHandlebars( templates, { module: true });

var jsTrees = mergeTrees([ lib, templates ]);

var libCSS = compileLess([ styles ], '/styles/main.less', '/sl-components.css' );

var libJS = filterES6Modules( jsTrees, {
    anonymous:   false,
    compatFix:   true,
    main:        'main',
    moduleType:  'amd',
    packageName: 'sl-components'
});
libJS = concat( libJS, {
    inputFiles: [ '**/*.js' ],
    outputFile: '/sl-components.js'
});

module.exports = mergeTrees([ libJS, libCSS ]);
