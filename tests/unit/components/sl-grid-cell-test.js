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

const defaultColumn = Ember.Object.extend();

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

test( 'alignmentClass() returns correct alignment value', function( assert ) {
    const column = defaultColumn.create();
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
    const column = defaultColumn.create();
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

test( 'style() returns the correct value', function( assert ) {
    const column = defaultColumn.create();
    const component = this.subject({
        column: column
    });

    assert.strictEqual(
        component.get( 'style' ).string,
        '',
        'style() is an empty string when column size is not set'
    );

    column.set( 'size', 100 );

    assert.strictEqual(
        component.get( 'style' ).string,
        'width: 100px;',
        'style() returns a correct style value when a number is set'
    );

    column.set( 'size', 'notNumber' );

    assert.strictEqual(
        component.get( 'style' ).string,
        '',
        'style() returns an empty string when size is not a number'
    );
});

test( 'contentValue() returns the correct value', function( assert ) {
    const column = defaultColumn.create({
        valuePath: 'name'
    });

    let row = Ember.Object.extend().create({
        name: 'test'
    });

    const component = this.subject({
        column,
        row
    });

    assert.strictEqual(
        component.get( 'contentValue' ),
        row.name,
        'contentValue() returned correct result for row'
    );

    row = Ember.Object.extend().create({
        model: {
            name: 'anotherTest'
        }
    });

    Ember.run( () => {
        component.set( 'row', row );
    });

    assert.strictEqual(
        component.get( 'contentValue' ),
        row.get( 'model.name' ),
        'contentValue() returns model data when row model is set'
    );
});

test( 'Click event action is supported', function( assert ) {
    const defaultColumn = { valuePath: 'value' };
    const defaultRow = { value: 'Test' };

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

test( 'Dependent keys are correct', function( assert ) {
    const component = this.subject();

    const alignmentClassDependentKeys = [
        'column.align'
    ];

    const contentValueDependentKeys = [
        'column',
        'row'
    ];

    const sizeClassDependentKeys = [
        'column.size'
    ];

    assert.deepEqual(
        component.alignmentClass._dependentKeys,
        alignmentClassDependentKeys,
        'Dependent keys are correct for alignmentClass()'
    );

    assert.deepEqual(
        component.contentValue._dependentKeys,
        contentValueDependentKeys,
        'Dependent keys are correct for contentValue()'
    );

    assert.deepEqual(
        component.sizeClass._dependentKeys,
        sizeClassDependentKeys,
        'Dependent keys are correct for sizeClass()'
    );
});
