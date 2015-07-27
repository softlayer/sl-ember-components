import Ember from 'ember';
import mixinUnderTest from 'sl-ember-components/mixins/sl-tooltip-enabled';
import { module, test, skip } from 'qunit';

let temporaryData;
const jQueryMock = function() {
    return {
        attr( property, value ) {
            if ( !value ) {
                return temporaryData[ property ];
            }

            temporaryData[ property ] = value;
        },

        tooltip( value ) {
            temporaryData.tooltip = value;
        },

        popover( value ) {
            temporaryData.popover = value;
        }
    };
};

module( 'Unit | Mixin | sl tooltip enabled', {
    beforeEach() {
        temporaryData = {};
    }
});

test( 'Successfully mixed', function( assert ) {
    const testObject = Ember.Object.extend( mixinUnderTest );
    const subject = testObject.create();

    assert.ok( subject );
});

skip( 'enable() - observes correct properties', function() {
    // Can use ._dependentKeys in 2.0
});

skip( 'enable() - listens to correct event', function() {
    // Waiting to see if an easier way in 2.0
});

test( 'enable() - popover defined calls enablePopover()', function( assert ) {
    const testObject = Ember.Object.extend( mixinUnderTest, {
        popover: 'Popover Text'
    });
    const subject = testObject.create();

    subject.enablePopover = window.sinon.spy();
    subject.enableTooltip = window.sinon.spy();

    subject.enable();

    assert.ok(
        subject.enablePopover.calledOnce,
        'enablePopover() was called'
    );

    assert.ok(
        !subject.enableTooltip.calledOnce,
        'enableTooltip() was not called'
    );

    subject.enablePopover.reset();
    subject.enableTooltip.reset();
});


test( 'enable() - title defined calls enableTooltip()', function( assert ) {
    const testObject = Ember.Object.extend( mixinUnderTest, {
        title: 'Tooltip Text'
    });
    const subject = testObject.create();

    subject.enablePopover = window.sinon.spy();
    subject.enableTooltip = window.sinon.spy();

    subject.enable();

    assert.ok(
        !subject.enablePopover.calledOnce,
        'enablePopover() was not called'
    );

    assert.ok(
        subject.enableTooltip.calledOnce,
        'enableTooltip() was called'
    );

    subject.enablePopover.reset();
    subject.enableTooltip.reset();
});


test( 'enabledTooltip() - Renders tooltip', function( assert ) {
    const testTitle = 'Tooltip Text';
    const testObject = Ember.Object.extend( mixinUnderTest, {
        title: testTitle,
        $: jQueryMock
    });
    const subject = testObject.create();

    subject.enableTooltip();

    assert.equal(
        subject.get( 'data-toggle' ),
        'tooltip',
        '"data-toggle" has correct value'
    );

    assert.equal(
        temporaryData.tooltip.container,
        'body',
        'tooltip container is set to correct value'
    );

    assert.equal(
        temporaryData.tooltip.title,
        testTitle,
        'tooltip title is set to correct value'
    );
});

test( 'enabledTooltip() - Title is reset', function( assert ) {
    const testTitle = 'Tooltip Text';
    const testObject = Ember.Object.extend( mixinUnderTest, {
        title: testTitle,
        $: jQueryMock
    });
    const subject = testObject.create();

    subject.$().attr(
        'data-original-title',
        'to get past undefined check'
    );
    subject.enableTooltip();

    assert.equal(
        temporaryData[ 'data-original-title' ],
        testTitle
    );
});

test( 'enablePopover() - Renders popover', function( assert ) {
    const testContent = 'Popover Text';
    const testObject = Ember.Object.extend( mixinUnderTest, {
        popover: testContent,
        $: jQueryMock
    });
    const subject = testObject.create();

    subject.enablePopover();

    assert.equal(
        subject.get( 'data-toggle' ),
        'popover',
        '"data-toggle" has correct value'
    );

    assert.equal(
        temporaryData.popover.content,
        testContent,
        'popover content is set to correct value'
    );

    assert.equal(
        temporaryData.popover.placement,
        'top',
        'popover placement is set to correct value'
    );
});

test( 'enablePopover() - Title is reset', function( assert ) {
    const testTitle = 'Popover Text';
    const testContent = 'Popover Content';
    const testObject = Ember.Object.extend( mixinUnderTest, {
        title: testTitle,
        popover: testContent,
        $: jQueryMock
    });
    const subject = testObject.create();

    subject.$().attr(
        'data-original-title',
        'to get past undefined check'
    );
    subject.enablePopover();

    assert.equal(
        temporaryData[ 'data-original-title' ],
        testTitle
    );

    assert.equal(
        temporaryData[ 'data-content' ],
        testContent
    );
});
