import{ moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-span', 'Unit | Component | sl span', {
    unit: true
});

test( 'Default property values', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'tagName' ),
        'span',
        'Default property "tagName" is "span"'
    );

    assert.strictEqual(
        component.get( 'inverse' ),
        false,
        'Default property "inverse" is false'
    );

    assert.strictEqual(
        component.get( 'loading' ),
        false,
        'Default property "loading" is false'
    );

    assert.strictEqual(
        component.get( 'value' ),
        null,
        'Default property "value" is null'
    );
});
