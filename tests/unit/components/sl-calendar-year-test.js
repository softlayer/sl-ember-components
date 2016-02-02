import { moduleForComponent, test } from 'ember-qunit';
import globalLibraries from '../../helpers/sl/synchronous/global-libraries';

moduleForComponent( 'sl-calendar-year', 'Unit | Component | sl calendar year', {
    unit: true
});

test( 'Default state is not active, new, or old', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'active' ),
        false,
        'Default component is not active'
    );

    assert.strictEqual(
        component.get( 'new' ),
        false,
        'Default component is not in new state'
    );

    assert.strictEqual(
        component.get( 'old' ),
        false,
        'Default component is not in old state'
    );

    assert.strictEqual(
        this.$().hasClass( 'active' ),
        false,
        'Default rendered component does not have class "active"'
    );

    assert.strictEqual(
        this.$().hasClass( 'new' ),
        false,
        'Default rendered component does not have class "new"'
    );

    assert.strictEqual(
        this.$().hasClass( 'old' ),
        false,
        'Default rendered component does not have class "old"'
    );
});

test( 'Click event sends action with year value', function( assert ) {
    assert.expect( 1 );

    const done = assert.async();

    const exampleYear = 2000;

    this.subject({
        action: 'test',

        targetObject: {
            test: ( year ) => {
                assert.strictEqual(
                    year,
                    exampleYear,
                    'Received year'
                );

                done();
            }
        },

        year: exampleYear
    });

    this.$().trigger( 'click' );
});

test( 'There are no references to Ember.$, $ or jQuery', function( assert ) {
    globalLibraries.setupSpies();

    const component = this.subject();

    this.render();

    globalLibraries.triggerEvents( component );

    assert.notOk(
        globalLibraries.called()
    );

    globalLibraries.restoreSpies();
});
