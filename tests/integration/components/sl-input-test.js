import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-input', 'Integration | Component | sl input', {
    integration: true
});

test( 'Default rendered state', function( assert ) {
    this.render( hbs`
        {{sl-input}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'form-group' ),
        'Has class "form-group"'
    );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sl-input' ),
        'Has class "sl-input"'
    );
});

test( 'for attribute value on label matches id of input', function( assert ) {
    this.render( hbs`
        {{sl-input label="test label"}}
    ` );

    const wrapper = this.$( '>:first-child' );

    assert.equal(
        wrapper.find( 'label' ).attr( 'for' ),
        wrapper.find( 'input' ).attr( 'id' )
    );
});
