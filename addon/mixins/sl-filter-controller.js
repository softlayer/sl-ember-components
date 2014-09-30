import Ember from 'ember';

/**
 * @module mixins
 * @class sl-filter-controller
 */
export default Ember.Mixin.create( {

    /**
     * Controller actions hash
     *
     * @property {object} actions
     */
    actions: {

        /**
         * Apply filter settings to the underlying data
         *
         * @method actions.applyFilter
         */
        applyFilter: function () {
            var filters = this.get( 'filters' ),
                gridFilters = this.get( 'gridFilterProperties' ),
                self = this;

            gridFilters.clear();

            Ember.keys( filters ).forEach( function( key ) {
                var filter = self.get( 'filters.' + key );

                if ( Ember.get( filter, 'value' )) {
                    gridFilters.pushObject( filter );
                }
            });

            if( gridFilters.length ){
                this.set( 'filterApplied', true );
            }
       },

        /**
         * Clear all the grid filter settings
         *
         * @method actions.clearAll
         */
        clearAll: function() {
            var gridFilters = this.get( 'gridFilterProperties' ),
                self = this;

            Ember.keys( this.get( 'filters' )).forEach( function( key ) {
                var filter = self.get( 'filters' )[ key ];

                Ember.set( filter, 'value', null );
                gridFilters.removeObject( filter );
            });

            this.set( 'filterApplied', false );
        },

        /**
         * Clear a specific filter
         *
         * @method actions.clearFilter
         * @param {string} key - The key for the filter to clear
         */
        clearFilter: function( key ) {
            var filter = this.get( 'filters.' + key ),
                gridFilters = this.get( 'gridFilterProperties' ),
                self = this;

            gridFilters.removeObject( filter );
            this.set( 'filters.' + key + '.value', null );

            if ( !gridFilters.get( 'length' )) {

                Ember.run.next( function() {
                    self.set( 'filterApplied', false );
                });
            }
        },

        /**
         * Trigger a collapse of the surrounding tab panel
         *
         * @method actions.closeFilterTab
         */
        closeFilterTab: function() {
            this.send( 'toggleFilter' );
        },

        /**
         * Change filter settings
         *
         * @method actions.modifyFilter
         */
        modifyFilter: function() {
            this.set( 'filterApplied', false );
        }
    }
});
