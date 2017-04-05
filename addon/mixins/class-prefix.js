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

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Dynamically prefix component class name
     *
     * @function
     * @returns {String}
     */
    componentClassName: Ember.computed(
        '',
        function() {
            return prefix( this.componentClass );
        }
    )

    // -------------------------------------------------------------------------
    // Methods

});
