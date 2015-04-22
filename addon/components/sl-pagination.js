import Ember from 'ember';
import layout from '../templates/components/sl-pagination';

export default Ember.Component.extend({ layout,

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * The HTML tag to use for the component's element
     *
     * @property {String} tagName
     * @default "ul"
     */
    tagName: 'ul',

    /**
     * Class names for the component's element
     *
     * @property {Array} classNames
     */
    classNames: [ 'pagination', 'sl-pagination' ],

    // -------------------------------------------------------------------------
    // Actions

    /**
     * The bound actions of the component
     *
     * @property {Object} actions
     */
    actions: {

        /**
         * Progress forward one page
         *
         * @function actions.nextPage
         * @returns {undefined}
         */
        nextPage() {
            if ( this.get( 'currentPage' ) < this.get( 'totalPages' ) ) {
                this.incrementProperty( 'currentPage' );
            }
        },

        /**
         * Progress back one page
         *
         * @function actions.previousPage
         * @returns {undefined}
         */
        previousPage() {
            if ( this.get( 'currentPage' ) > 1 ) {
                this.decrementProperty( 'currentPage' );
            }
        }

    },
    
    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * The current page number
     *
     * @property {?Number} currentPage
     * @default null
     */
    currentPage: null,

    /**
     * The total number of pages
     *
     * @property {?Number} totalPages
     * @default null
     */
    totalPages: null,

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Whether the current page is the first page
     *
     * @function onFirstPage
     * @observes currentPage
     * @returns {Boolean}
     */
    onFirstPage: Ember.computed( 'currentPage', function() {
        return this.get( 'currentPage' ) === 1;
    }),

    /**
     * Whether the current page is the last page
     *
     * @function onLastPage
     * @observes currentPage, totalPages
     * @returns {Boolean}
     */
    onLastPage: Ember.computed( 'currentPage', 'totalPages', function() {
        return this.get( 'currentPage' ) === this.get( 'totalPages' );
    }),

    /**
     * Fires bound "pageChange" action when the currentPage is changed
     *
     * @function pageChanged
     * @observes currentPage
     * @returns {undefined}
     */
    pageChanged: Ember.observer( 'currentPage', function() {
        this.sendAction( 'pageChange', this.get( 'currentPage' ) );
    })

    // -------------------------------------------------------------------------
    // Methods

});
