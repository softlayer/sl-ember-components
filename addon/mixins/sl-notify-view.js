import Ember from 'ember';

export default Ember.Mixin.create({

    notifyDidInsertElement: function() {
        this.get( 'controller' ).send( 'viewDidInsertElement' );
    }.on( 'didInsertElement' ),

    notifyWillDestroyElement: function() {
        this.get( 'controller' ).send( 'viewWillDestroyElement' );
    }.on( 'willDestroyElement' )

});