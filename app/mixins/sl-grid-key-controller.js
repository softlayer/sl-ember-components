import Ember from 'ember';

export default Ember.Mixin.create({

    /**
     * Set gridKeyManager to point to the object being used to proxy key events
     */
    gridKeyManager: null,

    actions: {

        viewDidInsertElements: function() {
            this.bindKeys();
        },

        viewWillDestroyElement: function() {
            this.unbindKeys();
        }
    },

    bindKeys: function() {
        this.get( 'gridKeyManager' ).on( 'keyMapGridFirstPage', this, this.firstPage )
                                    .on( 'keyMapGridLastPage', this, this.lastPage )
                                    .on( 'keyMapGridNextPage', this, this.nextPage )
                                    .on( 'keyMapGridPrevPage', this, this.prevPage )
                                    .on( 'keyMapGridRefresh', this, this.refresh );
    },

    unbindKeys: function() {
        this.get( 'gridKeyManager' ).off( 'keyMapGridFirstPage', this, this.firstPage )
                                    .off( 'keyMapGridLastPage', this, this.lastPage )
                                    .off( 'keyMapGridNextPage', this, this.nextPage )
                                    .off( 'keyMapGridPrevPage', this, this.prevPage )
                                    .off( 'keyMapGridRefresh', this, this.refresh );
    },

    firstPage: function() {
        this.send( 'changePage', 'first' );
    },

    lastPage: function() {
        this.send( 'changePage', 'last' );
    },

    nextPage: function() {
        this.send( 'changePage', 'next' );
    },

    prevPage: function() {
        this.send( 'changePage', 'prev' );
    },

    refresh: function() {
        this.send( 'reload' );
    }

});