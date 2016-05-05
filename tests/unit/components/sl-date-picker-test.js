import { moduleForComponent, test } from 'ember-qunit';
import ClassPrefix from 'sl-ember-components/mixins/class-prefix';
import ComponentInputId from 'sl-ember-components/mixins/sl-component-input-id';
import TooltipEnabled from 'sl-ember-components/mixins/sl-tooltip-enabled';
import globalLibraries from '../../helpers/sl/synchronous/global-libraries';

moduleForComponent( 'sl-date-picker', 'Unit | Component | sl date picker', {
    unit: true
});

test( 'Expected Mixins are present', function( assert ) {
    assert.ok(
        ClassPrefix.detect( this.subject() ),
        'ClassPrefix Mixin is present'
    );

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
        component.get( 'componentClass' ),
        'date-picker',
        'componentClass is set to date-picker'
    );

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

    assert.deepEqual(
        component.get( 'selectConstraint' ),
        {
            start: null,
            end: null
        },
        'selectConstraint is an object with start and end properties by default'
    );

    assert.strictEqual(
        component.get( 'viewMode' ),
        'days',
        'viewMode is "days" by default'
    );
});

test( 'Dependent keys are correct', function( assert ) {
    const component = this.subject();

    const formatStringDependentKeys = [
        'format'
    ];

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
        component.formatString._dependentKeys,
        formatStringDependentKeys,
        'Dependent keys are correct for formatString()'
    );

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
