import Ember from 'ember';

/**
 * This view is inspired by minutebase/ember-dynamic-component, and similarly is
 * only a temporary solution to being able to render components directly with
 * the {{component}} helper coming in Ember 1.11
 */

export default Ember.ContainerView.extend( Ember._Metamorph, {

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

    /**
     * Create and append child view based on custom component
     *
     * @function initialize
     * @observes "init" event
     * @returns  {void}
     */
    initialize: Ember.on( 'init', function() {
        var componentName   = Ember.get( this, 'componentName' ),
            container       = Ember.get( this, 'container' ),
            componentLookup = container.lookup( 'component-lookup:main' ),
            customComponent = componentLookup.lookupFactory( componentName, container ),
            props           = Ember.get( this, '_dynamicOptions' );

        this.pushObject( this.createChildView( customComponent, props ) );
    })

    // -------------------------------------------------------------------------
    // Methods

});
