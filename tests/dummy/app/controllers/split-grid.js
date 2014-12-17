import Ember from 'ember';

export default Ember.ArrayController.extend({

    actions: {

        nextPage: function() {
            var count      = this.get( 'content.length' ) + 1,
                newRecords = [],
                total      = count + 50;

            for ( var i = count; i < total; i++ ) {
                newRecords.push({
                    id        : Math.floor( Math.random() * 99999 ),
                    firstName : 'First' + i,
                    lastName  : 'Last' + i,
                    number    : Math.floor( Math.random() * 100 ),
                    title     : 'New record ' + i
                });
            }

            this.get( 'content' ).pushObjects( newRecords );
        }

    },

    columns: [
        {
            primary  : true,
            template : 'split-grid/title-cell',
            title    : 'Title'
        }, {
            size      : 'small',
            title     : 'ID',
            valuePath : 'id'
        }, {
            size      : 300,
            title     : 'Reporter',
            valuePath : 'fullName'
        }, {
            align    : 'right',
            size     : 100,
            template : 'split-grid/number-cell',
            title    : 'Number'
        }
    ],

    gridRowActions: [
        {
            action : 'alertRecord',
            label  : 'Alert'
        }, {
            action : 'logRecord',
            label  : 'Log'
        }
    ],

    totalCount: 150

});
