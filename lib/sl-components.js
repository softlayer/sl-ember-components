'use strict';

var fs   = require( 'fs' );

function SlComponents( project ) {
    this.project = project;
    this.name    = 'sl-components';
}

function unwatchedTree( dir ) {
    return {
        cleanup: function () {},
        read:    function () { return dir; }
    };
}

SlComponents.prototype.treeFor = function treeFor( name ) {
    // var treePath = path.join( 'node_modules', 'sl-components', name );
    var path = require( 'path' ),
        slcomponentsPath = path.join( 'node_modules', 'sl-components' ),
        vendorTree,
        appTree,
        mergeFiles = require( 'broccoli-merge-trees' ),
        pickFiles = require( 'broccoli-static-compiler' );

    if ( name === 'vendor' ) {
        vendorTree = pickFiles( path.join( slcomponentsPath, 'vendor' ), {
            srcDir: '/',
            files: [
                'ember-list-view/list-view.min.js',
                'moment/min/moment.min.js',
                'twix/bin/twix.min.js',
                'Velocity.js/jquery.velocity.min.js',
                'emberui/dist/named-amd/emberui.js',
                'antiscroll/antiscroll.js',
                'jquery-mousewheel/jquery.mousewheel.js',
                'ember-table/dist/ember-table.min.js',
                'ember-addons.bs_for_ember/dist/js/bs-core.min.js',
                'ember-addons.bs_for_ember/dist/js/bs-nav.min.js',
                'font-awesome/css/font-awesome.min.css'
            ],
            destDir: 'sl-components'
        });

        return vendorTree;
    } else if ( name === 'app' ) {
        appTree = path.join( 'node_modules', 'sl-components', 'app' );
        return unwatchedTree( appTree );
    }
};

SlComponents.prototype.included = function included( app ) {
    this.app = app;

    // Ember UI dependencies and library
    this.app.import( 'vendor/sl-components/ember-list-view/list-view.min.js' );
    this.app.import( 'vendor/sl-components/moment/min/moment.min.js' );
    this.app.import( 'vendor/sl-components/twix/bin/twix.min.js' );
    this.app.import( 'vendor/sl-components/Velocity.js/jquery.velocity.min.js' );
    this.app.import( 'vendor/sl-components/emberui/dist/named-amd/emberui.js', {
        exports: {
            'emberui': [
                'default'
            ]
        }
    });

    // Ember Table dependencies and library
    this.app.import( 'vendor/sl-components/antiscroll/antiscroll.js' );
    this.app.import( 'vendor/sl-components/jquery-mousewheel/jquery.mousewheel.js' );
    this.app.import( 'vendor/sl-components/ember-table/dist/ember-table.min.js' );

    // Bootstrap for Ember library components
    this.app.import( 'vendor/sl-components/ember-addons.bs_for_ember/dist/js/bs-core.min.js' );
    this.app.import( 'vendor/sl-components/ember-addons.bs_for_ember/dist/js/bs-nav.min.js' );

    this.app.import( 'vendor/sl-components/font-awesome/css/font-awesome.min.css' );
};

module.exports = SlComponents;