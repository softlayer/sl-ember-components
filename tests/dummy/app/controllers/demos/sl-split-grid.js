import Ember from 'ember';

export default Ember.ArrayController.extend({

    actions: {

        sortColumn: function( column, direction ) {
            this.setProperties({
                'sortAscending'  : direction === 'ascending',
                'sortProperties' : [ Ember.get( column, 'valuePath' ) ]
            });
        }

    },

    columns: [
        {
            primary   : true,
            title     : 'Color',
            valuePath : 'name'
        }, {
            size      : 'small',
            sortable  : true,
            title     : 'Fruit',
            valuePath : 'fruit'
        }, {
            size      : 'small',
            sortable  : true,
            title     : 'Hex Code',
            valuePath : 'hexCode'
        }
    ],

    count: Ember.computed.alias( 'content.length' ),

    rowActions: [ 'One', 'Two' ],

    totalCount: 6

});
