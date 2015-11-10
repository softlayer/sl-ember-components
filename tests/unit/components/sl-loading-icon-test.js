import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-loading-icon', 'Unit | Component | sl loading icon', {
    unit: true
});

test( 'Default property values', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'inverse' ),
        false,
        '"inverse" property defaults to false'
    );

    assert.strictEqual(
        component.get( 'tagName' ),
        'span',
        '"tagName" property defaults to span'
    );
});
