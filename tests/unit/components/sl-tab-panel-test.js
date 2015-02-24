import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import startApp from '../../helpers/start-app';
import { contains } from '../../helpers/sl/synchronous';

var App;

moduleForComponent( 'sl-tab-panel', 'Unit - component: sl-tab-panel', {
    needs: [ 'component:sl-tab-pane' ],

    beforeEach: function() {
        App = startApp();
    },

    afterEach: function() {
        Ember.run( App, App.destroy );
    }
});

test( 'Expected default classes are applied', function( assert ) {
    var $component = this.render();

    assert.ok( contains( $component.prop( 'class' ), [ 'sl-tab-panel', 'sl-align-tabs-left' ] ), 'Default classes are not correctly applied' );
});

test( 'setupTabs() does so correctly', function( assert ) {
    var component = this.subject({
            template: Ember.Handlebars.compile(
                '{{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="C" name="c"}}C content{{/sl-tab-pane}}'
            )
        });

    assert.expect( 5 );
    this.render();
    stop();

    component.paneFor( 'a' ).queue( function() {
        // All tabs are rendered
        assert.equal( $( '.tab[data-tab-name]' ).length, 3 );

        // Tab content is rendered
        assert.equal( $( '.sl-tab-pane[data-tab-name]' ).length, 3 );
        assert.equal( $.trim( $( '.sl-tab-pane[data-tab-name="b"]' ).text() ), 'B content' );

        // First tab is active
        assert.equal( $( '.tab.active[data-tab-name="a"]' ).length, 1 );
        assert.equal( $( '.sl-tab-pane.active[data-tab-name="a"]' ).length, 1 );

        start();
    });
});

test( 'ARIA roles are implemented', function( assert ) {
    var component = this.subject({
            template : Ember.Handlebars.compile(
                '{{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="C" name="c"}}C content{{/sl-tab-pane}}'
            )
        });

    this.render();

    assert.equal( $( '.nav-tabs[role="tablist"]' ).length, 1 );
    assert.equal( $( '.tab a[role="tab"]' ).length, 3 );
});

test( '"initialTabName" property is respected', function( assert ) {
    var component  = this.subject({
            initialTabName : 'b',
            template       : Ember.Handlebars.compile(
                '{{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="C" name="c"}}C content{{/sl-tab-pane}}'
            )
        });

    assert.expect( 2 );
    stop();

    this.render();

    component.paneFor( 'b' ).queue( function() {

        assert.equal( $( '.tab.active[data-tab-name="b"]' ).length, 1 );
        assert.equal( $( '.sl-tab-pane.active[data-tab-name="b"]' ).length, 1 );

        start();
    });
});

test( '"alignTabs" property is respected', function( assert ) {
    var component  = this.subject({
            alignTabs : 'right'
        }),
        $component = this.render();

    assert.ok( contains( $component.prop( 'class' ), 'sl-align-tabs-right' ), 'Tab alignment class not applied' );
});

test( 'Tabs display in expected order when "alignTabs" property is not specified', function( assert ) {
    var component  = this.subject({
            template: Ember.Handlebars.compile(
                '{{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="C" name="c"}}C content{{/sl-tab-pane}}'
            )
        }),
        $component = this.render(),
        labels     = [];

    $( '.tab[data-tab-name]' ).each( function() {
        labels.push( $( this ).attr( 'data-tab-name' ) );
    });

    assert.deepEqual( labels, [ 'a', 'b', 'c' ] );
});

test( 'Clicking tab changes active tab', function( assert ) {
    var component = this.subject({
            template : Ember.Handlebars.compile(
                '{{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="C" name="c"}}C content{{/sl-tab-pane}}'
            )
        });

    assert.expect( 2 );
    stop();

    this.render();

    click( $( '.tab[data-tab-name="b"] a' ) );

    component.paneFor( 'a' ).queue( function() {
        component.paneFor( 'b' ).queue( function() {
            assert.equal( $( '.tab.active[data-tab-name="b"]' ).length, 1 );
            assert.equal( $( '.sl-tab-pane.active[data-tab-name="b"]' ).length, 1 );

            start();
        });
    });
});

test( 'Tab content height is adjusted after new tab selection', function( assert ) {
    var component = this.subject({
            template : Ember.Handlebars.compile(
                '{{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="B" name="b"}}B content<br><br>Taller content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="C" name="c"}}C content{{/sl-tab-pane}}'
            )
        }),
        initialHeight;

    assert.expect( 1 );
    stop();

    this.render();

    component.paneFor( 'a' ).queue( function() {
        initialHeight = $( '.tab-content' ).height();
    });

    component.paneFor( 'b' ).queue( function() {
        assert.notEqual( initialHeight, $( '.tab-content' ).height() );

        start();
    });

    click( $( '.tab[data-tab-name="b"] a' ) );
});

test( '"activatePane" animates as expected', function( assert ) {
    var component = this.subject({
            template : Ember.Handlebars.compile(
                '{{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}'
            )
        }),
        spy = sinon.spy( $.prototype, 'fadeIn' );

    assert.expect( 1 );
    stop();

    this.render();

    component.paneFor( 'a' ).queue( function() {
        assert.equal( spy.calledOnce, true );
        start();
    });
});

test( '"deactivatePane" animates as expected', function( assert ) {
    var component = this.subject({
            template : Ember.Handlebars.compile(
                '{{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}'
            )
        }),
        spy = sinon.spy( $.prototype, 'fadeOut' );

    assert.expect( 1 );
    stop();

    this.render();

    click( $( '.tab[data-tab-name="b"] a' ) );

    component.paneFor( 'a' ).queue( function() {
        component.paneFor( 'b' ).queue( function() {
            assert.equal( spy.calledOnce, true );
            start();
        });
    });
});

test( '"deactivatePane" calls specified callback', function( assert ) {
    var component = this.subject({
            template : Ember.Handlebars.compile(
                '{{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}'
            )
        }),
        callback = sinon.spy();

    assert.expect( 1 );
    stop();

    this.render();

    component.deactivatePane( callback );

    component.paneFor( 'a' ).queue( function() {
        assert.equal( callback.calledOnce, true );
        start();
    });
});
