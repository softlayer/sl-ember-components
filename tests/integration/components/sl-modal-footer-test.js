import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-modal-footer', 'Integration | Component | sl modal footer', {
    integration: true
});

test( 'Default rendered state', function( assert ) {
    this.render( hbs`
        {{sl-modal-footer}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).filter( '.modal-footer' ).length,
        1,
        'Footer class exists'
    );
});

test( 'Content is yielded', function( assert ) {
    this.render( hbs`
        {{#sl-modal-footer}}
            <div class="test"></div>
        {{/sl-modal-footer}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.test' ).length,
        1,
        'Content is yielded correctly'
    );

    this.render( hbs`
        {{sl-modal-footer}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).find( '[data-dismiss="modal"]' ).length > 0,
        'Default footer content and button rendered when not yielded'
    );
});

test( 'Close button text is customizable', function( assert ) {
    const buttonText = 'Custom Close Text';

    this.set( 'buttonText', buttonText );

    this.render( hbs`
        {{sl-modal-footer buttonText=buttonText}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( 'button[data-dismiss="modal"]' ).text().trim(),
        buttonText
    );
});
