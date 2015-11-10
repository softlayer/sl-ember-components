import Ember from 'ember';
import mixinUnderTest from 'sl-ember-components/mixins/sl-tooltip-enabled';
import { module, test, skip } from 'qunit';
import sinon from 'sinon';

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

    assert.ok(
        subject
    );
});

test( 'Default property values', function( assert ) {
    const testObject = Ember.Object.extend( mixinUnderTest );

    const subject = testObject.create();

    assert.strictEqual(
        subject.get( 'dataTrigger' ),
        null,
        'dataTrigger is null'
    );

    assert.strictEqual(
        subject.get( 'title' ),
        null,
        'title is null'
    );
});

skip( 'enable() - observes correct properties', function() {
});

skip( 'enable() - listens to correct event', function() {
    // Waiting to see if an easier way in 2.0
});

test( 'enable() - popover defined calls enablePopover()', function( assert ) {
    const testObject = Ember.Object.extend( mixinUnderTest, {
        popover: 'Popover Text'
    });
    const subject = testObject.create();

    subject.enablePopover = sinon.spy();
    subject.enableTooltip = sinon.spy();

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

    subject.enablePopover = sinon.spy();
    subject.enableTooltip = sinon.spy();

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

test( 'dataTrigger property supports "focus hover click" values', function( assert ) {
    const testTitle = 'Popover Text';
    const testContent = 'Popover Content';
    const testDataTrigger = 'focus hover click';
    const testObject = Ember.Object.extend( mixinUnderTest, {
        title: testTitle,
        popover: testContent,
        dataTrigger: testDataTrigger,
        $: jQueryMock
    });
    const subject = testObject.create();

    subject.$().attr(
        'data-original-title',
        'to get past undefined check'
    );

    assert.strictEqual(
        subject.get( 'dataTrigger' ),
        testDataTrigger,
        '"dataTrigger" is set to "focus hover click"'
    );

    subject.set( 'dataTrigger', 'focus' );

    assert.strictEqual(
        subject.get( 'dataTrigger' ),
        'focus',
        '"dataTrigger" is set to "focus"'
    );

    subject.set( 'dataTrigger', 'hover' );

    assert.strictEqual(
        subject.get( 'dataTrigger' ),
        'hover',
        '"dataTrigger" is set to "hover"'
    );

    subject.set( 'dataTrigger', 'click' );

    assert.strictEqual(
        subject.get( 'dataTrigger' ),
        'click',
        '"dataTrigger" is set to "click"'
    );
});
