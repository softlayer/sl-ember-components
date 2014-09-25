import Ember from 'ember';

/**
 * @module components
 * @class sl-pagination-controls
 */
export default Ember.Component.extend({

    /**
     * Component actions hash
     *
     * @property {object} actions
     */
    actions: {

        /**
         * Action triggered for changing pages
         *
         * @method changePage
         * @param {number} page - The page number being changed to
         */
        changePage: function( page ) {
            this.sendAction( 'action', page ? page : this.get( 'currentPageInput' ));
        }
    },

    /**
     * Class names for root element
     *
     * @property {array} classNames
     */
    classNames: [ 'sl-pagination-controls' ],

    /**
     * Read-only binding to current page number
     *
     * @property {number} currentPageInput
     */
    currentPageInput: Ember.computed.oneWay( 'currentPage' ),

    /**
     * Whether the page input is disabled
     *
     * @property {boolean} currentPageInputDisabled
     * @default false
     */
    currentPageInputDisabled: Ember.computed.alias( 'disabled' ),

    /**
     * When true, the first link control is disabled
     *
     * @property {boolean} firstLinkDisabled
     * @default false
     */
    firstLinkDisabled: function() {
        return this.get( 'disabled' ) || this.get( 'currentPage' ) === 1;
    }.property( 'currentPage', 'disabled' ),

    /**
     * When true, the last link control is disabled
     *
     * @property {boolean} lastLinkDisabled
     * @default false;
     */
    lastLinkDisabled: Ember.computed.alias( 'nextLinkDisabled' ),

    /**
     * When true, the next link control is disabled
     *
     * @property {boolean} nextLinkDisabled
     * @default false
     */
    nextLinkDisabled: function() {
        return this.get( 'disabled' ) || this.get( 'currentPage' ) === this.get( 'totalPages' );
    }.property( 'currentPage', 'disabled', 'totalPages' ),

    /**
     * When true, the previous link control is disabled
     *
     * @property {boolean} prevLinkDisabled
     * @default false
     */
    prevLinkDisabled: Ember.computed.alias( 'firstLinkDisabled' ),

    /**
     * HTML tag name for the root element
     *
     * @property {string} tagName
     * @default "span"
     */
    tagName: 'span'
});
