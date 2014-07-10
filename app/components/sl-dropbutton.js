import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        click: function ( action ) {
            this.triggerAction({ action: action });
        }
    },

    classNames: [ 'btn-group' ],

    theme: 'default',

    themeClassName: function () {
        return 'btn-' + this.get( 'theme' );
    }.property( 'theme' )
});
