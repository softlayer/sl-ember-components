import Ember from 'ember';

export default Ember.Route.extend({
    setupController: function() {
        this.controllerFor( 'pagination' ).get( 'translateService' ).setDictionary({
           'PAGINATION_DISPLAYING'           : 'Displaying',
           'DEVICE_LIST_PAGINATION_LABEL'    : 'Viewing {0} to {1} of {2} Devices',
           'DEVICE_LIST_PAGINATION_PER_PAGE' : ' per page'
        });
    }
});
