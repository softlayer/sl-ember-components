import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent(
    'sl-calendar-month',
    'Unit | Component | sl calendar month', {
        unit: true
    }
);

test( 'Default property values', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'active' ),
        false,
        'active is false by default'
    );

    assert.strictEqual(
        component.get( 'month' ),
        null,
        'month is null by default'
    );
});

//need to re-visit this one
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
