import Ember from 'ember';

export default Ember.ArrayController.extend({
    actions: {
        setDanger: function () {
            this.set( 'selectedTheme', 'danger' );
        },

        setDefault: function () {
            this.set( 'selectedTheme', 'default' );
        },

        setInfo: function () {
            this.set( 'selectedTheme', 'info' );
        },

        setPrimary: function () {
            this.set( 'selectedTheme', 'primary' );
        },

        setWarning: function () {
            this.set( 'selectedTheme', 'warning' );
        },

        setSuccess: function () {
            this.set( 'selectedTheme', 'success' );
        }
    },

    selectedTheme: 'primary'
});