import Ember from 'ember';

export default Ember.Mixin.create({

    ajaxEnabled: true,

    onActiveBehaviors: Ember.A(),

    onInactiveBehaviors: Ember.A(),

    ajaxSendProxyBound: null,

    ajaxCompleteProxyBound: null,

    ajaxStartProxyBound: null,

    ajaxStopProxyBound: null,

    initAjax: function() {
        this.createProxyMethods();
        this.connectAjax();

    }.on( 'init' ),

    createProxyMethods: function() {
        this.setProperties({
            ajaxSendProxyBound: this.ajaxSendProxy.bind( this ),
            ajaxCompleteProxyBound: this.ajaxCompleteProxy.bind( this ),
            ajaxStartProxyBound: this.ajaxStartProxy.bind( this ),
            ajaxStopProxyBound: this.ajaxStopProxy.bind( this )
        });
    },

    registerAjaxBehavior: function( onActive, onInactive ) {
        if ( onActive ) {
            this.get( 'onActiveBehaviors' ).push( onActive );
        }

        if ( onInactive ) {
            this.get( 'onInactiveBehaviors' ).push( onInactive );
        }
    },

    unregisterAjaxBehavior: function( onActive, onInactive ) {
        if ( onActive ) {
            this.get( 'onActiveBehaviors' ).removeObject( onActive );
        }

        if ( onInactive ) {
            this.get( 'onInactiveBehaviors' ).removeObject( onInactive );
        }
    },

    // We need to proxy ajaxSend & ajaxComplete so we can check against
    // the provided "match" URL.
    ajaxSendProxy: function( event, jqXHR, options ) {
        if ( this.matchesUrl( this.get( 'forUrl' ), options.url )) {
            this.get( 'onActiveBehaviors' ).forEach( function( behavior ) {
                behavior.call( this, event, jqXHR, options );
            }.bind( this ));

            this.ajaxSendHandler();
        }
    },

    ajaxCompleteProxy: function( event, jqXHR, options ) {
        if ( this.matchesUrl( this.get( 'forUrl' ), options.url )) {
            this.get( 'onInactiveBehaviors' ).forEach( function( behavior ) {
                behavior.call( this, event, jqXHR, options );
            }.bind( this ));

            this.ajaxCompleteHandler();
        }
    },

    ajaxStartProxy: function() {
        this.get( 'onActiveBehaviors' ).forEach( function( behavior ) {
            behavior.call( this );
        }.bind( this ));

        this.ajaxStartHandler();
    },

    ajaxStopProxy: function() {
        this.get( 'onInactiveBehaviors' ).forEach( function( behavior ) {
            behavior.call( this );
        }.bind( this ));

        this.ajaxStopHandler();
    },

    ajaxSendHandler: function(){},
    ajaxCompleteHandler: function(){},
    ajaxStartHandler: function(){},
    ajaxStopHandler: function(){},

    connectAjax: function() {
        var props = this.getProperties([ 'ajaxEnabled', 'ajaxBound', 'forUrl' ]);

        if ( props.ajaxEnabled === true && !props.ajaxBound ) {
            if ( !Ember.isBlank( props.forUrl )) {
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

    disconnectAjax: function() {
        var props = this.getProperties([ 'ajaxEnabled', 'ajaxBound', 'forUrl' ]);

        if ( !props.ajaxEnabled && props.ajaxBound ) {
            Ember.$( document ).off( 'ajaxSend', this.get( 'ajaxSendProxyBound' ));
            Ember.$( document ).off( 'ajaxComplete', this.get( 'ajaxCompleteProxyBound' ));
            Ember.$( document ).off( 'ajaxStart', this.get( 'ajaxStartProxyBound' ));
            Ember.$( document ).off( 'ajaxStop', this.get( 'ajaxStopProxyBound' ));
        }
    }.observes( 'ajaxEnabled' ),

    matchesUrl: function( forUrl, ajaxUrl ) {
        if ( forUrl instanceof RegExp ) {
            return forUrl.test( ajaxUrl );
        } else if ( typeof forUrl === 'string' ) {
            return forUrl.toLowerCase() === ajaxUrl.toLowerCase();
        }

        return false;
    }

});