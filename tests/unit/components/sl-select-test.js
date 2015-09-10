import { moduleForComponent, test } from 'ember-qunit';
import ComponentInputId from 'sl-ember-components/mixins/sl-component-input-id';

moduleForComponent( 'sl-select', 'Unit | Component | sl select', {
    unit: true
});

test( 'Expected Mixins are present', function( assert ) {
    assert.ok(
        ComponentInputId.detect( this.subject() ),
        'ComponentInputId Mixin is present'
    );
});
