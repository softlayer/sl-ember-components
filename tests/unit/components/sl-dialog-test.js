import Ember from 'ember';
import { test, moduleFor, moduleForComponent } from 'ember-qunit';
import ModalMixin from 'sl-ember-components/mixins/sl-modal';

moduleForComponent( 'sl-dialog', 'Unit - component:sl-dialog' );

test( 'Expected Mixins are present', function() {
    ok( ModalMixin.detect( this.subject() ), 'Modal Mixin is present' );
});

test( '"buttonText" property defaults to a non-empty string', function() {
    var component = this.subject();

    ok( typeof component.buttonText === 'string', '"buttonText" must default to a non-empty string'  );
    ok( component.buttonText.length > 0, '"buttonText" must default to a non-empty string' );
});

test( '"show" property defaults to false', function() {
    var component = this.subject();

    ok( component.show === false, '"show" should default to false'  );
});

test( 'Correct DOM structure is in place', function() {
    var component  = this.subject({
            title: 'Test Title'
        }),
        $component = this.append();

    equal( $component.prop( 'firstChild' ).nodeName, 'DIV' );
    equal( $component.prop( 'firstChild' ).className, 'modal-dialog' );
    equal( $('div.modal-dialog > div.modal-content').length, 1 );
    equal( $('div.modal-dialog > div.modal-content > div.modal-header').length, 1 );
    equal( $('div.modal-dialog > div.modal-content > div.modal-header > button[data-dismiss="modal"]').length, 1 );
//    equal( $('div.modal-dialog > div.modal-content > div.modal-header > button[data-dismiss="modal"] > span[aria-hidden="true"]').text(), 'x' );
    equal( $('div.modal-dialog > div.modal-content > div.modal-header > span.modal-title').length, 1 );
    equal( $('div.modal-dialog > div.modal-content > div.modal-body').length, 1 );
    equal( $('div.modal-dialog > div.modal-content > div.modal-footer').length, 1 );
    equal( $('div.modal-dialog > div.modal-content > div.modal-footer > button.btn-primary[data-dismiss="modal"]').length, 1 );
});

test( 'If "title" property is not populated, span with "modal-title" class is not rendered', function() {
    this.append();

    equal( $('.modal-title').length, 0 );
});

test( '"title" is rendered as span with "modal-title" class if populated', function() {
    var testTitle  = 'Test Title',
        component  = this.subject({
            title: testTitle
        });

    this.append();

    equal( $('span.modal-title').length, 1 );
    equal( $.trim( $('.modal-title').text() ), testTitle );
});

test( 'There are more tests to write', function() {
    expect(0);

// remaining tests to write:
// toggle
// hideHandler
// close
// show
// aria support

});
