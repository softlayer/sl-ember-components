import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';

/** @module sl-components/components/sl-calendar-checkbox */
export default Ember.Component.extend( TooltipEnabled, {

    /**
     * Attribute bindings for containing div
     *
     * @property {Ember.Array} attributeBindings
     */
    attributeBindings: [ 'checked', 'disabled' ],

    /**
     * Class names for containing div
     *
     * @property {Ember.Array} classNames
     */
    classNames: [ 'checkbox', 'form-group', 'sl-checkbox' ]

});
