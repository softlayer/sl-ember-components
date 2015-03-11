import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-tab-panel', 'Unit - component: sl-tab-panel', {
    needs: [ 'component:sl-tab-pane', 'template:components/sl-tab-pane' ]
});

test( 'Expected default classes are applied', function( assert ) {
    var $component;

    this.subject();
    $component = this.render();

    assert.ok( $component.hasClass( 'sl-tab-panel' ), 'Has class "sl-tab-panel"' );
    assert.ok( $component.hasClass( 'sl-align-tabs-left' ), 'Has class "sl-align-tabs-left"' );
});

test( 'setupTabs() does so correctly', function( assert ) {
    var component = this.subject({
            template: Ember.Handlebars.compile(
                '{{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="C" name="c"}}C content{{/sl-tab-pane}}'
            )
        }),
        $component = this.render(),
        done       = assert.async();

    assert.expect( 5 );

    component.paneFor( 'a' ).queue( function() {
        // All tabs are rendered
        assert.equal( $component.find( '.tab[data-tab-name]' ).length, 3 );

        // Tab content is rendered
        assert.equal( $component.find( '.sl-tab-pane[data-tab-name]' ).length, 3 );
        assert.equal( Ember.$.trim( $component.find( '.sl-tab-pane[data-tab-name="b"]' ).text() ), 'B content' );

        // First tab is active
        assert.equal( $component.find( '.tab.active[data-tab-name="a"]' ).length, 1 );
        assert.equal( $component.find( '.sl-tab-pane.active[data-tab-name="a"]' ).length, 1 );

        done();
    });
});

test( 'ARIA roles are implemented', function( assert ) {
    var $component;

    this.subject({
        template : Ember.Handlebars.compile(
            '{{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
            '{{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}' +
            '{{#sl-tab-pane label="C" name="c"}}C content{{/sl-tab-pane}}'
        )
    });
    $component = this.render();

    assert.equal( $component.find( '.nav-tabs[role="tablist"]' ).length, 1 );
    assert.equal( $component.find( '.tab a[role="tab"]' ).length, 3 );
});

test( '"initialTabName" property is respected', function( assert ) {
    var component  = this.subject({
            initialTabName : 'b',
            template       : Ember.Handlebars.compile(
                '{{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="C" name="c"}}C content{{/sl-tab-pane}}'
            )
        }),
        $component = this.render(),
        done       = assert.async();

    assert.expect( 2 );

    component.paneFor( 'b' ).queue( function() {
        assert.equal( $component.find( '.tab.active[data-tab-name="b"]' ).length, 1 );
        assert.equal( $component.find( '.sl-tab-pane.active[data-tab-name="b"]' ).length, 1 );

        done();
    });
});

test( '"alignTabs" property is respected', function( assert ) {
    var $component;

    this.subject({
        alignTabs : 'right'
    });
    $component = this.render();

    assert.ok( $component.hasClass( 'sl-align-tabs-right' ), 'Tab alignment class is applied' );
});

test( 'Tabs display in expected order when "alignTabs" property is not specified', function( assert ) {
    var labels = [],
        $component;

    this.subject({
        template: Ember.Handlebars.compile(
            '{{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
            '{{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}' +
            '{{#sl-tab-pane label="C" name="c"}}C content{{/sl-tab-pane}}'
        )
    });
    $component = this.render();

    $component.find( '.tab[data-tab-name]' ).each( function() {
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
        }),
        $component = this.render(),
        done       = assert.async();

    assert.expect( 2 );

    $component.find( '.tab[data-tab-name="b"] a' ).trigger( 'click' );

    component.paneFor( 'a' ).queue( function() {
        component.paneFor( 'b' ).queue( function() {
            assert.equal( $component.find( '.tab.active[data-tab-name="b"]' ).length, 1 );
            assert.equal( $component.find( '.sl-tab-pane.active[data-tab-name="b"]' ).length, 1 );

            done();
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
        $component = this.render(),
        done       = assert.async(),
        initialHeight;

    assert.expect( 1 );

    component.paneFor( 'a' ).queue( function() {
        initialHeight = $component.find( '.tab-content' ).height();
    });

    component.paneFor( 'b' ).queue( function() {
        assert.notEqual( initialHeight, $component.find( '.tab-content' ).height() );

        done();
    });

    $component.find( '.tab[data-tab-name="b"] a' ).trigger( 'click' );
});

test( '"activatePane" animates as expected', function( assert ) {
    var component = this.subject({
            template: Ember.Handlebars.compile(
                '{{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}'
            )
        }),
        spy  = sinon.spy( $.prototype, 'fadeIn' ),
        done = assert.async();

    this.render();

    assert.expect( 1 );

    component.paneFor( 'a' ).queue( function() {
        assert.equal( spy.calledOnce, true );
        done();
    });
});

test( '"deactivatePane" animates as expected', function( assert ) {
    var component = this.subject({
            template : Ember.Handlebars.compile(
                '{{#sl-tab-pane label="A" name="a"}}A content{{/sl-tab-pane}}' +
                '{{#sl-tab-pane label="B" name="b"}}B content{{/sl-tab-pane}}'
            )
        }),
        spy        = sinon.spy( $.prototype, 'fadeOut' ),
        $component = this.render(),
        done       = assert.async();

    assert.expect( 1 );

    $component.find( '.tab[data-tab-name="b"] a' ).trigger( 'click' );

    component.paneFor( 'a' ).queue( function() {
        component.paneFor( 'b' ).queue( function() {
            assert.equal( spy.calledOnce, true );
            done();
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
        callback = sinon.spy(),
        done     = assert.async();

    this.render();

    assert.expect( 1 );

    component.deactivatePane( callback );

    component.paneFor( 'a' ).queue( function() {
        assert.equal( callback.calledOnce, true );
        done();
    });
});
