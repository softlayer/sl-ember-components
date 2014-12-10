import Ember from 'ember';
import { test, moduleFor } from 'ember-qunit';
import SlGridController from 'sl-ember-components/mixins/sl-grid-controller';

var gridController;

module( 'Unit - mixins:sl-grid-controller', {
    setup: function() {
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

    teardown: function() {
        gridController.reorderColumn.restore();
        gridController.resetColumns.restore();
    }
});


test( 'action: reorderColumn should call reorderColumn with correct arguments', function(){
    gridController.send( 'reorderColumn', 0, 1 );
    ok( gridController.reorderColumn.calledOnce, 'reorderColumn was called once' );
    ok( gridController.reorderColumn.calledWith( 0, 1 ), 'reorderColumn was called with correct args' );
});

test( 'action: resetColumns should call resetColumns', function(){
    gridController.send( 'resetColumns' );
    ok( gridController.resetColumns.calledOnce, 'resetColumns was called once' );
});

test( 'action: sortColumn should fail for unsortable column', function(){
    gridController.set('columns.firstObject.sortable', false);
    try{
        gridController.send( 'sortColumn', gridController.get( 'columns.firstObject' ) );
        ok( false, 'assertion did not catch unsortable column');
    } catch(e){
        ok( true, 'assertion did catch unsortable column' );
    }
});

test( 'action: sortColumn should change sort direction for column that is already sorted', function(){
    var column = gridController.get('columns.firstObject');

    column.setProperties( {'isSorted':true, sortAscending: true});

    gridController.send( 'sortColumn', gridController.get( 'columns.firstObject' ) );

    ok( !gridController.get( 'columns.firstObject.sortAscending'), 'sortAscending was toggled' );
});

test( 'action: sortColumn should sort a column, and unsort any other columns', function(){
    var column = gridController.get('columns.firstObject'),
        gridStateChanged = false;

    column.setProperties( {'isSorted':true, sortAscending: true});

    gridController.on( 'gridStateChanged', function(){ gridStateChanged = true; });

    gridController.send( 'sortColumn', gridController.get( 'columns.1' ) );

    ok( !column.get('isSorted'), 'first column is not sorted anymore' );

    ok( gridController.get( 'columns.1.isSorted', 'second column is sorted' ));

    ok( gridController.get( 'columns.1.sortAscending', 'second column is sorted ascending' ));

    ok( true, 'gridStateChanged was triggered' );
});

test( 'action: toggleColumnVisibility should toggle hidden property on column', function(){
    var column = gridController.get('columns.firstObject'),
        gridStateChanged = false;

    gridController.on( 'gridStateChanged', function(){ gridStateChanged = true; });

    gridController.send( 'toggleColumnVisibility', column.get( 'key') );

    ok( column.get( 'hidden' ), 'column is now hidden' );

    ok( gridStateChanged, 'gridStateChanged was triggered' );

});

test( 'observer: initialize, calls loadGridDefinition', function(){
    ok( gridController.loadGridDefinition, 'loadGridDefinition was called after init');

});

test( 'observer: onColumnWidthsChange, gets fired after width change', function(){
    gridController.set( 'columns.0.width', '100');
    ok( gridController.onColumnWidthsChange.called, 'onColumnWidthsChange was called after width change');
});

test( 'observer: onItemCountPerPageChange, triggers gridStateChanged', function(){
    var gridStateChanged = false;
    gridController.on( 'gridStateChanged', function(){
        gridStateChanged = true;
    });
    gridController.set( 'itemCountPerPage', 100 );
    ok( gridStateChanged, 'gridStateChanged was triggered');
});

test( 'property: columnCount', function(){
    equal( gridController.get('columnCount'), 2, 'column count equals num of columns');
});

test( 'property: visibleColumns', function(){
    equal( gridController.get('visibleColumns'), 2, 'column count equals num of visible columns');
});

test( 'property: visibleColumns, 1 hidden', function(){
    gridController.set( 'columns.0.hidden', true );
    equal( gridController.get('visibleColumns'), 1, 'column count equals num of visible columns');
});

test( 'method: loadGridDefinition', function(){
    equal( Ember.typeOf( gridController.get('grid') ), 'instance', 'loadGridDefinition created the grid object' );
});

test( 'method: reorderColumn', function(){
    var secondColumn = gridController.get('columns.1');

    gridController.reorderColumn( 1, 0 );

    equal( gridController.get( 'columns.0') , secondColumn, 'columns was moved from pos 1 to pos 0');
});

test( 'method: resetColumns', function(){
    gridController.set( 'columns.0.width', '100');
    gridController.resetColumns();
    ok( ! gridController.get( 'columns.0.width' ), 'column 0 was reset' );
});

test( 'method: sortAscending', function(){
    equal( Ember.typeOf( gridController.get( 'sortAscending' ) ), "undefined", 'sortAscending is undefined' );
    gridController.send( 'sortColumn', gridController.get('columns.0') );
    ok( gridController.get( 'sortAscending' ), 'sortAscending was set' );
});

test( 'method: sortProperties', function(){
    equal( gridController.get( 'sortProperties.length' ), 0, 'no initial sort properties');
    gridController.send( 'sortColumn', gridController.get('columns.0') );
    equal( gridController.get( 'sortProperties' ), gridController.get( 'columns.0.key' ), 'sort properties set to key of sorted column');
});

test( 'method: totalWidthHints', function(){
    equal( gridController.get( 'totalWidthHints'), 2, 'totalWidthHints set to initial count');
});
