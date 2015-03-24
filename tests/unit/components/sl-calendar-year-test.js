import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-calendar-year', 'Unit - component: sl-calendar-year' );

test( 'Default state is not active, new, or old', function( assert ) {
    let component  = this.subject(),
        $component = this.render();

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
        $component.hasClass( 'active' ),
        false,
        'Default rendered component does not have class "active"'
    );

    assert.strictEqual(
        $component.hasClass( 'new' ),
        false,
        'Default rendered component does not have class "new"'
    );

    assert.strictEqual(
        $component.hasClass( 'old' ),
        false,
        'Default rendered component does not have class "old"'
    );
});

test( 'Click event sends action with year value', function( assert ) {
    let exampleYear = 2000,
        component = this.subject({
            action: 'test',

            targetObject: {
                test: year => {
                    assert.strictEqual( year, exampleYear, 'Received year' );
                }
            },

            year: exampleYear
        }),
        $component = this.render();

    assert.expect( 1 );

    $component.trigger( 'click' );
});
