var mergeTrees = require( 'broccoli-merge-trees' );

var EmberApp = require( 'ember-cli/lib/broccoli/ember-app' );

var app = new EmberApp({
});

// Ember UI dependencies and library
app.import( 'vendor/ember-list-view/list-view.min.js' );
app.import( 'vendor/moment/min/moment.min.js' );
app.import( 'vendor/twix/bin/twix.min.js' );
app.import( 'vendor/Velocity.js/jquery.velocity.min.js' );
app.import( 'vendor/emberui/dist/named-amd/emberui.js', {
    exports: {
        'emberui': [
            'default'
        ]
    }
});

// Ember Table dependencies and library
app.import( 'vendor/antiscroll/antiscroll.js' );
app.import( 'vendor/jquery-mousewheel/jquery.mousewheel.js' );
app.import( 'vendor/ember-table/dist/ember-table.min.js' );

// Bootstrap for Ember library components
app.import( 'vendor/ember-addons.bs_for_ember/dist/js/bs-core.min.js' );
app.import( 'vendor/ember-addons.bs_for_ember/dist/js/bs-nav.min.js' );

app.import( 'vendor/font-awesome/css/font-awesome.min.css' );

module.exports = app.toTree();
