import Ember from 'ember';

/**
 * @module mixins
 * @class sl-ajax-aware
 */
export default Ember.Mixin.create({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Placeholder
     *
     * @property {function} ajaxCompleteProxyBound
     * @default  null
     */
    ajaxCompleteProxyBound: null,

    /**
     * Whether or not AJAX events are bound to the element
     *
     * If disabled, the instance will not even create the bindings to be made
     * aware of the AJAX activity.
     *
     * @property {boolean} ajaxEnabled
     * @default false
     */
    ajaxEnabled: false,

    /**
     * Placeholder
     *
     * @property {function} ajaxSendProxyBound
     * @default  null
     */
    ajaxSendProxyBound: null,

    /**
     * Placeholder
     *
     * @property {function} ajaxStartProxyBound
     * @default  null
     */
    ajaxStartProxyBound: null,

    /**
     * Placeholder
     *
     * @property {function} ajaxStopProxyBound
     * @default  null
     */
    ajaxStopProxyBound: null,

    /**
     * Used internally to track registered AJAX behaviors
     *
     * @private
     * @property {Ember.Array} onActiveBehaviors
     * @default  []
     */
    onActiveBehaviors: [],

    /**
     * Used internally to track registered AJAX behaviors
     *
     * @property {Ember.Array} onInactiveBehaviors
     * @default  []
     */
    onInactiveBehaviors: [],

    /**
     * Indicates which endpoint(s) AJAX activity we are concerned with
     *
     * URL scope can be given as either a string or a regular expression.
     *
     * @property {Ember.String} urlScope
     * @default  null
     */
    urlScope: null,

    // -------------------------------------------------------------------------
    // Observers

    /**
     * Initialize AJAX connectivity
     *
     * @function initAjax
     * @observes "init" event
     * @returns  {void}
     */
    initAjax: function() {
        this.createProxyMethods();
        this.connectAjax();
    }.on( 'init' ),

    /**
     * Bind to the appropriate AJAX calls if enabled
     *
     * This method will consider the URL scoping and bind to either
     * Send/Complete (for specific URLs) or Start/Stop (for global
     * AJAX activity).
     *
     * @function connectAjax
     * @observes "ajaxEnabled" event
     * @returns  {void}
     */
    connectAjax: function() {
        var props = this.getProperties([ 'ajaxEnabled', 'ajaxBound', 'urlScope' ]);

        if ( props.ajaxEnabled === true && !props.ajaxBound ) {
            if ( !Ember.isBlank( props.urlScope ) ) {
                Ember.$( document )
                    .ajaxSend( this.get( 'ajaxSendProxyBound' ) )
                    .ajaxComplete( this.get( 'ajaxCompleteProxyBound' ) );
            } else {
                Ember.$( document )
                    .ajaxStart( this.get( 'ajaxStartProxyBound' ) )
                    .ajaxStop( this.get( 'ajaxStopProxyBound' ) );
            }
        }

    }.observes( 'ajaxEnabled' ),

    /**
     * Unbind from AJAX methods
     *
     * @function disconnectAjax
     * @observes "ajaxEnabled" event
     * @returns  {void}
     */
    disconnectAjax: function() {
        var ajaxBound   = this.get( 'ajaxBound' ),
            ajaxEnabled = this.get( 'ajaxEnabled' );

        if ( !ajaxEnabled && ajaxBound ) {
            Ember.$( document ).off( 'ajaxSend', this.get( 'ajaxSendProxyBound' ) );
            Ember.$( document ).off( 'ajaxComplete', this.get( 'ajaxCompleteProxyBound' ) );
            Ember.$( document ).off( 'ajaxStart', this.get( 'ajaxStartProxyBound' ) );
            Ember.$( document ).off( 'ajaxStop', this.get( 'ajaxStopProxyBound' ) );
        }
    }.observes( 'ajaxEnabled' ),

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Empty implementations of AJAX handler to be overriden by client code
     *
     * @function ajaxCompleteHandler
     * @default  {Ember.Object} empty
     */
    ajaxCompleteHandler: function() {},

    /**
     * Internally used proxy method for ajaxComplete
     *
     * @function ajaxCompleteProxy
     * @param   {object} event
     * @param   {jqXHR}  jqXHR
     * @param   {object} options
     * @returns {void}
     */
    ajaxCompleteProxy: function( event, jqXHR, options ) {
        if ( this.matchesUrl( this.get( 'urlScope' ), options.url ) ) {
            this.get( 'onInactiveBehaviors' ).forEach( function( behavior ) {
                behavior.call( this, event, jqXHR, options );
            }.bind( this ) );

            this.ajaxCompleteHandler();
        }
    },

    /**
     * Empty implementations of AJAX handler to be overriden by client code
     *
     * @function ajaxSendHandler
     * @default  {Ember.Object} empty
     */
    ajaxSendHandler: function() {},

    /**
     * Internally used proxy method for ajaxSend
     *
     * @function ajaxSendProxy
     */
    ajaxSendProxy: function( event, jqXHR, options ) {
        if ( this.matchesUrl( this.get( 'urlScope' ), options.url )) {
            this.get( 'onActiveBehaviors' ).forEach( function( behavior ) {
                behavior.call( this, event, jqXHR, options );
            }.bind( this ));

            this.ajaxSendHandler();
        }
    },

    /**
     * Empty implementations of AJAX handler to be overriden by client code
     *
     * @function ajaxStartHandler
     * @default  {Ember.Object} empty
     */
    ajaxStartHandler: function() {},

    /**
     * Internally used proxy method for ajaxStart
     *
     * @function ajaxStartProxy
     * @returns  {void}
     */
    ajaxStartProxy: function() {
        this.get( 'onActiveBehaviors' ).forEach( function( behavior ) {
            behavior.call( this );
        }.bind( this ));

        this.ajaxStartHandler();
    },

    /**
     * Empty implementations of AJAX handler to be overriden by client code
     *
     * @function ajaxStopHandler
     * @default  {Ember.Object} empty
     */
    ajaxStopHandler: function() {},

    /**
     * Internally used proxy method for ajaxStop
     *
     * @function ajaxStopProxy
     * @returns  {void}
     */
    ajaxStopProxy: function() {
        this.get( 'onInactiveBehaviors' ).forEach( function( behavior ) {
            behavior.call( this );
        }.bind( this ));

        this.ajaxStopHandler();
    },

    /**
     * Create pre-bound proxy methods for each of the 4 AJAX callbacks we are
     * concerned with
     *
     * @function createProxyMethods
     * @returns  {void}
     */
    createProxyMethods: function() {
        this.setProperties({
            ajaxSendProxyBound     : this.ajaxSendProxy.bind( this ),
            ajaxCompleteProxyBound : this.ajaxCompleteProxy.bind( this ),
            ajaxStartProxyBound    : this.ajaxStartProxy.bind( this ),
            ajaxStopProxyBound     : this.ajaxStopProxy.bind( this )
        });
    },

    /**
     * Check if the AJAX URL matches the specified scope
     *
     * Scope can be set as a specific endpoint string or as a regex to be
     * tested against.
     *
     * @function matchesUrl
     * @param   {RegExp|Ember.String} urlScope
     * @param   {Ember.String} ajaxUrl - The URL that the AJAX action is requested on
     * @returns {boolean}
     */
    matchesUrl: function( urlScope, ajaxUrl ) {
        var returnValue = false;

        if ( urlScope instanceof RegExp ) {
            returnValue = urlScope.test( ajaxUrl );
        } else if ( typeof urlScope === 'string' ) {
            returnValue = urlScope.toLowerCase() === ajaxUrl.toLowerCase();
        }

        return returnValue;
    },

    /**
     * Initialize AJAX behavior
     *
     * A common use case will be to initialize particular behaviors during AJAX
     * activity and fall back to other, default, behaviors when no AJAX activity
     * is ongoing. To accomodate this, the registerAjaxBehavior method will
     * allow a user to pass in functions that will be called when AJAX activity
     * starts and stops. This can be accomplished by overriding the ajax hooks
     * (ajaxSend, ajaxComplete, ajaxStart & ajaxStop) but this method does have
     * some benefits. For one, it allows you to group your functionality within
     * the registerAjaxBehavior so it becomes obvious when a behavior is turned
     * on and off. Also, it allows you to use the same procedure for registering
     * behaviors regardless of the URL scope. If you change from a globally
     * scoped URL (i.e. no urlScope defined) to having a particular API endpoint
     * or end points set up, the methods will be executed at the appropriate
     * time. If using the AJAX hooks, you'll need to move the calls from
     * ajaxStart/ajaxStop to ajaxSend/ajaxComplete.
     *
     * @function registerAjaxBehavior
     * @param   {function} onActive - Executed when associated AJAX activity begins
     * @param   {function} onInactive - Executed when associated AJAX activity ends
     * @returns {void}
     */
    registerAjaxBehavior: function( onActive, onInactive ) {
        if ( onActive ) {
            this.get( 'onActiveBehaviors' ).push( onActive );
        }

        if ( onInactive ) {
            this.get( 'onInactiveBehaviors' ).push( onInactive );
        }
    },

    /**
     * Allows you to unregister ajax behaviors
     *
     * @function unregisterAjaxBehavior
     * @param   {function} onActive - Executed when associated AJAX activity begins
     * @param   {function} onInactive - Executed when associated AJAX activity ends
     * @returns {void}
     */
    unregisterAjaxBehavior: function( onActive, onInactive ) {
        if ( onActive ) {
            this.get( 'onActiveBehaviors' ).removeObject( onActive );
        }

        if ( onInactive ) {
            this.get( 'onInactiveBehaviors' ).removeObject( onInactive );
        }
    }

});
