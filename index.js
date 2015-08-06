/* jshint node: true */
'use strict';

var mergeTrees = require( 'broccoli-merge-trees' );
var pickFiles = require( 'broccoli-static-compiler' );

module.exports = {
    name: 'sl-ember-components',

    included: function( app ) {
        this._super.included( app );

        if ( app.env === 'development' ) {
            app.import( 'bower_components/sl-bootstrap/dist/css/sl-bootstrap-theme.css.map' );
        }

        app.import({
            development: 'bower_components/sl-bootstrap/dist/js/sl-bootstrap.js',
            production: 'bower_components/sl-bootstrap/dist/js/sl-bootstrap.min.js'
        });

        app.import( 'bower_components/bootstrap-datepicker/js/bootstrap-datepicker.js' );

        app.import( 'bower_components/fontawesome/css/font-awesome.min.css' );

        app.import({
            development: 'bower_components/highcharts/highcharts.src.js',
            production: 'bower_components/highcharts/highcharts.js'
        });

        app.import({
            development: 'bower_components/jquery-mousewheel/jquery.mousewheel.js',
            production: 'bower_components/jquery-mousewheel/jquery-mousewheel.min.js'
        });

        app.import({
            development: 'bower_components/moment/min/moment-with-locales.js',
            production: 'bower_components/moment/min/moment-with-locales.min.js'
        });

        app.import({
            development: 'bower_components/moment-timezone/builds/moment-timezone-with-data.js',
            production: 'bower_components/moment-timezone/builds/moment-timezone-with-data.min.js'
        });

        app.import({
            development: 'bower_components/rxjs/dist/rx.all.js',
            production: 'bower_components/rxjs/dist/rx.all.min.js'
        });

        app.import({
            development: 'bower_components/select2/select2.js',
            production: 'bower_components/select2/select2.min.js'
        });

        app.import({
            development: 'bower_components/typeahead.js/dist/typeahead.bundle.js',
            production: 'bower_components/typeahead.js/dist/typeahead.bundle.min.js'
        });
    },

    postprocessTree: function( type, tree ) {
        var fontPath = this.name + '/assets/fonts';

        return mergeTrees(
            [
                tree,

                pickFiles( 'bower_components/sl-bootstrap/fonts', {
                    srcDir: '/',
                    files: [ 'benton-sans-*' ],
                    destDir: fontPath
                }),

                pickFiles( 'bower_components/fontawesome/fonts', {
                    srcDir: '/',
                    files: [ 'fontawesome-webfont.*' ],
                    destDir: fontPath
                })
            ],
            {
                overwrite: true
            }
        );
    }
};
