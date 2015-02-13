import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import InputBasedMixin from 'sl-ember-components/mixins/sl-input-based';
import TooltipEnabledMixin from 'sl-ember-components/mixins/sl-tooltip-enabled';

moduleForComponent( 'sl-textarea', 'Unit - component: sl-textarea' );

test( 'Expected Mixins are present', function() {
    ok( InputBasedMixin.detect( this.subject() ), 'InputBased Mixin is present' );
    ok( TooltipEnabledMixin.detect( this.subject() ), 'TooltipEnabled Mixin is present' );
});

test( 'Expected classes are only ones applied', function() {
    var $component = this.render();

    equal( $component.prop( 'class' ), [ 'ember-view form-group sl-textarea' ] );
});

test( 'If "label" property is not populated, label element is not rendered', function() {
    var $component = this.render();

    equal( typeof $component.find( 'label' ).prop( 'for' ), 'undefined' );
});

test( 'If "label" property is populated, label element is rendered', function() {
    var labelText  = 'Test Label',
        component  = this.subject({
            label: labelText
        }),
        label;

    this.render();

    label = $( 'label[for="' + $( 'textarea' ).prop( 'id' ) + '"]' );

    equal( label.length, 1 );
    equal( $.trim( label.text() ), labelText );
});

test( 'If "label" property is populated, "for" attribute is expected value', function() {
    var labelText  = 'Test Label',
        component  = this.subject({
            label: labelText
        }),
        $component = this.render();

    equal( $component.find( 'label' ).prop( 'for' ), $component.find( 'textarea' ).prop( 'id' ) );
});

test( 'If "label" property is not populated, "optional" and "required" properties are not rendered even if populated', function() {
    var component  = this.subject({
            optional : true,
            required : true
        }),
        $component = this.render();

    equal( $component.find( 'label > .text-info' ).prop( 'tagName' ), undefined );
    equal( $component.find( 'label > .text-danger' ).prop( 'tagName' ), undefined );
});

test( '"optional" and "required" properties are rendered if populated along with "label" property', function() {
    var component  = this.subject({
            label    : 'Test Label',
            optional : true,
            required : true
        }),
        $component = this.render();

    equal( $component.find( 'label > .text-info' ).prop( 'tagName' ), 'SMALL' );
    equal( $component.find( 'label > .text-danger' ).prop( 'tagName' ), 'SMALL' );
});

test( '"helpText" is rendered if populated', function() {
    var helpText  = 'Help Text',
        component = this.subject({
            helpText: helpText
        }),
        $component = this.render();

    equal( $component.find( '.help-block' ).prop( 'tagName' ), 'P' );
    equal( $.trim( $component.find( '.help-block' ).text() ), helpText );
});

test( '"autofocus" property is supported', function() {
    var component = this.subject({
            autofocus: true
        }),
        $component = this.render();

    equal( $component.find( 'textarea' ).attr( 'autofocus' ), "autofocus" );
});

test( '"cols" property is supported', function() {
    var cols      = '8',
        component = this.subject({
            cols: cols
        }),
        $component = this.render();

    equal( $component.find( 'textarea' ).attr( 'cols' ), cols );
});

test( '"disabled" property is supported', function() {
    var component = this.subject({
            disabled: true
        }),
        $component = this.render();

    equal( $component.find( 'textarea' ).attr( 'disabled' ), 'disabled' );
});

test( '"maxlength" property is supported', function() {
    var maxlength = '12',
        component = this.subject({
            maxlength: maxlength
        }),
        $component = this.render();

    equal( $component.find( 'textarea' ).attr( 'maxlength' ), maxlength );
});

test( '"placeholder" property is supported', function() {
    var placeholder = 'Placeholder text',
        component   = this.subject({
            placeholder: placeholder
        }),
        $component = this.render();

    equal( $component.find( 'textarea' ).attr( 'placeholder' ), placeholder );
});

test( '"readonly" property is supported', function() {
    var component = this.subject({
            readonly: true
        }),
        $component = this.render();

    equal( $component.find( 'textarea' ).attr( 'readonly' ), 'readonly' );
});

test( '"rows" property is supported', function() {
    var rows      = '4',
        component = this.subject({
            rows: rows
        }),
        $component = this.render();

    equal( $component.find( 'textarea' ).attr( 'rows' ), rows );
});

test( '"selectionDirection" is supported', function() {
    var component = this.subject({
            selectionDirection: 'backward'
        }),
        $component = this.render();

    equal( $component.find( 'textarea' ).attr( 'selectionDirection' ), 'backward' );
});

test( '"selectionEnd" is supported', function() {
    var selectionEnd = '10',
        component = this.subject({
            selectionEnd: selectionEnd
        }),
        $component = this.render();

    equal( $component.find( 'textarea' ).attr( 'selectionEnd' ), selectionEnd );
});

test( '"selectionStart" is supported', function() {
    var selectionStart = '10',
        component = this.subject({
            selectionStart: selectionStart
        }),
        $component = this.render();

    equal( $component.find( 'textarea' ).attr( 'selectionStart' ), selectionStart );
});

test( '"spellcheck" property is supported', function() {
    var spellcheck = 'true',
        component  = this.subject({
            spellcheck: spellcheck
        }),
        $component = this.render();

    equal( $component.find( 'textarea' ).attr( 'spellcheck' ), spellcheck );
});

test( '"tabindex" property is supported', function() {
    var tabindex  = '2',
        component = this.subject({
            tabindex: tabindex
        }),
        $component = this.render();

    equal( $component.find( 'textarea' ).attr( 'tabindex' ), tabindex );
});

test( '"wrap" property is supported', function() {
    var wrap      = 'hard',
        component = this.subject({
            wrap: wrap
        }),
        $component = this.render();

    equal( $component.find( 'textarea' ).attr( 'wrap' ), wrap );
});

test( '"value" property is supported', function() {
    var value     = 'Bound Value',
        component = this.subject({
            value: value
        }),
        $component = this.render();

    equal( $component.find( 'textarea' ).val(), value );
});
