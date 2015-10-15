import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-modal-header', 'Integration | Component | sl modal header', {
    integration: true
});

test( 'Modal header class exists on child element', function( assert ) {
    this.render( hbs`
        {{sl-modal-header}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).filter( '.modal-header' ).length,
        1
    );
});

test( 'Setting title on header works', function( assert ) {
    const title = 'hello world';

    this.set( 'title', title );

    this.render( hbs`
        {{sl-modal-header title=title}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.modal-title' ).text(),
        title
    );
});

test( 'Content is yielded or not', function( assert ) {
    this.render( hbs`
        {{#sl-modal-header}}
            <div class="test"></div>
        {{/sl-modal-header}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.test' ).length,
        1,
        'Content is yielded correctly'
    );

    this.render( hbs`
        {{sl-modal-header}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).find( '[data-dismiss="modal"]' ).length > 0,
        'Default header content and close button rendered when not yielded'
    );
});

test( 'Modal title\'s id is set to ariaLabelledBy property value', function( assert ) {
    this.set( 'title', 'label test' );
    this.set( 'ariaLabelledBy', 'initial value' );

    this.render( hbs`
        {{sl-modal-header title=title ariaLabelledBy=ariaLabelledBy}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).find( '.modal-title' ).prop( 'id' ),
        this.get( 'ariaLabelledBy' )
    );
});
