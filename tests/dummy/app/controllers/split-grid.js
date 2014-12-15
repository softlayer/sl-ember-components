import Ember from 'ember';

export default Ember.ArrayController.extend({

    columns: [
        {
            path    : 'title',
            primary : true,
            title   : 'Title'
        }, {
            size     : 100,
            template : 'split-grid-number-cell',
            title    : 'Number'
        }, {
            path  : 'fullName',
            size  : 300,
            title : 'Reporter'
        }, {
            align : 'right',
            path  : 'id',
            size  : 'small',
            title : 'ID'
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
    ]

});
