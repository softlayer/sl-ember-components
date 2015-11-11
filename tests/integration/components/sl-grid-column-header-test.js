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

test( 'Sorted class is present when column is in sorted state', function( assert ) {
    let column = {};

    this.set( 'column', column );

    this.render( template );

    assert.notOk(
        this.$( '>:first-child' ).hasClass( 'column-ascending' ),
        'column-ascending class is not present'
    );

    assert.notOk(
        this.$( '>:first-child' ).hasClass( 'column-descending' ),
        'column-descending class is not present'
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

test( 'Sortable column class is present when column is sortable', function( assert ) {
    let column = {};

    this.render( template );

    assert.equal(
        this.$( '>:first-child' ).hasClass( 'sortable-column' ),
        false,
        'Default component with non-sortable column does not have "sortable-column" class'
    );

    column = {
        sortable: true
    };

    this.set( 'column', column );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'sortable-column' ),
        true,
        'Component has class "sortable-column" with sortable column'
    );
});

test( 'Sorted icon class is applied correctly', function( assert ) {
    let column = {};

    this.render( template );

    assert.notOk(
        this.$( '>:first-child' ).hasClass( 'fa-sort' ),
        'Class fa-sort is not present by default'
    );

    column = {
        sortable: true
    };

    this.set( 'column', column );

    assert.ok(
        this.$( '>:first-child' ).find( 'i' ).hasClass( 'fa-sort' ),
        'Class fa-sort is present when column is sortable'
    );

    column = {
        sortable: true,
        sortAscending: true
    };

    this.set( 'column', column );

    assert.ok(
        this.$( '>:first-child' ).find( 'i' ).hasClass( 'fa-sort-asc' ),
        'Class fa-sort is present when column is sortable'
    );

    column = {
        sortable: true,
        sortAscending: false
    };

    this.set( 'column', column );

    assert.ok(
        this.$( '>:first-child' ).find( 'i' ).hasClass( 'fa-sort-desc' ),
        'Class fa-sort is present when column is sortable'
    );
});

test( 'column title is rendered when provided', function( assert ) {
    let column = {
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
