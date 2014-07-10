import Ember from 'ember';

/**
 * Modal (simple) component
 */
export default Ember.Component.extend({
    acceptText: 'Accept',

    actions: {
        accept: function ( context ) {
            this.sendAction( 'accept', context );
        },

        close: function ( context ) {
            this.sendAction( 'close', context );
        }
    },

    classNames: [ 'modal', 'fade' ]
});
