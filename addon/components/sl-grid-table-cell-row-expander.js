import Ember from 'ember';
import SlGridTableCell from './sl-grid-table-cell';

/** @module sl-components/components/sl-grid-table-cell-row-expander */
export default SlGridTableCell.extend({

    /**
     * Class names array for root element
     *
     * @property {Ember.Array} classNames
     */
    classNames: [ 'sl-grid-table-cell-expander' ],

    /**
     * Action triggered when cell is clicked
     *
     * @method click
     * @returns {void}
     */
    click: function() {
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
});
