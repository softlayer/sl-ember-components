/* global require, module */
'use strict';

var path = require( 'path' );
var pickFiles = require( 'broccoli-static-compiler' );
var slComponentsPath = path.join( 'node_modules', 'sl-components' );

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
    if ( name === 'app' ) {
        return pickFiles( path.join( slComponentsPath, 'app' ), {
            srcDir: '/',
            files: [
                'components/*.js',
                'helpers/*.js',
                'mixins/*.js'
            ],
            destDir: 'sl-components'
        });
    }

    if ( name === 'styles' ) {
        return unwatchedTree( path.join( 'app/styles' ));
    }

    if ( name == 'templates' ) {
        return pickFiles( path.join( slComponentsPath, 'app' ), {
            srcDir: '/',
            files: [
                'templates/**/*.hbs'
            ],
            destDir: 'sl-components'
        });
    }

    if ( name === 'vendor' ) {
        return pickFiles( path.join( slComponentsPath, 'vendor' ), {
            srcDir: '/',
            files: [
                'moment/min/moment-with-langs.min.js'
            ],
            destDir: 'sl-components'
        });
    }
};

SlComponents.prototype.included = function included( app ) {
    this.app = app;
};

module.exports = SlComponents;