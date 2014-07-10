import Ember from 'ember';

/**
 * Input component, based on EmberUI's InputComponent
 */
export default Ember.Component.extend({
    actions: {
        enter: function () {
            this.sendAction();
        }
    },

    classNames: [ 'form-group' ],

    inputId: function () {
        return this.get( 'elementId' ) + 'Input';
    }.property( 'elementId' ),

    type: 'text'
});
