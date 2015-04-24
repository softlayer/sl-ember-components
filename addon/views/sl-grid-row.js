import Ember from 'ember';

/**
 * @module views
 * @class sl-grid-row
 * @augments Ember.View
 * @mixes Ember.ViewTargetActionSupport
 */
export default Ember.View.extend( Ember.ViewTargetActionSupport, {

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    classNameBindings: [ 'content.active:active' ],

    tagName: 'tr',

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    click( event ) {
        if ( this.$( event.target ).closest( '.sl-drop-button' ).length < 1 ) {
            this.triggerAction({
                action        : 'rowClick',
                actionContext : this.get( 'content' ),
                target        : this.get( 'parentController' )
            });
        }
    }

    // -------------------------------------------------------------------------
    // Properties

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
