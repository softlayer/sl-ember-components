import Ember from 'ember';
import template from '../templates/components/sl-split-grid';

/**
 * @module components
 * @class sl-split-grid
 */
export default Ember.Component.extend({

    /**
     * The text label for the rows' actions buttons
     *
     * @property {string} actionsButtonLabel
     * @default "Actions"
     */
    actionsButtonLabel: 'Actions',

    /**
     * The text for the actions column's `style` attribute
     *
     * @property {string} actionsColumnStyle
     */
    actionsColumnStyle: function() {
        return 'width: ' + this.get( 'actionsColumnWidth' ) + 'px;';
    }.property( 'actionsColumnWidth' ),

    /**
     * The width of the actions column, in pixels
     *
     * @property {number} actionsColumnWidth
     * @default 123
     */
    actionsColumnWidth: 120,

    /**
     * The overall height of the split-grid, in pixels
     *
     * @property {number} height
     * @default 600
     */
    bodyHeight: 600,

    /**
     * Class names for the root element
     *
     * @property {array} classNames
     */
    classNames: [ 'sl-split-grid' ],

    /**
     * The component's layout template
     *
     * @property {function} layout
     */
    layout: template,

    /**
     * Resize the component to the set height value
     *
     * @method resize
     */
    resize: function() {
        this.$( '.sl-split-grid-body' ).height( this.get( 'bodyHeight' ));
    }.observes( 'bodyHeight' ).on( 'didInsertElement' ),

    /**
     * HTML tag name of the root element
     *
     * @property {string} tagName
     * @default "div"
     */
    tagName: 'div'
});
