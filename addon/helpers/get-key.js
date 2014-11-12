import Ember from 'ember';

/**
 * @module helpers
 */

/**
 * A lookup on an object with supplied key
 *
 * Takes an object, a key and a default key. The key is resolved on the object
 * and the result is returned. If the result is falsy and a defaultKey is
 * supplied then the defaultKey is resolved on the object and that result
 * is returned.
 *
 * @function get-key
 * @param    {object} object - Context object to lookup value for
 * @param    {string} key - The key string used for lookup on the object
 * @param    {string} defaultKey - A fallback key value
 * @returns  {mixed}
 */
export default Ember.Handlebars.makeBoundHelper( function( object, key, defaultKey ) {
    var value = object.get ? object.get( key ) : object[ key ];

    if ( Ember.isNone( value ) && Ember.typeOf( defaultKey ) === 'string' ) {
        value = object.get ? object.get( defaultKey ) : object[ defaultKey ];
    }

    return value;
});
