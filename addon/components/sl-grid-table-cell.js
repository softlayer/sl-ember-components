import Ember from 'ember';

/**
 * @module components
 * @class sl-grid-table-cell
 */
export default Ember.Component.extend({

    /**
     * Class name bindings for the root element
     *
     * @property {array} classNameBindings
     */
    classNameBindings: [ 'cssClass' ],

    /**
     * HTML tag name for the base element
     *
     * @property {string} tagName
     * @default "td"
     */
    tagName: 'td'
});
