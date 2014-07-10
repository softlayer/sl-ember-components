import Ember from 'ember';

export default Ember.Component.extend({
    classNameBindings: [ 'themeClassName' ],

    classNames: [ 'label' ],

    themeClassName: function () {
        return 'label-' + this.get( 'theme' );
    }.property( 'theme' ),

    tagName: 'span',

    theme: 'default'
});
