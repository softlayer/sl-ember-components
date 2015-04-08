import Ember from 'ember';

/**
 * @module mixins
 * @class  sl-notify-view
 */
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
    notifyDidInsertElement: Ember.on( 'didInsertElement', function() {
        this.get( 'controller' ).send( 'viewDidInsertElement' );
    }),

    /**
     * Notify the view's controller by sending "viewWillClearRender"
     *
     * @function notifyWillClearRender
     * @observes "willClearRender" event
     * @returns  {void}
     */
    notifyWillClearRender: Ember.on( 'willClearRender', function() {
        this.get( 'controller' ).send( 'viewWillClearRender' );
    }),

    /**
     * Notify the view's controller by sending "viewWillDestroyElement"
     *
     * @function notifyWillDestroyElement
     * @observes "willDestroyElement" event
     * @returns  {void}
     */
    notifyWillDestroyElement: Ember.on( 'willDestroyElement', function() {
        this.get( 'controller' ).send( 'viewWillDestroyElement' );
    }),

    /**
     * Notify the view's controller by sending "viewWillInsertElement"
     *
     * @function notifyWillInsertElement
     * @observes "willInsertElement" event
     * @returns  {void}
     */
    notifyWillInsertElement: Ember.on( 'willInsertElement', function() {
        this.get( 'controller' ).send( 'viewWillInsertElement' );
    })

    // -------------------------------------------------------------------------
    // Methods

});
