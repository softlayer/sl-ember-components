import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';

moduleForComponent( 'sl-menu-item-show-all', 'Integration | Component | sl menu item show all', {
    integration: true
});

test( 'Default rendered state', function( assert ) {

    this.render( hbs`
        {{sl-menu-item-show-all}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).find( 'a' ).hasClass( 'sl-icon-show-all' ),
        'Has class "sl-icon-show-all"'
    );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sl-menu-show-all' ),
        'Has class "sl-menu-show-all"'
    );
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
