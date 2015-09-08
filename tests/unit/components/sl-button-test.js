import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import sinon from 'sinon';
import streamEnabled from 'ember-stream/mixins/stream-enabled';
import tooltipEnabled from 'sl-ember-components/mixins/sl-tooltip-enabled';
import { Theme } from 'sl-ember-components/components/sl-button';
import * as utils from 'sl-ember-components/utils/all';

moduleForComponent( 'sl-button', 'Unit | Component | sl button', {
    unit: true
});

const mockStreamService = {
    send() {}
};

test( 'Successfully mixed sl-stream-enabled', function( assert ) {
    const testObject = Ember.Object.extend( streamEnabled );
    const subject = testObject.create();

    assert.ok(
        subject
    );
});

test( 'Successfully mixed sl-tooltip-enabled', function( assert ) {
    const testObject = Ember.Object.extend( tooltipEnabled );
    const subject = testObject.create();

    assert.ok(
        subject
    );
});

test( 'tagName is set to "button"', function( assert ) {
    const component = this.subject();

    assert.equal(
        component.get( 'tagName' ),
        'button'
    );
});

test( 'Default property values are set correctly', function( assert ) {
    const component = this.subject();

    assert.equal(
        component.get( 'bubbles' ),
        true,
        'bubbles is true by default'
    );

    assert.equal(
        component.get( 'disabled' ),
        false,
        'disabled is false by default'
    );

    assert.equal(
        component.get( 'label' ),
        null,
        'label is null by default'
    );

    assert.equal(
        component.get( 'pending' ),
        false,
        'pending is false by default'
    );

    assert.equal(
        component.get( 'pendingLabel' ),
        null,
        'pendingLabel is null by default'
    );

    assert.equal(
        component.get( 'size' ),
        'medium',
        'size is medium by default'
    );

    assert.equal(
        component.get( 'theme' ),
        'default',
        'theme is "default" by default'
    );
});

test( 'Button supports click event bubbling', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.click(),
        true,
        'Button bubbles click events by default'
    );

    component.set( 'bubbles', false );

    assert.strictEqual(
        component.click(),
        false,
        'Button click event will not propagate when bubbles is false'
    );
});

test( 'Label changes for pending state', function( assert ) {
    const pendingText = 'Pending';
    const staticText = 'Static';
    const component = this.subject({
        pendingLabel: pendingText,
        label: staticText
    });

    assert.equal(
        component.get( 'currentLabel' ),
        staticText,
        'Static text is set initially'
    );

    Ember.run( () => component.set( 'pending', true ) );

    assert.equal(
        component.get( 'currentLabel' ),
        pendingText,
        'Pending text is set while pending'
    );
});

test( 'themeClass() returns the correct class', function( assert ) {
    const component = this.subject();

    Object.keys( Theme ).forEach( ( key ) => {
        const theme = Theme[ key ];

        Ember.run( () => component.set( 'theme',  theme ) );

        assert.equal(
            component.get( 'themeClass' ),
            `btn-${theme}`
        );
    });

    const spy = sinon.spy( utils, 'warn' );

    component.set( 'theme', 'invalid value' );
    component.get( 'themeClass' );

    assert.ok(
        spy.calledOnce,
        'warn() was called when invalid theme was set'
    );

    utils.warn.restore();
});

test( 'sizeClass() returns the correct class', function( assert ) {
    const sizes = Ember.A([
        { size: 'extra-small', 'class': 'btn-xs' },
        { size: 'large', 'class': 'btn-lg' },
        { size: 'medium', 'class': null },
        { size: 'small', 'class': 'btn-sm' }
    ]);

    const component = this.subject();

    sizes.forEach( ( obj ) => {
        Ember.run( () => component.set( 'size', obj.size ) );

        assert.equal(
            component.get( 'sizeClass' ),
            obj.class,
            obj.size + ' returned correct value of ' + obj.class
        );
    });

    const spy = sinon.spy( utils, 'warn' );

    component.set( 'size', 'invalid value' );
    component.get( 'sizeClass' );

    assert.ok(
        spy.calledOnce,
        'warn() was called when invalid size was set'
    );
});

test( 'send() and sendAction() are called when component click() is invoked', function( assert ) {
    const sendSpy = sinon.spy( mockStreamService, 'send' );

    const component = this.subject( {
        streamService: mockStreamService,
        showModalWithStreamName: 'testStreamName',
        sendAction: sinon.spy()
    });

    component.click();

    assert.ok(
        sendSpy.calledWith( 'testStreamName', 'show' ),
        'send() called with correct arguments'
    );

    assert.ok(
        component.sendAction.calledOnce,
        'sendAction was called'
    );
});
