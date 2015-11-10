import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import { ColumnAlign as ColumnAlignEnum } from 'sl-ember-components/components/sl-grid-cell';
import { ColumnSize as ColumnSizeEnum } from 'sl-ember-components/components/sl-grid-cell';
import * as utils from 'sl-ember-components/utils/all';
import sinon from 'sinon';

moduleForComponent( 'sl-grid-cell', 'Unit | Component | sl grid cell', {
    unit: true
});

const ColumnAlign = Object.freeze({
    LEFT: 'left',
    RIGHT: 'right'
});

const ColumnSize = Object.freeze({
    LARGE: 'large',
    MEDIUM: 'medium',
    SMALL: 'small'
});

const defaultColumn = { valuePath: 'value' };
const defaultRow = { value: 'Test' };

test( 'Default property values', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'tagName' ),
        'td',
        'tagName is td'
    );

    assert.strictEqual(
        component.get( 'column' ),
        null,
        'column is null'
    );

    assert.strictEqual(
        component.get( 'row' ),
        null,
        'row is null'
    );
});

test( 'alignmentClass() returns correct alignment value', function( assert ) {
    const column = Ember.Object.extend().create();
    const component = this.subject({
        column: column
    });

    assert.strictEqual(
        component.get( 'alignmentClass' ),
        null,
        'alignment value is null when "align" property is not set on row'
    );

    column.set( 'align', ColumnAlignEnum.RIGHT );

    assert.strictEqual(
        component.get( 'alignmentClass' ),
        'text-right',
        'text-right is returned when alignment is set to right'
    );

    column.set( 'align', ColumnAlignEnum.LEFT );

    assert.strictEqual(
        component.get( 'alignmentClass' ),
        null,
        'null is returned when alignment is set to left'
    );

    const spy = sinon.spy( utils, 'warn' );
    column.set( 'align', 'invalidValue' );

    assert.strictEqual(
        component.get( 'alignmentClass' ),
        null,
        'null was returned when invalid alignment value provided'
    );

    assert.ok(
        spy.called,
        'warn was called when invalid value provided'
    );

    utils.warn.restore();
});

test( 'sizeClass() returns correct size value', function( assert ) {
    const column = Ember.Object.extend().create();
    const component = this.subject({
        column: column
    });

    assert.strictEqual(
        component.get( 'sizeClass' ),
        null,
        'size value is null when "size" property is not set on column'
    );

    for( const size in ColumnSizeEnum ) {
        const sizeValue = ColumnSizeEnum[ size ];
        column.set( 'size', sizeValue );

        assert.strictEqual(
            component.get( 'sizeClass' ),
            `column-${sizeValue}`,
            `Setting a size of ${sizeValue} returns column-${sizeValue}`
        );
    }

    const spy = sinon.spy( utils, 'warn' );
    column.set( 'size', 'invalidValue' );

    assert.strictEqual(
        component.get( 'sizeClass' ),
        'column-invalidValue',
        'size value is "column-invalidValue" when "size" property is set to an invalid value'
    );

    assert.ok(
        spy.called,
        'warn was called when invalid value provided'
    );

    utils.warn.restore();
});


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

test( 'ColumnSize and ColumnAlign values are correct', function( assert ) {
    assert.deepEqual(
        ColumnSizeEnum,
        ColumnSize,
        'Column size enum has correct values'
    );

    assert.deepEqual(
        ColumnAlignEnum,
        ColumnAlign,
        'Column align enum has correct values'
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
