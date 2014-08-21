import Ember from 'ember';

/**
 * @module components
 * @class sl-loading-icon
 */
export default Ember.Component.extend({

    /**
     * Bindings for component's class names
     * @property {array} classNameBindings
     */
    classNameBindings: [ 'inverse:sl-loading-icon-light:sl-loading-icon-dark' ],

    /**
     * Class names for the loading icon component
     * @property {array} classNames
     */
    classNames: [ 'sl-loading-icon' ],

    /**
     * Whether to use the inverse (lighter colored) icon
     * @property {boolean} inverse
     * @default false
     */
    inverse: false,

    /**
     * The HTML element type for this component
     * @property {string} tagName
     * @default "span"
     */
    tagName: 'span'
});