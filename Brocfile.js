/* global require, module */

var EmberApp = require( 'ember-cli/lib/broccoli/ember-app' );
var mergeTrees = require( 'broccoli-merge-trees' );
var pickFiles = require( 'broccoli-static-compiler' );

var app = new EmberApp({
    trees: {
        app:       'app',
        styles:    'app/styles',
        templates: 'app/templates',
        bower_components:    'bower_components'
    }
});

// Bootstrap
app.import( 'bower_components/sl-bootstrap/dist/js/sl-bootstrap.min.js' );
var bootstrapCSSMap = pickFiles( 'bower_components/sl-bootstrap/dist/css', {
    srcDir: '/',
    files: [ 'sl-bootstrap-theme.css.map' ],
    destDir: '/assets'
});

// SlBootstrap fonts
var bootstrapFonts = pickFiles( 'bower_components/sl-bootstrap/fonts', {
    srcDir: '/',
    files: [ 'benton-sans*' ],
    destDir: '/fonts'
});

// Bootstrap-Datepicker
app.import( 'bower_components/bootstrap-datepicker/js/bootstrap-datepicker.js' );

// FontAwesome
app.import( 'bower_components/fontawesome/css/font-awesome.min.css' );
var fontawesomeFont = pickFiles( 'bower_components/fontawesome/fonts', {
    srcDir: '/',
    files: [ 'fontawesome-webfont.woff' ],
    destDir: '/fonts'
});

// Highcharts
app.import( 'bower_components/highcharts/highcharts.js' );

// Moment
app.import( 'bower_components/moment/min/moment-with-langs.min.js' );

// Select2
app.import( 'bower_components/select2/select2.min.js' );

// Typeahead
app.import( 'bower_components/typeahead.js/dist/typeahead.bundle.min.js' );

module.exports = mergeTrees([
    app.toTree(),
    bootstrapCSSMap,
    bootstrapFonts,
    fontawesomeFont
]);
