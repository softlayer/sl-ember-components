import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';

moduleForComponent( 'sl-grid-row', 'Integration | Component | sl grid row', {
    integration: true
});

const defaultTemplate = hbs`
    {{sl-grid-row}}
`;

test( 'Default rendered state', function( assert ) {
    this.render( defaultTemplate );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sl-grid-row' ),
        'sl-grid-row class is present'
    );
});

test( 'Active row class is supported', function( assert ) {
    const row = {};

    this.set( 'row', row );
    this.set( 'active', false );

    this.render( hbs`
        {{sl-grid-row record=row active=active}}
    ` );

    assert.notOk(
        this.$( '>:first-child' ).hasClass( 'active' ),
        'Component with non-active state does not have "active" class'
    );

    this.set( 'active', true );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'active' ),
        'Component with active state has "active" class'
    );
});

test( 'onClick action handler is called when row is clicked', function( assert ) {
    const row = {};
    const spy = sinon.spy();

    this.set( 'row', row );
    this.on( 'onClick', spy );

    this.render( hbs`
        {{sl-grid-row record=row onClick="onClick"}}
    ` );

    this.$( '>:first-child' ).trigger( 'click' );

    assert.ok(
        spy.called
    );
});
