import Ember from 'ember';

export default Ember.ArrayController.extend({
    actions: {
        alertRecord: function() {
            alert( 'alertRecord' );
        },

        logRecord: function() {
            console.log( 'logRecord' );
        }
    },

    columns: [
        {
            path: 'title',
            primary: true,
            title: 'Title'
        }, {
            path: 'id',
            title: 'ID',
            size: 'small'
        }
    ],

    gridRowActions: [
        {
            action: 'alertRecord',
            label: 'Alert'
        }, {
            action: 'logRecord',
            label: 'Log'
        }
    ]
});
