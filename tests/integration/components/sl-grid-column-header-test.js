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
    const sortable = true;
    let sorted = null;

    this.set( 'sortable', sortable );
    this.set( 'sorted', sorted );

    this.render( hbs`
        {{sl-grid-column-header sortable=sortable sorted=sorted}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sortable-column' ),
        true,
        'Component has class "sortable-column" with sortable column'
    );

    sorted = 'asc';
    this.set( 'sorted', sorted );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'column-ascending' ),
        'column-ascending class is present when sorted is "asc"'
    );

    sorted = 'desc';
    this.set( 'sorted', sorted );

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

test( 'Extra class is applied to column header', function( assert ) {
    const extraClass = 'testClass';

    this.set( 'extraClass', extraClass );

    this.render( hbs`
        {{sl-grid-column-header extraClass=extraClass}}
    ` );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'testClass' ),
        'Extra class was applied to column header'
    );
});
