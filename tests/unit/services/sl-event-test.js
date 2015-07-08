import Ember from 'ember';
import SlEventService from 'sl-ember-components/services/sl-event';
import { moduleFor, tests } from 'ember-qunit';

let service = SlEventService.create();

moduleFor( 'service:sl-event', 'Unit | Service | sl event', {
    unit: true
});

test( "Listen, unlisten, and trigger methods' bindings work", function( assert ) {
    let message = 'Okay!';

    let Component = Ember.Component.extend({
        setup: Ember.on(
            'init',
            function() {
                assert.ok(
                    service.listen( 'test', this ),
                    'Listen binding setup correctly'
                );

                this.on( 'test', function( data ) {
                    assert.equal(
                        data,
                        message,
                        'Listen event callback triggered with expected data'
                    );
                });
            }
        ),

        teardown() {
            assert.ok(
                service.unlisten( 'test', this ),
                'Unlisten method called successfully'
            );
        }
    });

    assert.expect( 4 );

    let component = Component.create();

    assert.ok(
        service.trigger( 'test', message ),
        'Custom event triggered successfully'
    );

    component.teardown();

    // This test should not cause any other assertions
    service.trigger( 'test', message );
});
