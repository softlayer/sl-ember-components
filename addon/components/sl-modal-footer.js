import Ember from 'ember';
import layout from '../templates/components/sl-modal-footer';

export default Ember.Component.extend({

   /**
     * The close button text
     *
     * @type {String}
     */
    buttonText: 'Close',
  
    /** @type {Object} */
    layout: layout
});
