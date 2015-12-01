/* jshint node: true */
'use strict';

var fs = require( 'fs' );
var path = require( 'path' );
var less = require( 'less' );
var mergeTrees = require( 'broccoli-merge-trees' );
var Funnel = require( 'broccoli-funnel' );
var compileLess = require( 'broccoli-less-single' );
var existsSync = require( 'exists-sync' );
var unwatched = require( 'broccoli-unwatched-tree' );

module.exports = {
    name: 'sl-ember-components',

    /**
     * Create subdirectory in temp folder
     *
     * @returns {undefined}
     */
    createTempPath: function() {
        var tempRoot = path.join( this.project.root, 'tmp' );
        var tempPath = this.getTempPath();

        if ( !existsSync( tempRoot ) ) {
            fs.mkdirSync( tempRoot );
        }

        if ( !existsSync( tempPath ) ) {
            fs.mkdirSync( tempPath );
        }
    },

    /**
     * Remove subdirectory in temp folder
     *
     * @returns {undefined}
     */
    removeTempPath: function() {
        var cssFilePath = path.join( this.getTempPath(), this.getCssFileName() );

        if ( existsSync( cssFilePath ) ) {
            fs.unlinkSync( path.resolve( cssFilePath ) );
        }

        if ( existsSync( this.getTempPath() ) ) {
            fs.rmdirSync( this.getTempPath() );
        }
    },

    /**
     * Name used for LESS-generated CSS file placed in temp folder
     *
     * @returns {String}
     */
    getCssFileName: function() {
        return this.name + '.css';
    },

    /**
     * Path to temp folder
     *
     * @returns {String}
     */
    getTempPath: function() {
        var tempRoot = path.join( this.project.root, 'tmp' );

        return path.resolve( path.join( tempRoot, this.name ) );
    },

    /**
     * Whether this module is being accessed by an addon or an app
     *
     * @returns {Boolean}
     */
    isAddon: function() {
        var keywords = this.project.pkg.keywords;

        return ( keywords && keywords.indexOf( 'ember-addon' ) !== -1 ) ? true : false;
    },

    /**
     * Pre-compiling LESS files and placing result into file in temp folder for
     * use by treeForVendor()
     *
     * @returns {undefined}
     */
    preBuild: function() {
        //this._super.included();

        var resolvePaths = [
            this.project.root
        ];

        if ( !this.isAddon() ) {
            resolvePaths.push( 'node_modules', this.name );
        }

        resolvePaths.push( 'app', 'styles', this.name + '.less' );

        var lessSourceLocation = path.resolve.apply( undefined, resolvePaths );
        var lessSourceString = fs.readFileSync( lessSourceLocation ).toString();

        this.createTempPath();

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
     * Adds LESS-generated CSS into vendor tree to be imported in included()
     *
     * @param {Object} tree
     * @returns {Object}
     */
    treeForVendor: function( tree ) {
        var tempTree = new unwatched( this.getTempPath() );
        var compiledLessTree = new Funnel( tempTree, {
            srcDir: '/',
            destDir: this.name,
            include: [ this.getCssFileName() ]
        });

        return ( this.isAddon() ) ?
            mergeTrees([ tree, compiledLessTree ]) :
            compiledLessTree;
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

    /**
     * Copy Twitter Bootstrap fonts into namespaced assets folder
     *
     * @param {String} type
     * @param {Object} tree
     * @returns {Object}
     */
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
     * Delete generated CSS file from temp folder
     *
     * @param {Object} result
     * @returns {undefined}
     */
    postBuild: function( result ) {
        //this.removeTempPath();
    }
};
