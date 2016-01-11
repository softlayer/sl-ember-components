/* jshint node: true */
'use strict';

var path = require( 'path' );
var mergeTrees = require( 'broccoli-merge-trees' );
var Funnel = require( 'broccoli-funnel' );
var compileLess = require( 'broccoli-less-single' );

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
        app.import( app.bowerDirectory + '/jquery.fn.twbs-responsive-pagination/src/twbsResponsivePagination.js' );
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
    }
};
