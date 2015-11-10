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
     * Unique input id that will get generated and set on init of component
     *
     * @type {?String}
     */
    inputId: null,

    /**
     * The name of the input element
     *
     * @type {?String}
     */
    name: null,

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
    readonlyString: Ember.computed(
        'readonly',
        function() {
            return this.get( 'readonly' ) ? 'readonly' : null;
        }
    )
});
