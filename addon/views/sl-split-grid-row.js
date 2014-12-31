import Ember from 'ember';

/**
 * @module views
 * @class  sl-split-grid-row
 */
export default Ember.View.extend( Ember.ViewTargetActionSupport, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * The HTML tag name for the view element
     *
     * @property {string} tagName
     * @default  "tr"
     */
    tagName: 'tr',

    /**
     * Class name bindings for the view element
     *
     * @property {array} classNameBindings
     */
    classNameBindings: [ 'active' ],

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    /**
     *
     */
    click: function() {
        this.triggerAction({
            action        : 'openDetailsPane',
            actionContext : this.get( 'content' ),
            target        : this.get( 'parentController' )
        });
    },

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether this is the active record row
     *
     * @property {boolean} active
     * @default  false
     */
    active: false

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
