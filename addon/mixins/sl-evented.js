import Ember from 'ember';

/**
 * @module
 * @augments ember/Mixin
 * @augments ember/Evented
 */
export default Ember.Mixin.create( Ember.Evented, {

    /**
     * The sl-event service, used to listen and unlisten for events on
     *
     * @type {ember/Service}
     */
    eventService: Ember.inject.service( 'sl-event' ),

    /**
     * Begin listening for `eventName` on the event service
     *
     * @function
     * @param {String} eventName - The custom event name to listen for
     * @returns {Boolean} - True unless an error is encountered
     */
    listenFor( eventName ) {
        return this.get( 'eventService' ).listen( eventName, this );
    },

    /**
     * Stop listening on the event service for `eventName`
     *
     * @function
     * @param {String} eventName - The custom event name to stop listening for
     * @returns {Boolean} - True unless an error is encountered
     */
    unlistenFor( eventName ) {
        return this.get( 'eventService' ).unlisten( eventName, this );
    }

});
