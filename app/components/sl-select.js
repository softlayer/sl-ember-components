import Ember from 'ember';

/**
 * @module components
 * @class sl-select
 */
export default Ember.Component.extend({

    /**
     * Bindings for the root element's attribute values
     */
    attributeBindings: [ 'multiple', 'placeholder', 'title' ],

    /**
     * Triggered when an option is changed/selected
     * @method change
     * @param {event} event - The change event from the selected option
     */
    change: function ( event ) {
        this.set( 'value', event.val );
    },

    /**
     * Class names for the root element
     */
    classNames: [ 'form-control', 'sl-select' ],

    /**
     * Set up select2 initialization after the element is inserted in the DOM
     * @method didInsertElement
     */
    didInsertElement: function () {
        this.set( 'select', this.$().select2() );
        this.updateSelection();
    },

    /**
     * The select jQuery binding
     * @property {object} select
     * @default null
     */
    select: null,

    /**
     * Currently selected option element
     * @property {object} selectedOption
     * @default null
     */
    selectedOption: null,

    /**
     * Name of the tag type for root element
     * @property {string} tagName
     * @default 'select'
     */
    tagName: 'select',

    /**
     * Updates the internal select2 selection value
     * @method updateSelection
     */
    updateSelection: Ember.observer( 'value', function () {
        this.select.select2( 'val', this.get( 'value' ));
    }),

    /**
     * Teardown to prevent memory leaks
     * @method willDestroyElement
     */
    willDestroyElement: function () {
        this.select.off( 'change' ).select2( 'destroy' );
    }
});
