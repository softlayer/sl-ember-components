import Ember from 'ember';

export default Ember.Component.extend({
    attributeBindings: [ 'role' ],

    classNameBindings: [ 'themeClassName', 'dismissable:alert-dismissable' ],

    classNames: [ 'alert' ],

    dismissable: false,

    role: 'alert',

    theme: 'info',

    themeClassName: function () {
        return 'alert-' + this.get( 'theme' );
    }.property( 'theme' )
});
