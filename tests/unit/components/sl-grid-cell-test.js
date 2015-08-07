import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-grid-cell', 'Unit | Component | sl grid cell', {
    unit: true
});

const defaultColumn = { valuePath: 'value' };
const defaultRow = { value: 'Test' };

test( 'Column alignment class is applied', function( assert ) {
    const column = Object.create( defaultColumn );

    this.subject({ column, row: defaultRow });

    assert.equal(
        this.$().hasClass( 'text-right' ),
        false,
        'Default component does not have right-alignment class'
    );

    Ember.run( () => {
        Ember.set( column, 'align', 'right' );
    });

    assert.ok(
        this.$().hasClass( 'text-right' ),
        'Component has expected class "text-right" with right-aligned column'
    );
});

test( 'Primary column class is applied', function( assert ) {
    const column = Object.create( defaultColumn );

    this.subject({ column, row: defaultRow });

    assert.equal(
        this.$().hasClass( 'primary-column' ),
        false,
        'Default component does not have primary column class'
    );

    Ember.run( () => {
        Ember.set( column, 'primary', true );
    });

    assert.ok(
        this.$().hasClass( 'primary-column' ),
        'Component has expected class "primary-column" with primary' +
        ' column definition'
    );
});

test( 'Column size values are supported', function( assert ) {
    const column = Object.create( defaultColumn );
    const component = this.subject({ column, row: defaultRow });

    assert.equal(
        Ember.typeOf( component.get( 'sizeClass' ) ),
        'null',
        'Default component sizeClass value is null'
    );

    assert.equal(
        this.$().hasClass( 'column-small' ),
        false,
        'Default component does not have "column-small" class'
    );

    Ember.run( () => {
        Ember.set( column, 'size', 42 );
    });

    assert.equal(
        this.$().width(),
        42,
        'Setting column size to a number is supported'
    );

    Ember.run( () => {
        Ember.set( column, 'size', 'small' );
    });

    assert.ok(
        this.$().hasClass( 'column-small' ),
        'Setting column size to a valid string value is supported'
    );
});

test( 'Click event action is supported', function( assert ) {
    this.subject({
        column: defaultColumn,
        onClick: 'test',
        row: defaultRow,

        targetObject: {
            test( row ) {
                assert.equal(
                    row,
                    defaultRow,
                    'Click event sent expected value'
                );
            }
        }
    });

    this.$().trigger( 'click' );
});

test( 'Content value is handled for valuePath', function( assert ) {
    this.subject({ column: defaultColumn, row: defaultRow });

    assert.equal(
        Ember.$.trim( this.$().text() ),
        defaultRow.value,
        'Component content is expected value'
    );
});
