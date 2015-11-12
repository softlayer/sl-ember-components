/* jshint node: true */
'use strict';

var Funnel = require( 'broccoli-funnel' );
var compileLess = require( 'broccoli-less-single' );
var mergeTrees = require( 'broccoli-merge-trees' );

module.exports = {
    name: 'sl-ember-components',

    included: function( app ) {
        this._super.included( app );

        app.import({
            development: app.bowerDirectory + '/bootstrap/dist/js/bootstrap.js',
            production: app.bowerDirectory + '/bootstrap/dist/js/bootstrap.min.js'
        });

        app.import( app.bowerDirectory + '/bootstrap-datepicker/js/bootstrap-datepicker.js' );

        app.import({
            development: app.bowerDirectory + '/highcharts/highcharts.src.js',
            production: app.bowerDirectory + '/highcharts/highcharts.js'
        });

        app.import({
            development: app.bowerDirectory + '/jquery-mousewheel/jquery.mousewheel.js',
            production: app.bowerDirectory + '/jquery-mousewheel/jquery.mousewheel.min.js'
        });

        app.import({
            development: app.bowerDirectory + '/moment/min/moment-with-locales.js',
            production: app.bowerDirectory + '/moment/min/moment-with-locales.min.js'
        });

        app.import({
            development: app.bowerDirectory + '/moment-timezone/builds/moment-timezone-with-data.js',
            production: app.bowerDirectory + '/moment-timezone/builds/moment-timezone-with-data.min.js'
        });

        app.import({
            development: app.bowerDirectory + '/rxjs/dist/rx.all.js',
            production: app.bowerDirectory + '/rxjs/dist/rx.all.min.js'
        });

        app.import({
            development: app.bowerDirectory + '/select2/select2.js',
            production: app.bowerDirectory + '/select2/select2.min.js'
        });

        app.import({
            development: app.bowerDirectory + '/typeahead.js/dist/typeahead.bundle.js',
            production: app.bowerDirectory + '/typeahead.js/dist/typeahead.bundle.min.js'
        });
    },

    postprocessTree: function( type, tree ) {
        var fonts = new Funnel( 'bower_components/bootstrap', {
            srcDir: 'fonts',
            destDir: this.name + '/assets/fonts',
            include: [ 'glyphicons-halflings-regular.*' ]
        });

        var less = compileLess(
            new Funnel( 'app/styles' ),
            this.name + '.less',
            this.name + '/assets/css/' + this.name + '.css'
        );

        return mergeTrees(
            [
                tree,
                fonts,
                less
            ],
            {
                overwrite: true
            }
        );
    }
};
