import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import sinon from 'sinon';
import streamEnabled from 'ember-stream/mixins/stream-enabled';

const mockStream = {
    actions: {},

    on( actionName, handler ) {
        this.actions[ actionName ] = handler;
    },

    subject: {
        dispose() {
            mockStream.actions = {};
        },

        onCompleted() {}
    }
};

moduleForComponent( 'sl-modal', 'Unit | Component | sl modal', {
    unit: true
});

test( 'Expected Mixins are present', function( assert ) {
    assert.ok(
        streamEnabled.detect( this.subject() ),
        'StreamEnabled Mixin is present'
    );
});

test( 'Default property values are set correctly', function( assert ) {
    const component = this.subject();

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

test( 'Event handlers are registered and unregistered', function( assert ) {
    const spyOn = sinon.spy( Ember.$.fn, 'on' );
    const spyOff = sinon.spy( Ember.$.fn, 'off' );

    const component = this.subject();

    this.render();

    spyOn.reset();

    component.trigger( 'didInsertElement' );

    assert.ok(
        spyOn.calledWith( 'show.bs.modal' ),
        'show event binded'
    );

    assert.ok(
        spyOn.calledWith( 'shown.bs.modal' ),
        'shown event binded'
    );

    assert.ok(
        spyOn.calledWith( 'hide.bs.modal' ),
        'hide event binded'
    );

    assert.ok(
        spyOn.calledWith( 'hidden.bs.modal' ),
        'hidden event binded'
    );

    spyOff.reset();

    component.trigger( 'willClearRender' );

    assert.ok(
        spyOff.calledWith( 'show.bs.modal' ),
        'show event unbinded'
    );

    assert.ok(
        spyOff.calledWith( 'shown.bs.modal' ),
        'shown event unbinded'
    );

    assert.ok(
        spyOff.calledWith( 'hide.bs.modal' ),
        'hide event unbinded'
    );

    assert.ok(
        spyOff.calledWith( 'hidden.bs.modal' ),
        'hidden event unbinded'
    );

    Ember.$.fn.on.restore();
    Ember.$.fn.off.restore();
});

test( 'Stream action "show" triggers show()', function( assert ) {
    const component = this.subject({
        stream: mockStream
    });
    const showSpy = sinon.spy( component, 'show' );

    this.render();

    mockStream.actions[ 'show' ]();
    assert.ok(
        showSpy.called,
        'show method was called'
    );

    // clean up
    component.hide();
    component.show.restore();
});

test( 'Stream action "hide" triggers hide()', function( assert ) {
    const component = this.subject({
        stream: mockStream
    });
    const hideSpy = sinon.spy( component, 'hide' );

    this.render();

    mockStream.actions[ 'hide' ]();
    assert.ok(
        hideSpy.called,
        'hide method was called'
    );

    component.hide.restore();
});
