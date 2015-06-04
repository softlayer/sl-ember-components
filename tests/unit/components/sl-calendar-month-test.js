import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-calendar-month', 'Unit | Component | sl-calendar-month', {
    unit: true
});

test( 'Default state is inactive', function( assert ) {
    var component = this.subject();

    assert.strictEqual(
        component.get( 'active' ),
        false,
        'Component is not active'
    );

    assert.strictEqual(
        this.$().hasClass( 'active' ),
        false,
        'Component does not have "active" class'
    );
});

test( 'Component has "month" class by default', function( assert ) {
    assert.ok( this.$().hasClass( 'month' ), '"month" class is present' );
});

test( 'Active state is set correctly', function( assert ) {
    var component = this.subject({ active: true });

    assert.ok( component.get( 'active' ), 'Component is active' );
    assert.ok( this.$().hasClass( 'active' ), '"active" class is present' );
});

test( 'Action binding sends action with month', function( assert ) {
    this.subject({
        action: 'test',
        month: 6,
        targetObject: {
            test: function( month ) {
                assert.equal( month, 6, 'Test action fired with expected month' );
            }
        }
    });

    assert.expect( 1 );

    this.$().trigger( 'click' );
});

test( 'Short name property is invalid without month', function( assert ) {
    var component = this.subject();

    assert.strictEqual(
        component.get( 'shortName' ),
        'Invalid date',
        'Invalid month results in invalid shortName'
    );
});

test( 'Short name property is defined with valid month', function( assert ) {
    var component = this.subject({ month: 1 });

    assert.equal(
        component.get( 'shortName' ),
        'Jan',
        'Valid shortName with valid month'
    );
});
