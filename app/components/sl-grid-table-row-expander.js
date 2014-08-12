import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'tr',
    didInsert: false,
    toggleDidInsert: function(){
//        Ember.run.later( this, function(){ this.set( 'didInsert', true ); }, 100 );
    }.on( 'didInsertElement' )
});
