import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';

moduleForComponent( 'sl-grid-cell', 'Integration | Component | sl grid cell', {
    integration: true
});

const defaultColumn = Ember.Object.extend({
    valuePath: 'value'
});

const defaultRow = Ember.Object.extend({
    value: 'Test'
});

const defaultTemplate = hbs`
    {{sl-grid-cell column=column row=row}}
`;

test( 'Column alignment class is applied', function( assert ) {
    const column = defaultColumn.create({
        align: 'right'
    });
    const row = defaultRow.create();

    this.set( 'column', column );
    this.set( 'row', row );

    this.render( defaultTemplate );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'text-right' ),
        'Component has expected class "text-right" with right-aligned column'
    );
});

test( 'Primary column class is applied', function( assert ) {
    const column = defaultColumn.create({
        primary: true
    });
    const row = defaultRow.create();

    this.set( 'column', column );
    this.set( 'row', row );

    this.render( defaultTemplate );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'primary-column' ),
        'Component has expected class "primary-column"'
    );
});

test( 'Content value is handled for valuePath', function( assert ) {
    const column = defaultColumn.create();
    const row = defaultRow.create();

    this.set( 'column', column );
    this.set( 'row', row );

    this.render( hbs`
        {{sl-grid-cell column=column row=row}}
    ` );

    assert.equal(
        this.$( '>:first-child' ).text().trim(),
        row.get( 'value' ),
        'row value matches content value'
    );
});

test( 'Clicking on grid-cell invokes onClick handler', function( assert ) {
    const column = defaultColumn.create();
    const row = defaultRow.create();
    const spyOnClick = sinon.spy();

    this.set( 'column', column );
    this.set( 'row', row );

    this.on( 'onClick', spyOnClick );

    this.render( hbs`
        {{sl-grid-cell column=column row=row onClick="onClick"}}
    ` );

    this.$( '>:first-child' ).click();

    assert.ok(
        spyOnClick.called,
        'onClick action handler was called'
    );
});

test( 'Column size is applied when column size is a number or string', function( assert ) {

    let column = defaultColumn.create();
    const row = defaultRow.create();

    column.set( 'size', 42 );

    this.set( 'column', column );
    this.set( 'row', row );

    this.render( defaultTemplate );

    assert.equal(
        this.$( '>:first-child' ).width(),
        42,
        'Setting column size to a number is supported'
    );

    column = defaultColumn.create();
    column.set( 'size', 'small' );
    this.set( 'column', column );

    this.render( defaultTemplate );

    assert.ok(
        this.$( '>:first-child' ).hasClass( 'column-small' ),
        'Setting column size to a valid string value adds appropriate class'
    );
});
