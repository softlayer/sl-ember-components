import Ember from 'ember';

/**
 * @module components
 * @class sl-checkbox
 */
export default Ember.Component.extend({

    /**
     * Attribute bindings for containing div
     * @property {array} attributeBindings
     */
    attributeBindings: [ 'checked', 'disabled' ],

    /**
     * Class names for containing div
     * @property {array} classNames
     */
    classNames: [ 'checkbox', 'sl-checkbox' ]
});
