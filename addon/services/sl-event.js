import Ember from 'ember';

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
     * @returns {undefined}
     */
    listen( eventName, object ) {
        let events = this.get( 'events' );

        if ( events.hasOwnProperty( eventName ) ) {
            events[ eventName ].push( object );
        } else {
            events[ eventName ] = [ object ];
        }
    },

    /**
     * Trigger the named event with the supplied data
     *
     * @function
     * @param {String} eventName - The name of the event to send to its listeners
     * @param {*} data - Any data to pass onto the listener
     * @returns {undefined}
     */
    trigger( eventName, data ) {
        let events = this.get( 'events' );

        if ( events.hasOwnProperty( eventName ) ) {
            for ( let object of events[ eventName ] ) {
                object.trigger( eventName, data );
            }
        }
    },

    /**
     * Remove a listen binding for the `eventName` and `object`
     *
     * @function
     * @param {String} eventName - The name of the event to stop listening on
     * @param {Object} object - The object to stop listening
     * @returns {undefined}
     */
    unlisten( eventName, object ) {
        let events = this.get( 'events' );

        if ( events.hasOwnProperty( eventName ) ) {
            let objects = events[ eventName ];

            while ( true ) {
                let index = objects.indexOf( object );

                if ( index > -1 ) {
                    objects.splice( index, 1 );
                } else {
                    break;
                }
            }

            if ( objects.length === 0 ) {
                delete events[ eventName ];
            }
        }
    }

});
