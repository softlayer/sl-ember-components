import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import sinon from 'sinon';
import streamEnabled from 'ember-stream/mixins/stream-enabled';
import tooltipEnabled from 'sl-ember-components/mixins/sl-tooltip-enabled';
import { Theme as ThemeEnum } from 'sl-ember-components/components/sl-button';
import { Size as SizeEnum } from 'sl-ember-components/components/sl-button';
import * as utils from 'sl-ember-components/utils/all';

const Size = {
    EXTRA_SMALL: 'extra-small',
    LARGE: 'large',
    MEDIUM: 'medium',
    SMALL: 'small'
};

const Theme = {
    DANGER: 'danger',
    DEFAULT: 'default',
    HOVER: 'hover',
    INFO: 'info',
    LINK: 'link',
    PRIMARY: 'primary',
    SUCCESS: 'success',
    WARNING: 'warning'
};

moduleForComponent( 'sl-button', 'Unit | Component | sl button', {
    unit: true
});

const mockStreamService = {
    send() {}
};

test( 'Successfully mixed sl-stream-enabled', function( assert ) {
    assert.ok(
       streamEnabled.detect( this.subject() )
    );
});

test( 'Successfully mixed sl-tooltip-enabled', function( assert ) {
    assert.ok(
        tooltipEnabled.detect( this.subject() )
    );
});

test( 'Default property values are set correctly', function( assert ) {
    const component = this.subject();

    assert.equal(
        component.get( 'tagName' ),
        'button',
        'Default tagName is button'
    );

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
        component.get( 'showModalWithStreamName' ),
        null,
        'showModalWithStreamName is null by default'
    );

    assert.equal(
        component.get( 'theme' ),
        'default',
        'theme is "default" by default'
    );

    assert.deepEqual(
        SizeEnum,
        Size,
        'Size enum values are correct'
    );

    assert.deepEqual(
        ThemeEnum,
        Theme,
        'Theme enum values are correct'
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

test( 'Dependent keys are correct', function( assert ) {
    const component = this.subject();

    const currentLabelDependentKeys = [
        'label',
        'pending',
        'pendingLabel'
    ];

    const sizeClassDependentKeys = [
        'size'
    ];

    const themeClassDependentKeys = [
        'theme'
    ];

    assert.deepEqual(
        component.currentLabel._dependentKeys,
        currentLabelDependentKeys,
        'Dependent keys are correct for currentLabel()'
    );

    assert.deepEqual(
        component.sizeClass._dependentKeys,
        sizeClassDependentKeys,
        'Dependent keys are correct for sizeClass()'
    );

    assert.deepEqual(
        component.themeClass._dependentKeys,
        themeClassDependentKeys,
        'Dependent keys are correct for themeClass()'
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
