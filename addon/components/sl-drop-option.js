import Ember from 'ember';
import layout from '../templates/components/sl-drop-option';

/**
 * @module
 * @augments ember/Component
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String} */
    ariaRole: 'menuitem',

    /** @type {String[]} */
    classNameBindings: [
        'isDivider:divider'
    ],

    /** @type {String[]} */
    classNames: [
        'sl-drop-option'
    ],

    /** @type {Object} */
    layout,

    /** @type {String} */
    tagName: 'li',

    // -------------------------------------------------------------------------
    // Actions

    /** @type {Object} */
    actions: {

        /**
         * Send the primary action, with `data` property if defined, when the
         * click action is triggered
         *
         * @function actions:click
         * @returns {undefined}
         */
        click() {
            this.sendAction( 'action', this.get( 'data' ), this.get( 'actionContext' ) );
        }

    },

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Additional context to be passed along with the action
     *
     * Can be used by the receiver of the action sent to determine which drop button
     * option was selected
     *
     * @type {?*}
     */
    actionContext: null,

    /**
     * Any data to be passed along with the action
     *
     * @type {?Object}
     */
    data: null,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Whether or not the option represents a divider placeholder
     *
     * @function
     * @returns {Boolean}
     */
    isDivider: Ember.computed(
        'label',
        function() {
            return Ember.isEmpty( this.get( 'label' ) );
        }
    )

});
