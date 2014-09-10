/* global require, module */

var EmberAddon = require( 'ember-cli/lib/broccoli/ember-addon' );

var app = new EmberAddon();

app.import({
    development: 'bower_components/sl-bootstrap/dist/js/sl-bootstrap.js',
    production:  'bower_components/sl-bootstrap/dist/js/sl-bootstrap.min.js'
});

app.import('bower_components/sl-bootstrap/dist/css/sl-bootstrap-theme.css.map');

app.import('bower_components/sl-bootstrap/fonts/benton-sans-bold.woff');
app.import('bower_components/sl-bootstrap/fonts/benton-sans-light.woff');
app.import('bower_components/sl-bootstrap/fonts/benton-sans-regular.woff');

app.import('bower_components/bootstrap-datepicker/js/bootstrap-datepicker.js');

app.import('bower_components/fontawesome/css/font-awesome.min.css');
app.import('bower_components/fontawesome/fonts/fontawesome-webfont.woff');

app.import({
    development: 'bower_components/highcharts/highcharts.src.js',
    production:  'bower_components/highcharts/highcharts.js'
});

app.import({
    development: 'bower_components/moment/min/moment-with-langs.js',
    production:  'bower_components/moment/min/moment-with-langs.min.js'
});

app.import({
    development: 'bower_components/moment-timezone/builds/moment-timezone-with-data.js',
    production:  'bower_components/moment-timezone/builds/moment-timezone-with-data.min.js'
});

app.import({
    development: 'bower_components/select2/select2.js',
    production:  'bower_components/select2/select2.min.js'
});

app.import({
    development: 'bower_components/typeahead.js/dist/typeahead.bundle.js',
    production:  'bower_components/typeahead.js/dist/typeahead.bundle.min.js'
});

module.exports = app.toTree();
