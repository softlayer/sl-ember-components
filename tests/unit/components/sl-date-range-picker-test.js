import { moduleForComponent, test } from 'ember-qunit';
import ClassPrefix from 'sl-ember-components/mixins/class-prefix';
import ComponentInputId from 'sl-ember-components/mixins/sl-component-input-id';
import globalLibraries from '../../helpers/sl/synchronous/global-libraries';

moduleForComponent(
    'sl-date-range-picker',
    'Unit | Component | sl date range picker',
    {
        needs: [
            'component:sl-date-picker'
        ],

        unit: true
    }
);

test( 'Expected Mixins are present', function( assert ) {
    assert.ok(
        ClassPrefix.detect( this.subject() ),
        'ClassPrefix Mixin is present'
    );

    assert.ok(
        ComponentInputId.detect( this.subject() ),
        'sl-component-input-id mixin is present'
    );
});

test( 'Default property values are set correctly', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'componentClass' ),
        'date-range-picker',
        'componentClass is set to date-range-picker'
    );

    assert.strictEqual(
        component.get( 'endDate' ),
        null,
        'endDate is null by default'
    );

    assert.strictEqual(
        component.get( 'endDatePlaceholder' ),
        null,
        'endDatePlaceholder is null by default'
    );

    assert.strictEqual(
        component.get( 'format' ),
        null,
        'format is null by default'
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

    assert.deepEqual(
        component.get( 'selectConstraint' ),
        {
            start: null,
            end: null
        },
        'selectConstraint is an object with start and end properties by default'
    );

    assert.strictEqual(
        component.get( 'startDate' ),
        null,
        'startDate is null by default'
    );

    assert.strictEqual(
        component.get( 'startDatePlaceholder' ),
        null,
        'startDatePlaceholder is null by default'
    );
});

test( 'Earliest end date is based on selectConstraint and startDate', function( assert ) {
    const component = this.subject();

    const startConstraint = window.moment( [ 2015, 0, 1 ] );
    const startDate = window.moment( [ 2015, 1, 1 ] );

    assert.strictEqual(
        component.get( 'startSelectConstraint' ).start,
        null,
        'Earliest end date is null by default'
    );

    component.set( 'selectConstraint', {
        start: startConstraint,
        end: null
    } );

    assert.strictEqual(
        component.get( 'startSelectConstraint' ).start,
        startConstraint,
        'Earliest end date is selectConstraint.start if there is one'
    );

    component.set( 'startDate', startDate );

    assert.strictEqual(
        component.get( 'startSelectConstraint' ).start,
        startDate,
        'Earliest end date is startDate if there is one'
    );
});

test( 'Latest start date is based on selectConstraint and endDate', function( assert ) {
    const component = this.subject();

    const endConstraint = window.moment( [ 2015, 1, 1 ] );
    const endDate = window.moment( [ 2015, 0, 1 ] );

    assert.strictEqual(
        component.get( 'endSelectConstraint' ).end,
        null,
        'Latest start date is null by default'
    );

    component.set( 'selectConstraint', {
        start: null,
        end: endConstraint
    } );

    assert.strictEqual(
        component.get( 'endSelectConstraint' ).end,
        endConstraint,
        'Latest start date is selectConstraint.end if there is one'
    );

    component.set( 'endDate', endDate );

    assert.strictEqual(
        component.get( 'endSelectConstraint' ).end,
        endDate,
        'Latest start date is endDate if there is one'
    );
});

test( 'label is accepted as a parameter', function( assert ) {
    const labelText = 'lorem ipsum';
    const component = this.subject({ label: labelText });

    assert.equal(
        this.$( 'label' ).html(),
        labelText,
        'label element was created with label parameter text'
    );

    assert.equal(
        this.$( 'label' ).prop( 'for' ),
        component.get( 'inputId' ),
        'label element has the correct for property'
    );

    assert.equal(
        this.$( 'label' ).prop( 'for' ),
        this.$( '.sl-daterange-start-date input' ).prop( 'id' ),
        'label is used for start date input'
    );
});

test( 'Dependent keys are correct', function( assert ) {
    const component = this.subject();

    const endSelectConstraintDependentKeys = [
        'endDate',
        'selectConstraint'
    ];

    const startSelectConstraintDependentKeys = [
        'startDate',
        'selectConstraint'
    ];

    assert.deepEqual(
        component.endSelectConstraint._dependentKeys,
        endSelectConstraintDependentKeys,
        'Dependent keys are correct for endSelectConstraint()'
    );

    assert.deepEqual(
        component.startSelectConstraint._dependentKeys,
        startSelectConstraintDependentKeys,
        'Dependent keys are correct for startSelectConstraint()'
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
