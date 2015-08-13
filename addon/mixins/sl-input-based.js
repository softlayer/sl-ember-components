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
    required: false,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Returns a string value for the boolean readonly property
     * which will get set on the input.
     *
     * @function
     * @returns {?String}
     */
    readonlyString: Ember.computed( 'readonly', function() {
        return this.get( 'readonly' ) ? 'readonly' : null;
    }),

    /**
     * Returns a string value for the boolean disabled property
     * which will get set on the input.
     *
     * @function
     * @returns {?String}
     */
    disabledString: Ember.computed( 'disabled', function() {
        return this.get( 'disabled' ) ? 'disabled' : null;
    })
});
