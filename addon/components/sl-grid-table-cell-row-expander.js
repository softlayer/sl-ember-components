import Ember from 'ember';
import SlGridTableCell from './sl-grid-table-cell';

/**
 * @module components
 * @class sl-grid-table-cell-row-expander
 */
export default SlGridTableCell.extend({

    /**
     * Action triggered when cell is clicked
     *
     * @method click
     */
    click: function() {
        this.toggleProperty( 'row.rowExpanderIsOpen' );
    },

    /**
     * Class names array for root element
     *
     * @property {array} classNames
     */
    classNames: [ 'sl-grid-table-cell-expander' ],

    /**
     * Whether the row expander is open
     *
     * @property {boolean} expanded
     */
    expanded: Ember.computed.bool( 'row.rowExpanderIsOpen' )
});
