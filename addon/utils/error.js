/* jshint ignore:start */

import Ember from 'ember';
import config from 'ember-get-config';
import warn from './warn';

/**
 * @module
 * @augments Error
 */

/** @type {String} */
let errorTypeThrown = null;

/** @type {Boolean} */
let wasSetErrorTypeThrownCalledInternally = false;

/**
 * Creates an Error Function with additional values set
 *
 * @param {String} component The component name which needs an error function created
 * @param {String} message The error message
 * @returns {Function}
 */
const buildErrorFunction = function( component, message ) {
    message = message || '';

    const error = {};
    const functionName = Ember.String.camelize( component.slice( 2 ) );
    const createdFunction = new Function(
        'return function ' + functionName + '() {' +
            'this.name = "' + component + '";' +
            'this.message = "' + message + '";' +
        '};'
    )();

    error[ functionName ] = createdFunction;
    error[ functionName ].prototype = Object.create( Error.prototype );
    error[ functionName ].prototype.constructor = error[ functionName ];

    wasSetErrorTypeThrownCalledInternally = true;
    setErrorTypeThrown( functionName );
    wasSetErrorTypeThrownCalledInternally = false;

    return error[ functionName ];
};

/**
 * Determines whether an error was thrown from sl-ember-components
 *
 * @returns {Boolean}
 */
const errorWasThrown = function() {
    return !Ember.isEmpty( errorTypeThrown );
};

/**
 * Determines whether an error instance was one defined from sl-ember-components
 *
 * @param {String} type The error instance's name to compare
 * @returns {Boolean}
 */
const isErrorInstanceOf = function( type ) {
    return type === errorTypeThrown;
};

/**
 * Sets errorTypeThrown to the passed function name
 *
 * @param {String} functionName The error instance's name
 * @returns {undefined}
 */
const setErrorTypeThrown = function( functionName ) {
    if ( 'test' === config.environment || true === wasSetErrorTypeThrownCalledInternally ) {
        errorTypeThrown = functionName;
    } else {
        warn( 'This method is only available in the testing environment' );
    }
};

/**
 * Requests one of the sl-ember-component error functions to be created and throws that error
 *
 * @param {String} component The component name which needs an error function created
 * @param {String} message The error message
 * @returns {undefined}
 */
const throwError = function( component, message ) {
    const ErrorFunction = buildErrorFunction( component, message );

    throw new ErrorFunction();
};

/**
 * @typedef chart
 * @type {Error}
 * @property {String} name - the component error name
 * @property {String} message - the component error message
 */

/**
 * Requests an sl-ember-component sl-chart error to be thrown
 *
 * @param {String} message The error message
 * @returns {chart}
 */
const throwChartError = function( message ) {
    throwError( 'sl-chart', message );
};

/**
 * @typedef dateTime
 * @type {Error}
 * @property {String} name - the component error name
 * @property {String} message - the component error message
 */

/**
 * Requests an sl-ember-component sl-date-time error to be thrown
 *
 * @param {String} message The error message
 * @returns {dateTime}
 */
const throwDateTimeError = function( message ) {
    throwError( 'sl-date-time', message );
};

/**
 * @typedef menu
 * @type {Error}
 * @property {String} name - the component error name
 * @property {String} message - the component error message
 */

/**
 * Requests an sl-ember-component sl-menu error to be thrown
 *
 * @param {String} message The error message
 * @returns {menu}
 */
const throwMenuError = function( message ) {
    throwError( 'sl-menu', message );
};

/**
 * @typedef radioGroup
 * @type {Error}
 * @property {String} name - the component error name
 * @property {String} message - the component error message
 */

/**
 * Requests an sl-ember-component sl-radio-group error to be thrown
 *
 * @param {String} message The error message
 * @returns {radioGroup}
 */
const throwRadioGroupError = function( message ) {
    throwError( 'sl-radio-group', message );
};

/**
 * @typedef tooltip
 * @type {Error}
 * @property {String} name - the component error name
 * @property {String} message - the component error message
 */

/**
 * Requests an sl-ember-component sl-tooltip error to be thrown
 *
 * @param {String} message The error message
 * @returns {tooltip}
 */
const throwTooltipError = function( message ) {
    throwError( 'sl-tooltip', message );
};

export {
    errorWasThrown,
    isErrorInstanceOf,
    setErrorTypeThrown,
    throwChartError,
    throwDateTimeError,
    throwMenuError,
    throwRadioGroupError,
    throwTooltipError
};
