import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';

moduleForComponent( 'sl-menu-item-show-all', 'Integration | Component | sl menu item show all', {
    integration: true
});

test( 'mouseEnter triggers calling of sendAction', function( assert ) {
    this.set( 'onMouseEnterSpy', sinon.spy() );

    this.render( hbs`
        {{sl-menu-item-show-all
            onMouseEnter=onMouseEnterSpy
        }}
    ` );

    this.$( '>:first-child' ).find( 'a' ).trigger( 'mouseenter' );

    assert.ok(
        this.get( 'onMouseEnterSpy' ).calledOnce,
        'sendAction() was triggered successfully'
    );
});
