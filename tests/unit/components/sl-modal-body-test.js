import ClassPrefix from 'sl-ember-components/mixins/class-prefix';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-modal-body', 'Unit | Component | sl modal body', {
    unit: true
});

test( 'Default property values', function( assert ) {
    assert.ok(
        ClassPrefix.detect( this.subject() ),
        'ClassPrefix Mixin is present'
    );
});

test( 'Default property values are set correctly', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'componentClass' ),
        'modal-body',
        'componentClass is set to modal-body'
    );
});
