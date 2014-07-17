import Ember from 'ember';
import ModalMixin from '../mixins/slmodal';

/**
 * @module components
 * @class sl-modal
 */
export default Ember.Component.extend( ModalMixin, {

    attributeBindings: [ 'class' ]

});
