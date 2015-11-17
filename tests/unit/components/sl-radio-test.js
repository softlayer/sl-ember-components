import Ember from 'ember';
import InputBasedMixin from 'sl-ember-components/mixins/sl-input-based';
import{ moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-radio', 'Unit | Component | sl radio', {
    unit: true
});

test( 'Expected Mixins are present', function( assert ) {
    assert.ok(
        InputBasedMixin.detect( this.subject() ),
        'InputBased Mixin is present'
    );
});

test( 'Default property values', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'label' ),
        null,
        'Default property "label" is null'
    );

    assert.strictEqual(
        component.get( 'tagName' ),
        'div',
        'tagName is "div" in default state'
    );

    assert.strictEqual(
        component.get( 'value' ),
        null,
        'Default property "value" is null'
    );
});

test( 'radioType property sets relevant class', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'radioType' ),
        'radio',
        'RadioType defaults to "radio"'
    );

    Ember.run( () => {
        component.set( 'inline', true );
    });

    assert.strictEqual(
        component.get( 'radioType' ),
        'radio-inline',
        'RadioType is inline'
    );
});

test( 'inline property changes tagName', function( assert ) {
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

    const radioTypeDependentKeys = [
        'inline'
    ];

    assert.deepEqual(
        component.radioType._dependentKeys,
        radioTypeDependentKeys,
        'Dependent keys are correct for radioType()'
    );
});
