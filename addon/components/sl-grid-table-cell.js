import Ember from 'ember';
import SlGridTableCellResize from '../mixins/sl-grid-table-cell-resize';
import layout from '../templates/components/sl-grid-table-cell';

/**
 * @module components
 * @class  sl-grid-table-cell
 */
export default Ember.Component.extend( SlGridTableCellResize, { layout,

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * HTML tag name for the base element
     *
     * @property {Ember.String} tagName
     * @default  "td"
     */
    tagName: 'td',

    /**
     * Class name bindings for the root element
     *
     * @property {Ember.Array} classNameBindings
     */
    classNameBindings: [ 'cssClass' ],

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
            key    = Ember.get( column, 'source.key' ),
            row    = this.get( 'row' );

        return Ember.get( row, `source.model.${key}` )
            || Ember.get( column, 'defaultText' );
    })

    // -------------------------------------------------------------------------
    // Methods

});
