import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import { Align as alignEnum } from 'sl-ember-components/components/sl-drop-button';
import ClassPrefix from 'sl-ember-components/mixins/class-prefix';
import {
    Size as ButtonSize,
    Theme as ButtonTheme
} from 'sl-ember-components/components/sl-button';
import globalLibraries from '../../helpers/sl/synchronous/global-libraries';

moduleForComponent( 'sl-drop-button', 'Unit | Component | sl drop button', {
    needs: [
        'component:sl-button'
    ],

    unit: true
});

test( 'Expected Mixins are present', function( assert ) {
    assert.ok(
        ClassPrefix.detect( this.subject() ),
        'ClassPrefix Mixin is present'
    );
});

test( 'Default properties are set correctly', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'componentClass' ),
        'drop-button',
        'componentClass is set to drop-button'
    );

    assert.strictEqual(
        component.get( 'title' ),
        null,
        '"title" default value is correct'
    );

    assert.strictEqual(
        component.get( 'dataTrigger' ),
        null,
        '"dataTrigger" default value is correct'
    );

    assert.strictEqual(
        component.get( 'align' ),
        alignEnum.LEFT,
        '"align" default value is correct'
    );

    assert.strictEqual(
        component.get( 'content' ),
        null,
        '"content" default value is correct'
    );

    assert.strictEqual(
        component.get( 'iconClass' ),
        'sl-icon-dropdown',
        '"iconClass" default value is correct'
    );

    assert.strictEqual(
        component.get( 'label' ),
        null,
        '"label" default value is correct'
    );

    assert.strictEqual(
        component.get( 'size' ),
        ButtonSize.MEDIUM,
        '"size" default value is correct'
    );

    assert.strictEqual(
        component.get( 'theme' ),
        ButtonTheme.DEFAULT,
        '"theme" default value is correct'
    );

    const Align = {
        LEFT: 'left',
        RIGHT: 'right'
    };

    assert.deepEqual(
        alignEnum,
        Align,
        '"align" enum values are correct'
    );
});

test( 'Dependent keys are correct', function( assert ) {
    const component = this.subject();

    const rightAlignedDependentKeys = [
        'align'
    ];

    assert.deepEqual(
        component.rightAligned._dependentKeys,
        rightAlignedDependentKeys,
        'Dependent keys are correct for rightAligned()'
    );
});

test( 'rightAligned() returns expected boolean based on right and left alignment', function( assert ) {
    const component = this.subject({ align: 'right' });

    assert.strictEqual(
        component.get( 'rightAligned' ),
        true,
        'rightAligned() returns expected boolean'
    );

    Ember.run( () => {
        component.set( 'align', 'left' );
    });

    assert.strictEqual(
        component.get( 'rightAligned' ),
        false,
        'rightAligned() returns expected boolean'
    );
});

test( 'There are no references to Ember.$, $ or jQuery', function( assert ) {
    globalLibraries.setupSpies();

    const component = this.subject();

    this.render();

    globalLibraries.triggerEvents( component );

    assert.notOk(
        globalLibraries.called(),
        'Global libraries are not referenced in component'
    );

    globalLibraries.restoreSpies();
});
