import { moduleForComponent, test } from 'ember-qunit';
import TooltipEnabledMixin from 'sl-ember-components/mixins/sl-tooltip-enabled';

moduleForComponent( 'sl-checkbox', 'Unit | Component | sl checkbox', {
    unit: true
});

test( 'Expected Mixins are present', function( assert ) {
    assert.ok(
        TooltipEnabledMixin.detect( this.subject() ),
        'TooltipEnabled Mixin is present'
    );
});

test( 'Default values are correct', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'checked' ),
        false,
        '"checked" property false by default'
    );

    assert.strictEqual(
        component.get( 'disabled' ),
        false,
        '"disabled" property is text by default'
    );

    assert.strictEqual(
        component.get( 'label' ),
        null,
        '"label" property false by default'
    );

    assert.strictEqual(
        component.get( 'name' ),
        null,
        '"name" property is "name" by default'
    );
});
