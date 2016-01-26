import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent(
    'sl-calendar-month',
    'Unit | Component | sl calendar month', {
        unit: true
    }
);

test( 'Default state is inactive', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'active' ),
        false,
        'Component is not active'
    );

    assert.strictEqual(
        this.$().hasClass( 'selected' ),
        false,
        'Component does not have "selected" class'
    );
});

test( 'Component has "month" class by default', function( assert ) {
    assert.ok(
        this.$().hasClass( 'month' ),
        '"month" class is present'
    );
});

test( 'Active state is set correctly', function( assert ) {
    const component = this.subject({ active: true });

    assert.ok(
        component.get( 'active' ),
        'Component is active'
    );

    assert.ok(
        this.$().hasClass( 'selected' ),
        '"selected" class is present'
    );
});

test( 'Action binding sends action with month', function( assert ) {
    this.subject({
        action: 'test',
        month: 6,
        targetObject: {
            test( month ) {
                assert.strictEqual(
                    month,
                    6,
                    'Test action fired with expected month'
                );
            }
        }
    });

    assert.expect( 1 );

    this.$().trigger( 'click' );
});
