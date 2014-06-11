var concat           = require( 'broccoli-concat' );
var filterES6Modules = require( 'broccoli-es6-module-filter' );
var filterTemplates  = require( 'broccoli-template' );
var mergeTrees       = require( 'broccoli-merge-trees' );
var pickFiles        = require( 'broccoli-static-compiler' );
var templateCompiler = require( 'broccoli-ember-hbs-template-compiler' );

var scripts = pickFiles( 'lib', {
    destDir: '/',
    files:   [ '**/*.js' ],
    srcDir:  '/'
});

var templates = templateCompiler( pickFiles( 'lib', {
    destDir: '/templates',
    files:   [ '**/*.hbs' ],
    srcDir:  '/templates'
}), {
    module: true
});

function filter( tree ) {
    return filterES6Modules( tree, {
        anonymous:   false,
        compatFix:   true,
        main:        'main',
        moduleType:  'amd',
        packageName: 'interface-components'
    });
}

module.exports = concat(
    mergeTrees([
        filter( templates ),
        filter( scripts )
    ]), {
        inputFiles: [ '**/*.js' ],
        outputFile: '/interface-components.js'
    }
);
