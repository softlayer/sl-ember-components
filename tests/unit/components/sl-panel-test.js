import ComponentClassPrefix from 'sl-ember-components/mixins/sl-component-class-prefix';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-panel', 'Unit | Component | sl panel', {
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
        component.get( 'componentClass' ),
        'panel',
        'componentClass is set to panel'
    );

    assert.strictEqual(
        component.get( 'heading' ),
        null,
        'Default heading value is null'
    );

    assert.strictEqual(
        component.get( 'loading' ),
        false,
        'Default loading value is null'
    );
});
