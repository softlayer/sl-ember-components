import Ember from 'ember';

/**
 * @module mixins
 * @class  sl-application-state-controller
 */
export default Ember.Mixin.create( Ember.Evented, {

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

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Placeholder for asserting presence of applicationStateDefinition variable
     *
     * @function applicationStateDefinition
     * @default  {function} empty
     */
    applicationStateDefinition: function() {
        Ember.assert( 'applicationStateDefinition is not defined in your class!', false );
    }.property(),

    /**
     * Placeholder for asserting presence of applicationStateNamespace variable
     *
     * @function applicationStateNamespace
     * @default  {function} empty
     */
    applicationStateNamespace: function() {
        Ember.assert( 'applicationStateNamespace is not defined in your class!', false );
    }.property(),

    /**
     * Placeholder for asserting presence of applicationStateVariable variable
     *
     * @function applicationStateVariable
     * @default  {function} empty
     */
    applicationStateVariable: function() {
        Ember.assert( 'applicationStateVariable is not defined in your class!', false );
    }.property(),

    /**
     * Load the application state from localStorage
     *
     * @function loadApplicationState
     * @returns  {void}
     */
    loadApplicationState: function() {
        var localStorageController = this.get( 'localStorageController' ),
            self                   = this;

        localStorageController.getPreferencesByNamespace( this.get( 'applicationStateNamespace' ) )
            .then( function( applicationState ) {
                self.setApplicationState( applicationState );
            })
            /*jshint quotmark: double */
            .catch( function() {
                self.setApplicationState();
            })
            .finally( function() {
                /*jshint quotmark: single */
                self.trigger( 'applicationStateDidLoad' );
            });
    },

    /**
     * Placeholder for aserting presence of localStorageController variable
     *
     * @function localStorageController
     * @default  {function} empty
     */
    localStorageController: function() {
        Ember.assert( 'localStorageController is not defined in your class!', false );
    }.property(),

    /**
     * Save the user preferences to localStorage
     *
     * @function saveApplicationState
     * @returns  {void}
     */
    saveApplicationState: function() {
        this.get( 'localStorageController' )
            .setPreferences(
                this.get( 'applicationStateVariable' ),
                this.get( 'applicationStateNamespace' )
            );
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
     * @function {Ember.Object} preferences
     * @returns  {void}
     */
    setApplicationState: function( preferences ) {
        var definitions = this.get( 'applicationStateDefinition' ),
            version     = Ember.get( definitions, 'v' );

        if ( !preferences || !preferences.get( 'v' ) || ( version && version > preferences.get( 'v' ) ) ) {
            preferences = Ember.Object.create();
        }

        Ember.keys( definitions ).forEach( function( key ) {
            var preference = Ember.get( preferences, key ),
                definition = Ember.get( definitions, key ),
                merged;

            switch( Ember.typeOf( definition ) ) {
                case 'object':
                case 'instance':
                    // Need to make a copy of the definition so we don't
                    // corrupt the original.
                    merged = Ember.Object.create( definition );
                    Ember.merge( merged, preference );
                    break;

                case 'array':
                    merged = Ember.A([]);

                    // We will only add elements that exist on the definition
                    definition.forEach( function( item ) {
                        Ember.assert( 'Items in arrays on the `definition` must be objects',
                            Ember.typeOf( item ) === 'object' || Ember.typeOf( item ) === 'object' );

                       var searchTerm = item.id ? 'id' : ( item.key ? 'key' : null ),
                           preferenceItem,
                           mergedItem;

                        // Make a copy so as not to corrupt the original
                        mergedItem = Ember.Object.create( item );

                        if ( searchTerm && Ember.isArray( preference ) ) {
                            preferenceItem = preference.findBy( searchTerm, mergedItem.get( searchTerm ) );
                            Ember.merge( mergedItem, preferenceItem );
                        }

                        merged.pushObject( mergedItem );
                    });

                    // Now that we have our original defs merged in with the
                    // prefs, lets reorder them to match the prefs order
                    // if needed
                    if ( Ember.isArray( preference ) ) {
                        preference.forEach( function( item, idx ) {
                            var searchTerm = item.id ? 'id' : ( item.key ? 'key' : null ),
                                oldIndex;

                            if ( searchTerm ) {
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

    /**
     * Set the application state path to supplied data
     *
     * @function updateApplicationState
     * @param   {string} path - Value path for application state
     * @param   {mixed} data - Value to set to the path
     * @returns {void}
     */
    updateApplicationState: function( path, data ) {
        Ember.assert( 'Argument `path` must not be an empty string', !Ember.isEmpty( path ) );
        Ember.assert( 'Argument `path` must be a string', Ember.typeOf( path ) === 'string' );

        this.set( 'applicationStateVariable.' + path, data );
    }
});
