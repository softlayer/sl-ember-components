import Ember from 'ember';
import mixinUnderTest from 'sl-ember-components/mixins/sl-component-input-id';
import { module, test } from 'qunit';

module( 'Unit | Mixin | sl component input id' );

test( 'Can be successfully mixed', function( assert ) {
    const testObject = Ember.Object.extend( mixinUnderTest );
    const subject = testObject.create();

    assert.ok(
        subject,
        'sl-component-input-id mixin is present'
    );
});

test( 'inputId is set on component', function( assert ) {
    const component = Ember.Component.extend( mixinUnderTest ).create();

    assert.strictEqual(
        component.get( 'inputId' ),
        component.get( 'elementId' ) + '-input'
    );
});

test( 'inputId value is preserved if it is already set', function( assert ) {
    const id = 'preset-id';
    const component = Ember.Component.extend( mixinUnderTest ).create( {
        inputId: id
    });

    assert.strictEqual(
        component.get( 'inputId' ),
        id
    );
});
