import Ember from 'ember';

/**
 * @module component
 * @class sl-progressbar
 */
export default Ember.Component.extend({

    /**
     * Whether to animate the progress bar or not
     * @property {boolean} active
     * @default false
     */
    active: false,

    /**
     * Class names for the containing element
     * @property {array} classNames
     */
    classNames: [ 'progress', 'sl-progressbar' ],

    /**
     * Inline style string for progress bar element
     * @property {string} styleString
     */
    styleString: function () {
        return 'width: ' + this.get( 'value' ) + '%;';
    }.property( 'value' ),

    /**
     * The Bootstrap "theme" style name
     * @property {string} theme
     * @default 'default'
     */
    theme: 'default',

    /**
     * Element-specific class name for the Bootstrap "theme" style
     * @property {string} themeClassName
     * @default 'progress-bar-default'
     */
    themeClassName: function () {
        return 'progress-bar-' + this.get( 'theme' );
    }.property( 'theme' )
});
