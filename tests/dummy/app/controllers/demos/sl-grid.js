import Ember from 'ember';

export default Ember.ArrayController.extend({

    actions: {

        sortColumn( column, direction ) {
            this.setProperties({
                'sortAscending'  : direction === 'ascending',
                'sortProperties' : [ Ember.get( column, 'valuePath' ) ]
            });
        }

    },

    columns: Ember.A([
        {
            primary   : true,
            size      : 'small',
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
            valuePath : 'test'
        }
    ]),

    sayGoodbye() {
        console.log( 'Goodbye! from page' );
    },

    sayHello() {
        console.log( 'Hello! from page' );
    },

    totalCount: 6

});
