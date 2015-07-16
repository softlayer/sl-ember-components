import Ember from 'ember';
import ModalMixin from 'sl-ember-components/mixins/sl-modal';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-dialog', 'Unit | Component | sl dialog', {
    unit: true
});

test( 'Expected Mixins are present', function( assert ) {
    assert.ok(
        ModalMixin.detect( this.subject() ),
        'Modal Mixin is present'
    );
});

test( '"buttonText" property defaults to a non-empty string', function( assert ) {
    const component = this.subject();

    assert.ok(
        'string' === Ember.typeOf( component.get( 'buttonText' ) ),
        '"buttonText" must default to a non-empty string'
    );

    assert.ok(
        component.get( 'buttonText' ).length > 0,
        '"buttonText" must default to a non-empty string'
    );
});

test( '"buttonText" property displays correctly', function( assert ) {
    this.subject({ buttonText: 'Test' });

    assert.ok(
        Ember.$.trim( this.$().text() ),
        'Test',
        'Button text is expected value'
    );
});

test( '"show" property defaults to false', function( assert ) {
    const component = this.subject();

    assert.ok(
        false === component.get( 'show' ),
        '"show" should default to false'
    );
});

test( 'Correct DOM structure is in place', function( assert ) {
    this.subject({ title: 'Test Title' });

    assert.equal(
        this.$().prop( 'firstChild' ).nodeName,
        'DIV',
        'First child is a <div>'
    );

    assert.ok(
        this.$().prop( 'firstChild' ).className,
        'modal-dialog',
        'First child element has class "modal-dialog"'
    );

    assert.equal(
        this.$( 'div.modal-dialog > div.modal-content' ).length,
        1,
        'Rendered component contains modal-content div'
    );

    assert.equal(
        this.$( 'div.modal-dialog > div.modal-content > div.modal-header' ).length,
        1,
        'Rendered component contains modal-header'
    );

    assert.equal(
        this.$( 'div.modal-dialog > div.modal-content > div.modal-header > button[data-dismiss="modal"]' ).length,
        1,
        'Rendered component contains open modal button'
    );

    assert.equal(
        this.$( `
            div.modal-dialog >
            div.modal-content >
            div.modal-header >
            button[data-dismiss="modal"] >
            span[aria-hidden="true"]
        ` ).text(),
        '×',
        'Rendered close button contains expected text character'
    );

    assert.equal(
        this.$( `
            div.modal-dialog >
            div.modal-content >
            div.modal-header >
            span.modal-title
        ` ).length,
        1,
        'Rendered component contains modal-title'
    );

    assert.equal(
        this.$( 'div.modal-dialog > div.modal-content > div.modal-body' ).length,
        1,
        'Rendered component contains modal-body'
    );

    assert.equal(
        this.$( 'div.modal-dialog > div.modal-content > div.modal-footer' ).length,
        1,
        'Rendered component contains modal-footer'
    );

    assert.equal(
        this.$( `
            div.modal-dialog >
            div.modal-content >
            div.modal-footer >
            button.btn-primary[data-dismiss="modal"]
        ` ).length,
        1,
        'Rendered component contains modal dismiss button'
    );
});

test( 'If "title" property is not populated, span with "modal-title" class is not rendered', function( assert ) {
    assert.equal(
        this.$( '.modal-title' ).length,
        0,
        'Rendered component does not contain modal-title'
    );
});

test( '"title" is rendered as span with "modal-title" class if populated', function( assert ) {
    const testTitle = 'Test Title';

    this.subject({ title: testTitle });

    assert.equal(
        this.$( 'span.modal-title' ).length,
        1,
        'Rendered component contains modal-title'
    );

    assert.equal(
        Ember.$.trim( this.$( '.modal-title' ).text() ),
        testTitle,
        'Rendered modal-title contains expected text'
    );
});

test( 'The "show" property toggles the Bootstrap classes', function( assert ) {
    const component = this.subject({ animated: false });

    assert.strictEqual(
        component.get( 'show' ),
        false,
        'Component is in hidden state initially'
    );

    assert.strictEqual(
        this.$().is( ':visible' ),
        false,
        'Rendered component is hidden initially'
    );

    Ember.run( () => {
        component.set( 'show', true );
    });

    assert.ok(
        this.$().is( ':visible' ),
        'Element is visible after first toggle'
    );

    Ember.run( () => {
        component.set( 'show', false );
    });

    assert.strictEqual(
        this.$().is( ':visible' ),
        false,
        'Element is hidden again after second toggle'
    );
});

test( 'hideHandler properly handles hiding', function( assert ) {
    const component = this.subject({ show: true });

    assert.ok(
        component.get( 'show' ),
        'Initial component property "show" is set to true'
    );

    Ember.run( () => {
        this.$().trigger( 'hide.bs.modal' );
    });

    assert.strictEqual(
        component.get( 'show' ),
        false,
        'Component property "show" is set to false'
    );
});
