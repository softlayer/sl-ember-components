import Ember from 'ember';
import TooltipEnabled from '../mixins/tooltip-enabled';

/**
 * @module components
 * @class sl-grid
 */
export default Ember.Component.extend( TooltipEnabled, {

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
