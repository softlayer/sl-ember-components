import Ember from 'ember';
import layout from '../templates/components/sl-grid-cell';
import containsValue from '../utils/containsValue';
import warn from '../utils/warn';

/**
 * Valid alignment values for columns
 *
 * @memberof module:addon/components/sl-grid-cell
 * @enum {String}
 * @property LEFT 'left'
 * @property RIGHT 'right'
 */
export const ColumnAlign = Object.freeze({
    LEFT: 'left',
    RIGHT: 'right'
});

/**
 * @module
 * @augments ember/Component
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    classNameBindings: [
        'alignmentClass',
        'column.primary:primary-column'
    ],

    /** @type {Object} */
    layout,

    /** @type {String} */
    tagName: 'td',

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    /**
     * @function
     * @returns {undefined}
     */
    click() {
        this.sendAction( 'onClick', this.get( 'record' ) );
    },

    // -------------------------------------------------------------------------
    // Properties

    /**
     * The column object, passed in through the sl-grid component
     *
     * @type {Object}
     */
    column: {},

    /**
     * The row record model instance, passed in through the sl-grid-component
     *
     * @type {Object}
     */
    record: {},

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Class name string based on align property
     *
     * @function
     * @returns {?String}
     */
    alignmentClass: Ember.computed(
        'column.align',
        function() {
            const align = this.get( 'column.align' );

            if ( !align ) {
                return null;
            }

            if ( !containsValue( align, ColumnAlign ) ) {
                warn( `Invalid column align value "${align}"` );
            }

            let alignment = null;

            if ( 'right' === align ) {
                alignment = 'text-right';
            }

            return alignment;
        }
    ),

    /**
     * The value for the cell's content, based on column's `valuePath` setting
     *
     * @function
     * @returns {String|undefined}
     */
    contentValue: Ember.computed(
        'column',
        'record',
        function() {
            const record = this.get( 'record' );
            if ( record ) {
                return Ember.get(
                    record.model || record,
                    this.get( 'column.valuePath' )
                );
            }
        }
    )

});
