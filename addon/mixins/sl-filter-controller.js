import Ember from 'ember';

/**
 * @module mixins
 * @class  sl-filter-controller
 */
export default Ember.Mixin.create( {


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
         * Apply filter settings to the underlying data
         *
         * @function actions.applyFilter
         * @returns  {void}
         */
        applyFilter: function() {
            var filters     = this.get( 'filters' ),
                gridFilters = this.get( 'gridFilterProperties' ),
                self        = this;

            gridFilters.clear();

            Ember.keys( filters ).forEach( function( key ) {
                var filter = self.get( 'filters.' + key );

                if ( Ember.get( filter, 'value' ) ) {
                    gridFilters.pushObject( filter );
                }
            });

            if ( gridFilters.length ) {
                this.set( 'filterApplied', true );
            }
        },

        /**
         * Clear all the grid filter settings
         *
         * @function actions.clearAll
         * @returns  {void}
         */
        clearAll: function() {
            var gridFilters = this.get( 'gridFilterProperties' ),
                self        = this;

            Ember.keys( this.get( 'filters' ) ).forEach( function( key ) {
                var filter = self.get( 'filters' )[ key ];

                Ember.set( filter, 'value', null );
                gridFilters.removeObject( filter );
            });

            this.set( 'filterApplied', false );
        },

        /**
         * Clear a specific filter
         *
         * @function actions.clearFilter
         * @param   {Ember.String} key - The key for the filter to clear
         * @returns {void}
         */
        clearFilter: function( key ) {
            var filter      = this.get( 'filters.' + key ),
                gridFilters = this.get( 'gridFilterProperties' ),
                self        = this;

            gridFilters.removeObject( filter );
            this.set( 'filters.' + key + '.value', null );

            if ( !gridFilters.get( 'length' ) ) {
                Ember.run.next( function() {
                    self.set( 'filterApplied', false );
                });
            }
        },

        /**
         * Trigger a collapse of the surrounding tab panel
         *
         * @function actions.closeFilterTab
         * @returns  {void}
         */
        closeFilterTab: function() {
            this.send( 'toggleFilter' );
        },

        /**
         * Change filter settings
         *
         * @function actions.modifyFilter
         * @returns  {void}
         */
        modifyFilter: function() {
            this.set( 'filterApplied', false );
        }
    }

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
