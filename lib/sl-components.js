/* global module, require */

var mergeTrees = require( 'broccoli-merge-trees' );
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

SlComponents.prototype.included = function included( app ) {
    this.app = app;

    app.import( 'bower_components/bootstrap-datepicker/js/bootstrap-datepicker.js' );
    app.import( 'bower_components/highcharts/highcharts.js' );
    app.import({
        'development': 'bower_components/moment/moment.js',
        'production': 'bower_components/moment/min/moment-with-langs.min.js'
    });
    app.import( 'bower_components/select2/select2.min.js' );
    app.import({
        'development': 'bower_components/sl-bootstrap/dist/js/sl-bootstrap.js',
        'production': 'bower_components/sl-bootstrap/dist/js/sl-bootstrap.min.js'
    });
    app.import( 'bower_components/typeahead.js/dist/typeahead.bundle.min.js' );
};

SlComponents.prototype.postprocessTree = function ( type, workingTree ) {
    var trees = mergeTrees([
        workingTree,
        pickFiles( path.join( slComponentsPath, 'bower_components', 'fontawesome/fonts' ), {
            srcDir: '/',
            files: [
                'fontawesome-webfont.woff'
            ],
            destDir: '/fonts'
        }),
        pickFiles( path.join( slComponentsPath, 'public/assets/images' ), {
            srcDir: '/',
            files: [
                'spinner-dark.png',
                'spinner-light.png'
            ],
            destDir: '/assets/images'
        })
    ]);

    return trees;
};

SlComponents.prototype.treeFor = function treeFor( name ) {
    if ( name === 'app' ) {
        return pickFiles( path.join( slComponentsPath, 'app' ), {
            srcDir: '/',
            files: [
                'components/sl-*.js',
                'helpers/**/*.js',
                'mixins/**/*.js',
                'utils/**/*.js'
            ],
            destDir: '/'
        });
    }

    if ( name === 'styles' ) {
        return unwatchedTree( path.join( slComponentsPath, 'app/styles' ));
    }

    if ( name === 'templates' ) {
        return pickFiles( path.join( slComponentsPath, 'app/templates' ), {
            srcDir: '/',
            files: [
                'components/sl-*',
                'sl-grid/*',
                'sl-modal.hbs'
            ],
            destDir: '/'
        });
    }

    if ( name === 'bower_components' ) {
        return pickFiles( path.join( slComponentsPath, 'bower_components' ), {
            srcDir: '/',
            files: [
                'bootstrap-datepicker/less/datepicker3.less',
                'bootstrap-datepicker/js/bootstrap-datepicker.js',
                'fontawesome/less/*.less',
                'highcharts/highcharts.js',
                'moment/moment.js',
                'moment/min/moment-with-langs.min.js',
                'select2/select2.min.js',
                'sl-bootstrap/less/*.less',
                'sl-bootstrap/dist/js/sl-bootstrap.js',
                'sl-bootstrap/dist/js/sl-bootstrap.min.js',
                'typeahead.js/dist/typeahead.bundle.min.js'
            ],
            destDir: '/'
        });
    }
};

module.exports = SlComponents;
