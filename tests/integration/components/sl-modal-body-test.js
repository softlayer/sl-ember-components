import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-modal-body', 'Integration | Component | sl modal body', {
    integration: true
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
