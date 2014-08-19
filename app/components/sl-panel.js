import Ember from 'ember';

/**
 * @module components
 * @class sl-panel
 */
export default Ember.Component.extend({

    /**
     * Class name bindings for the panel component
     * @property {array} classNameBindings
     */
    classNameBindings: [ 'isLoading:sl-loading' ],

    /**
     * Class names for the panel container
     * @property {array} classNames
     */
    classNames: [ 'panel', 'panel-default', 'sl-panel' ],

    /**
     * When true, the panel body will be in a loading state
     * @property {boolean} isLoading
     * @default false
     */
    isLoading: false
});