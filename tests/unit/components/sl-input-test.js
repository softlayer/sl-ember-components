import ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-input', 'Unit | Component | sl input', {
    unit: true
});


test( 'Blur action is triggered when input loses focus', function( assert ) {
    assert.expect( 1 );

    const done = assert.async();

    this.subject({
        'blur': 'blur',
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

test( 'Click to edit input has the correct class', function( assert ) {
    this.subject({
        clickToEdit: true
    });

    assert.ok(
        this.$( 'input' ).hasClass( 'click-to-edit' )
    );
});

test( 'Input can be disabled' , function( assert ) {
    this.subject({
        disabled: true
    });

    assert.ok(
        this.$( 'input' ).prop( 'disabled' )
    );
});

test( 'Help text is displayed', function( assert) {
    const helpText = 'Testing help text is displayed';

    this.subject({
        helpText: helpText
    });

    assert.equal(
        this.$( '.help-block' ).text(),
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

test( 'Popover is displayed and has the correct title and content', function( assert ) {
    assert.expect( 3 );

    const done = assert.async();
    const text = 'popover text';
    const title = 'popover title';

    const component = this.subject({
        popover: text,
        title: title
    });

    this.render();

    const input = component.getInput();

    input.on( 'focus', function() {
        const popover = $( '.popover' );
        const popoverTitle = popover.find( '.popover-title' ).text();
        const popoverText = popover.find( '.popover-content' ).text();

        assert.equal(
            popover.length,
            1,
            'Popover displayed'
        );

        assert.equal(
            text,
            popoverText,
            'Popover content is set correctly'
        );

        assert.equal(
            title,
            popoverTitle,
            'Popover title is set correctly'
        );

        done();
    });

    input.trigger( 'focus' );
});

test( 'Readonly property, makes the input readonly', function( assert ) {
    this.subject({
        readonly: true
    });

    assert.ok(
        this.$( 'input' ).prop( 'readonly' )
    );
});

test( 'Disabled property, disables the input', function( assert ) {
    this.subject({
        disabled: true
    });

    assert.ok(
        this.$( 'input' ).prop( 'disabled' )
    );
});

test( 'Typeahead is initialized', function( assert ) {
    const colors =  [
        'Black',
        'Yellow'
    ];

    const component = this.subject({
        suggestions: colors
    });

    this.render();

    const typeahead = this.$( '.tt-input' ).data().ttTypeahead;

    assert.ok(
        typeahead
    );
});

test( 'Value is set to value property', function( assert ) {
    const val = 'set value';

    const component = this.subject({
        value: val
    });

    this.render();

    assert.equal(
        component.getInput().val(),
        val
    );
});
