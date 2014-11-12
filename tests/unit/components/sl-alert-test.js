import Ember from 'ember';
import { test, moduleForComponent } from 'ember-qunit';

moduleForComponent( 'sl-alert', 'Unit - component:sl-alert' );

test( 'ARIA role is applied', function() {
    var $component = this.append();

    equal( $component.attr( 'role' ), 'alert' );
});

test( 'Dismissable option allows dismissal', function() {
    var component  = this.subject({ dismissable: true }),
        $component = this.append();

    ok( component.dismissable === true, 'Component is dismissable' );
    ok( $component.find( 'button.close' ), 'Close button is rendered' );
    ok( $component.hasClass( 'alert-dismissable' ), 'Dismissable indicator class is applied' );
});

test( 'Dismiss action is handled', function() {
    var component = this.subject({
            dismiss     : 'dismiss',
            dismissable : true,

            targetObject: {
                dismiss: function() {
                    ok( true, 'Bound dismiss action fired' );
                }
            }
        }),
        $component = this.append();

    $component.find( 'button.close' ).trigger( 'click' );
});

test( 'Theme class is applied', function() {
    var component  = this.subject({ theme: 'success' }),
        $component = this.append();

    ok( $component.hasClass( 'alert-success' ), 'Theme class is applied' );
});
