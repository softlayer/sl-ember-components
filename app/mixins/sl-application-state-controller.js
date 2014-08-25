import Ember from 'ember';

export default Ember.Mixin.create( Ember.Evented, {

    applicationStateVariable: function(){
        Ember.assert( 'applicationStateVariable is not defined in your class!', false );
    }.property(),

    applicationStateDefinition: function(){
        Ember.assert( 'applicationStateDefinition is not defined in your class!', false );
    }.property(),

    applicationStateNamespace: function(){
        Ember.assert( 'applicationStateNamespace is not defined in your class!', false );
    }.property(),

    localStorageController: function(){
        Ember.assert( 'localStorageController is not defined in your class!', false );
    }.property(),

    /**
     * Load the application state from localStorage
     */
    loadApplicationState: function(){
        var self = this,
            localStorageController = this.get( 'localStorageController' );

        localStorageController.getPreferencesByNamespace( this.get( 'applicationStateNamespace' ) )
        .then( function( applicationState ){
            self.setApplicationState( applicationState );
        })
        /*jshint quotmark: double */    
        .catch( function(){
            self.setApplicationState(); 
        })
        .finally( function(){
            /*jshint quotmark: single */    
            self.trigger( 'applicationStateDidLoad' );
        });
    },

    /**
     * setApplicationState
     *
     * Iterates over the definition and updates it via the preferences passed
     * in.
     *
     * If the item is an object, Ember.merge is used.  
     *
     * If the item is an array then the elements are taken from the definition
     * and merged with an element ( if found, looks for `id` or `key` )
     * from the preference object.
     *
     * Everything else uses the preference if set or the definition as a default.
     *
     * @param {object} preferences 
     */
    setApplicationState: function( preferences ){
        var definitions = this.get( 'applicationStateDefinition' ),
            version = Ember.get( definitions, 'v' );

        if( ! preferences || ! preferences.get( 'v' ) || ( version && version > preferences.get( 'v' ) ) ){
            preferences = Ember.Object.create();
        }
        
        Ember.keys( definitions ).forEach( function( key ){
            var preference = Ember.get( preferences, key ),
                definition = Ember.get( definitions, key ),
                merged;
           
            switch( Ember.typeOf( definition ) ){
                case 'object':
                case 'instance':
                    //need to make a copy of the definition so we don't
                    //corrupt the original
                    merged = Ember.Object.create( definition );
                    Ember.merge( merged, preference );
                    break;
                case 'array':
                    merged = Ember.A([]);
                    //we will only add elements that exist on the definition
                    definition.forEach( function( item ){
                        Ember.assert( 'Items in arrays on the `definition` must be objects', 
                            Ember.typeOf( item ) === 'object' || Ember.typeOf( item ) === 'object' );

                       var searchTerm = item.id ? 'id' : ( item.key ? 'key' : null ),
                        preferenceItem,
                        //make a copy so as not to corrupt the original
                        mergedItem = Ember.Object.create( item );
                        
                        if( searchTerm && Ember.isArray( preference ) ){
                            preferenceItem = preference.findBy( searchTerm, mergedItem.get( searchTerm ) );
                            Ember.merge( mergedItem, preferenceItem );
                        }
                                                                                                          
                        merged.pushObject( mergedItem );
                    });
                    //now that we have our original defs merged in with thre prefs, lets reorder them
                    //to match the prefs order if needed
                    if( Ember.isArray( preference ) ){
                        preference.forEach( function( item, idx ){
                            var searchTerm = item.id ? 'id' : ( item.key ? 'key' : null ),
                            oldIndex;
                            if( searchTerm ){
                                oldIndex = merged.indexOf( merged.findBy( searchTerm, item.get( searchTerm ) ) );
                                merged.splice( idx, 0, merged.splice( oldIndex, 1)[0] );
                            }
                        });
                    }
                    break;
                default:
                    merged = preference || definition;

            }
            Ember.set( preferences, key, merged );
        });

        this.set( 'applicationStateVariable', preferences );
        this.saveApplicationState();
    },

    updateApplicationState: function( path, data ){
        Ember.assert( 'Argument `path` must not be an empty string', ! Ember.isEmpty( path) );
        Ember.assert( 'Argument `path` must be a string', Ember.typeOf( path ) === 'string' );
        
        this.set( 'applicationStateVariable.'+path, data ); 

    },

    /**
     * Save the user preferences to localStorage
     * @return {[type]} [description]
     */
    saveApplicationState: function(){
        this.get( 'localStorageController' ) 
            .setPreferences( 
                this.get( 'applicationStateVariable' ), 
                this.get( 'applicationStateNamespace' )
            );
    },
});
