import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        change: function ( value ) {
            this.set( 'value', value );
        }
    },

    classNames: [ 'form-group' ],

    didInsertElement: function () {
        this.get( 'selectedInput' ).prop( 'checked', true );
    },

    inline: false,

    isSelected: function () {
        console.log( 'isSelected', arguments );
        return false;
    },

    selectedInput: function () {
        return this.$( 'input[value="' + this.get( 'value' ) + '"]' );
    }.property( 'value' )
});
