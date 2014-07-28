import Ember from 'ember';
import ModalMixin from '../mixins/slmodal';

/**
 * @module components
 * @class sl-simplemodal
 */
export default Ember.Component.extend( ModalMixin, {

    /**
     * Text string for the "accept" button
     * @property {string} acceptText
     * @default "Accept"
     */
    acceptText: 'Accept',

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
