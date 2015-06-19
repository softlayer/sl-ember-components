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
     * @returns {undefined}
     */
    notifyDidInsertElement: Ember.on(
        'didInsertElement',
        function() {
            this.get( 'controller' ).send( 'viewDidInsertElement' );
        }
    ),

    /**
     * Notify the view's controller by sending "viewWillClearRender"
     *
     * @function
     * @returns {undefined}
     */
    notifyWillClearRender: Ember.on(
        'willClearRender',
        function() {
            this.get( 'controller' ).send( 'viewWillClearRender' );
        }
    ),

    /**
     * Notify the view's controller by sending "viewWillDestroyElement"
     *
     * @function
     * @returns {undefined}
     */
    notifyWillDestroyElement: Ember.on(
        'willDestroyElement',
        function() {
            this.get( 'controller' ).send( 'viewWillDestroyElement' );
        }
    ),

    /**
     * Notify the view's controller by sending "viewWillInsertElement"
     *
     * @function
     * @returns {undefined}
     */
    notifyWillInsertElement: Ember.on(
        'willInsertElement',
        function() {
            this.get( 'controller' ).send( 'viewWillInsertElement' );
        }
    )

    // -------------------------------------------------------------------------
    // Methods

});
