import Ember from 'ember';

/**
 * @module
 * @augments ember/Mixin
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
     * @function
     * @listens didInsertElement
     * @returns {undefined}
     */
    notifyDidInsertElement: Ember.on( 'didInsertElement', function() {
        this.get( 'controller' ).send( 'viewDidInsertElement' );
    }),

    /**
     * Notify the view's controller by sending "viewWillClearRender"
     *
     * @function
     * @listens willClearRender
     * @returns {undefined}
     */
    notifyWillClearRender: Ember.on( 'willClearRender', function() {
        this.get( 'controller' ).send( 'viewWillClearRender' );
    }),

    /**
     * Notify the view's controller by sending "viewWillDestroyElement"
     *
     * @function
     * @listens willDestroyElement
     * @returns {undefined}
     */
    notifyWillDestroyElement: Ember.on( 'willDestroyElement', function() {
        this.get( 'controller' ).send( 'viewWillDestroyElement' );
    }),

    /**
     * Notify the view's controller by sending "viewWillInsertElement"
     *
     * @function
     * @listens willInsertElement
     * @returns {undefined}
     */
    notifyWillInsertElement: Ember.on( 'willInsertElement', function() {
        this.get( 'controller' ).send( 'viewWillInsertElement' );
    })

    // -------------------------------------------------------------------------
    // Methods

});
