import Ember from 'ember';
import layout from '../templates/components/sl-modal';

export default Ember.Component.extend({
    
    show: false,

    tagName: 'div',

    /** @type {String[]} */
    classNames: [
        'modal fade in'
    ],

    layout: layout,

    bindBootstrapEvents: Ember.on(
        'didInsertElement',
        function() {
            console.log('inserted element');
            console.log(this.$());
        }
    ),

    /**
     * Observes the `show` value and appropriately shows or hides the modal
     *
     * @function
     * @returns {undefined}
     */
    toggle: Ember.observer(
        'show',
        function() {
            this.$().modal( this.get( 'show' ) ? 'show': 'hide' );
        }
    ),

});