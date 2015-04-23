import Ember from 'ember';
import layout from '../templates/components/sl-panel';

/**
 * @module components
 * @class sl-panel
 * @augments Ember.Component
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    classNameBindings: [ 'loading:sl-loading' ],

    classNames: [ 'panel', 'panel-default', 'sl-panel' ],

    layout,

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Heading text to display in the header section of the panel
     *
     * @property {?String} heading
     * @default null
     */
    heading: null,

    /**
     * When true, the panel body will be in a loading state
     *
     * @property {Boolean} loading
     * @default false
     */
    loading: false

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
