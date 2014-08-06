import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'div',
    classNames: [ 'sl-grid-header-settings' ],
    actions: {
        click: function( action, key ){
            console.log( 'got click', action, key );
            this.sendAction( 'action', action, key );
        }
    },
    clickableActions: function(){
        var actions = Ember.A([]),
            settings = this.get( 'settings' );

        if( settings.actions ){
            actions.pushObjects( settings.actions );
        }

        return actions;

    }.property( 'settings' ),

    showActions: Ember.computed.bool( 'settings.actions' ),

    hideableColumns: function(){    
        var hideableColumns = Ember.A([]),
            settings = this.get( 'settings' ),
            columns = this.get( 'columns' );
        
        if( settings.hideableColumns ){
            
            hideableColumns.pushObjects( columns.rejectBy( 'hideable', false ).map( function( column ){
                return {
                    action: 'toggleColumnVisibility',
                    key: column.key,
                    label: column.title
                };
            }));
        }
        return hideableColumns;

    }.property( 'settings', 'columns' ),

    showColumns: Ember.computed.bool( 'settings.hideableColumns' )

});
