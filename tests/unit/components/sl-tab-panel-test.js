import { moduleForComponent, test } from 'ember-qunit';
import { Alignment as AlignmentEnum } from 'sl-ember-components/components/sl-tab-panel';
import * as utils from 'sl-ember-components/utils/all';
import sinon from 'sinon';

moduleForComponent( 'sl-tab-panel', 'Unit | Component | sl tab panel', {
    unit: true
});

test( 'Alignment enum values are correct', function( assert ) {
    const Alignment = {
        LEFT: 'left',
        RIGHT: 'right'
    };

    assert.deepEqual(
        AlignmentEnum,
        Alignment
    );
});

test( 'Default values are set correctly', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'activeTabName' ),
        null,
        'activeTabName is null'
    );

    assert.strictEqual(
        component.get( 'alignTabs' ),
        AlignmentEnum.LEFT,
        'alignmentTabs is left by default'
    );

    assert.strictEqual(
        component.get( 'contentHeight' ),
        0,
        'contentHeight is 0 by default'
    );

    assert.strictEqual(
        component.get( 'initialTabName' ),
        null,
        'initialTabName is null by default'
    );
});

test( 'Dependent keys are correct', function( assert ) {
    const component = this.subject();

    assert.deepEqual(
        component.tabAlignmentClass._dependentKeys,
        [ 'alignTabs' ]
    );
});

test( 'tabAlignmentClass() returns the correct value', function( assert ) {
    const component = this.subject();

    component.set( 'alignTabs', 'left' );

    assert.strictEqual(
        component.get( 'tabAlignmentClass' ),
        'sl-align-tabs-left',
        'Correct string returned for value of left'
    );

    component.set( 'alignTabs', 'right' );

    assert.strictEqual(
        component.get( 'tabAlignmentClass' ),
        'sl-align-tabs-right',
        'Correct string returned for value of right'
    );

    const spy = sinon.spy( utils, 'warn' );

    component.set( 'alignTabs', 'Invalid value' );
    component.get( 'tabAlignmentClass' );

    assert.ok(
        spy.calledOnce,
        'warn() was called when invalid alignment class was provided'
    );

    utils.warn.restore();
});
