import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';
import { throwTooltipError } from '../utils/error';

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

    /**
     * init event hook
     *
     * @returns {undefined}
     */
    init() {
        this._super( ...arguments );
        this.initialize();
    },

    // -------------------------------------------------------------------------
    // Properties

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Check passed parameters on initialization
     *
     * @private
     * @throws {sl-ember-components/utils/error/tooltip} Thrown if 'title' or 'popover' is invalid
     * @returns {undefined}
     */
    initialize() {
        if ( 'string' !== Ember.typeOf( this.get( 'title' ) ) ) {
            throwTooltipError(
                'enableTooltip() and enablePopover() expect the parameter "title" and for it to be a string'
            );
        }

        if ( 'string' !== Ember.typeOf( this.get( 'popover' ) ) &&
             'undefined' !== Ember.typeOf( this.get( 'popover' ) ) ) {
            throwTooltipError(
                'enablePopover() expects the parameter "popover" and for it to be a string'
            );
        }
    }

});
