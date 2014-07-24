import Ember from 'ember';
import TooltipEnabled from '../mixins/tooltip-enabled';

/**
 * @module components
 * @class sl-textarea
 */
export default Ember.Component.extend( TooltipEnabled, {

    /**
     * Class names for the component
     * @property {array} classNames
     */
    classNames: [ 'form-group', 'sl-textarea' ],

    /**
     * The ID of the textarea input element
     * @property {string} inputId
     */
    inputId: function () {
        return this.get( 'elementId' ) + 'Input';
    }.property( 'elementId' )
});
