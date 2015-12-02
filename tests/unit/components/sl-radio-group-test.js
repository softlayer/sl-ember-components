import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import InputBasedMixin from 'sl-ember-components/mixins/sl-input-based';
import TooltipEnabledMixin from 'sl-ember-components/mixins/sl-tooltip-enabled';
import NamespaceMixin from 'sl-ember-components/mixins/sl-namespace';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';

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
        () => component.initialize(),
        '"name" property must be set on component'
    );
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
        return radioButtonsArray.every( function( element ) {
            const found = elements.toArray().find( ( radioElement )  => {
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
