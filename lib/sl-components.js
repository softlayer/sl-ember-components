'use strict';

var fs   = require( 'fs' );
var path = require( 'path' );

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
    var treePath = path.join( 'node_modules', 'sl-components', name + '-addon' );

    if ( fs.existsSync( treePath )) {
        return unwatchedTree( treePath );
    }
};

SlComponents.prototype.included = function included( app ) {
    this.app = app;

    // Ember UI dependencies and library
    this.app.import( 'vendor/ember-list-view/list-view.min.js' );
    this.app.import( 'vendor/moment/min/moment.min.js' );
    this.app.import( 'vendor/twix/bin/twix.min.js' );
    this.app.import( 'vendor/Velocity.js/jquery.velocity.min.js' );
    this.app.import( 'vendor/emberui/dist/named-amd/emberui.js', {
        exports: {
            'emberui': [
                'default'
            ]
        }
    });

    // Ember Table dependencies and library
    this.app.import( 'vendor/antiscroll/antiscroll.js' );
    this.app.import( 'vendor/jquery-mousewheel/jquery.mousewheel.js' );
    this.app.import( 'vendor/ember-table/dist/ember-table.min.js' );

    // Bootstrap for Ember library components
    this.app.import( 'vendor/ember-addons.bs_for_ember/dist/js/bs-core.min.js' );
    this.app.import( 'vendor/ember-addons.bs_for_ember/dist/js/bs-nav.min.js' );

    this.app.import( 'vendor/font-awesome/css/font-awesome.min.css' );
};

module.exports = SlComponents;
