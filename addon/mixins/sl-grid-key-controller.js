import Ember from 'ember';

/**
 * @module mixins
 * @class  sl-grid-key-controller
 */
export default Ember.Mixin.create({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    // -------------------------------------------------------------------------
    // Actions

    /**
     * Controller actions hash
     *
     * @property {Ember.Object} actions
     */
    actions: {

        /**
         * Action called when the controller's view has inserted its element
         *
         * @function actions.viewDidInsertElement
         * @returns  {void}
         */
        viewDidInsertElement: function() {
            this.bindKeys();
        },

        /**
         * Action called when the controller's view is about to destroy its element
         *
         * @function actions.viewWillDestroyElement
         * @returns  {void}
         */
        viewWillDestroyElement: function() {
            this.unbindKeys();
        }
    },

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Object being used to proxy key events
     *
     * @property {Ember.Object} gridKeyManager
     * @default  null
     */
    gridKeyManager: null,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Bind key events to internal methods
     *
     * @function bindKeys
     * @returns  {void}
     */
    bindKeys: function() {
        this.get( 'gridKeyManager' )
            .on( 'keyMapGridFirstPage', this, this.firstPage )
            .on( 'keyMapGridLastPage', this, this.lastPage )
            .on( 'keyMapGridNextPage', this, this.nextPage )
            .on( 'keyMapGridPrevPage', this, this.prevPage )
            .on( 'keyMapGridRefresh', this, this.refresh );
    },

    /**
     * Trigger a page change to the first page
     *
     * @function firstPage
     * @returns  {void}
     */
    firstPage: function() {
        this.send( 'changePage', 'first' );
    },

    /**
     * Trigger a page change to the last page
     *
     * @function lastPage
     * @returns  {void}
     */
    lastPage: function() {
        this.send( 'changePage', 'last' );
    },

    /**
     * Trigger a page change to the next page
     *
     * @function nextPage
     * @returns  {void}
     */
    nextPage: function() {
        this.send( 'changePage', 'next' );
    },

    /**
     * Trigger a page change to the previous page
     *
     * @function prevPage
     * @returns  {void}
     */
    prevPage: function() {
        this.send( 'changePage', 'prev' );
    },

    /**
     * Trigger a reload of the grid keys
     *
     * @function refresh
     * @returns  {void}
     */
    refresh: function() {
        this.send( 'reload' );
    },

    /**
     * Unbind key events from internal methods
     *
     * @function unbindKeys
     * @returns  {void}
     */
    unbindKeys: function() {
        this.get( 'gridKeyManager' )
            .off( 'keyMapGridFirstPage', this, this.firstPage )
            .off( 'keyMapGridLastPage', this, this.lastPage )
            .off( 'keyMapGridNextPage', this, this.nextPage )
            .off( 'keyMapGridPrevPage', this, this.prevPage )
            .off( 'keyMapGridRefresh', this, this.refresh );
    }

});
