import { moduleForComponent, test } from 'ember-qunit';
import globalLibraries from '../../helpers/sl/synchronous/global-libraries';

moduleForComponent( 'sl-calendar-day', 'Unit | Component | sl calendar day', {
    unit: true
});

test( 'Default property values', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'active' ),
        false,
        'active is false by default'
    );

    assert.strictEqual(
        component.get( 'ariaRole' ),
        'gridcell',
        'ariaRole is "gridcell" by default'
    );

    assert.strictEqual(
        component.get( 'date' ),
        null,
        'date is null by default'
    );

    assert.deepEqual(
        component.get( 'events' ),
        [],
        'events is an empty array by default'
    );

    assert.strictEqual(
        component.get( 'focused' ),
        false,
        'focused is false by default'
    );

    assert.strictEqual(
        component.get( 'new' ),
        false,
        'new is false by default'
    );

    assert.strictEqual(
        component.get( 'old' ),
        false,
        'old is false by default'
    );

    assert.strictEqual(
        component.get( 'restricted' ),
        false,
        'restricted is false by default'
    );
});

test( 'Action bindings sends action with expected day content', function( assert ) {
    assert.expect( 2 );

    const done = assert.async();

    const events = [
        {
            startDate: window.moment( [ 2015, 0, 1 ] )
        }
    ];

    const currentDate = window.moment( [ 2014, 1, 4 ] );

    this.subject({
        action: 'test',
        events: events,
        date: currentDate,
        targetObject: {
            test( date, eventData ) {
                assert.strictEqual(
                    date,
                    currentDate,
                    'Test action fired with proper date'
                );

                assert.strictEqual(
                    eventData,
                    events,
                    'Test action fired with expected events'
                );

                done();
            }
        }
    });

    this.$().trigger( 'click' );
});

test( 'Observer keys are correct', function( assert ) {
    const component = this.subject();

    const focusKeys = [
        'tabIndex'
    ];

    assert.deepEqual(
        component.focus.__ember_observes__,
        focusKeys,
        'Observer keys are correct for focus()'
    );
});

test( 'Dependent keys are correct', function( assert ) {
    const component = this.subject();

    const ariaSelectedDependentKeys = [
        'active'
    ];

    const hasEventsDependentKeys = [
        'events'
    ];

    const isTodayDependentKeys = [
        'date'
    ];

    const tabIndexDependentKeys = [
        'focused'
    ];

    assert.deepEqual(
        component.ariaSelected._dependentKeys,
        ariaSelectedDependentKeys,
        'Dependent keys are correct for ariaSelected()'
    );

    assert.deepEqual(
        component.hasEvents._dependentKeys,
        hasEventsDependentKeys,
        'Dependent keys are correct for hasEvents()'
    );

    assert.deepEqual(
        component.isToday._dependentKeys,
        isTodayDependentKeys,
        'Dependent keys are correct for isToday()'
    );

    assert.deepEqual(
        component.tabIndex._dependentKeys,
        tabIndexDependentKeys,
        'Dependent keys are correct for tabIndex()'
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
