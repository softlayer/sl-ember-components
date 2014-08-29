import Ember from 'ember';

export default Ember.Mixin.create( {

    actions: {
        applyFilter: function () {
            var gridFilters = this.get( 'gridFilters' );

            gridFilters.clear();

            Ember.keys( this.get( 'filters' ) ).forEach( function( key ){
                var filter = this.get( 'filters.'+key );
                if( Ember.get( filter, 'value' ) ){
                    gridFilters.pushObject( filter );
                }
            }, this );

            this.set( 'filterApplied', true );
            Ember.run.next( function(){ this.send( 'updateTabPanelHeight' ); }.bind( this ) );
        },

        modifyFilter: function() {
            this.set( 'filterApplied', false );
            Ember.run.next( function(){ this.send( 'updateTabPanelHeight' ); }.bind( this ) );
        },

        clearFilter: function ( key ){
            var filter = this.get( 'filters.'+key ),
                gridFilters = this.get( 'gridFilters' );

            gridFilters.removeObject( filter );
            this.set( 'filters.'+key+'.value', null );

            if( ! gridFilters.get( 'length' ) ){
                this.send( 'collapseTabPanel' );
                Ember.run.next( function(){ this.set( 'filterApplied', false ); }.bind( this ) );
            }
        },

        clearAll: function () {
            var gridFilters = this.get( 'gridFilters' );

            Ember.keys( this.get( 'filters' ) ).forEach( function( key ){
                var filter = this.get( 'filters' )[ key ];
                Ember.set( filter, 'value', null );
                gridFilters.removeObject( filter );
            }, this );
            this.send( 'collapseTabPanel' );
            this.set( 'filterApplied', false );
        },

        closeFilterTab: function () {
            console.log( 'Closing filter tab  - jf said he will add a method to do this :-) ' );
            this.send( 'collapseTabPanel' );
        }
    }

} );
 
