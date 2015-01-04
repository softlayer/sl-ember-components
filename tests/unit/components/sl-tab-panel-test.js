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

test( 'setupTabs() does so correctly', function() {
    expect(5);
    stop();

    var component = this.subject({
            template: Ember.Handlebars.compile(
                '{{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="C" name="c"}}C content{{/sl-tab-pane}}'
            )
        });

    this.append();

    component.paneFor( 'a' ).queue( function() {
        // All tabs are rendered
        equal( $('.tab[data-tab-name]' ).length, 3 );

        // Tab content is rendered
        equal( $('.sl-tab-pane[data-tab-name]').length, 3 );
        equal( $.trim( $('.sl-tab-pane[data-tab-name="b"]').text() ), 'B content' );

        // First tab is active
        equal( $('.tab.active[data-tab-name="a"]').length, 1 );
        equal( $('.sl-tab-pane.active[data-tab-name="a"]').length, 1 );

        start();
    });
});

test( 'ARIA roles are implemented', function() {
    var component = this.subject({
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

test( '"initialTabName" property is respected', function() {
    expect(2);
    stop();

    var component  = this.subject({
            initialTabName : 'b',
            template       : Ember.Handlebars.compile(
                '{{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="C" name="c"}}C content{{/sl-tab-pane}}'
            )
        });

    this.append();

    component.paneFor( 'b' ).queue( function() {

        equal( $('.tab.active[data-tab-name="b"]').length, 1 );
        equal( $('.sl-tab-pane.active[data-tab-name="b"]').length, 1 );

        start();
    });
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

test( 'Clicking tab changes active tab', function() {
    expect(2);
    stop();

    var component = this.subject({
            template : Ember.Handlebars.compile(
                '{{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="C" name="c"}}C content{{/sl-tab-pane}}'
            )
        });

    this.append();

    click( $('.tab[data-tab-name="b"] a') );

    component.paneFor( 'a' ).queue( function() {
        component.paneFor( 'b' ).queue( function() {
            equal( $('.tab.active[data-tab-name="b"]').length, 1 );
            equal( $('.sl-tab-pane.active[data-tab-name="b"]').length, 1 );

            start();
        });
    });
});

test( 'Tab content height is adjusted after new tab selection', function() {
    expect(1);
    stop();

    var component = this.subject({
            template : Ember.Handlebars.compile(
                '{{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="B" name="b"}}B content<br><br>Taller content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="C" name="c"}}C content{{/sl-tab-pane}}'
            )
        }),
        initialHeight;

    this.append();

    click( $('.tab[data-tab-name="b"] a') );

    component.paneFor( 'a' ).queue( function() {
        initialHeight = $('.tab-content').height();

        component.paneFor( 'b' ).queue( function() {
            notEqual( initialHeight, $('.tab-content').height() );

            start();
        });
    });
});

test( '"activatePane" animates as expected', function() {
    expect(1);
    stop();

    var component = this.subject({
            template : Ember.Handlebars.compile(
                '{{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}'
            )
        }),
        spy = sinon.spy( $.prototype, 'fadeIn' );

    this.append();

    component.paneFor( 'a' ).queue( function() {
        equal( spy.calledOnce, true );
        start();
    });
});

test( '"deactivatePane" animates as expected', function() {
    expect(1);
    stop();

    var component = this.subject({
            template : Ember.Handlebars.compile(
                '{{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}'
            )
        }),
        spy = sinon.spy( $.prototype, 'fadeOut' );

    this.append();

    click( $('.tab[data-tab-name="b"] a') );

    component.paneFor( 'a' ).queue( function() {
        component.paneFor( 'b' ).queue( function() {
            equal( spy.calledOnce, true );
            start();
        });
    });
});

test( '"deactivatePane" calls specified callback', function() {
    expect(1);
    stop();

    var component = this.subject({
            template : Ember.Handlebars.compile(
                '{{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}'
            )
        }),
        callback  = sinon.spy();

    this.append();

    component.deactivatePane( 'a', callback );

    component.paneFor( 'a' ).queue( function() {
        equal( callback.calledOnce, true );
        start();
    });
});
