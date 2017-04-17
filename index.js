
/* jshint node: true */
'use strict';

var autoprefixer = require( 'broccoli-autoprefixer' );
var path = require( 'path' );
var mergeTrees = require( 'broccoli-merge-trees' );
var Funnel = require( 'broccoli-funnel' );
var compileLess = require( 'broccoli-less-single' );
var componentClassPrefix;

var fingerprintDefaults = require( 'broccoli-asset-rev/lib/default-options' );

/**
 * A variable to hold the state of whether ember-cli-less is installed
 *
 * @type {Boolean}
 */
var isLessAddonInstalled = false;

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

    config: function() {
        return {
            'componentClassPrefix': componentClassPrefix
        };
    },

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
     * Only does so if the consuming app is not making use of the ember-cli-less addon
     *
     * @param {Object} tree
     * @returns {Object}
     */
    treeForVendor: function( tree ) {
        var vendorTree = tree;

        if ( !this.isAddon() && !isLessAddonInstalled ) {
            var folder = ( Number( process.version.match( /^v(\d+)/ )[1] ) >= 5 ) ? this.name : '../';

            var compiledLessTree = compileLess(
                new Funnel( path.join( this.nodeModulesPath, folder, 'app' ) ),
                'styles/' + this.name + '.less',
                this.getCssFileName(), {
                    modifyVars: {
                        'component-class-prefix': componentClassPrefix
                    }
                }
            );

            compiledLessTree = autoprefixer(
                compiledLessTree,
                {
                    browsers: [
                        'Android 2.3',
                        'Android >= 4',
                        'Chrome >= 20',
                        'Firefox >= 24',
                        'Explorer >= 8',
                        'iOS >= 6',
                        'Opera >= 12',
                        'Safari >= 6'
                    ]
                }
            );

            vendorTree = ( tree ) ? mergeTrees([ tree, compiledLessTree ]) : compiledLessTree;
        }

        return vendorTree;
    },

    included: function( app ) {
        this._super.included( app );
        var addonOptions = app.options[ 'sl-ember-components' ];

        if ( addonOptions && addonOptions.componentClassPrefix ) {
            componentClassPrefix = addonOptions.componentClassPrefix;
        } else {
            componentClassPrefix =  this.name;
        }

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

        isLessAddonInstalled = 'ember-cli-less' in app.registry.availablePlugins;

        if ( !this.isAddon() && !isLessAddonInstalled ) {
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
        app.import( app.bowerDirectory + '/jquery.fn.twbs-responsive-pagination/src/twbsResponsivePagination.js' );
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
