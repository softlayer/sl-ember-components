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
        component.get( 'record' ),
        null,
        'record is null'
    );
});

test( 'Click event triggers rowClick action with row record', function( assert ) {
    const record = { testValue: true };

    this.subject({
        record,
        onClick: 'test',

        targetObject: {
            test( passedRow ) {
                assert.equal(
                    passedRow.record,
                    record,
                    'Row record passed from onClick is expected value'
                );
            }
        }
    });

    this.$().trigger( 'click' );
});
