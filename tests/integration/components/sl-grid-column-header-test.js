import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-grid-column-header', 'Integration | Component | sl grid column header', {
    integration: true
});

test( 'Default rendered state', function( assert ) {
    this.render( hbs`
        {{sl-grid-column-header}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sl-grid-column-header' ),
        'sl-grid-column-header class is present'
    );
});

test( 'Sorted icon class is applied correctly', function( assert ) {
    this.set( 'sortable', true );
    this.set( 'sorted', null );

    this.render( hbs`
        {{sl-grid-column-header sortable=sortable sorted=sorted}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sortable-column' ),
        true,
        'Component has class "sortable-column" with sortable column'
    );

    this.set( 'sorted', 'asc' );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'column-ascending' ),
        'column-ascending class is present when sorted is "asc"'
    );

    this.set( 'sorted', 'desc' );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'column-descending' ),
        'column-descending class is present when sorted is "desc"'
    );
});

test( 'Content is yielded', function( assert ) {
    this.render( hbs`
        {{#sl-grid-column-header}}
            test text
        {{/sl-grid-column-header}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).text().trim(),
        'test text',
        'Title was rendered correctly'
    );
});
