import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        click: function ( action ) {
            this.triggerAction({ action: action });
        }
    },

    buttonType: 'default',

    buttonTypeClass: function () {
        return 'btn-' + this.get( 'buttonType' );
    }.property( 'buttonType' ),

    classNames: [ 'btn-group' ]
});
