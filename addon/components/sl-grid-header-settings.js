import Ember from 'ember';

/**
 * @module components
 * @class sl-grid-header-settings
 */
export default Ember.Component.extend({

    /**
     * Component actions hash
     *
     * @property {object} actions
     */
    actions: {

        /**
         * Action to fire when header is clicked
         *
         * @method actions.click
         * @param {string} action - Name of action to trigger
         * @param {integer} key - Key of context to pass to triggered action
         */
        click: function( action, key ) {
            this.triggerAction({
                action: action,
                actionContext: [ key ]
            });
        }
    },

    /**
     * Class names for the root element
     *
     * @property {array} classNames
     */
    classNames: [ 'sl-grid-header-settings' ],

    /**
     * Method triggered when header is clicked
     *
     * @method click
     * @param {event} event - The click event
     */
    click: function( event ) {
        if ( Ember.$( event.target ).closest( '.stay-open' ).length ) {
            return false;
        }
    },

    /**
     * Get the settings' actions
     *
     * @property {array} clickableActions
     */
    clickableActions: function() {
        var actions = Ember.A([]),
            settings = this.get( 'settings' );

        if ( settings.actions ) {
            actions.pushObjects( settings.actions );
        }

        return actions;
    }.property( 'settings' ),

    /**
     * A checkbox that binds click event for a related action
     *
     * @property {component} columnCheckbox
     */
    columnCheckbox: Ember.Checkbox.extend({
        checked: Ember.computed.not( 'column.hidden' ),

        click: function() {
            this.get( 'parentView' ).send( 'click', this.get( 'column.action' ), this.get( 'column.key' ));
        }
    }),

    /**
     * Get the columns in the header that are hideable
     *
     * @property {array} hideableColumns
     */
    hideableColumns: function() {
        var columns = this.get( 'columns' ),
            hideableColumns = Ember.A( [] ),
            settings = this.get( 'settings' );

        if ( settings.hideableColumns ) {
            hideableColumns.pushObjects( columns.rejectBy( 'hideable', false ).map( function( column ) {
                return {
                    action : 'toggleColumnVisibility',
                    hidden : column.hidden,
                    key    : column.key,
                    label  : column.title
                };
            }));
        }
        return hideableColumns;
    }.property( 'settings', 'columns.@each.hidden' ),

    /**
     * Whether to show actions
     *
     * @property {boolean} showActions
     */
    showActions: Ember.computed.bool( 'settings.actions' ),

    /**
     * Whether to show columns
     *
     * @property {boolean} showColumns
     */
    showColumns: Ember.computed.bool( 'settings.hideableColumns' ),

    /**
     * HTML tag name for the root element
     *
     * @property {string} tagName
     * @default "div"
     */
    tagName: 'div'
});
