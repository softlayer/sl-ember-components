import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';

/**
 * @module
 * @augments ember/Component
 * @augments module:mixins/sl-tooltip-enabled
 */
export default Ember.Component.extend( TooltipEnabled, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String} */
    tagName: 'span',

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Check passed parameters on initialization
     *
     * @function
     * @throws {ember.assert} Thrown if 'title' is not a string
     * @throws {ember.assert} Thrown if 'popover' is provided and not a string
     * @returns {undefined}
     */
    initialize: Ember.on(
        'init',
        function() {
            if ( Ember.typeOf( this.get( 'title' ) ) !== 'string' ) {
                throw new Ember.Error(
                    'enableTooltip() and enablePopover() expect the parameter "title" and for it to be a string'
                );
            }

            if ( Ember.typeOf( this.get( 'popover' ) ) !== 'string' &&
                 Ember.typeOf( this.get( 'popover' ) ) !== 'undefined' ) {
                throw new Ember.Error(
                    'enablePopover() expects the parameter "popover" and for it to be a string'
                );
            }
        }
    )

    // -------------------------------------------------------------------------
    // Methods

});
