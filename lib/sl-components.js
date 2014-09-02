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

    app.import( 'vendor/bootstrap-datepicker/js/bootstrap-datepicker.js' );
    app.import( 'vendor/highcharts/highcharts.js' );
    app.import({
        'development': 'vendor/moment/moment.js',
        'production': 'vendor/moment/min/moment-with-langs.min.js'
    });
    app.import( 'vendor/moment-timezone/builds/moment-timezone-with-data.min.js' );
    app.import( 'vendor/select2/select2.min.js' );
    app.import({
        'development': 'vendor/sl-bootstrap/dist/js/sl-bootstrap.js',
        'production': 'vendor/sl-bootstrap/dist/js/sl-bootstrap.min.js'
    });
    app.import( 'vendor/typeahead.js/dist/typeahead.bundle.min.js' );
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

    if ( name === 'vendor' ) {
        return pickFiles( path.join( slComponentsPath, 'bower_components' ), {
            srcDir: '/',
            files: [
                'bootstrap-datepicker/less/datepicker3.less',
                'bootstrap-datepicker/js/bootstrap-datepicker.js',
                'fontawesome/less/*.less',
                'highcharts/highcharts.js',
                'moment/moment.js',
                'moment/min/moment-with-langs.min.js',
                'moment-timezone/builds/moment-timezone-with-data.min.js',
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
