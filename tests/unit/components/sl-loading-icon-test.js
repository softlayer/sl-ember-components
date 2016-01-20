import { moduleForComponent, test } from 'ember-qunit';
import ComponentClassPrefix from 'sl-ember-components/mixins/sl-component-class-prefix';

moduleForComponent( 'sl-loading-icon', 'Unit | Component | sl loading icon', {
    unit: true
});

test( 'Expected Mixins are present', function( assert ) {
    assert.ok(
        ComponentClassPrefix.detect( this.subject() ),
        'ComponentClassPrefix Mixin is present'
    );
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
