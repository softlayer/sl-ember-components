import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return Ember.Object.create({
           'PAGINATION_DISPLAYING': 'Displaying',
           'DEVICE_LIST_PAGINATION_LABEL': 'Viewing {0} to {1} of {2} Devices',
           'DEVICE_LIST_PAGINATION_PER_PAGE': ' per page'
        });
    },

    setupController: function( controller, model ) {
        this._super.apply( this, arguments );

        this.controllerFor( 'pagination' ).get( 'translateService' ).setDictionary( model );
    }
});
