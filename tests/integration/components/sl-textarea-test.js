import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-textarea', 'Integration | Component | sl textarea', {
    integration: true
});

test( 'for attribute value on label matches id of textarea', function( assert ) {
    this.render( hbs`
        {{sl-textarea label='test label'}}
    ` );

    const wrapper = this.$( '>:first-child' );

    assert.equal(
        wrapper.find( 'label' ).attr( 'for' ),
        wrapper.find( 'textarea' ).attr( 'id' )
    );
});
