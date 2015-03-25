import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-calendar', 'Unit - component: sl-calendar', {
    needs: [
        'component:sl-calendar-day',
        'component:sl-calendar-month',
        'component:sl-calendar-year'
    ]
});

test( 'Default class name is present', function( assert ) {
    var $component = this.render();

    assert.ok(
        $component.hasClass( 'sl-calendar' ),
        'Default rendered component has class "sl-calendar"'
    );
});

test( 'Locked property applies class', function( assert ) {
    var component  = this.subject(),
        $component = this.render();

    assert.strictEqual(
        $component.hasClass( 'sl-calendar-locked' ),
        false,
        'Default rendered component does not have class "sl-calendar-locked"'
    );

    Ember.run( () => {
        component.set( 'locked', true );
    });

    assert.ok(
        $component.hasClass( 'sl-calendar-locked' ),
        'Locked, rendered component has class "sl-calendar-locked"'
    );
});

test( 'Lock mode prevents changing state', function( assert ) {
    var component  = this.subject({ locked: true });

    this.render();

    // TODO: Finish tests
});
