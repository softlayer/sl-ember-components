import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import InputBasedMixin from 'sl-ember-components/mixins/sl-input-based';
import TooltipEnabledMixin from 'sl-ember-components/mixins/sl-tooltip-enabled';

moduleForComponent( 'sl-textarea', 'Unit | Component | sl textarea', {
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

test( 'Expected classes are only ones applied', function( assert ) {
    assert.equal(
        this.$().prop( 'class' ),
        [ 'ember-view form-group sl-textarea' ],
        'Rendered component has expected classes'
    );
});

test( 'If "label" property is not populated, label element is not rendered', function( assert ) {
    assert.equal(
        Ember.typeOf( this.$( 'label' ).prop( 'for' ) ),
        'undefined',
        'Label element is not rendered'
    );
});

test( 'If "label" property is populated, label element is rendered', function( assert ) {
    var labelText = 'Test Label',
        component = this.subject({ label: labelText }),
        label;

    label = this.$( 'label[for="' + this.$( 'textarea' ).prop( 'id' ) + '"]' );

    assert.equal( label.length, 1, 'Label is present' );
    assert.equal(
        Ember.$.trim( label.text() ),
        labelText,
        'Label text is expected value'
    );
});

test( 'If "label" property is populated, "for" attribute is expected value', function( assert ) {
    var labelText = 'Test Label',
        component = this.subject({
            label: labelText
        });

    assert.equal(
        this.$( 'label' ).prop( 'for' ),
        this.$( 'textarea' ).prop( 'id' ),
        'Label "for" property matches textarea\'s "id" property'
    );
});

test( 'If "label" property is not populated, "optional" and "required" elements are not rendered even if populated', function( assert ) {
    var component = this.subject({
        optional: true,
        required: true
    });

    assert.strictEqual(
        this.$( 'label > .text-info' ).length,
        0,
        "Label's text-info is not rendered"
    );

    assert.strictEqual(
        this.$( 'label > .text-danger' ).length,
        0,
        "Label's text-danger is not rendered"
    );
});

test( '"optional" and "required" elements are rendered if populated along with "label" property', function( assert ) {
    var component = this.subject({
        label: 'Test Label',
        optional: true,
        required: true
    });

    assert.equal(
        this.$( 'label > .text-info' ).prop( 'tagName' ),
        'SMALL',
        "Label's text-info <small> is rendered"
    );

    assert.equal(
        this.$( 'label > .text-danger' ).prop( 'tagName' ),
        'SMALL',
        "Label's text-danger <small> is rendered"
    );
});

test( '"helpText" is rendered if populated', function( assert ) {
    var helpText = 'Help Text',
        component = this.subject({ helpText });

    assert.equal(
        this.$( '.help-block' ).prop( 'tagName' ),
        'P',
        'Help text block is rendered as a <p>'
    );

    assert.equal(
        Ember.$.trim( this.$( '.help-block' ).text() ),
        helpText,
        'Help text block text is expected value'
    );
});

test( '"autofocus" property is supported', function( assert ) {
    var component = this.subject({ autofocus: true });

    assert.equal(
        this.$( 'textarea' ).attr( 'autofocus' ),
        'autofocus',
        `Textarea's "autofocus" attribute is present`
    );
});

test( '"cols" property is supported', function( assert ) {
    var cols = '8',
        component = this.subject({ cols });

    assert.equal(
        this.$( 'textarea' ).attr( 'cols' ),
        cols,
        `Textarea's "cols" attribute is expected value`
    );
});

test( '"disabled" property is supported', function( assert ) {
    var component = this.subject({ disabled: true });

    assert.ok(
        this.$( 'textarea' ).is( ':disabled' ),
        'Textarea is disabled as expected'
    );
});

test( '"maxlength" property is supported', function( assert ) {
    var maxlength = '12',
        component = this.subject({ maxlength });

    assert.equal(
        this.$( 'textarea' ).attr( 'maxlength' ),
        maxlength,
        `Textarea's "maxlength" attribute is expected value`
    );
});

test( '"placeholder" property is supported', function( assert ) {
    var placeholder = 'Placeholder text',
        component = this.subject({ placeholder });

    assert.equal(
        this.$( 'textarea' ).attr( 'placeholder' ),
        placeholder,
        `Textarea's "placeholder" attribute is expected value`
    );
});

test( '"readonly" property is supported', function( assert ) {
    var component = this.subject({ readonly: true });

    assert.ok(
        this.$( 'textarea' ).prop( 'readonly' ),
        'Textarea is readonly as expected'
    );
});

test( '"rows" property is supported', function( assert ) {
    var rows = '4',
        component = this.subject({ rows });

    assert.equal(
        this.$( 'textarea' ).attr( 'rows' ),
        rows,
        `Textarea's "rows" attribute is expected value`
    );
});

test( '"selectionDirection" is supported', function( assert ) {
    var component = this.subject({
        selectionDirection: 'backward'
    });

    assert.equal(
        this.$( 'textarea' ).attr( 'selectionDirection' ),
        'backward',
        `Textarea's "selectionDirection" attribute is expected value`
    );
});

test( '"selectionEnd" is supported', function( assert ) {
    var selectionEnd = '10',
        component = this.subject({ selectionEnd });

    assert.equal(
        this.$( 'textarea' ).attr( 'selectionEnd' ),
        selectionEnd,
        `Textarea's "selectionEnd" attribute is expected value`
    );
});

test( '"selectionStart" is supported', function( assert ) {
    var selectionStart = '10',
        component = this.subject({ selectionStart });

    assert.equal(
        this.$( 'textarea' ).attr( 'selectionStart' ),
        selectionStart,
        `Textarea's "selectionStart" attribute is expected value`
    );
});

test( '"spellcheck" property is supported', function( assert ) {
    var spellcheck = 'true',
        component = this.subject({ spellcheck });

    assert.equal(
        this.$( 'textarea' ).attr( 'spellcheck' ),
        spellcheck,
        `Textarea's "spellcheck" attribute is expected value`
    );
});

test( '"tabindex" property is supported', function( assert ) {
    var tabindex = '2',
        component = this.subject({ tabindex });

    assert.equal(
        this.$( 'textarea' ).attr( 'tabindex' ),
        tabindex,
        `Textarea's "tabindex" attribute is expected value`
    );
});

test( '"wrap" property is supported', function( assert ) {
    var wrap = 'hard',
        component = this.subject({ wrap });

    assert.equal(
        this.$( 'textarea' ).attr( 'wrap' ),
        wrap,
        `Textarea's "wrap" attribute is expected value`
    );
});

test( '"value" property is supported', function( assert ) {
    var value = 'Bound Value',
        component = this.subject({ value });

    assert.equal(
        this.$( 'textarea' ).val(),
        value,
        "Textarea's value is expected value"
    );
});
