import Ember from 'ember';
import { test, moduleFor } from 'ember-qunit';
import SlGridController from 'sl-components/mixins/sl-grid-controller';

var gridController = Ember.ArrayController.createWithMixins( SlGridController,
    {
        gridDefinition: {
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

module( 'Unit - mixins:sl-grid-controller: actions', {
    setup: function() {
        gridController = Ember.ArrayController.createWithMixins( SlGridController,
            {
                gridDefinition: {
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
    },

    teardown: function() {
        gridController.reorderColumn.restore();
        gridController.resetColumns.restore();        
    }
});


test( 'reorderColumn should call reorderColumn with correct arguments', function(){
    gridController.send( 'reorderColumn', 0, 1 );
    ok( gridController.reorderColumn.calledOnce, 'reorderColumn was called once' );
    ok( gridController.reorderColumn.calledWith( 0, 1 ), 'reorderColumn was called with correct args' );
});

test( 'resetColumns should call resetColumns', function(){
    gridController.send( 'resetColumns' );
    ok( gridController.resetColumns.calledOnce, 'resetColumns was called once' );
});

test( 'sortColumn should fail for unsortable column', function(){
    gridController.set('columns.firstObject.sortable', false);
    try{
        gridController.send( 'sortColumn', gridController.get( 'columns.firstObject' ) );
        ok( false, 'assertion did not catch unsortable column');
    } catch(e){
        ok( true, 'assertion did catch unsortable column' );
    }
});

test( 'sortColumn should change sort direction for column that is already sorted', function(){
    var column = gridController.get('columns.firstObject');
    
    column.setProperties( {'isSorted':true, sortAscending: true});

    gridController.send( 'sortColumn', gridController.get( 'columns.firstObject' ) );
    
    ok( !gridController.get( 'columns.firstObject.sortAscending'), 'sortAscending was toggled' );
});

test( 'sortColumn should sort a column, and unsort any other columns', function(){
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

test( 'toggleColumnVisibility should toggle hidden property on column', function(){
    var column = gridController.get('columns.firstObject'),
        gridStateChanged = false;

    gridController.on( 'gridStateChanged', function(){ gridStateChanged = true; });

    gridController.send( 'toggleColumnVisibility', column.get( 'key') );

    ok( column.get( 'hidden' ), 'column is now hidden' );

    ok( gridStateChanged, 'gridStateChanged was triggered' );

});


