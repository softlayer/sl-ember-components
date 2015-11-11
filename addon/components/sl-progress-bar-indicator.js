import Ember from 'ember';
import layout from '../templates/components/sl-progress-bar-indicator';
import CspStyle from 'ember-cli-csp-style/mixins/csp-style';

/**
 * @module
 * @augments ember/Component
 * @augments ember-cli-csp-style/mixins/csp-style
*/
export default Ember.Component.extend( CspStyle, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    attributeBindings: [
        'ariaValueMin:aria-valuemin',
        'ariaValueMax:aria-valuemax',
        'value:aria-valuenow',
        'role'
    ],

    /** @type {String[]} */
    classNames: [
        'progress-bar'
    ],

    /** @type {String[]} */
    classNameBindings: [
        'striped:progress-bar-striped',
        'animated:active',
        'themeClassName'
    ],

    /** @type {Object} */
    layout,

    /** @type {String[]} */
    styleBindings: [
        'value:width[%]'
    ],

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Defines the minimum value allowed for the progress bar
     *
     * @type {Number}
     */
    ariaValueMin: 0,

    /**
     * Defines the maximum value allowed for the progress bar
     *
     * @type {Number}
     */
    ariaValueMax: 100,

    /**
     * Sets the role for an element that displays the progress bar
     *
     * @type {String}
     */
    role: 'progressbar'

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
