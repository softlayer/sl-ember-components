import Ember from 'ember';

export default Ember.ArrayController.extend({

    actions: {

        sortColumn: function( column, direction ) {
            console.log( 'Sorting', column, 'by', direction );
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
    ]

});
