import { moduleForComponent, test } from 'ember-qunit';
import InputBasedMixin from 'sl-ember-components/mixins/sl-input-based';
import TooltipEnabledMixin from 'sl-ember-components/mixins/sl-tooltip-enabled';
import ComponentInputId from 'sl-ember-components/mixins/sl-component-input-id';
import { Wrap as WrapEnum, Direction as DirectionEnum } from 'sl-ember-components/components/sl-textarea';
import globalLibraries from '../../helpers/sl/synchronous/global-libraries';

const Direction = {
    BACKWARD: 'backward',
    FORWARD: 'forward',
    NONE: 'none'
};

const Wrap = {
    HARD: 'hard',
    SOFT: 'soft'
};

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

test( 'Default property values', function( assert ) {
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
        false,
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

    assert.deepEqual(
        WrapEnum,
        Wrap,
        'Wrap enum values are correct'
    );

    assert.deepEqual(
        DirectionEnum,
        Direction,
        'Direction enum values are correct'
    );
});

test( 'There are no references to Ember.$, $ or jQuery', function( assert ) {
    globalLibraries.setupSpies();

    const component = this.subject();

    this.render();

    globalLibraries.triggerEvents( component );

    assert.notOk(
        globalLibraries.called()
    );

    globalLibraries.restoreSpies();
});
