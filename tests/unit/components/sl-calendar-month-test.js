import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-calendar-month', 'Unit - component: sl-calendar-month' );

test( 'Default state is inactive', function( assert ) {
    var component  = this.subject(),
        $component = this.render();

    assert.strictEqual( component.get( 'active' ), false, 'Component is not active' );
    assert.strictEqual( $component.hasClass( 'active' ), false, 'Component does not have "active" class' );
});

test( 'Component has "month" class by default', function( assert ) {
    var $component;

    this.subject();
    $component = this.render();

    assert.ok( $component.hasClass( 'month' ), '"month" class is present' );
});

test( 'Active state is set correctly', function( assert ) {
    var component  = this.subject({ active: true }),
        $component = this.render();

    assert.ok( component.get( 'active' ), 'Component is active' );
    assert.ok( $component.hasClass( 'active' ), '"active" class is present' );
});

test( 'Action binding sends action with month', function( assert ) {
    var $component;

    this.subject({
        action: 'test',
        month: 6,
        targetObject: {
            test: function( month ) {
                assert.equal( month, 6, 'Test action fired with expected month' );
            }
        }
    });
    $component = this.render();

    assert.expect( 1 );

    $component.trigger( 'click' );
});

test( 'Short name property is invalid without month', function( assert ) {
    var component = this.subject();

    this.render();

    assert.strictEqual( component.get( 'shortName' ), 'Invalid date', 'Invalid month results in invalid shortName' );
});

test( 'Short name property is defined with valid month', function( assert ) {
    var component = this.subject({ month: 1 });

    this.render();

    assert.equal( component.get( 'shortName' ), 'Jan', 'Valid shortName with valid month' );
});
