import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import ComponentClassPrefix from 'sl-ember-components/mixins/sl-component-class-prefix';
import TooltipEnabledMixin from 'sl-ember-components/mixins/sl-tooltip-enabled';
import { Theme as ThemeEnum } from 'sl-ember-components/components/sl-progress-bar';
import sinon from 'sinon';

moduleForComponent( 'sl-progress-bar', 'Unit | Component | sl progress bar', {
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
        ComponentClassPrefix.detect( this.subject() ),
        'ComponentClassPrefix Mixin is present'
    );

    assert.ok(
        TooltipEnabledMixin.detect( this.subject() ),
        'TooltipEnabled Mixin is present'
    );
});

test( 'Default property values', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'componentClass' ),
        'progress-bar',
        'componentClass is set to progress-bar'
    );

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

    this.render();

    Ember.run( function() {
        component.set( 'value', 50 );
    });

    assert.strictEqual(
        component.get( 'isLowPercentage' ),
        false,
        'Value >= 50 is not low percentage'
    );
});

test( 'Event listener on "willInsertElement" calls "setCssWidth()"', function( assert ) {
    const spy = sinon.spy();
    const component = this.subject({
        setCssWidth: spy
    });

    Ember.run( () => component.trigger( 'willInsertElement' ) );

    assert.ok(
        spy.called,
        '"setCssWidth()" called when "willInsertElement" event occurs'
    );
});

test( '"setWidth()" calls the correct methods', function( assert ) {
    const spy = sinon.spy();
    const component = this.subject({
        setCssWidth: spy
    });

    component.setWidth();

    assert.ok(
        spy.called,
        '"setCssWidth()" called inside "setWidth()"'
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

test( 'Observer keys are correct', function( assert ) {
    const component = this.subject();

    const setWidthKeys = [
        'value'
    ];

    assert.deepEqual(
        component.setWidth.__ember_observes__,
        setWidthKeys,
        'Observer keys are correct for setWidth()'
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
