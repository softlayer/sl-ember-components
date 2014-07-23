import Ember from 'ember';
import ModalMixin from '../mixins/slmodal';
import TooltipEnabled from '../mixins/tooltip-enabled';

/**
 * @module components
 * @class sl-simplemodal
 */
export default Ember.Component.extend( ModalMixin, TooltipEnabled, {

    /**
     * Text string for the "accept" button
     * @property {string} acceptText
     * @default "Accept"
     */
    acceptText: 'Accept',

    /**
     * `aria-hidden` attribute to inform assistive technologies to skip the
     * modal's DOM elements
     * @property {string} aria-hidden
     * @default "true"
     */
    'aria-hidden': 'true',

    /**
     * Attribute bindings for the root element
     * @property {array} attributeBindings
     */
    attributeBindings: [ 'aria-hidden', 'class', 'role' ],

    /**
     * `role` attribute value
     * @property {string} role
     * @default 'dialog'
     */
    role: 'dialog'
});
