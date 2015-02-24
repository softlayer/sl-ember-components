import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import startApp from '../../helpers/start-app';
import SlMenu from 'sl-ember-components/components/sl-menu';

var clickCounter = 0,
    modelStub = {
        label: null,
        pages: [
            { label: 'Top Level A', pages: [
                { label: 'Option A1', action: 'MyAction' },
                { label: 'Option A2', action: function() { clickCounter = 0; clickCounter++; }},
                { label: 'Option A3', action: { actionName: 'MyAction', data: { name: 'Joe' }}},
                { label: 'Sub Menu A3', pages: [
                    { label: 'Sub Sub Menu A3.1' },
                    { label: 'Sub Sub Menu A3.2' },
                    { label: 'Sub Sub Menu A3.3' },
                    { label: 'Sub Sub Menu A3.4' }
                ]}
            ]},
            { label: 'Top Level B' },
            { label: 'Top Level C' }
        ]
    },
    App;

moduleForComponent( 'sl-menu', 'Unit - component: sl-menu', {
    beforeEach: function() {
        App = startApp();
    },

    afterEach: function() {
        Ember.run( App, App.destroy );
    }
});

test( '"children" property is an empty array on initialization', function( assert ) {
    var component  = this.subject();

    this.render();

    assert.equal( Ember.typeOf( component.get( 'children' ) ), 'array', 'Is array' );
    assert.equal( component.get( 'children' ).length, 0, 'Array is empty' );
});

test( 'Menu creates correct DOM structure', function( assert ) {
    var component  = this.subject({ menu: modelStub }),
        $component = this.render();

    assert.equal( $component.find( 'li' ).length, 11 );
});

test( 'Menu properly hides all but root list', function( assert ) {
    var component  = this.subject({ menu: modelStub }),
        $component = this.render();

    assert.equal( $component.find( 'li:visible' ).length, 3 );
});

test( 'Menu shows child on hover', function( assert ) {
    var component  = this.subject({ menu: modelStub }),
        $component = this.render();

    assert.equal( $component.find( 'li:visible' ).length, 3 );

    $component.find( 'li:visible' ).first().mouseenter();
    assert.equal( $component.find( 'li:visible' ).length, 7 );
});

test( 'Menu closes child on mouse exit', function( assert ) {
    var component  = this.subject({ menu: modelStub }),
        $component = this.render(),
        child      = $component.find( 'li:visible' ).first();

    assert.equal( $component.find( 'li:visible' ).length, 3 );

    child.mouseenter();
    assert.equal( $component.find( 'li:visible' ).length, 7 );

    child.mouseleave();
    assert.equal( $component.find( 'li:visible' ).length, 3 );
});

test( 'Menu click supports native function', function( assert ) {
    var component  = this.subject({ menu: modelStub }),
        $component = this.render(),
        child      = $component.find( 'li:visible' ).first(),
        spy        = sinon.spy();

    modelStub.pages[ 0 ].pages[ 1 ][ 'action' ] = spy;

    triggerEvent( child, 'mouseenter' );
    click( child.find( 'li:visible' )[ 1 ] );

    andThen( function() {
        assert.equal( spy.calledOnce, true );
    });
});

test( 'Menu click supports action names', function( assert ) {
    var component    = this.subject({ menu: modelStub }),
        $component   = this.render(),
        child        = $component.find( 'li:visible' ).first(),
        spy          = sinon.spy(),
        targetObject = {
            actionHandler: spy
        };

    component.set( 'actionInitiated', 'actionHandler' );
    component.set( 'targetObject', targetObject );

    triggerEvent( child, 'mouseenter' );

    click( child.find( 'li:visible' )[ 0 ] );

    andThen( function() {
        assert.equal( spy.args[0][0], 'MyAction' );
    });
});

test( 'Menu click supports action names with supporting data', function( assert ) {
    var component    = this.subject({ menu: modelStub }),
        $component   = this.render(),
        child        = $component.find( 'li:visible' ).first(),
        spy          = sinon.spy(),
        targetObject = {
            actionHandler: spy
        };

    component.set( 'actionInitiated', 'actionHandler' );
    component.set( 'targetObject', targetObject );

    triggerEvent( child, 'mouseenter' );

    click( child.find( 'li:visible' )[ 2 ] );

    andThen( function() {
        assert.equal( spy.args[0][0], 'MyAction' );
        assert.equal( spy.args[0][1]['name'], 'Joe' );
    });
});

test( 'Menu selection fires proper selection event', function( assert ) {
    var component        = this.subject({ menu: modelStub }),
        $component       = this.render(),
        selectionCounter = 0,
        targetObject = {
            selectionHandler: function( path ) {
                selectionCounter++;
            }
        },
        child1,
        child2,
        child3;

    component.set( 'selectionMade', 'selectionHandler' );
    component.set( 'targetObject', targetObject );

    child1 = $component.find( 'li:visible' ).first();
    child1.trigger( 'mouseenter' );
    child1.trigger( 'click' );

    child2 = child1.find( 'li:visible' ).last();
    child2.trigger( 'mouseenter' );
    child2.trigger( 'click' );

    child3 = child2.find( 'li:visible' ).first();
    child3.trigger( 'mouseenter' );
    child3.trigger( 'click' );

    assert.equal( selectionCounter, 3 );
});
