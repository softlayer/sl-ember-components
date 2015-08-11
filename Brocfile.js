/* jshint node: true */
/* global require, module, process */

var EmberAddon = require( 'ember-cli/lib/broccoli/ember-addon' );
var replace = require( 'broccoli-string-replace' );
var env = require( './config/environment' );
var packageConfig = require( './package.json' );
var tree;

var app = new EmberAddon({
    fingerprint: {
        enabled: true,
        exclude: [],
        extensions: [ 'png', 'jpg', 'gif' ],
        prepend: env().baseAssetsURL,
        replaceExtensions: [ 'html', 'css', 'js' ]
    }
});

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

// Development dependencies
app.import( app.bowerDirectory + '/ember/ember-template-compiler.js', {
    type: 'test'
});

tree = replace( app.toTree(), {
    files: [
        'index.html',
        'assets/dummy.js'
    ],

    patterns: [
        {
            match: /REPLACE_META_DESCRIPTION/g,
            replacement: packageConfig[ 'description' ]
        }, {
            match: /REPLACE_META_KEYWORDS/g,
            replacement: packageConfig[ 'keywords' ].join( ', ' ) + ', ember, ember cli'
        }, {
            match: /REPLACE_APPLICATION_VERSION/g,
            replacement: packageConfig[ 'version' ]
        }
    ]
});

module.exports = tree;
