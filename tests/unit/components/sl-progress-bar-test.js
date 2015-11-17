import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import TooltipEnabledMixin from 'sl-ember-components/mixins/sl-tooltip-enabled';
import { Theme as ThemeEnum } from 'sl-ember-components/components/sl-progress-bar';
import sinon from 'sinon';

moduleForComponent( 'sl-progress-bar', 'Unit | Component | sl progress bar', {
    needs: [ 'component:sl-progress-bar-indicator' ],

    unit: true
});

const Theme = {
    DANGER: 'danger',
    DEFAULT: 'default',
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning'
};

test( 'Expected Mixins are present', function( assert ) {
    assert.ok(
        TooltipEnabledMixin.detect( this.subject() ),
        'TooltipEnabled Mixin is present'
    );
});

test( 'Default property values', function( assert ) {
    const component = this.subject();

    assert.deepEqual(
        ThemeEnum,
        Theme,
        'Theme enum values are correct'
    );

    assert.strictEqual(
        component.get( 'animated' ),
        false,
        'animated: false'
    );

    assert.strictEqual(
        component.get( 'label' ),
        false,
        'label: false'
    );

    assert.strictEqual(
        component.get( 'striped' ),
        false,
        'striped: false'
    );

    assert.strictEqual(
        component.get( 'theme' ),
        Theme.DEFAULT,
        `theme: ${Theme.DEFAULT}`
    );

    assert.strictEqual(
        component.get( 'value' ),
        0,
        'value: 0'
    );
});

test( 'isLowPercentage() is only true when value < 50', function( assert ) {
    const component = this.subject({ value: 49 });

    assert.ok(
        component.get( 'isLowPercentage' ),
        'Value < 50 is low percentage'
    );

    Ember.run( function() {
        component.set( 'value', 50 );
    });

    assert.strictEqual(
        component.get( 'isLowPercentage' ),
        false,
        'Value >= 50 is not low percentage'
    );
});

test( 'Dependent keys are correct', function( assert ) {
    const component = this.subject();

    const isLowPercentageDependentKeys = [
        'value'
    ];

    const themeClassNameDependentKeys = [
        'theme'
    ];

    assert.deepEqual(
        component.isLowPercentage._dependentKeys,
        isLowPercentageDependentKeys,
        'Dependent keys are correct for isLowPercentage()'
    );

    assert.deepEqual(
        component.themeClassName._dependentKeys,
        themeClassNameDependentKeys,
        'Dependent keys are correct for themeClassName()'
    );
});

test( 'There are no references to Ember.$, $ or jQuery', function( assert ) {
    const jqueryAliasSpy = sinon.spy( window, '$' );
    const jquerySpy = sinon.spy( window, 'jQuery' );
    const emberJquery = sinon.spy( Ember, '$' );

    this.subject();
    this.render();

    const called = jqueryAliasSpy.called || jquerySpy.called || emberJquery.called;

    assert.notOk(
        called
    );

    window.$.restore();
    window.jQuery.restore();
    Ember.$.restore();
});
