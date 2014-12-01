import Ember from 'ember';
import { test, moduleFor, moduleForComponent } from 'ember-qunit';
import startApp from '../../helpers/start-app';
import { contains } from '../../helpers/sl/synchronous';

var App;

moduleForComponent( 'sl-tab-panel', 'Unit - component:sl-tab-panel', {
    needs: [ 'component:sl-tab-pane' ],

    setup: function() {
        App = startApp();
    },

    teardown: function() {
        Ember.run( App, App.destroy );
    }
});

test( 'Expected default classes are applied', function() {
    var $component = this.append();

    contains( $component.prop( 'class' ), [ 'sl-tab-panel', 'sl-align-tabs-left' ], 'Default classes are not correctly applied' );
});

// @TODO 5th test - selector does not return results when there's an expectation that it should (in test environment)
test( 'setupTabs() does so correctly', function() {
    var component  = this.subject({
            template: Ember.Handlebars.compile(
                '{{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="C" name="c"}}C content{{/sl-tab-pane}}'
            )
        });

    this.append();

    // All tabs are rendered
    equal( $('.tab[data-tab-name]' ).length, 3 );

    // Tab content is rendered
    equal( $('.sl-tab-pane[data-tab-name]').length, 3 );
    equal( $.trim( $('.sl-tab-pane[data-tab-name="b"]').text() ), 'B content' );

    // First tab is active
    equal( $('.tab.active[data-tab-name="a"]').length, 1 );
    equal( $('.sl-tab-pane.active[data-tab-name="a"]').length, 1 );
});

test( 'ARIA roles are implemented', function() {
    var component  = this.subject({
            template : Ember.Handlebars.compile(
                '{{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="C" name="c"}}C content{{/sl-tab-pane}}'
            )
        });

    this.append();

    equal( $('.nav-tabs[role="tablist"]').length, 1 );
    equal( $('.tab a[role="tab"]').length, 3 );
});

// @TODO 2nd test - selector does not return results when there's an expectation that it should (in test environment)
test( '"initialTabName" property is respected', function() {
    var component  = this.subject({
            initialTabName : 'b',
            template       : Ember.Handlebars.compile(
                '{{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="C" name="c"}}C content{{/sl-tab-pane}}'
            )
        });

    this.append();

    equal( $('.tab.active[data-tab-name="b"]').length, 1 );
    equal( $('.sl-tab-pane.active[data-tab-name="b"]').length, 1 );
});

test( '"alignTabs" property is respected', function() {
    var component  = this.subject({
            alignTabs : 'right'
        }),
        $component = this.append();

    contains( $component.prop( 'class' ), 'sl-align-tabs-right', 'Tab alignment class not applied' );
});

test( 'Tabs display in expected order when "alignTabs" property is not specified', function() {
    var component  = this.subject({
            template: Ember.Handlebars.compile(
                '{{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="C" name="c"}}C content{{/sl-tab-pane}}'
            )
        }),
        $component = this.append(),
        labels     = [];

    $('.tab[data-tab-name]').each( function() {
        labels.push( $( this ).attr('data-tab-name') );
    });

    deepEqual( labels, [ 'a', 'b', 'c' ] );
});

// @TODO - Determine how tabs are visually displayed different than DOM order and test appropriately
test( 'Tabs display in expected order when "alignTabs" property is set to "right"', function() {
    var component  = this.subject({
            alignTabs : 'right',
            template  : Ember.Handlebars.compile(
                '{{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="C" name="c"}}C content{{/sl-tab-pane}}'
            )
        }),
        $component = this.append(),
        labels     = [];

    $('.tab[data-tab-name]').each( function() {
        labels.push( $( this ).attr('data-tab-name') );
    });

    deepEqual( labels, [ 'c', 'b', 'a' ] );
});

// @TODO 2nd test - selector does not return results when there's an expectation that it should (in test environment)
test( 'Clicking tab changes active tab', function() {
    var component  = this.subject({
            template : Ember.Handlebars.compile(
                '{{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="C" name="c"}}C content{{/sl-tab-pane}}'
            )
        }),
        $component = this.append();

    click( $('.tab[data-tab-name="b"] a') );

    andThen( function() {
        equal( $('.tab.active[data-tab-name="b"]').length, 1 );
        equal( $('.sl-tab-pane.active[data-tab-name="b"]').length, 1 );
    });
});

// @TODO height value does not change when expected to (in test environment)
test( 'Tab content height is adjusted after new tab selection', function() {
    var component  = this.subject({
            template : Ember.Handlebars.compile(
                '{{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="B" name="b"}}B content<br><br>Taller content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="C" name="c"}}C content{{/sl-tab-pane}}'
            )
        }),
        $component    = this.append(),
        initialHeight = $('.tab-content').height();

    click( $('.tab[data-tab-name="b"] a') );

    andThen( function() {
        notEqual( initialHeight, $('.tab-content').height() );
    });
});

test( '"activatePane" animates as expected', function() {
});

// @TODO - fadeOut is not firing (in test environment)
test( '"deactivatePane" animates as expected', function() {
});

// @TODO - fadeOut is not firing (in test environment)
test( '"deactivatePane" calls specified callback', function() {
});
