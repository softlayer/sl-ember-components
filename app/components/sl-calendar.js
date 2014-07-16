import DateHandler from '../mixins/date-handler';
import Ember from 'ember';

/**
 * @module components
 * @class sl-calendar
 */
export default Ember.Component.extend( DateHandler, {

    /**
     * Class names for the root element
     * @property {array} classNames
     */
    classNames: [ 'sl-calendar' ],

    /**
     * Setup for initial component state
     * @method didInsertElement
     */
    didInsertElement: function () {
        this.$().datepicker( this.get( 'options' ));
    }
});
