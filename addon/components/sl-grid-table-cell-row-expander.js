import Ember from 'ember';
import SlGridTableCell from './sl-grid-table-cell';
import layout from '../templates/components/sl-grid-table-cell-row-expander';

/**
 * @module components
 * @class  sl-grid-table-cell-row-expander
 */
export default SlGridTableCell.extend({ layout,

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * Class names array for root element
     *
     * @property {Ember.Array} classNames
     */
    classNames: [ 'sl-grid-table-cell-expander' ],

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    /**
     * Action triggered when cell is clicked
     *
     * @function click
     * @returns  {void}
     */
    click() {
        this.toggleProperty( 'row.rowExpanderIsOpen' );
    },

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether the row expander is open
     *
     * @property {boolean} expanded
     */
    expanded: Ember.computed.bool( 'row.rowExpanderIsOpen' )

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
