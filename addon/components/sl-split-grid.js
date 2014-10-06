import Ember from 'ember';
import template from '../templates/components/sl-split-grid';

/**
 * @module components
 * @class sl-split-grid
 */
export default Ember.Component.extend({

    /**
     * Component actions hash
     *
     * @property {object} actions
     */
    actions: {

        /**
         * Close the details pane
         *
         * @method actions.closeDetailsPane
         */
        closeDetailsPane: function() {
            this.set( 'detailsOpen', false );
        },

        /**
         * Open the details pane with a specific row object
         *
         * @method actions.openDetailsPane
         * @param {object} row - The object that the clicked row represents
         */
        openDetailsPane: function( row ) {
            this.set( 'detailsOpen', true );
        }
    },

    /**
     * The text label for the rows' actions buttons
     *
     * @property {string} actionsButtonLabel
     * @default "Actions"
     */
    actionsButtonLabel: 'Actions',

    /**
     * The text for the actions column's `style` attribute
     *
     * @property {string} actionsColumnStyle
     */
    actionsColumnStyle: function() {
        return 'width: ' + this.get( 'actionsColumnWidth' ) + 'px;';
    }.property( 'actionsColumnWidth' ),

    /**
     * The width of the actions column, in pixels
     *
     * @property {number} actionsColumnWidth
     * @default 123
     */
    actionsColumnWidth: 120,

    /**
     * When true, the component's content areas will be automatically resized
     * to the available viewport height when the viewport changes
     *
     * @property {boolean} autoResize
     * @default true
     */
    autoResize: true,

    /**
     * Class name bindings for the root element
     *
     * @property {array} classNameBindings
     */
    classNameBindings: [ 'detailsOpen:details-open' ],

    /**
     * Class names for the root element
     *
     * @property {array} classNames
     */
    classNames: [ 'sl-split-grid' ],

    /**
     * The height of the split-grid content areas, in pixels
     *
     * @property {number} contentHeight
     * @default 600
     */
    contentHeight: 600,

    /**
     * Indicates when the details pane is open
     *
     * @property {boolean} detailsOpen
     * @default false
     */
    detailsOpen: false,

    /**
     * Setup the auto resize of content height
     *
     * @method setupAutoResize
     */
    setupAutoResize: function() {
        if ( this.get( 'autoResize' )) {
            Ember.$( window ).on( 'resize', this.updateContentHeight.bind( this ));
            this.updateContentHeight();
        }
    }.observes( 'autoResize' ).on( 'didInsertElement' ),

    /**
     * The component's layout template
     *
     * @property {function} layout
     */
    layout: template,

    /**
     * Resize the split-grid's content to the set height value
     *
     * @method resizeContent
     */
    resizeContent: function() {
        this.$( '.content' ).height( this.get( 'contentHeight' ));
    }.observes( 'contentHeight' ).on( 'didInsertElement' ),

    /**
     * HTML tag name of the root element
     *
     * @property {string} tagName
     * @default "div"
     */
    tagName: 'div',

    /**
     * Calculate the possible content height, based on available viewport space
     *
     * @method updateContentHeight
     */
    updateContentHeight: function() {
        var viewportHeight = Ember.$( window ).innerHeight(),
            topPosition = this.$().position().top,
            gridHeaderHeight = parseInt( this.$( 'header' ).css( 'height' )),
            gridHeadHeight = parseInt( this.$( '.sl-split-grid-head' ).css( 'height' )),
            contentHeight = viewportHeight - topPosition - gridHeaderHeight - gridHeadHeight;

        this.set( 'contentHeight', contentHeight );
    }
});
