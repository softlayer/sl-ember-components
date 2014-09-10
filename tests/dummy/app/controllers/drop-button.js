import Ember from 'ember';

export default Ember.ArrayController.extend({
    actions: {
        setDanger: function () {
            this.set( 'selectedTheme', 'danger' );
        },

        setInfo: function () {
            this.set( 'selectedTheme', 'info' );
        },

        setWarning: function () {
            this.set( 'selectedTheme', 'warning' );
        },

        setSuccess: function () {
            this.set( 'selectedTheme', 'success' );
        }
    },

    selectedTheme: 'info'
});