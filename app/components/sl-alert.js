import Ember from 'ember';

export default Ember.Component.extend({
    attributeBindings: [ 'role' ],

    classNameBindings: [ 'typeClassName', 'dismissable:alert-dismissable' ],

    classNames: [ 'alert' ],

    dismissable: false,

    role: 'alert',

    type: 'info',

    typeClassName: function () {
        return 'alert-' + this.get( 'type' );
    }.property( 'type' )
});
