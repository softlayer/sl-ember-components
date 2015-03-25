import Ember from 'ember';

/**
 * @module components
 * @class  sl-grid-header-settings
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /**
     * HTML tag name for the root element
     *
     * @property {Ember.String} tagName
     * @default  "div"
     */
    tagName: 'div',

    /**
     * Class names for the root element
     *
     * @property {Ember.Array} classNames
     */
    classNames: [ 'sl-grid-header-settings' ],

    // -------------------------------------------------------------------------
    // Actions

    /**
     * Component actions hash
     *
     * @property {Ember.Object} actions
     */
    actions: {

        /**
         * Action to fire when header is clicked
         *
         * @function actions.click
         * @param    {string}  action - Name of action to trigger
         * @param    {integer} key    - Key of context to pass to triggered action
         * @returns  {void}
         */
        click: function( action, key ) {
            this.triggerAction({
                action        : action,
                actionContext : [ key ]
            });
        }
    },

    // -------------------------------------------------------------------------
    // Events

    /**
     * Method triggered when header is clicked
     *
     * @function click
     * @param    {event} event - The click event
     * @returns  {false|void}
     */
    click: function( event ){
        if ( Ember.$( event.target ).closest( '.stay-open' ).length ) {
            return false;
        }
    },

    /**
     * close the menu on mouseLeave if its open
     * @param  {Event} event
     * @return {void}
     */
    mouseLeave: function( event ){
        var toggleEl = Ember.$(event.target).closest( '.dropdown-toggle');

        if( ! toggleEl.length ){
            toggleEl = Ember.$(event.target).closest( '.dropdown-menu').siblings( '.dropdown-toggle');
        }

        if ( toggleEl.length && this.$(toggleEl).parents('.sl-grid-header-settings').hasClass('open') ){
            toggleEl.dropdown( 'toggle' );
        }
    },

    // -------------------------------------------------------------------------
    // Properties

    /**
     * alias to the translation keys on the settings object
     * @type {alias}
     */
    translationKeys: Ember.computed.alias( 'settings.translationKeys' ),

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
     * A checkbox that binds click event for a related action
     *
     * @property {Ember.Checkbox} columnCheckbox
     */
    columnCheckbox: Ember.Checkbox.extend({
        checked: Ember.computed.not( 'column.hidden' ),

        click: function() {
            this.get( 'parentView' ).send( 'click', this.get( 'column.action' ), this.get( 'column.key' ) );
        }
    }),

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Get the settings' actions
     *
     * @function clickableActions
     * @observes settings
     * @returns  {Ember.Array}
     */
    clickableActions: function() {
        var actions  = [],
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
            hideableColumns = [],
            settings        = this.get( 'settings' );

        if ( settings.hideableColumns ) {
            hideableColumns.pushObjects( columns.filterBy( 'hideable', true ).map( function( column ) {
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
