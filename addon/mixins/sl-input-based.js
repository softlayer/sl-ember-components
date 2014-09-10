import Ember from 'ember';

export default Ember.Mixin.create({

    /**
     * Class name bindings for the component
     * @property {Array} classNameBindings
     */
    classNameBindings: [ 'disabled', 'optional', 'readonly', 'required' ],

    /**
     * Whether the input-based component should be disabled; the internal input
     * element should be passed this attribute as a property
     * @property {Boolean} disabled
     * @default false
     */
    disabled: false,

    /**
     * Whether the input-based component should be displayed as optional
     * @property {Boolean} optional
     * @default false
     */
    optional: false,

    /**
     * Whether the input-based component is readonly or not; the internal input
     * element should be passed this attribute as a property
     * @property {Boolean} readonly
     * @default false
     */
    readonly: false,

    /**
     * Whether the input-based component is required
     * @property {Boolean} required
     * @default false
     */
    required: false

});