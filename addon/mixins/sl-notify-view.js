import Ember from 'ember';

/**
 * @module mixins
 * @class sl-notify-view
 */
export default Ember.Mixin.create({

    /**
     * Notify the view's controller by sending "viewDidInsertElement"
     *
     * @method notifyDidInsertElement
     */
    notifyDidInsertElement: function() {
        this.get( 'controller' ).send( 'viewDidInsertElement' );
    }.on( 'didInsertElement' ),

    /**
     * Notify the view's controller by sending "viewWillDestroyElement"
     *
     * @method notifyWillDestroyElement
     */
    notifyWillDestroyElement: function() {
        this.get( 'controller' ).send( 'viewWillDestroyElement' );
    }.on( 'willDestroyElement' )

});
