import Ember from 'ember';
import ComponentClassPrefix from '../mixins/sl-component-class-prefix';
import layout from '../templates/components/sl-panel';
import containsValue from '../utils/containsValue';
import warn from '../utils/warn';
import {
    Theme as TWBSTheme
} from '../utils/bootstrap-naming';

/**
 * @module
 * @augments ember/Component
 */
export default Ember.Component.extend( ComponentClassPrefix, {
    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    classNameBindings: [
        'themeClassName'
    ],

    /** @type {String[]} */
    classNames: [
        'panel'
    ],

    /** @type {Object} */
    layout,

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Component class that will be prefixed with base component class
     *
     * @type {String}
     */
    componentClass: 'panel',

    /**
     * Footer text to display in the footer section of the panel
     *
     * @type {?String}
     */
    footer: null,

    /**
     * Heading text to display in the header section of the panel
     *
     * @type {?String}
     */
    heading: null,

    /**
     * When true, the panel body will be in a loading state
     *
     * @type {Boolean}
     */
    loading: false,

    /**
     * The Bootstrap "theme" style name
     *
     * @type {TWBSTheme}
     */
    theme: TWBSTheme.DEFAULT,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Element-specific class name for the Bootstrap "theme" style
     *
     * @function
     * @returns {String}
     */
    themeClassName: Ember.computed(
        'theme',
        function() {
            const theme = this.get( 'theme' );

            if ( !containsValue( theme, TWBSTheme ) ) {
                warn( `Invalid theme property value "${theme}"` );
            }

            return `panel-${theme}`;
        }
    )

});
