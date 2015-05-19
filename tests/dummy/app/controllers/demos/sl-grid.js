import Ember from 'ember';

export default Ember.ArrayController.extend({

    actions: {

        rowClick( row ) {
            console.log( 'Clicked', row );
        },

        sortColumn( column, sortAscending ) {
            this.setProperties({
                sortAscending,
                'sortProperties': [ Ember.get( column, 'valuePath' ) ]
            });
        }

    },

    columns: Ember.A([
        {
            primary: true,
            size: 'small',
            title: 'Color',
            valuePath: 'name'
        }, {
            size: 'small',
            sortable: true,
            title: 'Fruit',
            valuePath: 'fruit'
        }, {
            size: 'small',
            sortable: true,
            title: 'Hex Code',
            valuePath: 'hexCode'
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
