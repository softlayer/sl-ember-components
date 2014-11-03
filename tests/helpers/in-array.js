import Ember from 'ember';

/**
 * Test whether values exist in array.
 *
 * Value(s) to test can be a single value or an aray of values.
 * All values must be present in the array testing or the test wil fail
 *
 * @function inArray
 * @param   {string|array} arrayUnderTest
 * @param   {mixed} testFor
 * @param   {string} message
 * @returns {void}
 */
var inArray = function( arrayUnderTest, testFor, message ) {
    var manageContainsState = function( value ) {
            if ( arrayUnderTest.indexOf( value ) === -1 ) {
                containsValue = false;
            }
        },
        containsValue = true;

    // Modify $component.prop( 'class' ) format
    if ( 'string' === typeof arrayUnderTest ) {
        arrayUnderTest = arrayUnderTest.split( ' ' );
    }

    // Normalize testFor to an array
    if ( 'object' !== typeof testFor ) {
        testFor = [ testFor ];
    }

    testFor.forEach( function( element, index, array ) {
        manageContainsState( element );
    });

    ok( containsValue === true, message );
};

export default inArray;