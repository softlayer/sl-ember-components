import Ember from 'ember';
import SlGridTableCell from './sl-grid-table-cell';

/** @module sl-components/components/sl-grid-table-cell-row-expander */
export default SlGridTableCell.extend({

    /**
     * Class names array for root element
     *
     * @property {array}       classNames
     * @type     {Ember.Array}
     */
    classNames: [ 'sl-grid-table-cell-expander' ],

    /**
     * Action triggered when cell is clicked
     *
     * @function click
     * @return   {void}
     */
    click: function() {
        this.toggleProperty( 'row.rowExpanderIsOpen' );
    },

    /**
     * Whether the row expander is open
     *
     * @property {boolean} expanded
     * @type     {boolean}
     */
    expanded: Ember.computed.bool( 'row.rowExpanderIsOpen' )
});
