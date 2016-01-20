import Ember from 'ember';
import config from 'ember-get-config';

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
        return `${config.componentClassPrefix}-${this.componentClass}`;
    }

});
