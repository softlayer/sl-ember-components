import Ember from 'ember';
import { error, warn } from '../utils/logger';

/**
 * @module
 * @augments ember/Service
 * @augments ember/Evented
 */
export default Ember.Service.extend( Ember.Evented, {

    /**
     * The service's internal collection of events and bound objects
     *
     * @type {Object}
     */
    events: {},

    /**
     * Set up a binding for the `object` to listen for the `eventName`
     *
     * @function
     * @param {String} eventName - The name of the event to listen for
     * @param {Object} object - The object listening for the event
     * @returns {Boolean} - True unless an error state is encountered
     */
    listen( eventName, object ) {
        const events = this.get( 'events' );

        if ( !events ) {
            return error( '`events` is undefined' );
        }

        if ( events.hasOwnProperty( eventName ) ) {
            events[ eventName ].push( object );
        } else {
            events[ eventName ] = [ object ];
        }

        return true;
    },

    /**
     * Trigger the named event with the supplied data
     *
     * @function
     * @param {String} eventName - The name of the event to send to
     *        its listeners
     * @param {*} data - Any data to pass onto the listener
     * @returns {Boolean} - True unless an error state is encountered
     */
    trigger( eventName, data ) {
        const events = this.get( 'events' );

        if ( !events ) {
            return error( '`events` is undefined' );
        }

        if ( !events.hasOwnProperty( eventName ) ) {
            return warn( `No bound listeners for "${eventName}"` );
        }

        for ( const object of events[ eventName ] ) {
            object.trigger( eventName, data );
        }

        return true;
    },

    /**
     * Remove a listen binding for the `eventName` and `object`
     *
     * @function
     * @param {String} eventName - The name of the event to stop listening on
     * @param {Object} object - The object to stop listening
     * @returns {Boolean} - True unless an error state is encountered
     */
    unlisten( eventName, object ) {
        const events = this.get( 'events' );

        if ( !events.hasOwnProperty( eventName ) ) {
            return warn( `No bound listeners for "${eventName}"` );
        }

        const objects = events[ eventName ];

        let index;
        do {
            index = objects.indexOf( object );

            if ( index > -1 ) {
                objects.splice( index, 1 );
            } else {
                break;
            }
        } while ( 0 > index )

        if ( 0 === objects.length ) {
            delete events[ eventName ];
        }

        return true;
    }

});
