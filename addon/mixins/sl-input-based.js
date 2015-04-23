import Ember from 'ember';

/**
 * @module mixins
 * @class sl-input-based
 * @augments Ember.Mixin
 */
export default Ember.Mixin.create({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    classNameBindings: [ 'disabled', 'optional', 'readonly', 'required' ],

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
     * @property {Boolean} disabled
     * @default false
     */
    disabled: false,

    /**
     * Whether the input-based component should be displayed as optional
     *
     * @property {Boolean} optional
     * @default false
     */
    optional: false,

    /**
     * Whether the input-based component is readonly or not
     *
     * The internal input element should be passed this attribute as a property.
     *
     * @property {Boolean} readonly
     * @default false
     */
    readonly: false,

    /**
     * Whether the input-based component is required
     *
     * @property {Boolean} required
     * @default false
     */
    required: false

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

});
