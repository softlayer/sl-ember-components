import Ember from 'ember';

/**
 * @module
 */

/**
 * Lookup a value on an object in the current context with passed-in objectKey
 * and pathKey strings
 *
 * @function get-key
 * @param {String} objectKey - The string path to lookup the object in context
 * @param {String} pathKey - The string path to lookup the value on the object
 * @param {Object} context - The current context of execution
 * @returns {mixed} The value returned from looking up the path on the object
 */
export default function( objectKey, pathKey, context ) {
    const object = Ember.get( context, `data.view._keywords.${objectKey}` );
    const path = Ember.get( context, `data.view._keywords.${pathKey}` );

    return Ember.get( object, path );
}
