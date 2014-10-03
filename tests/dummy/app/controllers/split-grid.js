import Ember from 'ember';

export default Ember.ArrayController.extend({
    actions: {
        alertRecord: function() {
            alert( 'alertRecord' );
        },

        logRecord: function() {
            console.log( 'logRecord' );
        }
    },

    columns: [
        {
            path: 'title',
            primary: true,
            title: 'Title'
        }, {
            path: 'id',
            title: 'ID',
            size: 'small'
        }
    ],

    gridRowActions: [
        {
            action: 'alertRecord',
            label: 'Alert'
        }, {
            action: 'logRecord',
            label: 'Log'
        }
    ],

    setupUpdateGridHeight: function() {
        Ember.$( window ).on( 'resize', this.updateGridHeight );
    }.on( 'init' ),

    updateGridHeight: function() {
        // TEMP: This is just a proof of concept for dynamically sizing the
        // sl-split-grid-body's height dependending on viewport and other
        // elements. This logic will eventually be optionally built into the
        // component itself.

        setTimeout( function() {
            var viewportHeight = Ember.$( window ).innerHeight(),
                topPosition = Ember.$( '.sl-split-grid' ).position().top,
                gridHeaderHeight = Ember.$( '.sl-split-grid-header' ).height(),
                gridHeadHeight = Ember.$( '.sl-split-grid-head' ).height(),
                newGridBodyHeight = Math.max( 0, viewportHeight - topPosition - gridHeaderHeight - gridHeadHeight - 2 );

            Ember.$( '.sl-split-grid-body' ).height( newGridBodyHeight );
        }, 200 );
    }.on( 'init' )
});
