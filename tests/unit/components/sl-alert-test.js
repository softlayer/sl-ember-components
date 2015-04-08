import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-alert', 'Unit - component: sl-alert' );

test( 'ARIA role is applied', function( assert ) {
    assert.equal( this.$().attr( 'role' ), 'alert' );
});

test( 'Dismissable option allows dismissal', function( assert ) {
    var component  = this.subject({ dismissable: true });

    assert.strictEqual(
        component.get( 'dismissable' ),
        true,
        'Component is dismissable'
    );

    assert.ok( this.$( 'button.close' ), 'Close button is rendered' );

    assert.strictEqual(
        this.$().hasClass( 'alert-dismissable' ),
        true,
        'Dismissable indicator class is applied'
    );
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
        });

    this.$( 'button.close' ).trigger( 'click' );
});

test( 'Theme class is applied', function( assert ) {
    var component  = this.subject({ theme: 'success' });

    assert.ok( this.$().hasClass( 'alert-success' ), 'Theme class is applied' );
});

test( 'Default classes are applied', function( assert ) {
    var component  = this.subject();

    assert.ok( this.$().hasClass( 'alert' ), 'Has class "alert"' );
    assert.ok( this.$().hasClass( 'sl-alert' ), 'Has class "sl-alert"' );
});

test( 'Not dismissable by default', function( assert ) {
    var component  = this.subject();

    assert.strictEqual(
        component.get( 'dismissable' ),
        false,
        'Component is not dismissable'
    );

    assert.equal(
        this.$( 'button.close' ).length,
        0,
        'Close button is not present'
    );

    assert.strictEqual(
        this.$().hasClass( 'alert-dismissable' ),
        false,
        'Component does not indicate dismissable'
    );
});
