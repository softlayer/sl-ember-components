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
    assert.expect( 5 );

    let expectedClassNameBindings = [
        'disabled',
        'optional',
        'readonly',
        'required'
    ];
    let testObject = Ember.Object.extend( mixinUnderTest );
    let subject = testObject.create();
    let classNameBindings = subject.get( 'classNameBindings' );

    assert.equal(
        classNameBindings.length,
        expectedClassNameBindings.length,
        'classNameBindings contains the correct number of elements'
    );

    classNameBindings.every( ( element, index ) => {
        assert.strictEqual(
            element,
            expectedClassNameBindings[index],
            `${element} was correctly contained within classNameBindings`
        );
        return true;
    });
});