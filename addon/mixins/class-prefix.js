import Ember from 'ember';
import prefix from '../utils/class-prefix';

export default Ember.Mixin.create({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    /**
     * init event hook
     *
     * @function
     * @returns {undefined}
     */
    init() {
        this._super( ...arguments );
        this.classNames.push( this.getComponentClassName() );
    },

    // -------------------------------------------------------------------------
    // Properties

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Dynamically prefix component class name
     *
     * @function
     * @returns {String}
     */
    getComponentClassName() {
        return prefix( this.componentClass );
    }

});
