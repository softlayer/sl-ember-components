import Ember from 'ember';

export default Ember.Controller.extend({
    init: function () {
        this._super();

        var self = this;

        setTimeout( function () {
            self.set( 'isLoading', false );
        }, 5000 );
    },

    isLoading: true
});