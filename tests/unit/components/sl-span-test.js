import ClassPrefix from 'sl-ember-components/mixins/class-prefix';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-span', 'Unit | Component | sl span', {
    unit: true
});

test( 'Expected Mixins are present', function( assert ) {
    assert.ok(
        ClassPrefix.detect( this.subject() ),
        'ClassPrefix Mixin is present'
    );
});

test( 'Default property values', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'componentClass' ),
        'span',
        'ComponentClass is set to span'
    );

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
