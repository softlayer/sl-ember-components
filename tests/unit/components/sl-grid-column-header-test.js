import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-grid-column-header', 'Unit | Component | sl grid column header', {
    unit: true
});

test( 'Default property values', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'tagName' ),
        'th',
        'Tag name is th'
    );

    assert.strictEqual(
        component.get( 'column' ),
        null,
        'column is null'
    );
});

test( 'Sorted class is present when column is in sorted state', function( assert ) {
    const column = {};

    this.subject({ column });

    assert.equal(
        this.$().hasClass( 'column-ascending' ),
        false,
        'Class "column-ascending" is not present with non-sorted column'
    );

    assert.equal(
        this.$().hasClass( 'column-descending' ),
        false,
        'Class "column-descending" is not present with non-sorted column'
    );

    Ember.run( () => {
        Ember.set( column, 'sortable', true );
        Ember.set( column, 'sortAscending', true );
    });

    assert.equal(
        this.$().hasClass( 'column-descending' ),
        false,
        'Class "column-descending" is not present with ascending-sorted column'
    );

    assert.equal(
        this.$().hasClass( 'column-ascending' ),
        true,
        'Class "column-ascending" is present with ascending-sorted column'
    );

    Ember.run( () => {
        Ember.set( column, 'sortAscending', false );
    });

    assert.equal(
        this.$().hasClass( 'column-ascending' ),
        false,
        'Class "column-ascending" is not present with descending-sorted column'
    );

    assert.equal(
        this.$().hasClass( 'column-descending' ),
        true,
        'Class "column-descending" is present with descending-sorted column'
    );
});

test( 'Click event returns column with sortable column', function( assert ) {
    const column = {};

    const targetObject = {
        test() {
            assert.ok(
                false,
                'Bound click action was fired without a valid sortable column'
            );
        }
    };

    this.subject({
        column,
        onClick: 'test',
        targetObject
    });

    assert.expect( 1 );

    // This click should not cause the initial assertion to run
    this.$().trigger( 'click' );

    Ember.run( () => {
        Ember.set( column, 'sortable', true );

        targetObject.test = function( passedColumn ) {
            assert.equal(
                passedColumn,
                column,
                'onClick passed expected column definition'
            );
        };
    });

    this.$().trigger( 'click' );
});

test( 'Dependent keys are correct', function( assert ) {
    const component = this.subject();

    const sortedClassDependentKeys = [
        'column.sortAscending',
        'column.sortable'
    ];

    assert.deepEqual(
        component.sortedClass._dependentKeys,
        sortedClassDependentKeys
    );
});
