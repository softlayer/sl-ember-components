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

test( 'Align enum values are correct', function( assert ) {
    const Align = {
        LEFT: 'left',
        RIGHT: 'right'
    };

    assert.deepEqual(
        alignEnum,
        Align
    );
});

test( 'Default properties are set correctly', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'align' ),
        alignEnum.LEFT,
        '"align" default vaue is correct'
    );

    assert.strictEqual(
        component.get( 'content' ),
        null,
        '"content" default vaue is correct'
    );

    assert.strictEqual(
        component.get( 'iconClass' ),
        'caret',
        '"iconClass" default vaue is correct'
    );

    assert.strictEqual(
        component.get( 'label' ),
        null,
        '"label" default vaue is correct'
    );

    assert.strictEqual(
        component.get( 'size' ),
        ButtonSize.MEDIUM,
        '"size" default vaue is correct'
    );

    assert.strictEqual(
        component.get( 'theme' ),
        ButtonTheme.DEFAULT,
        '"theme" default vaue is correct'
    );
});

test( 'Alignment property is supported', function( assert ) {
    const component = this.subject();

    assert.equal(
        component.get( 'align' ),
        'left',
        'Default component is left-aligned'
    );

    assert.strictEqual(
        component.get( 'rightAligned' ),
        false,
        'Default component does not have rightAligned set to true'
    );

    Ember.run( () => {
        component.set( 'align', 'right' );
    });

    assert.strictEqual(
        component.get( 'align' ),
        'right',
        'Component is correctly set to "right" aligned'
    );

    assert.ok(
        component.get( 'rightAligned' ),
        'Component is correctly rightAligned'
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
