import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-modal-footer', 'Unit | Component | sl modal footer', {
    unit: true
});

test( 'Default property values', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'buttonText' ),
        'Close',
        'Default buttonText is "Close"'
    );
});
