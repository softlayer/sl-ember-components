import { moduleForComponent, test } from 'ember-qunit';
import { skip } from 'qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-textarea', 'Integration | Component | sl textarea', {
    integration: true
});

test( 'Default rendered state', function( assert ) {
    this.render( hbs`
        {{sl-textarea}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'form-group' ),
        'Has class "form-group"'
    );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sl-textarea' ),
        'Has class "sl-textarea"'
    );

    assert.ok(
        this.$( '>:first-child' ).find( 'textarea' ).hasClass( 'form-control' ),
        'Has class "form-control"'
    );
});

test( '"value" property is supported', function( assert ) {
    this.set( 'value', 'testBoundValue' );

    this.render( hbs`
        {{sl-textarea value=value}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).val(),
        this.get( 'value' ),
        '"value" property has expected value'
    );
});

test( '"wrap" property is supported', function( assert ) {
    this.set( 'wrap', 'hard' );

    this.render( hbs`
        {{sl-textarea wrap=wrap}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).attr( 'wrap' ),
        this.get( 'wrap' ),
        '"wrap" property has expected value'
    );

    this.set( 'wrap', 'soft' );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).attr( 'wrap' ),
        this.get( 'wrap' ),
        '"wrap" property is settable'
    );
});

test( '"tabindex" property is supported', function( assert ) {
    this.set( 'tabindex', 2 );

    this.render( hbs`
        {{sl-textarea tabindex=tabindex}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).prop( 'tabindex' ),
        this.get( 'tabindex' ),
        '"tabindex" property has expected value'
    );

    this.set( 'tabindex', 1 );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).prop( 'tabindex' ),
        this.get( 'tabindex' ),
        '"tabindex" property is settable'
    );
});

test( '"autofocus" property is supported', function( assert ) {
    this.set( 'autofocus', true );

    this.render( hbs`
        {{sl-textarea autofocus=autofocus}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).prop( 'autofocus' ),
        this.get( 'autofocus' ),
        '"autofocus" property has expected value'
    );

    this.set( 'autofocus', false );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).prop( 'autofocus' ),
        this.get( 'autofocus' ),
        '"autofocus" property is settable'
    );
});

test( '"cols" property is supported', function( assert ) {
    this.set( 'cols', 8 );

    this.render( hbs`
        {{sl-textarea cols=cols}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).prop( 'cols' ),
        this.get( 'cols' ),
        '"cols" property has expected value'
    );

    this.set( 'cols', 7 );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).prop( 'cols' ),
        this.get( 'cols' ),
        '"cols" property is settable'
    );
});

test( '"disabled" property is supported', function( assert ) {
    this.set( 'disabled', true );

    this.render( hbs`
        {{sl-textarea disabled=disabled}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).prop( 'disabled' ),
        this.get( 'disabled' ),
        '"disabled" property has expected value'
    );

    this.set( 'disabled', false );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).prop( 'disabled' ),
        this.get( 'disabled' ),
        '"disabled" property is settable'
    );
});

test( '"maxlength" property is supported', function( assert ) {
    this.set( 'maxlength', 12 );

    this.render( hbs`
        {{sl-textarea maxlength=maxlength}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).prop( 'maxlength' ),
        this.get( 'maxlength' ),
        '"maxlength" property has expected value'
    );

    this.set( 'maxlength', 11 );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).prop( 'maxlength' ),
        this.get( 'maxlength' ),
        '"maxlength" property is settable'
    );
});

test( '"placeholder" property is supported', function( assert ) {
    this.set( 'placeholder', 'placeholder text' );

    this.render( hbs`
        {{sl-textarea placeholder=placeholder}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).attr( 'placeholder' ),
        this.get( 'placeholder' ),
        '"placeholder" property has expected value'
    );

    this.set( 'placeholder', 'placeholder text two' );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).attr( 'placeholder' ),
        this.get( 'placeholder' ),
        '"placeholder" property is settable'
    );
});

test( '"readonly" property is supported', function( assert ) {
    this.set( 'readonly', true );

    this.render( hbs`
        {{sl-textarea readonly=readonly}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).prop( 'readonly' ),
        this.get( 'readonly' ),
        '"readonly" property has expected value'
    );

    this.set( 'readonly', false );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).prop( 'readonly' ),
        this.get( 'readonly' ),
        '"readonly" property is settable'
    );
});

test( '"rows" property is supported', function( assert ) {
    this.set( 'rows', 4 );

    this.render( hbs`
        {{sl-textarea rows=rows}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).prop( 'rows' ),
        this.get( 'rows' ),
        '"rows" property has expected value'
    );

    this.set( 'rows', 5 );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).prop( 'rows' ),
        this.get( 'rows' ),
        '"rows" property is settable'
    );
});

test( '"helpText" is rendered if populated', function( assert ) {
    this.set( 'helpText', 'Help Text' );

    this.render( hbs`
        {{sl-textarea helpText=helpText}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.help-block' ).prop( 'tagName' ),
        'P',
        '"helptext" block is rendered as a <p>'
    );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.help-block' ).text().trim(),
        this.get( 'helpText' ),
        '"helptext" block text is expected value'
    );
});

test( 'If "helpText" is not populated, it is not rendered', function( assert ) {
    this.render( hbs`
        {{sl-textarea}}
    ` );

    assert.notOk(
        this.$( '>:first-child' ).hasClass( 'help-block' ),
        '"helptext" block is not rendered'
    );
});

test( '"optional" and "required" elements are rendered if populated along with "label" property', function( assert ) {
    this.render( hbs`
        {{sl-textarea label="Test Label" optional=true required=true}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'label > .text-info' ).prop( 'tagName' ),
        'SMALL',
        "Label's text-info <small> is rendered"
    );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'label > .text-danger' ).prop( 'tagName' ),
        'SMALL',
        "Label's text-danger <small> is rendered"
    );
});

test(
    'If "label" property is not populated, "optional" and "required" elements are not rendered even if populated',
    function( assert ) {
        this.render( hbs`
            {{sl-textarea optional=true required=true}}
        ` );

        assert.strictEqual(
            this.$( '>:first-child' ).find( 'label > .text-info' ).length,
            0,
            'Label text-info is not rendered'
        );

        assert.strictEqual(
            this.$( '>:first-child' ).find( 'label > .text-danger' ).length,
            0,
            'Label text-danger is not rendered'
        );
    }
);

test( 'If "label" property is not populated, label element is not rendered', function( assert ) {
    this.render( hbs`
        {{sl-textarea}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'label' ).length,
        0,
        '"label" element is not rendered'
    );
});

test( 'If "label" property is populated, label element is rendered', function( assert ) {
    this.render( hbs`
        {{sl-textarea label="test"}}
    ` );

    const label = this.$(
        this.$( '>:first-child' ).find( 'label' )
    );

    assert.strictEqual(
        label.length,
        1,
        'Label is present'
    );

    assert.strictEqual(
        label.text().trim(),
        'test',
        'Label text is expected value'
    );

    assert.ok(
        this.$( '>:first-child' ).find( 'label' ).hasClass( 'control-label' ),
        'Has class "control-label"'
    );
});

test( 'If "label" property is populated, "for" attribute is expected value', function( assert ) {
    this.set( 'label', 'Test Label' );

    this.render( hbs`
        {{sl-textarea label=label}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'label' ).prop( 'for' ),
        this.$( '>:first-child' ).find( 'textarea' ).prop( 'id' ),
        'Label "for" property matches textarea\'s "id" property'
    );
});

test( 'for attribute value on label matches id of textarea', function( assert ) {
    this.render( hbs`
        {{sl-textarea label="test label"}}
    ` );

    assert.equal(
        this.$( '>:first-child' ).find( 'label' ).attr( 'for' ),
        this.$( '>:first-child' ).find( 'textarea' ).attr( 'id' )
    );
});

test( '"spellcheck" property is supported with bound values', function( assert ) {
    this.set( 'spellcheck', true );

    this.render( hbs`
        {{sl-textarea spellcheck=spellcheck}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).attr( 'spellcheck' ),
        'true',
        '"spellcheck" property is expected value'
    );

    this.set( 'spellcheck', false );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).attr( 'spellcheck' ),
        'false',
        '"spellcheck" property is expected value'
    );
});

test( '"spellcheck" property defaults correctly', function( assert ) {
    this.render( hbs`
        {{sl-textarea}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).attr( 'spellcheck' ),
        'false',
        '"spellcheck" property default value is false'
    );
});

test( '"Title" capabilities are supported', function( assert ) {
    this.render( hbs`
        {{sl-textarea}}
    ` );

    assert.notOk(
        this.$( '>:first-child' ).attr( 'data-original-title' ),
        '"title" property is not rendered when title is not set'
    );

    this.set( 'title', 'test title' );

    this.render( hbs`
        {{sl-textarea title=title}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).attr( 'data-original-title' ),
        this.get( 'title' ),
        '"title" property is rendered and supported'
    );
});

test( '"Popover" capabilities are supported', function( assert ) {
    this.render( hbs`
        {{sl-textarea}}
    ` );

    assert.notOk(
        this.$( '>:first-child' ).data( 'bs.popover' ),
        '"popover" is not rendered when popover is not set'
    );

    this.set( 'popover', 'Test popover' );

    this.render( hbs`
        {{sl-textarea popover=popover}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).data( 'bs.popover' ).options.content,
        this.get( 'popover' ),
        '"popover" property is rendered and supported'
    );
});

// This test requires full browser support, Issue #719 opened.
skip( 'selectionDirection is supported' );

// This tests will be implemented separately, Issue #803 opened.
skip( '"selectionStart" is supported' );
skip( '"selectionEnd" is supported' );
