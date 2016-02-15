import { moduleForComponent, test } from 'ember-qunit';
import globalLibraries from '../../helpers/sl/synchronous/global-libraries';

moduleForComponent(
    'sl-calendar-month',
    'Unit | Component | sl calendar month', {
        unit: true
    }
);

test( 'Default state is inactive', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'active' ),
        false,
        'Component is not active'
    );

    assert.strictEqual(
        this.$().hasClass( 'active' ),
        false,
        'Component does not have "active" class'
    );
});

test( 'Active state is set correctly', function( assert ) {
    const component = this.subject({ active: true });

    assert.ok(
        component.get( 'active' ),
        'Component is active'
    );

    assert.ok(
        this.$().hasClass( 'active' ),
        '"active" class is present'
    );
});

test( 'Action binding sends action with month', function( assert ) {
    this.subject({
        action: 'test',
        month: 6,
        targetObject: {
            test( month ) {
                assert.strictEqual(
                    month,
                    6,
                    'Test action fired with expected month'
                );
            }
        }
    });

    assert.expect( 1 );

    this.$().trigger( 'click' );
});

test( 'Short name property is invalid without month', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'shortName' ),
        'Invalid date',
        'Invalid month results in invalid shortName'
    );
});

test( 'Short name property is defined with valid month', function( assert ) {
    const component = this.subject({ month: 1 });

    assert.strictEqual(
        component.get( 'shortName' ),
        'Jan',
        'Valid shortName with valid month'
    );
});

test( 'Dependent keys are correct', function( assert ) {
    const component = this.subject();

    const shortNameDependentKeys = [
        'month'
    ];

    assert.deepEqual(
        component.shortName._dependentKeys,
        shortNameDependentKeys,
        'Dependent keys are correct for shortName()'
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
