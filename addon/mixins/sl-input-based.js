import Ember from 'ember';

/**
 * @module
 * @augments ember/Mixin
 */
export default Ember.Mixin.create({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    classNameBindings: [
        'disabled',
        'optional',
        'readonly',
        'required'
    ],

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether the input-based component should be disabled
     *
     * The internal input element should be passed this attribute as a property.
     *
     * @type {Boolean}
     */
    disabled: false,

    /**
     * Whether the input-based component should be displayed as optional
     *
     * @type {Boolean}
     */
    optional: false,

    /**
     * Whether the input-based component is readonly or not
     *
     * The internal input element should be passed this attribute as a property.
     *
     * @type {Boolean}
     */
    readonly: false,

    /**
     * Whether the input-based component is required
     *
     * @type {Boolean}
     */
    required: false

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
