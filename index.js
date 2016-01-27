/* jshint node: true */
'use strict';

var path = require( 'path' );
var mergeTrees = require( 'broccoli-merge-trees' );
var Funnel = require( 'broccoli-funnel' );
var compileLess = require( 'broccoli-less-single' );
var fingerprintDefaults = require( 'broccoli-asset-rev/lib/default-options' );

/**
 * Traverses an array and removes duplicate elements
 *
 * @param {Array} array
 * @returns {Array}
 */
var unique = function( array ) {
    var isDuplicateElement = {};
    var uniqueArray = [];
    var arrayLength = array.length;

    for( var i = 0; i < arrayLength; i++ ) {
        if ( !isDuplicateElement[ array[ i ] ] ) {
            isDuplicateElement[ array[ i ] ] = true;
            uniqueArray.push( array[ i ] );
        }
    }

    return uniqueArray;
};

module.exports = {
    name: 'sl-ember-components',

    /**
     * Name used for LESS-generated CSS file placed in vendor tree
     *
     * @returns {String}
     */
    getCssFileName: function() {
        return this.name + '.css';
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
     * Adds LESS-generated CSS into vendor tree of consuming app to be imported in included()
     *
     * @param {Object} tree
     * @returns {Object}
     */
    treeForVendor: function( tree ) {
        var vendorTree = tree;

        if ( !this.isAddon() ) {
            var compiledLessTree = compileLess(
                new Funnel( path.join( this.nodeModulesPath, '../', 'app' ) ),
                'styles/' + this.name + '.less',
                this.getCssFileName()
            );

            vendorTree = ( tree ) ? mergeTrees([ tree, compiledLessTree ]) : compiledLessTree;
        }

        return vendorTree;
    },

    included: function( app ) {
        this._super.included( app );

        var fingerprintOptions = app.options.fingerprint;

        if ( fingerprintOptions.enabled ) {
            var fingerprintDefaultsSorted = fingerprintDefaults.extensions.sort();
            var fingerprintOptionsSorted = fingerprintOptions.extensions.sort();
            var fingerprintExtensionsSetToDefaults = ( fingerprintOptionsSorted.length === fingerprintDefaultsSorted.length ) &&
                fingerprintOptionsSorted.every( function( element, index ) {
                    return element === fingerprintDefaultsSorted[ index ];
                });

            if ( fingerprintExtensionsSetToDefaults ) {
                app.options.fingerprint.extensions.push( 'eot', 'svg', 'ttf', 'woff', 'woff2' );
                app.options.fingerprint.extensions = unique( app.options.fingerprint.extensions );
            }
        }

        // -------------------------------------------------------------------------
        // CSS

        if ( !this.isAddon() ) {
            app.import( 'vendor/' + this.getCssFileName() );
        }

        // -------------------------------------------------------------------------
        // Javascript

        app.import( app.bowerDirectory + '/bootstrap/dist/js/bootstrap.js' );
        app.import( app.bowerDirectory + '/bootstrap-datepicker/js/bootstrap-datepicker.js' );
        app.import( app.bowerDirectory + '/highcharts/highcharts.src.js' );
        app.import( app.bowerDirectory + '/jquery-mousewheel/jquery.mousewheel.js' );
        app.import( app.bowerDirectory + '/moment/min/moment-with-locales.js' );
        app.import( app.bowerDirectory + '/moment-timezone/builds/moment-timezone-with-data.js' );
        app.import( app.bowerDirectory + '/rxjs/dist/rx.all.js' );
        app.import( app.bowerDirectory + '/select2/select2.js' );
        app.import( app.bowerDirectory + '/typeahead.js/dist/typeahead.bundle.js' );
    },

    /**
     * Copy Twitter Bootstrap fonts into namespaced assets folder
     *
     * @param {String} type
     * @param {Object} tree
     * @returns {Object}
     */
    preprocessTree: function( type, tree ) {
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
    }
};
