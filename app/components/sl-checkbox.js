import Ember from 'ember';

/**
 * Checkbox component
 */
export default Ember.Component.extend({
    attributeBindings: [ 'checked', 'disabled' ],

    classNames: [ 'checkbox' ]
});
