import Ember from 'ember';

/**
 * @module components
 * @class sl-panel
 */
export default Ember.Component.extend({

    /**
     * Bound values for the panel component
     * @property {array} attributeBindings
     */
    attributeBindings: [ 'class', 'id' ],

    /**
     * Class names for the panel container
     * @property {array} classNames
     */
    classNames: [ 'panel', 'panel-default' ]
});