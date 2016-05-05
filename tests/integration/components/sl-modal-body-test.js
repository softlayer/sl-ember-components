import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-modal-body', 'Integration | Component | sl modal body', {
    integration: true
});

test( 'Default rendered state', function( assert ) {
    this.render( hbs`
        {{sl-modal-body}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sl-ember-components-modal-body' ),
        'Component has class "sl-ember-components-modal-body"'
    );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'modal-body' ),
        'Component has class "modal-body"'
    );
});

test( 'Content is yielded', function( assert ) {
    this.render( hbs`
        {{#sl-modal-body}}
           <div class="test"></div>
        {{/sl-modal-body}}`
    );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.test' ).length,
        1
    );
});
