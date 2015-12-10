import Ember from 'ember';

export default Ember.Controller.extend({
    sortProperties: [ 'fruit' ],
    sortedModel: Ember.computed.sort( 'model', 'sortProperties' ),

    actions: {
        rowClick( row ) {
            window.console.log( 'Clicked', row );
        },

        logName( row ) {
            window.console.log( 'Record:', Ember.get( row, 'name' ) );
        },

        sortColumn( column, sortAscending ) {
            let columnString = column[ 'valuePath' ];

            if ( !sortAscending ) {
                columnString = `${columnString}:desc`;
            }

            this.set( 'sortProperties', [ columnString ] );
        }
    },

    columns: Ember.A([
        {
            extraClass: 'small',
            title: 'Color',
            valuePath: 'name'
        },
        {
            extraClass: 'small',
            primary: true,
            sortable: true,
            title: 'Fruit',
            valuePath: 'fruit'
        },
        {
            extraClass: 'small',
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
