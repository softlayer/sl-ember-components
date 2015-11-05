import Ember from 'ember';
import mixinUnderTest from 'sl-ember-components/mixins/sl-input-based';
import { module, test } from 'qunit';

module( 'Unit | Mixin | sl input based' );

test( 'Successfully mixed', function( assert ) {
    const testObject = Ember.Object.extend( mixinUnderTest );
    const subject = testObject.create();

    assert.ok(
        subject
    );
});

test( 'Default values are set correctly', function( assert ) {
    const testObject = Ember.Object.extend( mixinUnderTest );
    const subject = testObject.create();

    assert.strictEqual(
        subject.get( 'disabled' ),
        false,
        'Disabled is false by default'
    );

    assert.strictEqual(
        subject.get( 'optional' ),
        false,
        'Optional is false by default'
    );

    assert.strictEqual(
        subject.get( 'name' ),
        null,
        'Name is null by default'
    );

    assert.strictEqual(
        subject.get( 'readonly' ),
        false,
        'Readonly is false by default'
    );

    assert.strictEqual(
        subject.get( 'required' ),
        false,
        'Required is false by default'
    );
});

test( 'Class name bindings contain expected bindings', function( assert ) {
    const expectedClassNameBindings = [
        'disabled',
        'optional',
        'readonly',
        'required'
    ];
    const testObject = Ember.Object.extend( mixinUnderTest );
    const subject = testObject.create();

    assert.deepEqual(
        subject.get( 'classNameBindings' ),
        expectedClassNameBindings,
        'classNameBindings contains the expected class names'
    );
});

test( 'readonlyString() returns expected value', function( assert ) {
    const testObject = Ember.Object.extend( mixinUnderTest );
    const subject = testObject.create();

    subject.set( 'readonly', true );

    assert.strictEqual(
        subject.get( 'readonlyString' ),
        'readonly',
        'readonlyString() returns expected string when "readonly" is true'
    );

    subject.set( 'readonly', false );

    assert.strictEqual(
        subject.get( 'readonlyString' ),
        null,
        'readonlyString() returns null when "readonly" is false'
    );
});

test( 'Dependent keys are correct', function( assert ) {
    const testObject = Ember.Object.extend( mixinUnderTest );
    const subject = testObject.create();

    const readonlyStringDependentKeys = [
        'readonly'
    ];

    assert.deepEqual(
        subject.readonlyString._dependentKeys,
        readonlyStringDependentKeys,
        'Dependent keys are correct for readonlyString()'
    );
});
