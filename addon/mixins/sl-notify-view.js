import Ember from 'ember';

/** @module sl-components/mixins/sl-notify-view */
export default Ember.Mixin.create({

    /**
     * Notify the view's controller by sending "viewDidInsertElement"
     *
     * @function notifyDidInsertElement
     * @return   {void}
     */
    notifyDidInsertElement: function() {
        this.get( 'controller' ).send( 'viewDidInsertElement' );
    }.on( 'didInsertElement' ),

    /**
     * Notify the view's controller by sending "viewWillClearRender"
     *
     * @function notifyWillClearRender
     * @return   {void}
     */
    notifyWillClearRender: function() {
        this.get( 'controller' ).send( 'viewWillClearRender' );
    }.on( 'willClearRender' ),

    /**
     * Notify the view's controller by sending "viewWillDestroyElement"
     *
     * @function notifyWillDestroyElement
     * @return   {void}
     */
    notifyWillDestroyElement: function() {
        this.get( 'controller' ).send( 'viewWillDestroyElement' );
    }.on( 'willDestroyElement' ),

    /**
     * Notify the view's controller by sending "viewWillInsertElement"
     *
     * @function notifyWillInsertElement
     * @return   {void}
     */
    notifyWillInsertElement: function() {
        this.get( 'controller' ).send( 'viewWillInsertElement' );
    }.on( 'willInsertElement' ),
});
