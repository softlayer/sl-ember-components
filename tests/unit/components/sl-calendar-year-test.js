import { moduleForComponent, test } from 'ember-qunit';
import globalLibraries from '../../helpers/sl/synchronous/global-libraries';

moduleForComponent( 'sl-calendar-year', 'Unit | Component | sl calendar year', {
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
        component.get( 'new' ),
        false,
        'new is false by default'
    );

    assert.strictEqual(
        component.get( 'old' ),
        false,
        'old is false by default'
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
        globalLibraries.called(),
        'Global libraries are not referenced in component'
    );

    globalLibraries.restoreSpies();
});
