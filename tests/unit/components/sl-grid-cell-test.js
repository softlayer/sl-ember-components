import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import { ColumnAlign as ColumnAlignEnum } from 'sl-ember-components/components/sl-grid-cell';
import * as warn from 'sl-ember-components/utils/warn';
import sinon from 'sinon';

moduleForComponent( 'sl-grid-cell', 'Unit | Component | sl grid cell', {
    unit: true
});

const ColumnAlign = Object.freeze({
    LEFT: 'left',
    RIGHT: 'right'
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
        {},
        'column is an empty object'
    );

    assert.strictEqual(
        component.get( 'record' ),
        {},
        'record is an empty object'
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

    const spy = sinon.spy( warn, 'default' );
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

    warn.default.restore();
});

test( 'contentValue() returns the correct value', function( assert ) {
    const column = defaultColumn.create({
        valuePath: 'name'
    });

    let record = Ember.Object.extend().create({
        name: 'test'
    });

    const component = this.subject({
        column,
        record
    });

    assert.strictEqual(
        component.get( 'contentValue' ),
        record.name,
        'contentValue() returned correct result for row'
    );

    record = Ember.Object.extend().create({
        model: {
            name: 'anotherTest'
        }
    });

    Ember.run( () => {
        component.set( 'record', record );
    });

    assert.strictEqual(
        component.get( 'contentValue' ),
        record.get( 'model.name' ),
        'contentValue() returns model data when row model is set'
    );
});

test( 'Click event action is supported', function( assert ) {
    const defaultColumn = { valuePath: 'value' };
    const defaultRecord = { value: 'Test' };

    this.subject({
        column: defaultColumn,
        onClick: 'test',
        record: defaultRecord,

        targetObject: {
            test( record ) {
                assert.equal(
                    record,
                    defaultRecord,
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
        'record'
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
});
