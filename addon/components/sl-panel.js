import Ember from 'ember';

/**
 * @module components
 * @class  sl-panel
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * Class name bindings for the panel component
     *
     * @property {array} classNameBindings
     */
    classNameBindings: [ 'loading:sl-loading' ],

    /**
     * Class names for the panel container
     *
     * @property {array} classNames
     */
    classNames: [ 'panel', 'panel-default', 'sl-panel' ],

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Heading text to display in the header section of the panel
     *
     * @property {Ember.String} heading
     * @default  null
     */
    heading: null,

    /**
     * When true, the panel body will be in a loading state
     *
     * @property {boolean} isLoading
     * @default  false
     */
    loading: false

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
