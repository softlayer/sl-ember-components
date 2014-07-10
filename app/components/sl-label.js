import Ember from 'ember';

export default Ember.Component.extend({
    classNameBindings: [ 'labelTypeClassName' ],

    classNames: [ 'label' ],

    labelTypeClassName: function () {
        return 'label-' + this.get( 'type' );
    }.property( 'type' ),

    tagName: 'span',

    type: 'primary'
});
