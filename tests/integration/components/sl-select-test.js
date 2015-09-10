import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-select', 'Integration | Component | sl select', {
    integration: true
});

test( 'for attribute value on label matches id of input', function( assert ) {
    this.render( hbs`
        {{sl-select label="test label"}}
    ` );

    const wrapper = this.$( '>:first-child' );

    assert.equal(
        wrapper.find( 'label' ).attr( 'for' ),
        wrapper.find( 'input' ).attr( 'id' )
    );
});