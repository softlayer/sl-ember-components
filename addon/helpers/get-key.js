import Ember from 'ember';

/**
 * get-key takes an object, a key and a default key.  The key is resolved on the object and
 * the result is returned.  If the result is falsy and a defaultKey is supplied then the defaultKey
 * is resolved on the object and that result is returned
 *
 * @return {mixed}
 */
export default Ember.Handlebars.makeBoundHelper( function ( object, key, defaultKey ) {
    var value;

    value = object.get ? object.get( key ) : object[ key ];

    if ( Ember.isNone( value ) && Ember.typeOf( defaultKey ) === 'string' ) {
        value = object.get ? object.get( defaultKey ) : object[ defaultKey ];
    }

    return value;
});
