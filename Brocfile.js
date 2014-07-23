/* global require, module */

var EmberApp = require( 'ember-cli/lib/broccoli/ember-app' );
var mergeTrees = require( 'broccoli-merge-trees' );
var pickFiles = require( 'broccoli-static-compiler' );

var app = new EmberApp({
    trees: {
        app:       'app',
        styles:    'app/styles',
        templates: 'app/templates',
        vendor:    'vendor'
    }
});

// Bootstrap
app.import( 'vendor/sl-bootstrap/dist/js/sl-bootstrap.min.js' );
var bootstrapCSSMap = pickFiles( 'vendor/sl-bootstrap/dist/css', {
    srcDir: '/',
    files: [ 'sl-bootstrap-theme.css.map' ],
    destDir: '/assets'
});

// SlBootstrap fonts
var bootstrapFonts = pickFiles( 'vendor/sl-bootstrap/fonts', {
    srcDir: '/',
    files: [ 'benton-sans*' ],
    destDir: '/fonts'
});

// Bootstrap-Datepicker
app.import( 'vendor/bootstrap-datepicker/css/datepicker3.css' );
app.import( 'vendor/bootstrap-datepicker/js/bootstrap-datepicker.js' );

// FontAwesome
app.import( 'vendor/fontawesome/css/font-awesome.min.css' );
var fontawesomeFont = pickFiles( 'vendor/fontawesome/fonts', {
    srcDir: '/',
    files: [ 'fontawesome-webfont.woff' ],
    destDir: '/fonts'
});

// Highcharts
app.import( 'vendor/highcharts/highcharts.js' );

// Moment
app.import( 'vendor/moment/min/moment-with-langs.min.js' );

// Select2
app.import( 'vendor/select2/select2.css' );
app.import( 'vendor/select2/select2-bootstrap.css' );
app.import( 'vendor/select2/select2.min.js' );
var select2Images = pickFiles( 'vendor/select2', {
    srcDir: '/',
    files: [ '*.png', '*.gif' ],
    destDir: '/assets'
});

module.exports = mergeTrees([ app.toTree(), bootstrapCSSMap, bootstrapFonts, fontawesomeFont, select2Images ]);
