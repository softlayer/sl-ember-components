import Ember from 'ember';
import ClassPrefix from 'sl-ember-components/mixins/class-prefix';
import InputBasedMixin from 'sl-ember-components/mixins/sl-input-based';
import{ moduleForComponent, test } from 'ember-qunit';
import globalLibraries from '../../helpers/sl/synchronous/global-libraries';

moduleForComponent( 'sl-radio', 'Unit | Component | sl radio', {
    unit: true
});

test( 'Expected Mixins are present', function( assert ) {
    assert.ok(
        ClassPrefix.detect( this.subject() ),
        'ClassPrefix Mixin is present'
    );

    assert.ok(
        InputBasedMixin.detect( this.subject() ),
        'InputBased Mixin is present'
    );
});

test( 'Default property values', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'componentClass' ),
        'radio',
        'ComponentClass is set to radio'
    );

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

test( 'There are no references to Ember.$, $ or jQuery', function( assert ) {
    globalLibraries.setupSpies();

    const component = this.subject();

    this.render();

    globalLibraries.triggerEvents( component );

    assert.notOk(
        globalLibraries.called(),
        'Global libraries are not referenced in component'
    );

    globalLibraries.restoreSpies();
});
