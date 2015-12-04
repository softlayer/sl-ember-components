import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent( 'sl-grid-column-header', 'Integration | Component | sl grid column header', {
    integration: true
});

const template = hbs`
    {{sl-grid-column-header column=column}}
`;

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
    let column = {
        sortable: true
    };

    this.render( template );

    this.set( 'column', column );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sortable-column' ),
        true,
        'Component has class "sortable-column" with sortable column'
    );

    column = {
        sortable: true,
        sortAscending: true
    };

    this.set( 'column', column );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'column-ascending' ),
        'column-ascending class is present when sortAscending is true'
    );

    column = {
        sortable: true,
        sortAscending: false
    };

    this.set( 'column', column );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'column-descending' ),
        'column-descending class is present when sortAscending is false'
    );
});

test( 'Column title is rendered when provided', function( assert ) {
    const column = {
        title: 'column title'
    };

    this.set( 'column', column );

    this.render( hbs`
        {{sl-grid-column-header column=column}}
    ` );

    assert.strictEqual(
        this.$( '>:first-child' ).text().trim(),
        column.title,
        'Title was rendered correctly'
    );
});
