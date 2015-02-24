import Ember from 'ember';
import SlGridController from 'sl-ember-components/mixins/sl-grid-controller';

var gridController;

module( 'Unit - mixin: sl-grid-controller', {
    beforeEach: function() {
        gridController = Ember.ArrayController.createWithMixins( SlGridController,
            {
                gridDefinition: {
                    options: {
                    },
                    columns: [
                        {
                            key: 'test1',
                            title: 'test 1',
                            sortable: true

                        },
                        {
                            key: 'test2',
                            title: 'test 2',
                            sortable: true
                        }
                    ]
                }
            } );
        sinon.spy( gridController, 'reorderColumn' );
        sinon.spy( gridController, 'resetColumns' );
        sinon.spy( gridController, 'loadGridDefinition' );
        sinon.spy( gridController, 'onColumnWidthsChange' );

    },

    afterEach: function() {
        gridController.reorderColumn.restore();
        gridController.resetColumns.restore();
    }
});

test( 'action: reorderColumn should call reorderColumn with correct arguments', function( assert ) {
    gridController.send( 'reorderColumn', 0, 1 );
    assert.ok( gridController.reorderColumn.calledOnce, 'reorderColumn was called once' );
    assert.ok( gridController.reorderColumn.calledWith( 0, 1 ), 'reorderColumn was called with correct args' );
});

test( 'action: resetColumns should call resetColumns', function( assert ) {
    gridController.send( 'resetColumns' );
    assert.ok( gridController.resetColumns.calledOnce, 'resetColumns was called once' );
});

test( 'action: sortColumn should fail for unsortable column', function( assert ) {
    gridController.set('columns.firstObject.sortable', false);
    try{
        gridController.send( 'sortColumn', gridController.get( 'columns.firstObject' ) );
        assert.ok( false, 'assertion did not catch unsortable column');
    } catch(e){
        assert.ok( true, 'assertion did catch unsortable column' );
    }
});

test( 'action: sortColumn should change sort direction for column that is already sorted', function( assert ) {
    var column = gridController.get('columns.firstObject');

    column.setProperties( {'isSorted':true, sortAscending: true});

    gridController.send( 'sortColumn', gridController.get( 'columns.firstObject' ) );

    assert.ok( !gridController.get( 'columns.firstObject.sortAscending'), 'sortAscending was toggled' );
});

test( 'action: sortColumn should sort a column, and unsort any other columns', function( assert ) {
    var column = gridController.get('columns.firstObject'),
        gridStateChanged = false;

    column.setProperties( {'isSorted':true, sortAscending: true});

    gridController.on( 'gridStateChanged', function(){ gridStateChanged = true; });

    gridController.send( 'sortColumn', gridController.get( 'columns.1' ) );

    assert.ok( !column.get('isSorted'), 'first column is not sorted anymore' );
    assert.ok( gridController.get( 'columns.1.isSorted', 'second column is sorted' ));
    assert.ok( gridController.get( 'columns.1.sortAscending', 'second column is sorted ascending' ));
    assert.ok( true, 'gridStateChanged was triggered' );
});

test( 'action: toggleColumnVisibility should toggle hidden property on column', function( assert ) {
    var column = gridController.get('columns.firstObject'),
        gridStateChanged = false;

    gridController.on( 'gridStateChanged', function(){ gridStateChanged = true; });

    gridController.send( 'toggleColumnVisibility', column.get( 'key') );

    assert.ok( column.get( 'hidden' ), 'column is now hidden' );
    assert.ok( gridStateChanged, 'gridStateChanged was triggered' );

});

test( 'observer: initialize, calls loadGridDefinition', function( assert ) {
    assert.ok( gridController.loadGridDefinition, 'loadGridDefinition was called after init');

});

test( 'observer: onColumnWidthsChange, gets fired after width change', function( assert ) {
    gridController.set( 'columns.0.width', '100');

    assert.ok( gridController.onColumnWidthsChange.called, 'onColumnWidthsChange was called after width change');
});

test( 'observer: onItemCountPerPageChange, triggers gridStateChanged', function( assert ) {
    var gridStateChanged = false;
    gridController.on( 'gridStateChanged', function(){
        gridStateChanged = true;
    });
    gridController.set( 'itemCountPerPage', 100 );

    assert.ok( gridStateChanged, 'gridStateChanged was triggered');
});

test( 'property: columnCount', function( assert ) {
    assert.equal( gridController.get('columnCount'), 2, 'column count equals num of columns');
});

test( 'property: visibleColumns', function( assert ) {
    assert.equal( gridController.get('visibleColumns'), 2, 'column count equals num of visible columns');
});

test( 'property: visibleColumns, 1 hidden', function( assert ) {
    gridController.set( 'columns.0.hidden', true );

    assert.equal( gridController.get('visibleColumns'), 1, 'column count equals num of visible columns');
});

test( 'method: loadGridDefinition', function( assert ) {
    assert.equal( Ember.typeOf( gridController.get('grid') ), 'instance', 'loadGridDefinition created the grid object' );
});

test( 'method: reorderColumn', function( assert ) {
    var secondColumn = gridController.get('columns.1');

    gridController.reorderColumn( 1, 0 );

    assert.equal( gridController.get( 'columns.0') , secondColumn, 'columns was moved from pos 1 to pos 0');
});

test( 'method: resetColumns', function( assert ) {
    gridController.set( 'columns.0.width', '100');
    gridController.resetColumns();

    assert.ok( ! gridController.get( 'columns.0.width' ), 'column 0 was reset' );
});

test( 'method: sortAscending', function( assert ) {
    equal( Ember.typeOf( gridController.get( 'sortAscending' ) ), "undefined", 'sortAscending is undefined' );
    gridController.send( 'sortColumn', gridController.get('columns.0') );

    assert.ok( gridController.get( 'sortAscending' ), 'sortAscending was set' );
});

test( 'method: sortProperties', function( assert ) {
    assert.equal( gridController.get( 'sortProperties.length' ), 0, 'no initial sort properties');

    gridController.send( 'sortColumn', gridController.get('columns.0') );

    assert.equal( gridController.get( 'sortProperties' ), gridController.get( 'columns.0.key' ), 'sort properties set to key of sorted column');
});

test( 'method: totalWidthHints', function( assert ) {
    assert.equal( gridController.get( 'totalWidthHints'), 2, 'totalWidthHints set to initial count');
});
