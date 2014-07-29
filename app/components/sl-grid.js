import Ember from 'ember';

/**
 * @module components
 * @class sl-grid
 */
export default Ember.Component.extend({

    /**
     * Class name bindings for the table element
     * @property {array} classNameBindings
     */
    classNameBindings: [ 'striped:table-striped' ],

    /**
     * Class names for the table element
     * @property {array} classNames
     */
    classNames: [ 'sl-grid', 'table' ],

    /**
     * The base tag type for the component
     * @property {string} tagName
     * @default "table"
     */
    tagName: 'table'
});
