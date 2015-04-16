import Ember from 'ember';
import layout from '../templates/components/sl-panel';

/**
 * @module components
 * @class  sl-panel
 */
export default Ember.Component.extend({ layout,

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

});
