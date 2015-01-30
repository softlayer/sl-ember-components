import Ember from 'ember';
import { test, moduleFor, moduleForComponent } from 'ember-qunit';
import startApp from '../../helpers/start-app';
import SlMenu from 'sl-ember-components/components/sl-menu';

var clickCounter = 0,
    modelStub = {
        label: null,
        pages: [
            { label: 'Top Level A', pages: [
                { label: 'Option A1', action: 'MyAction' },
                { label: 'Option A2', action: function(){ clickCounter = 0; clickCounter++; }},
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

moduleForComponent( 'sl-menu', 'Component: Sl-Menu', {
    setup: function() {
        App = startApp();
    },

    teardown: function() {
        Ember.run( App, App.destroy );
    }
});

test( 'Menu creates correct DOM structure', function() {
    var component = this.subject({ menu: modelStub }),
        $component = this.append();

    expect( 1 );

    equal( $component.find( 'li' ).length, 11 );
});

test( 'Menu properly hides all but root list', function() {
    var component = this.subject({ menu: modelStub }),
        $component = this.append();

    expect( 1 );

    equal( $component.find( 'li:visible' ).length, 3 );
});

test( 'Menu shows child on hover', function() {
    var component = this.subject({ menu: modelStub }),
        $component = this.append();

    expect( 2 );

    equal( $component.find( 'li:visible' ).length, 3 );

    $component.find( 'li:visible' ).first().mouseenter();
    equal( $component.find( 'li:visible' ).length, 7 );
});

test( 'Menu closes child on mouse exit', function() {
    var component = this.subject({ menu: modelStub }),
        $component = this.append(),
        child = $component.find( 'li:visible' ).first();

    expect( 3 );

    equal( $component.find( 'li:visible' ).length, 3 );

    child.mouseenter();
    equal( $component.find( 'li:visible' ).length, 7 );

    child.mouseleave();
    equal( $component.find( 'li:visible' ).length, 3 );
});

test( 'Menu click supports native function', function() {
    expect( 1 );

    var spy = sinon.spy(),
        component,
        $component,
        child;

    modelStub.pages[0].pages[1]['action'] = spy;

    component = this.subject({ menu: modelStub });

    $component = this.append();

    child = $component.find( 'li:visible' ).first();

    triggerEvent( child, 'mouseenter' );

    click( child.find( 'li:visible' )[ 1 ] );

    andThen( function() {
        equal( spy.calledOnce, true );
    });
});

test( 'Menu click supports action names', function() {
    var component = this.subject({ menu: modelStub }),
        $component = this.append(),
        child = $component.find( 'li:visible' ).first(),
        targetObject = {
            actionHandler: function( actionName ) {
                equal( actionName, 'MyAction' );
            }
        };

    expect( 1 );

    child.mouseenter();
    component.set( 'actionInitiated', 'actionHandler' );
    component.set( 'targetObject', targetObject );
    child.find( 'li:visible' )[ 0 ].click();
});

test( 'Menu click supports action names with supporting data', function() {
    var component = this.subject({ menu: modelStub }),
        $component = this.append(),
        child = $component.find( 'li:visible' ).first(),
        targetObject = {
            actionHandler: function( actionName, data ) {
                equal( actionName, 'MyAction' );
                equal( data.name, 'Joe' );
            }
        };

    expect( 2 );

    child.mouseenter();
    component.set( 'actionInitiated', 'actionHandler' );
    component.set( 'targetObject', targetObject );
    child.find( 'li:visible' )[ 2 ].click();
});

test( 'Menu selection fires proper selection event', function() {
    var component = this.subject({ menu: modelStub }),
        $component = this.append(),
        selectionCounter = 0,
        targetObject = {
            selectionHandler: function( path ) {
                selectionCounter++;
            }
        },
        child1,
        child2,
        child3;

    expect( 1 );

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

    equal( selectionCounter, 3 );
});
