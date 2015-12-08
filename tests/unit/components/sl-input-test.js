import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import InputBasedMixin from 'sl-ember-components/mixins/sl-input-based';
import TooltipEnabledMixin from 'sl-ember-components/mixins/sl-tooltip-enabled';
import ComponentInputId from 'sl-ember-components/mixins/sl-component-input-id';
import sinon from 'sinon';
import { skip } from 'qunit';

moduleForComponent( 'sl-input', 'Unit | Component | sl input', {
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
        ComponentInputId.detect( this.subject() ),
        'ComponentInputId Mixin is present'
    );
});

test( 'Default property values', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'clickToEdit' ),
        false,
        'clickToEdit property false by default'
    );

    assert.strictEqual(
        component.get( 'type' ),
        'text',
        'type property is text by default'
    );

    assert.strictEqual(
        component.get( 'isTypeaheadSetup' ),
        false,
        'isTypeaheadSetup property false by default'
    );

    assert.strictEqual(
        component.get( 'suggestionNamePath' ),
        'name',
        'suggestionNamePath property is "name" by default'
    );

    assert.strictEqual(
        component.get( 'value' ),
        null,
        'value property is null by default'
    );
});

test( 'getInput() returns correct element', function( assert ) {
    const component = this.subject();

    assert.ok(
        this.$( 'input' ).get( 0 ) ===
        component.getInput().get( 0 )
    );
});

test( 'Event handlers are registered and unregistered', function( assert ) {
    const spyOn = sinon.spy( Ember.$.fn, 'on' );
    const spyOff = sinon.spy( Ember.$.fn, 'off' );
    const component = this.subject({
        blur: function() { }
    });

    const matchElement = sinon.match( ( value ) => {
        return value.get( 0 ) === component.$( 'input' ).get( 0 );
    });

    this.render();

    spyOn.reset();

    component.trigger( 'didInsertElement' );

    assert.ok(
        spyOn.calledWith( component.namespaceEvent( 'blur' ) ),
        'on() was called with namespaced blur event'
    );

    assert.ok(
        spyOn.alwaysCalledOn( matchElement ),
        'on() was called on expected input'
    );

    Ember.run( () => component.trigger( 'willClearRender' ) );

    assert.ok(
        spyOff.calledWith( component.namespaceEvent( 'blur' ) ),
        'off() was called with namespaced blur event'
    );

    assert.ok(
        spyOff.alwaysCalledOn( matchElement ),
        'off() was called on expected input'
    );

    Ember.$.fn.on.restore();
    Ember.$.fn.off.restore();
});

test( 'Blur action is triggered when input loses focus', function( assert ) {
    assert.expect( 1 );

    const done = assert.async();

    this.subject({
        blur: 'blur',
        targetObject: {
            blur() {
                assert.ok(
                    'blur was triggered'
                );

                done();
            }
        }
    });

    this.$( 'input' ).trigger( 'blur' );
});

test( 'Popover is initialized with the correct options', function( assert ) {
    const popoverText = 'Popover text';

    this.subject({
        popover: popoverText
    });

    this.render();

    const data = this.$().data();
    const popoverData = data[ 'bs.popover' ];

    assert.strictEqual(
        popoverData.enabled,
        true,
        'Popover is enabled'
    );

    assert.strictEqual(
        popoverData.options.trigger,
        'focus',
        'Popover trigger is "focus"'
    );

    assert.strictEqual(
        popoverData.options.content,
        popoverText,
        'Popover text is set correctly'
    );
});

test( 'isTypeaheadSetup is true when suggestions are provided', function( assert ) {
    const colors = [
        'Black',
        'Yellow'
    ];

    const component = this.subject({
        suggestions: colors
    });

    this.render();

    assert.strictEqual(
        component.get( 'isTypeaheadSetup' ),
        true
    );
});

test( 'setupTypeahead() "typeahead:select" action is fired', function( assert ) {
    const colors = [
        { id: 'Black' }
    ];
    const value = 'test value';

    const component = this.subject({
        suggestions: colors,
        suggestionNamePath: 'id',
        value: value
    });

    assert.strictEqual(
        component.get( 'value' ),
        value,
        '"value" prop is set successfully'
    );

    Ember.run( () => {
        this.$( '.typeahead.tt-input' ).typeahead( 'val', 'b' ).blur();
        this.$( '.tt-suggestion.tt-selectable' ).click();
    });

    assert.strictEqual(
        component.get( 'value' ),
        'Black',
        '"typeahead:select" action sets value when suggestion selected'
    );
});

test( 'Observer keys are correct', function( assert ) {
    const component = this.subject();

    const setupTypeaheadKeys = [
        'suggestions'
    ];

    assert.deepEqual(
        component.setupTypeahead.__ember_observes__,
        setupTypeaheadKeys,
        'Observer keys are correct for setupTypeahead()'
    );
});

skip( 'setupTypeahead() - typeahead "displayKey" initialization is correct', function() {
});

skip( 'setupTypeahead() - typeahead "source" initialization is correct', function() {
});

skip( 'setupTypeahead() - "typeahead:autocomplete" action sets value', function() {
});
