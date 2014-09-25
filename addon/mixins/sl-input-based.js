import Ember from 'ember';

/**
 * @module mixins
 * @class sl-input-based
 */
export default Ember.Mixin.create({

    /**
     * Class name bindings for the component
     *
     * @property {Array} classNameBindings
     */
    classNameBindings: [ 'disabled', 'optional', 'readonly', 'required' ],

    /**
     * Whether the input-based component should be disabled
     *
     * The internal input element should be passed this attribute as a property.
     *
     * @property {boolean} disabled
     * @default false
     */
    disabled: false,

    /**
     * Whether the input-based component should be displayed as optional
     *
     * @property {boolean} optional
     * @default false
     */
    optional: false,

    /**
     * Whether the input-based component is readonly or not
     *
     * The internal input element should be passed this attribute as a property.
     *
     * @property {boolean} readonly
     * @default false
     */
    readonly: false,

    /**
     * Whether the input-based component is required
     *
     * @property {boolean} required
     * @default false
     */
    required: false

});
