import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-tooltip', 'Integration | Component | sl tooltip', {
    integration: true
});

test( '"Title" capabilities are supported', function( assert ) {
    this.set( 'title', 'test title' );

    this.render( hbs`
        {{sl-tooltip title=title}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).attr( 'data-original-title' ),
        this.get( 'title' ),
        'Title prop supported'
    );
});

test( '"Popover" capabilities are supported', function( assert ) {
    this.set( 'popover', 'Popover content' );
    this.set( 'title', 'test title' );

    this.render( hbs`
        {{sl-tooltip title=title popover=popover}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).data( 'bs.popover' ).options.content,
        this.get( 'popover' ),
        'Popover capabilites are supported'
    );
});
