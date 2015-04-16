import Ember from 'ember';
import SlGridTableCell from './sl-grid-table-cell';
import layout from '../templates/components/sl-grid-table-cell-link';

/**
 * @module components
 * @class  sl-grid-table-cell-link
 */
export default SlGridTableCell.extend({ layout,

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    // -------------------------------------------------------------------------
    // Observers

    rowText: Ember.computed( 'column', 'row', function() {
        var column = this.get( 'column' ),
            key    = Ember.get( column, 'key' ),
            row    = this.get( 'row' );

        return Ember.get( row, `source.model.${key}` ) ||
               Ember.get( column, 'defaultText' );
    })

    // -------------------------------------------------------------------------
    // Methods

});
