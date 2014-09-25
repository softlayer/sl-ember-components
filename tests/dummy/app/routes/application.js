import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel: function () {
        var translations = Ember.Object.create({
           'PAGINATION_DISPLAYING': 'Displaying',
           'DEVICE_LIST_PAGINATION_LABEL': 'Viewing {0} to {1} of {2} Devices',
           'DEVICE_LIST_PAGINATION_PER_PAGE': ' per page'
        });

        this.controllerFor( 'pagination' ).get( 'translateService' ).setDictionary( translations );
    }
});
