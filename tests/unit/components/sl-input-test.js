import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import InputBasedMixin from 'sl-ember-components/mixins/sl-input-based';
import TooltipEnabledMixin from 'sl-ember-components/mixins/sl-tooltip-enabled';

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

test( 'Default values are correct', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'clickToEdit' ),
        false,
        'clickToEdit property false by default'
    );

    assert.equal(
        component.get( 'type' ),
        'text',
        'type property is text by default'
    );

    assert.strictEqual(
        component.get( 'isTypeaheadSetup' ),
        false,
        'isTypeaheadSetup property false by default'
    );

    assert.equal(
        component.get( 'suggestionNamePath' ),
        'name',
        'suggestionNamePath property is "name" by default'
    );

    assert.strictEqual(
        component.get( 'required' ),
        false,
        'required property is false by default'
    );

    assert.equal(
        component.get( 'inputElementId' ),
        null,
        'inputElementId property is null by default'
    );
});

test( 'setInputElementId() - sets inputElementId correctly', function( assert ) {
    const component = this.subject();

    const inputElementId = this.$( 'input.form-control' ).prop( 'id' );

    assert.equal(
        component.get( 'inputElementId' ),
        inputElementId
    );
});

test( 'Click to edit input has the correct class', function( assert ) {
    this.subject({
        clickToEdit: true
    });

    assert.ok(
        this.$( 'input' ).hasClass( 'click-to-edit' )
    );
});

test( 'Input can be disabled', function( assert ) {
    this.subject({
        disabled: true
    });

    assert.ok(
        this.$( 'input' ).prop( 'disabled' )
    );
});

test( 'Help text is displayed', function( assert ) {
    const helpText = 'Testing help text is displayed';

    this.subject({
        helpText: helpText
    });

    assert.equal(
        this.$( '.help-block' ).text().trim(),
        helpText
    );
});

test( 'Label text is displayed', function( assert ) {
    const labelText = 'Test label text';

    this.subject({
        label: labelText
    });

    assert.equal(
        this.$( '.control-label' ).text().trim(),
        labelText
    );
});

test( 'Label text is not displayed', function( assert ) {
    this.subject();

    assert.equal(
        this.$( '.control-label' ).length,
        0
    );
});

test( 'Optional property displays optional label', function( assert ) {
    this.subject({
        label: 'Optional input',
        optional: true
    });

    assert.equal(
        this.$( '.text-info' ).text().trim(),
        'Optional'
    );
});

test( 'Required property displays required label', function( assert ) {
    this.subject({
        label: 'Required input',
        required: true
    });

    assert.equal(
        this.$( '.text-danger' ).text().trim(),
        'Required'
    );
});

test( 'Required property does not display required label', function( assert ) {
    this.subject({
        label: 'Required input',
        required: false
    });

    assert.equal(
        this.$( '.text-danger' ).length,
        0
    );
});

test( 'Placeholder property sets the placeholder for the input', function( assert ) {
    const placeholderText = 'placeholder';

    this.subject({
        placeholder: 'placeholder'
    });

    assert.equal(
        this.$( 'input' ).prop( 'placeholder' ),
        placeholderText
    );
});

test( 'Readonly property, makes the input readonly', function( assert ) {
    this.subject({
        readonly: true
    });

    assert.ok(
        this.$( 'input' ).prop( 'readonly' )
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

    assert.equal(
        popoverData.options.trigger,
        'focus',
        'Popover trigger is "focus"'
    );

    assert.equal(
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

test( 'Typeahead classes are present', function( assert ) {
    const colors = [
        'Black',
        'Yellow'
    ];

    this.subject({
        suggestions: colors
    });

    assert.ok(
        this.$( '.twitter-typeahead' ),
        'twitter-typeahead class exists'
    );

    assert.ok(
        this.$( '.typeahead' ),
        'typeahead class exists'
    );

    assert.ok(
        this.$( '.tt-input' ),
        'tt-input class exists'
    );

    assert.ok(
        this.$( '.tt-menu' ),
        'tt-menu class exists'
    );

    assert.ok(
        this.$( '.tt-dataset' ),
        'tt-dataset class exists'
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

    assert.equal(
        component.getInput().val(),
        value
    );
});
