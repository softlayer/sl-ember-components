import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import { Align as alignEnum } from 'sl-ember-components/components/sl-drop-button';
import {
    Size as ButtonSize,
    Theme as ButtonTheme
} from 'sl-ember-components/components/sl-button';

moduleForComponent( 'sl-drop-button', 'Unit | Component | sl drop button', {
    needs: [
        'component:sl-button'
    ],

    unit: true
});

test( 'Default properties are set correctly', function( assert ) {
    const component = this.subject();

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
        'caret',
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

    const themeClassDependentKeys = [
        'theme'
    ];

    assert.deepEqual(
        component.rightAligned._dependentKeys,
        rightAlignedDependentKeys,
        'Dependent keys are correct for rightAligned()'
    );

    assert.deepEqual(
        component.themeClass._dependentKeys,
        themeClassDependentKeys,
        'Dependent keys are correct for themeClass()'
    );
});

test( 'themeClass() returns expected interpolated string', function( assert ) {
    const component = this.subject({ theme: 'hover' });

    assert.strictEqual(
        component.get( 'themeClass' ),
        'dropdown-hover',
        'themeClass() returns expected string'
    );

    Ember.run( () => {
        component.set( 'theme', 'invalidTheme' );
    });

    assert.strictEqual(
        component.get( 'themeClass' ),
        null,
        'themeClass() returns null upon invalid "theme" property'
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
