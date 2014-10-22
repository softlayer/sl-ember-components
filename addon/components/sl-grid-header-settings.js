import Ember from 'ember';

/** @module sl-components/components/sl-grid-header-settings */
export default Ember.Component.extend({

    /**
     * HTML tag name for the root element
     *
     * @property {string}       tagName
     * @type     {Ember.String}
     * @default  "div"
     */
    tagName: 'div',

    /**
     * Class names for the root element
     *
     * @property {array}       classNames
     * @type     {Ember.Array}
     */
    classNames: [ 'sl-grid-header-settings' ],

    /**
     * Component actions hash
     *
     * @property {object}       actions
     * @type     {Ember.Object}
     */
    actions: {

        /**
         * Action to fire when header is clicked
         *
         * @function actions.click
         * @argument {string}  action - Name of action to trigger
         * @argument {integer} key    - Key of context to pass to triggered action
         * @return   {void}
         */
        click: function( action, key ) {
            this.triggerAction({
                action        : action,
                actionContext : [ key ]
            });
        }
    },

    /**
     * Whether to show actions
     *
     * @property {boolean} showActions
     * @type     {boolean}
     */
    showActions: Ember.computed.bool( 'settings.actions' ),

    /**
     * Whether to show columns
     *
     * @property {boolean} showColumns
     * @type     {boolean}
     */
    showColumns: Ember.computed.bool( 'settings.hideableColumns' ),

    /**
     * A checkbox that binds click event for a related action
     *
     * @property {object}         columnCheckbox
     * @type     {Ember.Checkbox}
     */
    columnCheckbox: Ember.Checkbox.extend({
        checked: Ember.computed.not( 'column.hidden' ),

        click: function() {
            this.get( 'parentView' ).send( 'click', this.get( 'column.action' ), this.get( 'column.key' ) );
        }
    }),

    /**
     * Method triggered when header is clicked
     *
     * @function click
     * @argument {event} event - The click event
     * @return   {false|void}
     */
    click: function( event ) {
        if ( Ember.$( event.target ).closest( '.stay-open' ).length ) {
            return false;
        }
    },

    /**
     * Get the settings' actions
     *
     * @function clickableActions
     * @observes settings
     * @return   {Ember.Array}
     */
    clickableActions: function() {
        var actions  = Ember.A([]),
            settings = this.get( 'settings' );

        if ( settings.actions ) {
            actions.pushObjects( settings.actions );
        }

        return actions;
    }.property( 'settings' ),

    /**
     * Get the columns in the header that are hideable
     *
     * @function hideableColumns
     * @observes settings, columns.@each.hidden
     * @returns  {Ember.Array}
     */
    hideableColumns: function() {
        var columns         = this.get( 'columns' ),
            hideableColumns = Ember.A( [] ),
            settings        = this.get( 'settings' );

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
    }.property( 'settings', 'columns.@each.hidden' )
});
