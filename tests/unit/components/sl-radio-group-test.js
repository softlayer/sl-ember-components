import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import InputBasedMixin from 'sl-ember-components/mixins/sl-input-based';
import TooltipEnabledMixin from 'sl-ember-components/mixins/sl-tooltip-enabled';
import NamespaceMixin from 'sl-ember-components/mixins/sl-namespace';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';

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

    assert.ok(
        NamespaceMixin.detect( this.subject() ),
        'Namespace Mixin is present'
    );
});

test( 'Default property values', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'tagName' ),
        'fieldset',
        'tagName: fieldset'
    );

    assert.strictEqual(
        component.get( 'inline' ),
        null,
        'inline: null'
    );

    assert.strictEqual(
        component.get( 'label' ),
        null,
        'label: null'
    );

    assert.strictEqual(
        component.get( 'value' ),
        null,
        'value: null'
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

test( 'initalize() - "inline" property set to false adds `sl-radio` class to radio', function( assert ) {
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

test( 'Event handlers are registered and unregistered', function( assert ) {
    const spyOn = sinon.spy( Ember.$.fn, 'on' );
    const spyOff = sinon.spy( Ember.$.fn, 'off' );

    this.registry.register( 'template:test-template', hbs`
        {{sl-radio}}
        {{sl-radio}}
        {{sl-radio}}
    ` );

    const component = this.subject({
        name: 'testName',
        templateName: 'test-template'
    });

    this.render();

    const radioButtonsArray = this.$( 'input:radio' ).toArray();

    const matchElements = sinon.match( ( elements ) => {
        return elements.toArray().every( function( element ) {
            const found = radioButtonsArray.find( ( radioElement )  => {
                return element === radioElement;
            });

            return Boolean( found );
        });
    });

    this.render();

    spyOn.reset();

    component.trigger( 'didInsertElement' );

    assert.ok(
        spyOn.calledWith( component.namespaceEvent( 'change' ) ),
        'on() was called with namespaced change event'
    );

    assert.ok(
        spyOn.calledOn( matchElements ),
        'on() was called on expected radio buttons'
    );

    spyOff.reset();

    component.trigger( 'willClearRender' );

    assert.ok(
        spyOff.calledWith( component.namespaceEvent( 'change' ) ),
        'off() was called with namespaced change event'
    );

    assert.ok(
        spyOff.calledOn( matchElements ),
        'off() was called on expected radio buttons'
    );

    Ember.$.fn.on.restore();
    Ember.$.fn.off.restore();
});

test( 'initalize() - change listner keeps group value in sync', function( assert ) {
    this.registry
        .register( 'template:test-template', template );

    const component = this.subject( {
        name: 'test',
        templateName: 'test-template'
    } );

    this.render();

    component.$( 'input[name=test]:radio[value=red]' ).trigger( 'click' );

    assert.strictEqual(
        component.get( 'value' ),
        'red',
        'change listner successfully syncs group value'
    );

    this.registry.unregister( 'template:test-template' );
});
