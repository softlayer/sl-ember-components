import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import InputBasedMixin from 'sl-ember-components/mixins/sl-input-based';
import TooltipEnabledMixin from 'sl-ember-components/mixins/sl-tooltip-enabled';
import globalLibraries from '../../helpers/sl/synchronous/global-libraries';

moduleForComponent( 'sl-checkbox', 'Unit | Component | sl checkbox', {
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
});

test( 'Default property values', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'checked' ),
        false,
        '"checked" property is false by default'
    );

    assert.strictEqual(
        component.get( 'label' ),
        null,
        '"label" property is null by default'
    );

    assert.strictEqual(
        component.get( 'tagName' ),
        'div',
        'tagName is "div" in default state'
    );
});

test( 'checkboxType property sets relevant class', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'checkboxType' ),
        'checkbox',
        'checkboxType defaults to "checkbox"'
    );

    Ember.run( () => {
        component.set( 'inline', true );
    });

    assert.strictEqual(
        component.get( 'checkboxType' ),
        'checkbox-inline',
        'checkboxType is inline'
    );
});

test( 'Inline property changes tagName', function( assert ) {
    const component = this.subject({
        inline: true
    });

    assert.strictEqual(
        component.get( 'tagName' ),
        'label',
        'tagName is "label" when component is inline'
    );
});

test( 'Dependent keys are correct', function( assert ) {
    const component = this.subject();

    const checkboxTypeDependentKeys = [
        'inline'
    ];

    assert.deepEqual(
        component.checkboxType._dependentKeys,
        checkboxTypeDependentKeys,
        'Dependent keys are correct for checkboxType()'
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
