import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import { skip } from 'qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-textarea', 'Integration | Component | sl textarea', {
    integration: true
});

test( 'Default classes are applied', function( assert ) {
    this.render( hbs`
        {{#sl-textarea}}
        {{/sl-textarea}}
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
        {{#sl-textarea value=value}}
        {{/sl-textarea}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).val(),
        this.get( 'value' ),
        'Text area value is expected value'
    );
});

test( '"wrap" property is supported', function( assert ) {
    this.render( hbs`
        {{#sl-textarea wrap="hard"}}
        {{/sl-textarea}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).attr( 'wrap' ),
        'hard',
        'Textarea wrap attribute is expected value'
    );
});

test( '"tabindex" property is supported', function( assert ) {
    this.render( hbs`
        {{#sl-textarea tabindex="2"}}
        {{/sl-textarea}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).attr( 'tabindex' ),
        '2',
        'Textarea tabindex attribute is expected value'
    );
});

test( '"autofocus" property is supported', function( assert ) {
    this.render( hbs`
        {{#sl-textarea autofocus=true}}
        {{/sl-textarea}}
    ` );
    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).attr( 'autofocus' ),
        'autofocus',
        'Textarea autofocus attribute is present'
    );
});

test( '"cols" property is supported', function( assert ) {
    this.render( hbs`
        {{#sl-textarea cols="8"}}
        {{/sl-textarea}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).attr( 'cols' ),
        '8',
        'Textarea cols attribute is expected value'
    );
});

test( '"disabled" property is supported', function( assert ) {
    this.render( hbs`
        {{#sl-textarea disabled=true}}
        {{/sl-textarea}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).find( 'textarea' ).is( ':disabled' ),
        'Textarea is disabled as expected'
    );
});

test( '"maxlength" property is supported', function( assert ) {
    this.render( hbs`
        {{#sl-textarea maxlength="12"}}
        {{/sl-textarea}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).attr( 'maxlength' ),
        '12',
        'Textarea maxlength attribute is expected value'
    );
});

test( '"placeholder" property is supported', function( assert ) {
    this.render( hbs`
        {{#sl-textarea placeholder="placeholder text"}}
        {{/sl-textarea}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).attr( 'placeholder' ),
        'placeholder text',
        'Textarea placeholder attribute is expected value'
    );
});

test( '"readonly" property is supported', function( assert ) {
    this.render( hbs`
        {{#sl-textarea readonly=true}}
        {{/sl-textarea}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).find( 'textarea' ).prop( 'readonly' ),
        'Textarea is readonly as expected'
    );
});

test( '"rows" property is supported', function( assert ) {
    this.render( hbs`
        {{#sl-textarea rows="4"}}
        {{/sl-textarea}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).attr( 'rows' ),
        '4',
        'Textarea rows attribute is expected value'
    );
});

test( '"helpText" is rendered if populated', function( assert ) {
    this.set( 'helpText', 'Help Text' );
    this.render( hbs`
        {{#sl-textarea helpText=helpText}}
        {{/sl-textarea}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.help-block' ).prop( 'tagName' ),
        'P',
        'Help text block is rendered as a <p>'
    );

    assert.strictEqual(
        Ember.$.trim( this.$( '>:first-child' ).find( '.help-block' ).text() ),
        this.get( 'helpText' ),
        'Help text block text is expected value'
    );
});

test( 'If "helpText" is not populated, it is not rendered', function( assert ) {
    this.render( hbs`
        {{#sl-textarea}}
        {{/sl-textarea}}
    ` );

    assert.ok(
        !this.$( '>:first-child' ).hasClass( 'help-block' ),
        'Help text block is not rendered'
    );
});

test( '"optional" and "required" elements are rendered if populated along with "label" property', function( assert ) {
    this.render( hbs`
        {{#sl-textarea label="Test Label" optional=true required=true}}
        {{/sl-textarea}}
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
            {{#sl-textarea optional=true required=true}}
            {{/sl-textarea}}
        ` );

        assert.strictEqual(
            this.$( '>:first-child' ).find( 'label > .text-info' ).length,
            0,
            "Label's text-info is not rendered"
        );

        assert.strictEqual(
            this.$( '>:first-child' ).find( 'label > .text-danger' ).length,
            0,
            "Label's text-danger is not rendered"
        );
    }
);

test( 'If "label" property is not populated, label element is not rendered', function( assert ) {
    this.render( hbs`
        {{#sl-textarea label=""}}
        {{/sl-textarea}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'label' ).length,
        0,
        'Label element is not rendered'
    );
});

test( 'If "label" property is populated, label element is rendered', function( assert ) {
    this.render( hbs`
        {{#sl-textarea label="test"}}
        {{/sl-textarea}}
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
        Ember.$.trim( label.text() ),
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
        {{#sl-textarea label=label}}
        {{/sl-textarea}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'label' ).prop( 'for' ),
        this.$( '>:first-child' ).find( 'textarea' ).prop( 'id' ),
        'Label "for" property matches textarea\'s "id" property'
    );
});

test( '"selectionStart" is supported', function( assert ) {
    this.render( hbs`
        {{#sl-textarea selectionStart=2 value="testValue"}}
        {{/sl-textarea}}
    ` );

    this.$( '>:first-child' ).find( 'textarea' ).get( 0 ).setSelectionRange( 2, 8 );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).prop( 'selectionStart' ),
        2,
        'Textarea "selectionStart" property is expected value'
    );
});

test( '"selectionEnd" is supported', function( assert ) {
    this.render( hbs`
        {{#sl-textarea selectionEnd=8 value="testValue"}}
        {{/sl-textarea}}
    ` );

    this.$( '>:first-child' ).find( 'textarea' ).get( 0 ).setSelectionRange( 2, 8 );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).prop( 'selectionEnd' ),
        8,
        'Textarea "selectionEnd" property is expected value'
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

test( '"spellcheck" property is supported', function( assert ) {
    this.render( hbs`
        {{#sl-textarea spellcheck=true}}
        {{/sl-textarea}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).attr( 'spellcheck' ),
        'true',
        'Textarea spellcheck attribute is expected value'
    );
});

test( '"spellcheck" property is supported with bound values', function( assert ) {
    this.set( 'spellcheck', true );
    this.render( hbs`
        {{#sl-textarea spellcheck=spellcheck}}
        {{/sl-textarea}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).attr( 'spellcheck' ),
        'true',
        'Textarea spellcheck attribute is expected value'
    );

    this.set( 'spellcheck', false );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).attr( 'spellcheck' ),
        'false',
        'Textarea spellcheck attribute is expected value'
    );
});

test( '"spellcheck" property defaults correctly', function( assert ) {
    this.render( hbs`
        {{#sl-textarea}}
        {{/sl-textarea}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'textarea' ).attr( 'spellcheck' ),
        'false',
        'Textarea spellcheck attribute default value is false'
    );
});

// This test requires full browser support, Issue #719 opened.
skip( 'selectionDirection is supported' );