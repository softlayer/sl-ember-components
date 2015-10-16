import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import sinon from 'sinon';
import streamEnabled from 'ember-stream/mixins/stream-enabled';

moduleForComponent( 'sl-modal', 'Unit | Component | sl modal', {
    unit: true
});

test( 'Successfully mixed sl-stream-enabled', function( assert ) {
    assert.ok(
        streamEnabled.detect( this.subject() )
    );
});

test( 'Default property values are set correctly', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'tagName' ),
        'div',
        'Default tagName is "div"'
    );

    assert.strictEqual(
        component.get( 'animated' ),
        true,
        'animated is true by default'
    );

    assert.strictEqual(
        component.get( 'ariaDescribedBy' ),
        null,
        'ariaDescribedBy is null by default'
    );

    assert.strictEqual(
        component.get( 'ariaHidden' ),
        'true',
        'ariaHidden is "true" by default'
    );

    assert.strictEqual(
        component.get( 'ariaRole' ),
        'dialog',
        'ariaRole is "dialog" by default'
    );

    assert.strictEqual(
        component.get( 'backdrop' ),
        true,
        'backdrop is true by default'
    );

    assert.strictEqual(
        component.get( 'isOpen' ),
        false,
        'isOpen is false by default'
    );

    assert.strictEqual(
        component.get( 'tabindex' ),
        '-1',
        'tabindex is "-1" by default'
    );
});

test( 'hide() calls bootstrap modal hide', function( assert ) {
    const spyModal = sinon.spy( Ember.$.fn, 'modal' );

    const component = this.subject();

    this.render();

    component.hide();

    assert.ok(
        spyModal.calledWithExactly( 'hide' ),
        'Bootstrap jQuery modal plugin correctly called with "hide" parameter'
    );

    Ember.$.fn.modal.restore();
});

test( 'show() calls bootstrap modal show', function( assert ) {
    const spyModal = sinon.spy( Ember.$.fn, 'modal' );

    const component = this.subject();

    this.render();

    component.show();

    assert.ok(
        spyModal.calledWithExactly( 'show' ),
        'Bootstrap jQuery modal plugin correctly called with "show" parameter'
    );

    // clean up
    component.hide();
    Ember.$.fn.modal.restore();
});
