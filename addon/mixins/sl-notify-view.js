import Ember from 'ember';

/** @module sl-components/mixins/sl-notify-view */
export default Ember.Mixin.create({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Notify the view's controller by sending "viewDidInsertElement"
     *
     * @function notifyDidInsertElement
     * @observes "didInsertElement" event
     * @returns  {void}
     */
    notifyDidInsertElement: function() {
        this.get( 'controller' ).send( 'viewDidInsertElement' );
    }.on( 'didInsertElement' ),

    /**
     * Notify the view's controller by sending "viewWillClearRender"
     *
     * @function notifyWillClearRender
     * @observes "willClearRender" event
     * @returns  {void}
     */
    notifyWillClearRender: function() {
        this.get( 'controller' ).send( 'viewWillClearRender' );
    }.on( 'willClearRender' ),

    /**
     * Notify the view's controller by sending "viewWillDestroyElement"
     *
     * @function notifyWillDestroyElement
     * @observes "willDestroyElement" event
     * @returns  {void}
     */
    notifyWillDestroyElement: function() {
        this.get( 'controller' ).send( 'viewWillDestroyElement' );
    }.on( 'willDestroyElement' ),

    /**
     * Notify the view's controller by sending "viewWillInsertElement"
     *
     * @function notifyWillInsertElement
     * @observes "willInsertElement" event
     * @returns  {void}
     */
    notifyWillInsertElement: function() {
        this.get( 'controller' ).send( 'viewWillInsertElement' );
    }.on( 'willInsertElement' )

    // -------------------------------------------------------------------------
    // Methods

});
