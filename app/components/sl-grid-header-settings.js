import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'div',
    classNames: [ 'sl-grid-header-settings' ],
    actions: {
        click: function( action, key ){
            this.sendAction( 'action', action, key );
        }
    },

    open: false,

    eventManager: Ember.Object.create({
        click: function( event, view ){
            if( $( event.target ).closest( '.stay-open' ).length ){
                return false;
            } else {
                view.$( 'button.dropdown-toggle' ).dropdown( 'toggle' );
            }
        }
    }),
    
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
                    hidden: column.hidden,
                    label: column.title
                };
            }));
        }
        return hideableColumns;

    }.property( 'settings', 'columns.@each.hidden' ),

    columnCheckbox: Ember.Checkbox.extend({
        checked: Ember.computed.not( 'column.hidden' ),
        click: function(){
            this.get( 'parentView' ).send( 'click', this.get( 'column.action'), this.get( 'column.key') );
        }
    }),

    showColumns: Ember.computed.bool( 'settings.hideableColumns' )

});
