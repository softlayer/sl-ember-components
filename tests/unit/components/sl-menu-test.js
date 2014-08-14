import Ember from 'ember';
import { test, moduleFor, moduleForComponent } from 'ember-qunit';
import SlMenu from 'sl-components/components/sl-menu';

var clickCounter = 0,
    modelStub = Ember.Object.create({
            label: null,
            pages: Ember.A([
                Ember.Object.create({ label: 'Top Level A', pages: Ember.A([
                    Ember.Object.create({ label: 'Option A1', emberAction: 'MyAction' }),
                    Ember.Object.create({ label: 'Option A2', emberAction: function(){ clickCounter = 0; clickCounter++; }}),
                    Ember.Object.create({ label: 'Option A3', emberAction: { actionName: 'MyAction', data: { name: 'Joe' }}}),
                    Ember.Object.create({ label: 'Sub Menu A3', pages: Ember.A([
                        Ember.Object.create({ label: 'Sub Sub Menu A3.1' }),
                        Ember.Object.create({ label: 'Sub Sub Menu A3.2' }),
                        Ember.Object.create({ label: 'Sub Sub Menu A3.3' }),
                        Ember.Object.create({ label: 'Sub Sub Menu A3.4' })
                    ])})
                ])}),
                Ember.Object.create({ label: 'Top Level B' }),
                Ember.Object.create({ label: 'Top Level C' })
            ])
        });

moduleForComponent( 'sl-menu', 'Component: Sl-Menu' );

test( 'Menu creates correct DOM structure', function() {
    var component = this.subject({
        menu: modelStub
    });
    var $component = this.append();

    expect( 1 );
    equal( $component.find( 'li' ).length, 12 );
});

test( 'Menu properly hides all but root list', function() {
    var component = this.subject({
        menu: modelStub
    });
    var $component = this.append();

    expect( 1 );
    equal( $component.find( 'li:visible' ).length, 4 );
});

test( 'Menu shows child on hover', function() {
    var component = this.subject({
        menu: modelStub
    });
    var $component = this.append();

    expect( 2 );
    equal( $component.find( 'li:visible' ).length, 4 );

    $component.find( 'li:visible' ).first().mouseenter();
    equal( $component.find( 'li:visible' ).length, 8 );
});

test( 'Menu closes child on mouse exit', function() {
    var component = this.subject({
        menu: modelStub
    });
    var $component = this.append();

    expect( 3 );
    equal( $component.find( 'li:visible' ).length, 4 );

    var child = $component.find( 'li:visible' ).first();

    child.mouseenter();
    equal( $component.find( 'li:visible' ).length, 8 );

    child.mouseleave();
    equal( $component.find( 'li:visible' ).length, 4 );
});

test( 'Menu click supports native function', function() {
    var component = this.subject({
        menu: modelStub
    });

    var $component = this.append();

    var child = $component.find( 'li:visible' ).first();
    child.mouseenter();
    var targetMenuItem = child.find( 'li:visible' )[1];

    expect( 2 );

    equal( clickCounter, 0 );
    targetMenuItem.click();
    equal( clickCounter, 1 );
});

test( 'Menu click supports action names', function() {
    var component = this.subject({
        menu: modelStub
    });

    var $component = this.append();

    var child = $component.find( 'li:visible' ).first();
    child.mouseenter();
    var targetMenuItem = child.find( 'li:visible' )[0];

    expect( 1 );
    var targetObject = {
        actionHandler: function( actionName ) {
            equal( actionName, 'MyAction' );
        }
    };

    component.set( 'actionInitiated', 'actionHandler' );
    component.set( 'targetObject', targetObject );

    targetMenuItem.click();
});

test( 'Menu click supports action names with supporting data', function() {
    var component = this.subject({
        menu: modelStub
    });

    var $component = this.append();

    var child = $component.find( 'li:visible' ).first();
    child.mouseenter();
    var targetMenuItem = child.find( 'li:visible' )[2];

    expect( 2 );
    var targetObject = {
        actionHandler: function( actionName, data ) {
            equal( actionName, 'MyAction' );
            equal( data.name, 'Joe' );
        }
    };

    component.set( 'actionInitiated', 'actionHandler' );
    component.set( 'targetObject', targetObject );

    targetMenuItem.click();
});

test( 'Menu selection fires proper selection event', function() {
    var component = this.subject({
        menu: modelStub
    });

    var $component = this.append();

    var selectionCounter = 0;
    var targetObject = {
        selectionHandler: function( path ) {
            selectionCounter++;
        }
    };

    component.set( 'selectionMade', 'selectionHandler' );
    component.set( 'targetObject', targetObject );

    var child = $component.find( 'li:visible' ).first();
    var $child = child;
    $child.mouseenter();
    $child.click();
    var child2 = child.find( 'li:visible' )[3];
    var $child2 = $( child2 );
    $child2.mouseenter();
    $child2.click();
    var child3 = $child2.find( 'li:visible' )[0];
    var $child3 = $( child3 );
    $child3.mouseenter();
    $child3.click();

    equal( selectionCounter, 3 );
});