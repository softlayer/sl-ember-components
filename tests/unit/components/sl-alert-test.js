import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-alert', 'Unit - component: sl-alert' );

test( 'ARIA role is applied', function( assert ) {
    var $component = this.render();

    assert.equal( $component.attr( 'role' ), 'alert' );
});

test( 'Dismissable option allows dismissal', function( assert ) {
    var component  = this.subject({ dismissable: true }),
        $component = this.render();

    assert.ok( component.dismissable === true, 'Component is dismissable' );
    assert.ok( $component.find( 'button.close' ), 'Close button is rendered' );
    assert.ok( $component.hasClass( 'alert-dismissable' ), 'Dismissable indicator class is applied' );
});

test( 'Dismiss action is handled', function( assert ) {
    var component = this.subject({
            dismiss     : 'dismiss',
            dismissable : true,

            targetObject: {
                dismiss: function() {
                    assert.ok( true, 'Bound dismiss action fired' );
                }
            }
        }),
        $component = this.render();

    $component.find( 'button.close' ).trigger( 'click' );
});

test( 'Theme class is applied', function( assert ) {
    var component  = this.subject({ theme: 'success' }),
        $component = this.render();

    assert.ok( $component.hasClass( 'alert-success' ), 'Theme class is applied' );
});
