import Ember from 'ember';
import layout from '../templates/components/sl-calendar-year';

/**
 * @module components
 * @class  sl-calendar-year
 */
export default Ember.Component.extend({ layout,

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * HTML tag name for the component's root element
     *
     * @property {Ember.String} tagName
     * @default  "span"
     */
    tagName: 'span',

    /**
     * Class name bindings for the component's root element
     *
     * @property {Ember.Array} classNameBindings
     */
    classNameBindings: [ 'active', 'new', 'old' ],

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    /**
     * Send back primary action with this year value
     *
     * @function click
     * @returns  {void}
     */
    click() {
        this.sendAction( 'action', this.get( 'year' ) );
    }

    // -------------------------------------------------------------------------
    // Properties

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
