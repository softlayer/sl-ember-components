import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import sinon from 'sinon';
import StreamEnabledMixin from 'ember-stream/mixins/stream-enabled';
import TooltipEnabledMixin from 'sl-ember-components/mixins/sl-tooltip-enabled';
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

test( 'Expected Mixins are present', function( assert ) {
    assert.ok(
       StreamEnabledMixin.detect( this.subject() ),
       'StreamEnabled Mixin is present'
    );

    assert.ok(
        TooltipEnabledMixin.detect( this.subject() ),
        'TooltipEnabled Mixin is present'
    );
});

test( 'Default property values', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'tagName' ),
        'button',
        'Default tagName is button'
    );

    assert.strictEqual(
        component.get( 'bubbles' ),
        true,
        'bubbles is true by default'
    );

    assert.strictEqual(
        component.get( 'disabled' ),
        false,
        'disabled is false by default'
    );

    assert.strictEqual(
        component.get( 'label' ),
        null,
        'label is null by default'
    );

    assert.strictEqual(
        component.get( 'pending' ),
        false,
        'pending is false by default'
    );

    assert.strictEqual(
        component.get( 'pendingLabel' ),
        null,
        'pendingLabel is null by default'
    );

    assert.strictEqual(
        component.get( 'size' ),
        'medium',
        'size is medium by default'
    );

    assert.strictEqual(
        component.get( 'showModalWithStreamName' ),
        null,
        'showModalWithStreamName is null by default'
    );

    assert.strictEqual(
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

    assert.strictEqual(
        component.get( 'currentLabel' ),
        staticText,
        'Static text is set initially'
    );

    Ember.run( () => component.set( 'pending', true ) );

    assert.strictEqual(
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

        assert.strictEqual(
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
    // clone imported enum
    const sizes = Ember.copy( SizeEnum );
    const component = this.subject();

    // Set class values on cloned enum, any new values added to imported
    // enum will cause this test to fail if corresponding class is not set.
    // This will ensure that this test does not give false positives
    // for new enum values added.
    sizes.EXTRA_SMALL = { size: sizes.EXTRA_SMALL, 'class': 'btn-xs' };
    sizes.LARGE = { size: sizes.LARGE, 'class': 'btn-lg' };
    sizes.MEDIUM = { size: sizes.MEDIUM, 'class': null };
    sizes.SMALL = { size: sizes.SMALL, 'class': 'btn-sm' };

    Object.keys( sizes ).forEach( ( key ) => {
        const size = sizes[ key ].size;
        const cls = sizes[ key ].class;

        Ember.run( () => component.set( 'size', size ) );

        assert.strictEqual(
            component.get( 'sizeClass' ),
            cls,
            size + ' returned correct value of ' + cls
        );
    });

    const spy = sinon.spy( utils, 'warn' );

    component.set( 'size', 'invalid value' );
    component.get( 'sizeClass' );

    assert.ok(
        spy.calledOnce,
        'warn() was called when invalid size was set'
    );

    utils.warn.restore();
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

    mockStreamService.send.restore();
});
