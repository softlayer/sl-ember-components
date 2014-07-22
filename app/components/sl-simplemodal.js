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
     * Attribute bindings for the root element
     * @property {array} attributeBindings
     */
    attributeBindings: [ 'class' ]

});
