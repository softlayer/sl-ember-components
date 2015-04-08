import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import ModalMixin from 'sl-ember-components/mixins/sl-modal';

moduleForComponent( 'sl-dialog', 'Unit - component: sl-dialog' );

test( 'Expected Mixins are present', function( assert ) {
    assert.ok(
        ModalMixin.detect( this.subject() ),
        'Modal Mixin is present'
    );
});

test( '"buttonText" property defaults to a non-empty string', function( assert ) {
    var component = this.subject();

    assert.ok(
        typeof component.buttonText === 'string',
        '"buttonText" must default to a non-empty string'
    );

    assert.ok(
        component.buttonText.length > 0,
        '"buttonText" must default to a non-empty string'
    );
});

test( '"show" property defaults to false', function( assert ) {
    var component = this.subject();

    assert.ok(
        component.get( 'show' ) === false,
        '"show" should default to false'
    );
});

test( 'Correct DOM structure is in place', function( assert ) {
    var component = this.subject({
        title: 'Test Title'
    });

    assert.equal(
        this.$().prop( 'firstChild' ).nodeName,
        'DIV',
        'First child is a <div>'
    );

    assert.equal(
        this.$().prop( 'firstChild' ).className,
        'modal-dialog',
        'First child has class name "firstChild"'
    );

    assert.equal(
        this.$( 'div.modal-dialog > div.modal-content' ).length,
        1,
        'Dialog has content div'
    );

    assert.equal(
        this.$( 'div.modal-dialog > div.modal-content > div.modal-header' ).length,
        1,
        'Dialog has content header div'
    );

    assert.equal(
        this.$( 'div.modal-dialog > div.modal-content > div.modal-header > button[data-dismiss="modal"]' ).length,
        1,
        'Dialog has dismiss button inside content header div'
    );

//    assert.equal( this.$('div.modal-dialog > div.modal-content > div.modal-header > button[data-dismiss="modal"] > span[aria-hidden="true"]').text(), 'x' );

    assert.equal(
        this.$( 'div.modal-dialog > div.modal-content > div.modal-header > span.modal-title' ).length,
        1,
        'Dialog has title span inside content header div'
    );

    assert.equal(
        this.$( 'div.modal-dialog > div.modal-content > div.modal-body' ).length,
        1,
        'Dialog has body div inside content div'
    );

    assert.equal(
        this.$( 'div.modal-dialog > div.modal-content > div.modal-footer' ).length,
        1,
        'Dialog has footer div inside content div'
    );

    assert.equal(
        this.$( 'div.modal-dialog > div.modal-content > div.modal-footer > button.btn-primary[data-dismiss="modal"]' ).length,
        1,
        'Dialog has primary dismiss button inside footer div'
    );
});

test( 'If "title" property is not populated, span with "modal-title" class is not rendered', function( assert ) {
    assert.equal( this.$( '.modal-title' ).length, 0, 'Title is not rendered' );
});

test( '"title" is rendered as span with "modal-title" class if populated', function( assert ) {
    var title     = 'Test Title',
        component = this.subject({ title });

    assert.equal( this.$( 'span.modal-title' ).length, 1, 'Title span exists'  );
    assert.equal(
        Ember.$.trim( this.$('.modal-title').text() ),
        title,
        'Title text is expected value'
    );
});

QUnit.skip( 'There are more tests to write', function( assert ) {
    assert.expect(0);

// remaining tests to write:
// toggle
// hideHandler
// close
// show
// aria support

});
