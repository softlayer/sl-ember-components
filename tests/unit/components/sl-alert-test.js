import Ember from 'ember';
import { click, moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-alert', 'Unit - component:sl-alert' );

test( 'it exists', function() {
    ok( this.subject() );
});

test( 'dismiss event is fired correctly', function() {
    var component = this.subject(),
        $component = this.append(),
        targetObject = {
            dismiss: function() {
                ok( true );
            }
        };

    expect( 1 );

    component.set( 'targetObject', targetObject );

    $component.find( 'button.close' ).trigger( 'click' );
});
