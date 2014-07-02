import Ember from 'ember';

/**
 *
 * class AjaxAware
 */
export default Ember.Mixin.create({

    /**
     * URL scope can be given as either a string or a regular expression.  It is used to indicate
     * which endpoint(s) AJAX activity we are concerned with
     */
    urlScope: null,

    /**
     * Used to control whether or not AJAX events are bound to.  If disabled, the instance will not
     * even create the bindings to be made aware of the AJAX activity.
     */
    ajaxEnabled: true,

    /**
     * Used internally to track registered AJAX behaviors
     */
    onActiveBehaviors: Ember.A(),
    onInactiveBehaviors: Ember.A(),

    /**
     * To get around weirdness with method target in AJAX call backs and binding/unbinding
     * in jQuery, we need a place to hold a pre-bound function for each of our callbacks
     */
    ajaxSendProxyBound: null,
    ajaxCompleteProxyBound: null,
    ajaxStartProxyBound: null,
    ajaxStopProxyBound: null,


    /**
     * @method initAjax
     * Initialize AJAX connectivity
     */
    initAjax: function() {
        this.createProxyMethods();
        this.connectAjax();

    }.on( 'init' ),

    /**
     * Create pre-bound proxy methods for each of the 4 AJAX callbacks we are concerned with
     * @method createProxyMethods
     */
    createProxyMethods: function() {
        this.setProperties({
            ajaxSendProxyBound: this.ajaxSendProxy.bind( this ),
            ajaxCompleteProxyBound: this.ajaxCompleteProxy.bind( this ),
            ajaxStartProxyBound: this.ajaxStartProxy.bind( this ),
            ajaxStopProxyBound: this.ajaxStopProxy.bind( this )
        });
    },

    /**
     * A common use case will be to initialize particular behaviors during AJAX activity and fall back
     * to other, default, behaviors when no AJAX activity is ongoing.  To accomodate this, the
     * registerAjaxBehavior method will allow a user to pass in functions that will be called
     * when AJAX activity starts and stops.  This can be accomplished by overriding the ajax hooks (ajaxSend,
     * ajaxComplete, ajaxStart & ajaxStop) but this method does have some benefits.  For one, it allows
     * you to group your functionality within the registerAjaxBehavior so it becomes obvious when a behavior
     * is turned on and off.  Also, it allows you to use the same procedure for registering behaviors regardless
     * of the URL scope.  If you change from a globally scoped URL (i.e. no urlScope defined) to having a
     * particular API end point or end points set up, the methods will be executed at the appropriate time.  If
     * using the AJAX hooks, you'll need to move the calls from ajaxStart/ajaxStop to ajaxSend/ajaxComplete.
     * @method registerAjaxBehavior
     * @param {function} onActive Function to be executed when associated AJAX activity begins
     * @param {function} onInactive Function to be executed when associated AJAX activity ends
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
     * @method unregisterAjaxBehavior
     * @param {function} onActive Function to be executed when associated AJAX activity begins
     * @param {function} onInactive Function to be executed when associated AJAX activity ends
     */
    unregisterAjaxBehavior: function( onActive, onInactive ) {
        if ( onActive ) {
            this.get( 'onActiveBehaviors' ).removeObject( onActive );
        }

        if ( onInactive ) {
            this.get( 'onInactiveBehaviors' ).removeObject( onInactive );
        }
    },

    /**
     * We proxy calls to allow us to check for URL scoping and also to
     * check against the registered behaviors
     * @method ajaxSendProxy Internally used proxy method for ajaxSend
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
     * We proxy calls to allow us to check for URL scoping and also to
     * check against the registered behaviors
     * @method ajaxCompleteProxy Internally used proxy method for ajaxComplete
     */
    ajaxCompleteProxy: function( event, jqXHR, options ) {
        if ( this.matchesUrl( this.get( 'urlScope' ), options.url )) {
            this.get( 'onInactiveBehaviors' ).forEach( function( behavior ) {
                behavior.call( this, event, jqXHR, options );
            }.bind( this ));

            this.ajaxCompleteHandler();
        }
    },

    /**
     * We proxy calls to allow us to check for URL scoping and also to
     * check against the registered behaviors
     * @method ajaxStartProxy Internally used proxy method for ajaxStart
     */
    ajaxStartProxy: function() {
        this.get( 'onActiveBehaviors' ).forEach( function( behavior ) {
            behavior.call( this );
        }.bind( this ));

        this.ajaxStartHandler();
    },

    /**
     * We proxy calls to allow us to check for URL scoping and also to
     * check against the registered behaviors
     * @method ajaxStopProxy Internally used proxy method for ajaxStop
     */
    ajaxStopProxy: function() {
        this.get( 'onInactiveBehaviors' ).forEach( function( behavior ) {
            behavior.call( this );
        }.bind( this ));

        this.ajaxStopHandler();
    },

    /**
     * Empty implementations of AJAX handler to be overriden by client code
     */
    ajaxSendHandler: function(){},

    /**
     * Empty implementations of AJAX handler to be overriden by client code
     */
    ajaxCompleteHandler: function(){},

    /**
     * Empty implementations of AJAX handler to be overriden by client code
     */
    ajaxStartHandler: function(){},

    /**
     * Empty implementations of AJAX handler to be overriden by client code
     */
    ajaxStopHandler: function(){},

    /**
     * Bind to the appropriate AJAX calls if enabled.  This method will consider the
     * URL scoping and bind to either Send/Complete (for specific URLs) or Start/Stop (for global
     * AJAX activity).
     * @method connectAjax
     */
    connectAjax: function() {
        var props = this.getProperties([ 'ajaxEnabled', 'ajaxBound', 'urlScope' ]);

        if ( props.ajaxEnabled === true && !props.ajaxBound ) {
            if ( !Ember.isBlank( props.urlScope )) {
                Ember.$( document )
                    .ajaxSend( this.get( 'ajaxSendProxyBound' ))
                    .ajaxComplete( this.get( 'ajaxCompleteProxyBound' ));
            } else {
                Ember.$( document )
                    .ajaxStart( this.get( 'ajaxStartProxyBound' ))
                    .ajaxStop( this.get( 'ajaxStopProxyBound' ));
            }
        }

    }.observes( 'ajaxEnabled' ),

    /**
     * Unbind from AJAX methods
     * @method disconnectAjax
     */
    disconnectAjax: function() {
        var props = this.getProperties([ 'ajaxEnabled', 'ajaxBound', 'urlScope' ]);

        if ( !props.ajaxEnabled && props.ajaxBound ) {
            Ember.$( document ).off( 'ajaxSend', this.get( 'ajaxSendProxyBound' ));
            Ember.$( document ).off( 'ajaxComplete', this.get( 'ajaxCompleteProxyBound' ));
            Ember.$( document ).off( 'ajaxStart', this.get( 'ajaxStartProxyBound' ));
            Ember.$( document ).off( 'ajaxStop', this.get( 'ajaxStopProxyBound' ));
        }
    }.observes( 'ajaxEnabled' ),

    /**
     * An internal method used to check if the AJAX URL matches the specified scope.
     * Scope can be set as a specific endpoint string
     * or as a regex to be tested against.
     * @method matchesUrl
     */
    matchesUrl: function( urlScope, ajaxUrl ) {
        if ( urlScope instanceof RegExp ) {
            return urlScope.test( ajaxUrl );
        } else if ( typeof urlScope === 'string' ) {
            return urlScope.toLowerCase() === ajaxUrl.toLowerCase();
        }

        return false;
    }

});