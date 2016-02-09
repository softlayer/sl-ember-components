import ClassPrefix from 'sl-ember-components/mixins/class-prefix';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-panel', 'Unit | Component | sl panel', {
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
