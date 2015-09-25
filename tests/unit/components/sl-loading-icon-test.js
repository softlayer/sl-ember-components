import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-loading-icon', 'Unit | Component | sl loading icon', {
    unit: true
});

test( 'Default property values are set', function( assert ) {
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

test( 'Inverse value is supported', function( assert ) {
    const component = this.subject({ inverse: true });

    assert.strictEqual(
        component.get( 'inverse' ),
        true,
        '"inverse" property is set to true, thus suppported'
    );
});

test( 'tagName value is supported', function( assert ) {
    const component = this.subject({ tagName: 'a' });

    assert.strictEqual(
        component.get( 'tagName' ),
        'a',
        '"tagName" property is set to "a", thus suppported'
    );
});