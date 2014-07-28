import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper( function ( object, key ) {
    if( object.get ){
        return object.get( key );
    } else {
        return object[ key ];
   }
});
