Settings
    - modelName
    - gridDefinition



AppState stuff stripped out of grid-mixin

    /**
     * Alias for the grid definition
     *
     * @property {Ember.Object} applicationStateDefinition
     */
    applicationStateDefinition: Ember.computed.alias( 'gridDefinition' ),

    /**
     * Alias to the grid
     *
     * @property {Ember.Object} applicationStateVariable
     */
    applicationStateVariable: Ember.computed.alias( 'grid' ),

    /**
     * Run when application state is loaded
     *
     * @function applicationStateDidLoad
     * @observes applicationStateDidLoad
     * @returns  {void}
     */
    applicationStateDidLoad: function() {
        this.notifyPropertyChange( 'sortProperties' );
        Ember.run.once( this, 'reloadModel' );
    }.on( 'applicationStateDidLoad' ),

   


    /**
     * Namespace based on the model name
     *
     * @property applicationStateNamespace
     * @returns  {Ember.String}
     */
    applicationStateNamespace: function() {
        return this.store.pluralize( this.get( 'modelName' ) );
    }.property( 'modelName' ),