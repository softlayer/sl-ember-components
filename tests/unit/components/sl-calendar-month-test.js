import { moduleForComponent, test } from 'ember-qunit';
import globalLibraries from '../../helpers/sl/synchronous/global-libraries';

moduleForComponent(
    'sl-calendar-month',
    'Unit | Component | sl calendar month', {
        unit: true
    }
);

test( 'Default property values', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'active' ),
        false,
        'active is false by default'
    );

    assert.strictEqual(
        component.get( 'month' ),
        null,
        'month is null by default'
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
