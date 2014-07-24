import Ember from 'ember';
import TooltipEnabled from '../mixins/tooltip-enabled';

/**
 * @module components
 * @class sl-checkbox
 */
export default Ember.Component.extend( TooltipEnabled, {

    /**
     * Attribute bindings for containing div
     * @property {array} attributeBindings
     */
    attributeBindings: [ 'checked', 'disabled' ],

    /**
     * Class names for containing div
     * @property {array} classNames
     */
    classNames: [ 'checkbox', 'form-group', 'sl-checkbox' ]
});
