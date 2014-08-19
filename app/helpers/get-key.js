import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper( function ( object, key, defaultKey ) {
    var value;
    
    value = object.get ? object.get( key ) : object[ key ];

    if( Ember.isNone( value ) && Ember.typeOf( defaultKey ) === 'string' ){
        value = object.get ? object.get( defaultKey ) : object[ defaultKey ];
    }

    return value;
});
