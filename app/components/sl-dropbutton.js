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
    classNames: [ 'btn-group' ],

    /**
     * Bootstrap "theme" style
     * @property {string} theme
     * @default 'default'
     */
    theme: 'default',

    /**
     * Element-specific class name for Bootstrap "theme" style
     * @property {string} themeClassName
     * @default 'btn-default'
     */
    themeClassName: function () {
        return 'btn-' + this.get( 'theme' );
    }.property( 'theme' )
});
