import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';

/**
 * @module components
 * @class sl-tooltip
 */
export default Ember.Component.extend( TooltipEnabled, {

    /**
     * The tag type of the root element
     * @property {String} tagName
     * @default 'span'
     */
    tagName: 'span'
});