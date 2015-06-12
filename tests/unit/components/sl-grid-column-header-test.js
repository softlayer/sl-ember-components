import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent( 'sl-grid-column-header', 'Unit | Component | sl grid column header', {
    unit: true
});

test( 'Sortable column class is present when column is sortable', function( assert ) {
    var column = {};

    this.subject({ column });

    assert.equal(
        this.$().hasClass( 'sortable-column' ),
        false,
        'Default component with non-sortable column does not have "sortable-column" class'
    );

    Ember.run( () => {
        Ember.set( column, 'sortable', true );
    });

    assert.ok(
        this.$().hasClass( 'sortable-column' ),
        true,
        'Component has class "sortable-column" with sortable column'
    );
});

test( 'Sorted class is present when column is in sorted state', function( assert ) {
    var column = {};

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

test( 'Sort icon is set correctly for sortable columns', function( assert ) {
    var column = { sortable: true },
        component = this.subject({ column });

    assert.equal(
        component.get( 'sortIconClass' ),
        'fa-sort',
        'Component has expected class "fa-sort" with sortable column'
    );

    Ember.run( () => {
        Ember.set( column, 'sortAscending', true );
    });

    assert.equal(
        component.get( 'sortIconClass' ),
        'fa-sort-asc',
        'Component has expected class "fa-sort-asc" with ascending sorted column'
    );

    Ember.run( () => {
        Ember.set( column, 'sortAscending', false );
    });

    assert.equal(
        component.get( 'sortIconClass' ),
        'fa-sort-desc',
        'Component has expected class "fa-sort-desc" with descending sorted column'
    );
});

test( 'Click event returns column with sortable column', function( assert ) {
    var column = {};
    var targetObject = {
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
