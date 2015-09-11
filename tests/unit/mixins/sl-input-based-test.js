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

test( 'Standard values are false by default', function( assert ) {
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
