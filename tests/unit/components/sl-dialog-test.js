import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import ModalMixin from 'sl-ember-components/mixins/sl-modal';

moduleForComponent( 'sl-dialog', 'Unit - component: sl-dialog' );

test( 'Expected Mixins are present', function( assert ) {
    assert.ok( ModalMixin.detect( this.subject() ), 'Modal Mixin is present' );
});

test( '"buttonText" property defaults to a non-empty string', function( assert ) {
    var component = this.subject();

    assert.ok( typeof component.buttonText === 'string', '"buttonText" must default to a non-empty string'  );
    assert.ok( component.buttonText.length > 0, '"buttonText" must default to a non-empty string' );
});

test( '"show" property defaults to false', function( assert ) {
    var component = this.subject();

    assert.ok( component.show === false, '"show" should default to false'  );
});

test( 'Correct DOM structure is in place', function( assert ) {
    var component  = this.subject({
            title: 'Test Title'
        }),
        $component = this.render();

    assert.equal( $component.prop( 'firstChild' ).nodeName, 'DIV' );
    assert.equal( $component.prop( 'firstChild' ).className, 'modal-dialog' );
    assert.equal( $('div.modal-dialog > div.modal-content').length, 1 );
    assert.equal( $('div.modal-dialog > div.modal-content > div.modal-header').length, 1 );
    assert.equal( $('div.modal-dialog > div.modal-content > div.modal-header > button[data-dismiss="modal"]').length, 1 );
//    assert.equal( $('div.modal-dialog > div.modal-content > div.modal-header > button[data-dismiss="modal"] > span[aria-hidden="true"]').text(), 'x' );
    assert.equal( $('div.modal-dialog > div.modal-content > div.modal-header > span.modal-title').length, 1 );
    assert.equal( $('div.modal-dialog > div.modal-content > div.modal-body').length, 1 );
    assert.equal( $('div.modal-dialog > div.modal-content > div.modal-footer').length, 1 );
    assert.equal( $('div.modal-dialog > div.modal-content > div.modal-footer > button.btn-primary[data-dismiss="modal"]').length, 1 );
});

test( 'If "title" property is not populated, span with "modal-title" class is not rendered', function( assert ) {
    this.render();

    assert.equal( $('.modal-title').length, 0 );
});

test( '"title" is rendered as span with "modal-title" class if populated', function( assert ) {
    var testTitle  = 'Test Title',
        component  = this.subject({
            title: testTitle
        });

    this.render();

    assert.equal( $('span.modal-title').length, 1 );
    assert.equal( $.trim( $('.modal-title').text() ), testTitle );
});

test( 'The show property toggles the component', function( assert ) {
    var component  = this.subject(),
        $component = this.render();

    assert.strictEqual( component.get( 'show' ), false, 'Component is in hidden state initially' );
    assert.strictEqual( $component.is( ':visible' ), false, 'Element is hidden initially' );

    Ember.run( function() {
        component.set( 'show', true );
    });
    assert.strictEqual( $component.is( ':visible' ), true, 'Element is visible after first toggle' );

    /*
    Ember.run( function() {
        component.set( 'show', false );
    });
    assert.strictEqual( $component.is( ':visible' ), false, 'Element is hidden again after second toggle' );
    // */
});

QUnit.skip( 'There are more tests to write', function( assert ) {
    assert.expect(0);

// remaining tests to write:
// hideHandler
// close
// show
// aria support

});
