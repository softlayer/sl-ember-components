/* jshint node: true */
'use strict';

var fs = require( 'fs' );
var path = require( 'path' );
var less = require( 'less' );
var mergeTrees = require( 'broccoli-merge-trees' );
var Funnel = require( 'broccoli-funnel' );
var compileLess = require( 'broccoli-less-single' );

module.exports = {
    name: 'sl-ember-components',

    /**
     * Name used for LESS-generated CSS file placed in addon's temp folder
     *
     * @returns {String}
     */
    getCssFileName: function() {
        return this.name + '.css';
    },

    /**
     * Path to addon's temp folder
     *
     * @returns {String}
     */
    getTempPath: function() {
        return path.resolve( this.project.root, 'tmp' );
    },

    /**
     * Pre-compiling LESS files and placing result into file in addon's temp folder
     * for use by treeForVendor()
     *
     * @returns {undefined}
     */
    preBuild: function() {
        this._super.included();

        var lessSourceLocation = path.resolve( this.project.root, 'app', 'styles', this.name + '.less' );
        var lessSourceString = fs.readFileSync( lessSourceLocation ).toString();
        var lessCompiledLocation = path.resolve( this.getTempPath(), this.getCssFileName() );

        less.render(
            lessSourceString,
            {
                filename: lessSourceLocation
            },
            function( error, output ) {
                var fd = fs.openSync( lessCompiledLocation, 'w' );
                fs.writeSync( fd, output.css );
                fs.closeSync( fd );
            }
        );
    },

    /**
     * Adds LESS-generated CSS into vendor tree to be imported included()
     *
     * @param {Object} tree
     * @returns {Object}
     */
    treeForVendor: function( tree ) {
        var compiledLessTree = new Funnel( this.getTempPath(), {
            srcDir: '/',
            destDir: this.name,
            include: [ this.getCssFileName() ]
        });

        return mergeTrees([ tree, compiledLessTree ]);
    },

    included: function( app ) {
        this._super.included( app );

        // -------------------------------------------------------------------------
        // CSS

        app.import( 'vendor/' + this.name + '/' + this.getCssFileName() );

        // -------------------------------------------------------------------------
        // Javascript

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

        return mergeTrees(
            [
                tree,
                fonts
            ],
            {
                overwrite: true
            }
        );
    },

    /**
     * Delete generated CSS file from addon's temp folder
     *
     * @returns {undefined}
     */
    postBuild: function( result ) {
        fs.unlinkSync( path.resolve( this.getTempPath(), this.getCssFileName() ) );
    }
};
