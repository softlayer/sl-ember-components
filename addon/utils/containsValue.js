/**
 * @module
 */

/**
 * Check whether the `value` is a valid value in `object`
 *
 * @function
 * @param {*} value - The value to check for the presence of
 * @param {Object} object - The object to check for the presence of `value` in
 * @returns {Boolean} - True if the `value` is a valid value of the `object`
 */
export default function( value, object ) {
    return Object.keys( object )
        .map( key => object[ key ] )
        .indexOf( value ) > -1;
}
