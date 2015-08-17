import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        rowClick( row ) {
            window.console.log( 'Clicked', row );
        },

        sendLog( row ) {
            window.console.log( 'Record:', Ember.get( row, 'name' ) );
        },

        sortColumn( column, sortAscending ) {
            this.setProperties({
                sortAscending,
                'sortProperties': [ Ember.get( column, 'valuePath' ) ]
            });
        }
    },

    columns: new Ember.A([
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

    rowActions: new Ember.A([
        {
            label: 'Log',
            action: 'sendLog'
        }
    ]),

    totalCount: 6
});
