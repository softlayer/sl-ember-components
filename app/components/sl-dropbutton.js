import Ember from 'ember';

/**
 * @module components
 * @class sl-dropbutton
 */
export default Ember.Component.extend({

    /**
     * Object containing action functions
     * @property {object} actions
     */
    actions: {

        /**
         * Used to trigger specific option-bound action
         * @method click
         */
        click: function ( action ) {
            this.triggerAction({ action: action });
        }
    },

    /**
     * Class names for the div element
     * @property {array} classNames
     */
    classNames: [ 'btn-group', 'sl-dropbutton' ],

    /**
     * Class string for the button's icon
     * @property {string} iconClass
     * @default "caret"
     */
    iconClass: 'caret',

    /**
     * Bootstrap "theme" style
     * @property {string} theme
     * @default "default"
     */
    theme: 'default',

    /**
     * Element-specific class name for Bootstrap "theme" style
     * @property {string} themeClassName
     * @default "btn-default"
     */
    themeClassName: function () {
        return 'btn-' + this.get( 'theme' );
    }.property( 'theme' )
});
