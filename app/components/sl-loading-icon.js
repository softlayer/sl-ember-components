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
    classNameBindings: [ 'large:sl-loading-icon-large' ],

    /**
     * Class names for the loading icon component
     * @property {array} classNames
     */
    classNames: [ 'sl-loading-icon' ],

    /**
     * When true, a class name is added to indicate that the icon should be of
     * the large variety.
     * @property {boolean} large
     * @default false
     */
    large: false,

    /**
     * The HTML element type for this component
     * @property {string} tagName
     * @default "span"
     */
    tagName: 'span'
});