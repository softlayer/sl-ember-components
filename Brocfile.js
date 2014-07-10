/* global require, module */

var EmberApp = require( 'ember-cli/lib/broccoli/ember-app' );

var app = new EmberApp({
    trees: {
        app:       'app',
        styles:    'app/styles',
        templates: 'app/templates',
        vendor:    'vendor'
    }
});

// Bootstrap
app.import( 'vendor/sl-bootstrap/dist/css/sl-bootstrap.css' );
app.import( 'vendor/sl-bootstrap/dist/css/sl-bootstrap-theme.css' );
app.import( 'vendor/sl-bootstrap/dist/js/sl-bootstrap.min.js' );

module.exports = app.toTree();
