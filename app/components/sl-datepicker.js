import DateHandler from '../mixins/date-handler';
import Ember from 'ember';

/**
 * @module components
 * @class sl-datepicker
 */
export default Ember.Component.extend( DateHandler, {

    /**
     * Class names for the root element
     * @property {array} classNames
     */
    classNames: [ 'date-picker', 'sl-datepicker' ],

    /**
     * Setup for initial component state
     * @method didInsertElement
     */
    didInsertElement: function () {
        this.$( 'input.date-picker' ).datepicker( this.get( 'options' ));
    }
});
