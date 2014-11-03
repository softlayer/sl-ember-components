import Ember from 'ember';
import { test, moduleFor, moduleForComponent } from 'ember-qunit';
import InputBasedMixin from 'sl-components/mixins/sl-input-based';
import TooltipEnabledMixin from 'sl-components/mixins/sl-tooltip-enabled';

moduleForComponent( 'sl-textarea', 'Unit - component:sl-textarea' );

test( 'Expected Mixins are present', function() {
    ok( InputBasedMixin.detect( this.subject() ), 'InputBased Mixin is present' );
    ok( TooltipEnabledMixin.detect( this.subject() ), 'TooltipEnabled Mixin is present' );
});

test( 'Expected classes are only ones applied', function() {
    var $component = this.append();

    equal( $component.prop( 'class' ), ['ember-view form-group sl-textarea'] );
});

test( 'If "label" property is not populated, label element is not rendered', function() {
    var $component = this.append();

    equal( $component.find( 'label' ).prop( 'for' ), undefined );
});

test( 'If "label" property is populated, label element is rendered', function() {
    var labelText  = 'Test Label',
        component  = this.subject({
            label: labelText
        }),
        label;

    this.append();

    label = $('label[for="' + $('textarea').prop( 'id' ) + '"]');

    equal( label.length, 1 );
    equal( $.trim( label.text() ), labelText );
});

test( 'If "label" property is populated, "for" attribute is expected value', function() {
    var labelText  = 'Test Label',
        component  = this.subject({
            label: labelText
        }),
        $component = this.append();

    equal( $component.find( 'label' ).prop( 'for' ), $component.find( 'textarea' ).prop( 'id' ) );
});

test( 'If "label" property is not populated, "optional" and "required" properties are not rendered even if populated', function() {
    var component  = this.subject({
            optional : true,
            required : true
        }),
        $component = this.append();

    equal( $component.find( 'label > .text-info' ).prop( 'tagName' ), undefined );
    equal( $component.find( 'label > .text-danger' ).prop( 'tagName' ), undefined );
});

test( '"optional" and "required" properties are rendered if populated along with "label" property', function() {
    var component  = this.subject({
            label    : 'Test Label',
            optional : true,
            required : true
        }),
        $component = this.append();

    equal( $component.find( 'label > .text-info' ).prop( 'tagName' ), 'SMALL' );
    equal( $component.find( 'label > .text-danger' ).prop( 'tagName' ), 'SMALL' );
});

test( '"helpText" is rendered if populated', function() {
    var helpText  = 'Help Text',
        component = this.subject({
            helpText: helpText
        }),
        $component = this.append();

    equal( $component.find( '.help-block' ).prop( 'tagName' ), 'P' );
    equal( $.trim( $component.find( '.help-block' ).text() ), helpText );
});

test( '"cols" property is supported', function() {
    var cols      = '8',
        component = this.subject({
            cols: cols
        }),
        $component = this.append();

    equal( $component.find( 'textarea' ).attr( 'cols' ), cols );
});

test( '"disabled" property is supported', function() {
    var component = this.subject({
            disabled: true
        }),
        $component = this.append();

    equal( $component.find( 'textarea' ).attr( 'disabled' ), 'disabled' );
});

test( '"maxlength" property is supported', function() {
    var maxlength = '12',
        component = this.subject({
            maxlength: maxlength
        }),
        $component = this.append();

    equal( $component.find( 'textarea' ).attr( 'maxlength' ), maxlength );
});

test( '"placeholder" property is supported', function() {
    var placeholder = 'Placeholder text',
        component   = this.subject({
            placeholder: placeholder
        }),
        $component = this.append();

    equal( $component.find( 'textarea' ).attr( 'placeholder' ), placeholder );
});

test( '"readonly" property is supported', function() {
    var component = this.subject({
            readonly: true
        }),
        $component = this.append();

    equal( $component.find( 'textarea' ).attr( 'readonly' ), 'readonly' );
});

test( '"rows" property is supported', function() {
    var rows      = '4',
        component = this.subject({
            rows: rows
        }),
        $component = this.append();

    equal( $component.find( 'textarea' ).attr( 'rows' ), rows );
});

test( '"tabindex" property is supported', function() {
    var tabindex  = '2',
        component = this.subject({
            tabindex: tabindex
        }),
        $component = this.append();

    equal( $component.find( 'textarea' ).attr( 'tabindex' ), tabindex );
});

test( '"value" property is supported', function() {
    var value     = 'Bound Value',
        component = this.subject({
            value: value
        }),
        $component = this.append();

    equal( $component.find( 'textarea' ).val(), value );
});