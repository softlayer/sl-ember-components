import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-modal-footer', 'Integration | Component | sl modal footer', {
    integration: true
});

test( 'Footer class exists', function( assert ) {
    this.render( hbs`
        {{sl-modal-footer}}
    `);

    assert.equal(
        this.$( '.modal-footer' ).length,
        1
    );
});

test( 'Close button exists', function( assert ) {
    this.render( hbs`
        {{sl-modal-footer}}
    `);

    assert.equal(
        this.$( 'button[data-dismiss="modal"]' ).length,
        1
    );
});

test( 'Close button text is customizable', function( assert ) {
    const buttonText = 'Custom Close Text';

    this.set( 'buttonText', buttonText );

    this.render( hbs`
        {{sl-modal-footer buttonText=buttonText}}
    `);

    assert.equal(
        this.$( 'button[data-dismiss="modal"]' ).text().trim(),
        buttonText
    );
});

test( 'Content is yielded', function( assert ) {
    this.render( hbs`
        {{#sl-modal-footer}}
            <div class="test"></div>
        {{/sl-modal-footer}}
    `);

    assert.equal(
        this.$( '.test' ).length,
        1
    );
});
