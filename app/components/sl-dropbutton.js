import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        click: function ( action ) {
            this.triggerAction({ action: action });
        }
    },

    classNames: [ 'btn-group' ],

    type: 'default',

    typeClass: function () {
        return 'btn-' + this.get( 'type' );
    }.property( 'type' )
});
