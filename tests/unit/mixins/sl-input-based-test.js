import Ember from 'ember';
import mixinUnderTest from 'sl-ember-components/mixins/sl-input-based';
import layout from 'sl-ember-components/templates/components/sl-input';


module( 'Unit | Mixin | sl input based' );

test( 'Successfully mixed', function( assert ) {
    let testObject = Ember.Object.extend( mixinUnderTest );
    let subject = testObject.create();

    assert.ok( subject );
});

test( 'Standard values are false by default', function( assert ) {
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

test( 'Class name bindings contain expected bindings', function( assert ) {
    let expectedClassNameBindings = [
        'disabled',
        'optional',
        'readonly',
        'required'
    ];
    let testObject = Ember.Object.extend( mixinUnderTest );
    let subject = testObject.create();

    assert.deepEqual(
        subject.get( 'classNameBindings' ),
        expectedClassNameBindings,
        'classNameBindings contains the expected class names'
    );
});
