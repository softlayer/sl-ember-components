import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-select', 'Unit | Component | sl select', {
    unit: true
});

test( 'Default classNames are present', function( assert ) {
    this.subject( { content: [] } );

    assert.ok(
        this.$().hasClass( 'form-group' ),
        'Default rendered component has class "form-group"'
    );

    assert.ok(
        this.$().hasClass( 'sl-select' ),
        'Default rendered component has class "sl-select"'
    );
});

test( 'Content is a required parameter of type array', function( assert ) {
    assert.throws(
        this.subject,
        new Error( 'Assertion Failed: "content" is a required property of type array' ),
        'Error is thrown if content is not passed in'
    );

    assert.throws(
        () => {
            this.subject( { content: {} } );
        },
        new Error( 'Assertion Failed: "content" is a required property of type array' ),
        'Error is thrown if content is an object'
    );

    assert.throws(
        () => {
            this.subject( { content: 1 } );
        },
        new Error( 'Assertion Failed: "content" is a required property of type array' ),
        'Error is thrown if content is a number'
    );

    assert.throws(
        () => {
            this.subject( { content: true } );
        },
        new Error( 'Assertion Failed: "content" is a required property of type array' ),
        'Error is thrown if content is a boolean'
    );

    assert.throws(
        () => {
            this.subject( { content: null } );
        },
        new Error( 'Assertion Failed: "content" is a required property of type array' ),
        'Error is thrown if content is null'
    );

    assert.throws(
        () => {
            this.subject( { content: undefined } );
        },
        new Error( 'Assertion Failed: "content" is a required property of type array' ),
        'Error is thrown if content is undefined'
    );

    assert.throws(
        () => {
            this.subject( { content: function(){} } );
        },
        new Error( 'Assertion Failed: "content" is a required property of type array' ),
        'Error is thrown if content is a function'
    );

    assert.throws(
        () => {
            this.subject( { content: "hi" } );
        },
        new Error( 'Assertion Failed: "content" is a required property of type array' ),
        'Error is thrown if content is a string'
    );

    assert.ok(
        this.subject( { content: [] } ),
        'No error is thrown when content is an array'
    );
});

// @todo: may require changing pending softlayer/sl-ember-components#16
test( 'Default properties contain expected values', function( assert ) {
    const component = this.subject( { content: [] } );

    assert.strictEqual(
        component.get( 'disableSearch' ),
        false,
        'disableSearch is false by default'
    );

    assert.strictEqual(
        component.get( 'input' ),
        null,
        'input is null by default'
    );

    assert.strictEqual(
        component.get( 'maximumSelectionSize' ),
        null,
        'maximumSelectionSize is null by default'
    );

    assert.strictEqual(
        component.get( 'multiple' ),
        false,
        'multiple is false by default'
    );

    assert.equal(
        component.get( 'optionDescriptionPath' ),
        'description',
        'optionDescriptionPath contains "description" by default'
    );

    assert.equal(
        component.get( 'optionLabelPath' ),
        'label',
        'optionLabelPath contains "label" by default'
    );

    assert.equal(
        component.get( 'optionValuePath' ),
        'value',
        'optionValuePath contains value by default'
    );

    assert.strictEqual(
        component.get( 'value' ),
        null,
        'value is null by default'
    );

    assert.strictEqual(
        component.get( 'label' ),
        undefined,
        'label is undefined by default'
    );

    assert.strictEqual(
        component.get( 'optional' ),
        false,
        'optional is false by default'
    );

    assert.strictEqual(
        component.get( 'required' ),
        false,
        'required is false by default'
    );

    assert.strictEqual(
        component.get( 'disabled' ),
        false,
        'disabled is false by default'
    );

    assert.strictEqual(
        component.get( 'readonly' ),
        false,
        'readonly is false by default'
    );

    assert.strictEqual(
        component.get( 'helpText' ),
        undefined,
        'helpText is undefined by deafult'
    );
});

// @todo: may require changing pending softlayer/sl-ember-components#16
test( 'Template elements bind to properties', function( assert ) {
    const component = this.subject( { content: [] } );

    assert.strictEqual(
        this.$( 'label.control-label' )[0],
        undefined,
        'No label is created by default'
    );

    assert.strictEqual(
        this.$( 'small.text-info' )[0],
        undefined,
        'No optional text is created by default'
    );

    assert.strictEqual(
        this.$( 'small.text-danger' )[0],
        undefined,
        'No required text is created by default'
    );

    assert.strictEqual(
        this.$( 'p.help-block' )[0],
        undefined,
        'No help text is created by default'
    );

    Ember.run( () => {
        component.set( 'optional', true );
    });

    assert.strictEqual(
        this.$( 'small.text-info' )[0],
        undefined,
        'No optional text is created when there is no label'
    );

    Ember.run( () => {
        component.set( 'required', true );
    });

    assert.strictEqual(
        this.$( 'small.text-danger' )[0],
        undefined,
        'No required text is created when there is no label'
    );

    const labelText = 'testLabel';

    Ember.run( () => {
        component.set( 'label', labelText );
    });

    assert.equal(
        this.$( 'label.control-label' )[0].innerText,
        `${labelText} Optional Required`,
        'Label text was correctly bound'
    );

    assert.equal(
        this.$( 'small.text-info' ).html(),
        'Optional',
        'Optional text was correctly bound'
    );

    assert.equal(
        this.$( 'small.text-danger' ).html(),
        'Required',
        'Required text was correctly bound'
    );

    const helpText = 'testHelp';

    Ember.run( () => {
        component.set( 'helpText', helpText );
    });

    assert.equal(
        this.$( 'p.help-block' ).html(),
        helpText,
        'Help text was correctly bound'
    );
});
