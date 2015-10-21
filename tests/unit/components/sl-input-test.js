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

    this.render();

    const input = component.getInput().get( 0 );
    const jQueryData = Ember.get( Ember.$, '_data' );
    const events = jQueryData( input, 'events' );

    assert.ok(
        'blur' in events,
        'Blur event handler is registered after didInsertElement'
    );

    Ember.run( () => {
        component.trigger( 'willClearRender' );

        assert.ok(
            !( 'blur' in events ),
            'Blur event handler is unregistered after willClearRender'
        );
    });
});

test( 'Default values are correct', function( assert ) {
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
        component.get( 'required' ),
        false,
        'required property is false by default'
    );
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

    const component = this.subject({
        value: value
    });

    this.render();

    assert.strictEqual(
        component.getInput().val(),
        value
    );
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

test( 'Optional property displays optional label', function( assert ) {
    this.subject({
        label: 'Optional input',
        optional: true
    });

    assert.strictEqual(
        this.$( '.text-info' ).text().trim(),
        'Optional'
    );
});

test( 'Optional property does not display optional label', function( assert ) {
    this.subject({
        label: 'Optional input',
        optional: false
    });

    assert.strictEqual(
        this.$( '.text-info' ).length,
        0
    );
});

test( 'Required property displays required label', function( assert ) {
    this.subject({
        label: 'Required input',
        required: true
    });

    assert.strictEqual(
        this.$( '.text-danger' ).text().trim(),
        'Required'
    );
});

test( 'Required property does not display required label', function( assert ) {
    this.subject({
        label: 'Required input',
        required: false
    });

    assert.strictEqual(
        this.$( '.text-danger' ).length,
        0
    );
});
