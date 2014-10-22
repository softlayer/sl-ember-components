import Ember from 'ember';

/** @module sl-components/components/sl-pagination-controls */
export default Ember.Component.extend({

    /**
     * HTML tag name for the root element
     *
     * @property {Ember.String} tagName
     * @default  "span"
     */
    tagName: 'span',

    /**
     * Class names for root element
     *
     * @property {Ember.Array} classNames
     */
    classNames: [ 'sl-pagination-controls' ],

    /**
     * Component actions hash
     *
     * @property {Ember.Object} actions
     */
    actions: {

        /**
         * Action triggered for changing pages
         *
         * @function actions.changePage
         * @argument {number} page - The page number being changed to
         * @return {void}
         */
        changePage: function( page ) {
            this.sendAction( 'action', page ? page : this.get( 'currentPageInput' ) );
        }
    },

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
     * @default  false
     */
    currentPageInputDisabled: Ember.computed.alias( 'disabled' ),

    /**
     * When true, the last link control is disabled
     *
     * @property {boolean} lastLinkDisabled
     * @default  false;
     */
    lastLinkDisabled: Ember.computed.alias( 'nextLinkDisabled' ),

    /**
     * When true, the previous link control is disabled
     *
     * @property {boolean} prevLinkDisabled
     * @default  false
     */
    prevLinkDisabled: Ember.computed.alias( 'firstLinkDisabled' ),

    /**
     * When true, the first link control is disabled
     *
     * @function firstLinkDisabled
     * @observes currentPage, disabled
     * @return   {boolean}
     */
    firstLinkDisabled: function() {
        return this.get( 'disabled' ) || this.get( 'currentPage' ) === 1;
    }.property( 'currentPage', 'disabled' ),

    /**
     * When true, the next link control is disabled
     *
     * @function nextLinkDisabled
     * @observes currentPage, disabled, totalPages
     * @return   {boolean}
     */
    nextLinkDisabled: function() {
        return this.get( 'disabled' ) || this.get( 'currentPage' ) === this.get( 'totalPages' );
    }.property( 'currentPage', 'disabled', 'totalPages' )
});
