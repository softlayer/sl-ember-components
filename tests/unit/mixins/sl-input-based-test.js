import Ember from 'ember';
import mixinUnderTest from 'sl-ember-components/mixins/sl-input-based';;

module( 'Unit | Mixin | sl input based' );

test( 'Successfully mixed', function( assert ) {
    let testObject = Ember.Object.extend( mixinUnderTest );
    let subject = testObject.create();

    assert.ok( subject );
});

test( 'Disabled, optional, readonly, and required are false by default', function( assert ) {
    let testObject = Ember.Object.extend( mixinUnderTest );
    let subject = testObject.create();

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

test( 'Disabled is passed as a parameter', function( assert ) {
    let testObject = Ember.Object.extend( mixinUnderTest );
    let subject = testObject.create({
        disabled: true
    });

    assert.strictEqual(
        subject.get( 'disabled' ),
        true,
        'Disabled was properly passed as a parameter'
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


test( 'Optional is passed as a parameter', function( assert ) {
    let testObject = Ember.Object.extend( mixinUnderTest );
    let subject = testObject.create({
        optional: true
    });

    assert.strictEqual(
        subject.get( 'optional' ),
        true,
        'Optional was properly passed as a parameter'
    );

    assert.strictEqual(
        subject.get( 'disabled' ),
        false,
        'Disabled is false by default'
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


test( 'Readonly is passed as a parameter', function( assert ) {
    let testObject = Ember.Object.extend( mixinUnderTest );
    let subject = testObject.create({
        readonly: true
    });

    assert.strictEqual(
        subject.get( 'readonly' ),
        true,
        'Readonly was properly passed as a parameter'
    );

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
        subject.get( 'required' ),
        false,
        'Required is false by default'
    );
});

test( 'Required is passed as a parameter', function( assert ) {
    let testObject = Ember.Object.extend( mixinUnderTest );
    let subject = testObject.create({
        required: true
    });

    assert.strictEqual(
        subject.get( 'required' ),
        true,
        'Required was properly passed as a parameter'
    );

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
});

test( 'All parameters can be passed', function( assert ) {
    let testObject = Ember.Object.extend( mixinUnderTest );
    let subject = testObject.create({
        disabled: true,
        optional: true,
        readonly: true,
        required: true
    });

    assert.strictEqual(
        subject.get( 'disabled' ),
        true,
        'Disabled was properly passed as a parameter'
    );

    assert.strictEqual(
        subject.get( 'optional' ),
        true,
        'Optional was properly passed as a parameter'
    );

    assert.strictEqual(
        subject.get( 'readonly' ),
        true,
        'Readonly was properly passed as a parameter'
    );

    assert.strictEqual(
        subject.get( 'required' ),
        true,
        'Required was properly passed as a parameter'
    );
});
