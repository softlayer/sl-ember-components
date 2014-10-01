import Ember from 'ember';

/**
 * @module mixins
 * @class sl-grid-key-controller
 */
export default Ember.Mixin.create({

    /**
     * Controller actions hash
     *
     * @property {object} actions
     */
    actions: {

        /**
         * Action called when the controller's view has inserted its element
         *
         * @method actions.viewDidInsertElement
         */
        viewDidInsertElement: function() {
            this.bindKeys();
        },

        /**
         * Action called when the controller's view is about to destroy its element
         *
         * @method actions.viewWillDestroyElement
         */
        viewWillDestroyElement: function() {
            this.unbindKeys();
        }
    },

    /**
     * Bind key events to internal methods
     *
     * @method bindKeys
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
     * @method firstPage
     */
    firstPage: function() {
        this.send( 'changePage', 'first' );
    },

    /**
     * Object being used to proxy key events
     *
     * @property {object} gridKeyManager
     * @default null
     */
    gridKeyManager: null,

    /**
     * Trigger a page change to the last page
     *
     * @method lastPage
     */
    lastPage: function() {
        this.send( 'changePage', 'last' );
    },

    /**
     * Trigger a page change to the next page
     *
     * @method nextPage
     */
    nextPage: function() {
        this.send( 'changePage', 'next' );
    },

    /**
     * Trigger a page change to the previous page
     *
     * @method prevPage
     */
    prevPage: function() {
        this.send( 'changePage', 'prev' );
    },

    /**
     * Trigger a reload of the grid keys
     *
     * @method refresh
     */
    refresh: function() {
        this.send( 'reload' );
    },

    /**
     * Unbind key events from internal methods
     *
     * @method unbindKeys
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
