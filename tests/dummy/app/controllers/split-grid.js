import Ember from 'ember';

export default Ember.ArrayController.extend({

    actions: {

        nextPage: function() {
            console.log( 'Requesting next page of data' );
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

    count: Ember.computed.alias( 'content.length' ),

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
