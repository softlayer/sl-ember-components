import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import InputBasedMixin from 'sl-ember-components/mixins/sl-input-based';
import TooltipEnabledMixin from 'sl-ember-components/mixins/sl-tooltip-enabled';
import hbs from 'htmlbars-inline-precompile';

const template = hbs`
    {{sl-radio label="Red" value="red"}}
    {{sl-radio label="Green" value="green"}}
    {{sl-radio label="Blue" value="blue"}}
`;


moduleForComponent( 'sl-radio-group', 'Unit | Component | sl radio group', {
    needs: [ 'component:sl-radio' ],
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

test( 'Default property values are set correctly', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'disabled' ),
        false,
        'disabled: false'
    );

    assert.strictEqual(
        component.get( 'inline' ),
        null,
        'inline: null'
    );

    assert.strictEqual(
        component.get( 'name' ),
        null,
        'theme: null'
    );

    assert.strictEqual(
        component.get( 'readonly' ),
        false,
        'readyonly: false'
    );

    assert.strictEqual(
        component.get( 'value' ),
        null,
        'value: null'
    );

    assert.strictEqual(
        component.get( 'tagName' ),
        'fieldset',
        'tagName: fieldset'
    );

    assert.strictEqual(
        component.get( 'optional' ),
        false,
        'optional: false'
    );

    assert.strictEqual(
        component.get( 'label' ),
        null,
        'label: null'
    );

    assert.strictEqual(
        component.get( 'required' ),
        false,
        'required: false'
    );
});

test( 'intialize() - assert that name must be set on sl-radio-group', function( assert ) {
    const component = this.subject();

    assert.throws(
    function() {
        component.initialize();
    },
    '"name" property must be set on component'
    );
});

test( 'intialize() - "checked" property is set to true if value is set', function( assert ) {
    this.registry
        .register( 'template:test-template', template );

    const component = this.subject( {
        name: 'test',
        value: 'red',
        templateName: 'test-template'
    } );

    this.render();

    assert.strictEqual(
        component.$( 'input[name=test]:radio[value=red]' ).prop( 'checked' ),
        true,
        'pre-selected radio button when value is set'
    );

    this.registry.unregister( 'template:test-template' );
});

test( 'initalize() - "disabled" property on `sl-radio-group` sets `sl-radio` to disabled', function( assert ) {
    this.registry
        .register( 'template:test-template', template );

    const component = this.subject( {
        name: 'test',
        disabled: true,
        templateName: 'test-template'
    } );

    this.render();

    assert.strictEqual(
        component.$( '.sl-radio' ).hasClass( 'disabled' ),
        true,
        '`sl-radio` disabled class added based on `sl-radio-group`'
    );

    assert.strictEqual(
        component.$( 'input' ).prop( 'disabled' ),
        true,
        'input is disabled based on `sl-radio-group`'
    );

    this.registry.unregister( 'template:test-template' );
});

test( 'initalize() - "readonly" property on `sl-radio-group` sets `sl-radio` to disabled', function( assert ) {
    this.registry
        .register( 'template:test-template', template );

    const component = this.subject( {
        name: 'test',
        readonly: true,
        templateName: 'test-template'
    } );

    this.render();

    assert.strictEqual(
        component.$( '.sl-radio' ).hasClass( 'readonly' ),
        true,
        '`sl-radio` readonly class added based on `sl-radio-group`'
    );

    assert.strictEqual(
        component.$( 'input' ).prop( 'readonly' ),
        true,
        'input is readonly based on `sl-radio-group`'
    );

    this.registry.unregister( 'template:test-template' );
});

test( 'initalize() - "inline" property on `sl-radio-group` sets `sl-radio` class to radio-inline', function( assert ) {
    this.registry
        .register( 'template:test-template', template );

    const component = this.subject( {
        name: 'test',
        inline: true,
        templateName: 'test-template'
    } );

    this.render();

    assert.strictEqual(
        component.$( '.sl-radio' ).hasClass( 'radio-inline' ),
        true,
        '`sl-radio` radio-inline class added based on `sl-radio-group`'
    );

    this.registry.unregister( 'template:test-template' );
});

test( 'initalize() - "inline" property on `sl-radio-group` sets `sl-radio` class to radio', function( assert ) {
    this.registry
        .register( 'template:test-template', template );

    const component = this.subject( {
        name: 'test',
        inline: false,
        templateName: 'test-template'
    } );

    this.render();

    assert.strictEqual(
        component.$( '.sl-radio' ).hasClass( 'radio' ),
        true,
        '`sl-radio` radio class added based on `sl-radio-group`'
    );

    this.registry.unregister( 'template:test-template' );
});

test( 'unregisterEvents() - ', function( assert ) {
    const spyOff = sinon.spy( Ember.$.fn, 'off' );

    const component = this.subject( {
        name: 'test'
    } );

    this.render();

    component.trigger( 'willClearRender' );

    assert.ok(
        spyOff.calledOnce,
        'input radio event '
    );

    Ember.$.fn.off.restore();
});
