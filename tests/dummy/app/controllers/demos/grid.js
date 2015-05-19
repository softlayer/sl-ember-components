import Ember from 'ember';

export default Ember.ArrayController.extend({

    actions: {

        sortColumn( column, ascending ) {
            this.setProperties({
                sortAscending: ascending,
                sortProperties: [ column.valuePath ]
            });
        }

    },

    columns: Ember.A([
        {
            size: 'small',
            sortable: true,
            title: 'Last Name',
            valuePath: 'lastName'
        }, {
            size: 'small',
            sortable: true,
            title: 'First Name',
            valuePath: 'firstName'
        }, {
            size: 'medium',
            title: 'Email Address',
            valuePath: 'email'
        }
    ])

});
