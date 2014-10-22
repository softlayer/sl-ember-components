import Ember from 'ember';

/** @module sl-components/components/sl-loading-icon */
export default Ember.Component.extend({

    /**
     * The HTML element type for this component
     *
     * @property {Ember.String} tagName
     * @default  "span"
     */
    tagName: 'span',

    /**
     * Class names for the root element
     *
     * @property {Ember.Array} classNames
     */
    classNames: [ 'sl-loading-icon' ],

    /**
     * Class name bindings for the root element
     *
     * @property {Ember.Array} classNameBindings
     */
    classNameBindings: [ 'inverse:sl-loading-icon-light:sl-loading-icon-dark' ],

    /**
     * Whether to use the inverse (lighter colored) icon
     *
     * @property {boolean} inverse
     * @default  false
     */
    inverse: false
});
