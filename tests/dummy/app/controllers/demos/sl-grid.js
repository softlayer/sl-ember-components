import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        rowClick( row ) {
            window.console.log( 'Clicked', row );
        },

        logName( row ) {
            window.console.log( 'Record:', Ember.get( row, 'name' ) );
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
        },
        {
            size: 'small',
            sortable: true,
            title: 'Fruit',
            valuePath: 'fruit'
        },
        {
            size: 'small',
            sortable: true,
            title: 'Hex Code',
            valuePath: 'hexCode'
        }
    ]),

    rowActions: [
        {
            label: 'Log',
            action: 'sendLog'
        }
    ],

    totalCount: 6
});
