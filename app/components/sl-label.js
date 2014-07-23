import Ember from 'ember';
import TooltipEnabled from '../mixins/tooltip-enabled';

/**
 * @module components
 * @class sl-label
 */
export default Ember.Component.extend( TooltipEnabled, {

    /**
     * Class name bindings for the component element
     * @property {array} classNameBindings
     */
    classNameBindings: [ 'themeClassName' ],

    /**
     * Class names for the component element
     * @property {array} classNames
     */
    classNames: [ 'label', 'sl-label' ],

    /**
     * Element-specific class name of the Bootstrap "theme" style
     * @property {string} themeClassName
     * @default "label-default"
     */
    themeClassName: function () {
        return 'label-' + this.get( 'theme' );
    }.property( 'theme' ),

    /**
     * The tag type of the component element
     * @property {string} tagName
     * @default "span"
     */
    tagName: 'span',

    /**
     * The Bootstrap "theme" style name/string
     * @property {string} theme
     * @default "default"
     */
    theme: 'default'
});
