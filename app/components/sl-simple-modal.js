import Ember from 'ember';
import ModalMixin from '../mixins/sl-modal';

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
     * Text string for the "cancel" button
     * @property {string} cancelText
     * @default "Cancel"
     */
    cancelText: 'Cancel',

    /**
     * Attribute bindings for the root element
     * @property {array} attributeBindings
     */
    attributeBindings: [ 'class' ]
});
