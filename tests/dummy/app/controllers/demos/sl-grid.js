import Ember from 'ember';

export default Ember.ArrayController.extend({
    actions: {
        rowClick( row ) {
            window.console.log( 'Clicked', row );
        },

        sendAlert( row ) {
            this.sayGoodbye();
            window.alert( 'Record: ' + Ember.get( row, 'name' ) );
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

    rowActions: Ember.A([
        {
            label: 'Alert',
            action: 'sendAlert'
        }, {
            label: 'Log',
            action: 'sendLog'
        }
    ]),

    sayGoodbye() {
        window.console.log( 'Goodbye! from page' );
    },

    sayHello() {
        window.console.log( 'Hello! from page' );
    },

    totalCount: 6
});
