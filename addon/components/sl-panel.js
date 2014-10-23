import Ember from 'ember';

/** @module sl-components/componetns/sl-panel */
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
    classNameBindings: [ 'isLoading:sl-loading' ],

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
     * When true, the panel body will be in a loading state
     *
     * @property {boolean} isLoading
     * @default  false
     */
    isLoading: false

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    // -------------------------------------------------------------------------
    // Private Methods

});
