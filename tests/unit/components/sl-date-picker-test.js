import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import ComponentInputId from 'sl-ember-components/mixins/sl-component-input-id';
import TooltipEnabled from 'sl-ember-components/mixins/sl-tooltip-enabled';
import sinon from 'sinon';

moduleForComponent( 'sl-date-picker', 'Unit | Component | sl date picker', {
    unit: true
});

test( 'Expected Mixins are present', function( assert ) {
    assert.ok(
        ComponentInputId.detect( this.subject() ),
        'sl-component-input-id mixin is present'
    );

    assert.ok(
        TooltipEnabled.detect( this.subject() ),
        'sl-tooltip-enabled mixin is present'
    );
});

test( 'Default properties are set correctly', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'autoClose' ),
        true,
        'autoClose is true by default'
    );

    assert.strictEqual(
        component.get( 'disabled' ),
        false,
        'disabled is false by default'
    );

    assert.strictEqual(
        component.get( 'format' ),
        null,
        'format is null by default'
    );

    assert.strictEqual(
        component.get( 'hasFocus' ),
        false,
        'hasFocus is false by default'
    );

    assert.strictEqual(
        component.get( 'helpText' ),
        null,
        'helpText is null by default'
    );

    assert.strictEqual(
        component.get( 'label' ),
        null,
        'label is null by default'
    );

    assert.strictEqual(
        component.get( 'locale' ),
        'en',
        'locale is "en" by default'
    );

    assert.strictEqual(
        component.get( 'placeholder' ),
        null,
        'placeholder is null by default'
    );

    assert.strictEqual(
        component.get( 'selectConstraint' ),
        true,
        'selectConstraint is ? by default'
    );

    assert.strictEqual(
        component.get( 'viewMode' ),
        'days',
        'viewMode is "days" by default'
    );
});

test( 'There are no references to Ember.$, $ or jQuery', function( assert ) {
    const jqueryAliasSpy = sinon.spy( window, '$' );
    const jquerySpy = sinon.spy( window, 'jQuery' );
    const emberJquery = sinon.spy( Ember, '$' );
    const startDate = window.moment( '2016-01-01' ).toDate();

    const component = this.subject();

    this.render();

    Ember.run( () => {
        component.set( 'startDate', startDate );
        component.trigger( 'willClearRender' );
    });

    const called = jqueryAliasSpy.called || jquerySpy.called || emberJquery.called;

    assert.notOk(
        called
    );

    window.$.restore();
    window.jQuery.restore();
    Ember.$.restore();
});

test( 'Dependent keys are correct', function( assert ) {
    const component = this.subject();

    const parseFormatsDependentKeys = [
        'locale'
    ];

    const valueDependentKeys = [
        'selectedDate',
        'formatString'
    ];

    const viewingDateDependentKeys = [
        'selectedDate'
    ];

    assert.deepEqual(
        component.parseFormats._dependentKeys,
        parseFormatsDependentKeys,
        'Dependent keys are correct for parseFormats()'
    );

    assert.deepEqual(
        component.value._dependentKeys,
        valueDependentKeys,
        'Dependent keys are correct for value()'
    );

    assert.deepEqual(
        component.viewingDate._dependentKeys,
        viewingDateDependentKeys,
        'Dependent keys are correct for viewingDate()'
    );
});
