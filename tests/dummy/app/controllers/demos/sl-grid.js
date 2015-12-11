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

        sortColumn( column ) {
            const columns = this.get( 'columns' );
            const currentDir = Ember.get( column, 'sorted' );

            let sortDir = 'asc';
            if ( currentDir ) {
                sortDir = 'asc' === currentDir ? 'desc' : 'asc';
            }

            for ( let i = 0; i < columns.length; i++ ) {
                Ember.set( columns[ i ], 'sorted', null );
            }

            Ember.set( column, 'sorted', sortDir );

            let columnString = column[ 'valuePath' ];

            if ( sortDir !== 'asc' ) {
                columnString = `${columnString}:desc`;
            }

            this.set( 'sortProperties', [ columnString ] );
        }
    },

    columns: Ember.A([
        {
            extraClass: 'smallWidth',
            title: 'Color',
            valuePath: 'name'
        },
        {
            extraClass: 'smallWidth',
            primary: true,
            sortable: true,
            sorted: 'asc',
            title: 'Fruit',
            valuePath: 'fruit'
        },
        {
            extraClass: 'smallWidth',
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
