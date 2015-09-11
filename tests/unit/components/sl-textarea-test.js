import { moduleForComponent, test } from 'ember-qunit';
import InputBasedMixin from 'sl-ember-components/mixins/sl-input-based';
import TooltipEnabledMixin from 'sl-ember-components/mixins/sl-tooltip-enabled';
import ComponentInputId from 'sl-ember-components/mixins/sl-component-input-id';

moduleForComponent( 'sl-textarea', 'Unit | Component | sl textarea', {
    unit: true
});

test( 'Expected Mixins are present', function( assert ) {
    assert.ok(
        InputBasedMixin.detect( this.subject() ),
        'InputBased Mixin is present'
    );

    assert.ok(
        TooltipEnabledMixin.detect( this.subject() ),
        'TooltipEnabled Mixin is present'
    );

    assert.ok(
        ComponentInputId.detect( this.subject() ),
        'ComponentInputId Mixin is present'
    );
});

test( 'Correct default property values', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'autofocus' ),
        false,
        'Default property "autofocus" is false'
    );

    assert.strictEqual(
        component.get( 'selectionDirection' ),
        'forward',
        'Default property "selectionDirection" is forward'
    );

    assert.strictEqual(
        component.get( 'selectionEnd' ),
        null,
        'Default property "selectionEnd" is null'
    );

    assert.strictEqual(
        component.get( 'selectionStart' ),
        null,
        'Default property "selectionStart" is null'
    );

    assert.strictEqual(
        component.get( 'spellcheck' ),
        'default',
        'Default property "spellcheck" is null'
    );

    assert.strictEqual(
        component.get( 'value' ),
        null,
        'Default property "value" is null'
    );

    assert.strictEqual(
        component.get( 'wrap' ),
        'soft',
        'Default property "wrap" is null'
    );
});
