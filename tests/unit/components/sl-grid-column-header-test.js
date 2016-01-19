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
    const sortable = true;
    const sorted = null;

    const component = this.subject({ sortable, sorted });

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

    Ember.run( () => component.set( 'sorted', 'asc' ) );

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

    Ember.run( () => component.set( 'sorted', 'desc' ) );

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
    const sortable = false;

    const targetObject = {
        test() {
            assert.ok(
                false,
                'Bound click action was fired without a valid sortable column'
            );
        }
    };

    const component = this.subject({
        column,
        sortable,
        onClick: 'test',
        targetObject
    });

    assert.expect( 1 );

    const done = assert.async();

    // This click should not cause the initial assertion to run
    this.$().trigger( 'click' );

    Ember.run( () => {
        component.set( 'sortable', true );

        targetObject.test = function( passedColumn ) {
            assert.equal(
                passedColumn,
                column,
                'onClick passed expected column definition'
            );

            done();
        };
    });

    this.$().trigger( 'click' );
});

test( 'Dependent keys are correct', function( assert ) {
    const component = this.subject();

    const sortedClassDependentKeys = [
        'sortable',
        'sorted'
    ];

    assert.deepEqual(
        component.sortedClass._dependentKeys,
        sortedClassDependentKeys
    );
});
