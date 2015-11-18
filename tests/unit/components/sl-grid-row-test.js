import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-grid-row', 'Unit | Component | sl grid row', {
    unit: true
});

test( 'Default property values', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'tagName' ),
        'tr',
        'tagName is tr'
    );

    assert.strictEqual(
        component.get( 'row' ),
        null,
        'row is null'
    );
});

test( 'Click event triggers rowClick action with row record', function( assert ) {
    const row = { testValue: true };

    this.subject({
        row,
        rowClick: 'test',

        targetObject: {
            test( passedRow ) {
                assert.equal(
                    passedRow,
                    row,
                    'Row record passed from rowClick is expected value'
                );
            }
        }
    });

    this.$().trigger( 'click' );
});
