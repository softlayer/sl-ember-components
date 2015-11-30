import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import InputBasedMixin from 'sl-ember-components/mixins/sl-input-based';
import TooltipEnabledMixin from 'sl-ember-components/mixins/sl-tooltip-enabled';
import ComponentInputId from 'sl-ember-components/mixins/sl-component-input-id';

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
    const component = this.subject({
        blur: 'blur'
    });

    const inputElement = this.$( 'input' ).get( 0 );
    const jQueryData = Ember.get( Ember.$, '_data' );
    const events = jQueryData( inputElement, 'events' );

    assert.ok(
        'blur' in events,
        'Blur event handler is registered after didInsertElement'
    );

    Ember.run( () => {
        component.trigger( 'willClearRender' );

        assert.notOk(
            'blur' in events,
            'Blur event handler is unregistered after willClearRender'
        );
    });
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

test( 'Typeahead is initialized and has the correct classes', function( assert ) {
    const colors = [
        'Black',
        'Yellow'
    ];

    this.subject({
        suggestions: colors
    });

    const typeahead = this.$( '.tt-input' ).data().ttTypeahead;

    assert.ok(
        typeahead,
        'Typeahead is initialized'
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

test( 'Value is set correctly', function( assert ) {
    const value = 'set value';

    this.subject({
        value: value
    });

    assert.strictEqual(
        this.$( 'input' ).val(),
        value
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
