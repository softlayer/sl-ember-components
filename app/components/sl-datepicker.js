import DateHandler from '../mixins/date-handler';
import Ember from 'ember';
import TooltipEnabled from '../mixins/tooltip-enabled';

/**
 * @module components
 * @class sl-datepicker
 */
export default Ember.Component.extend( DateHandler, TooltipEnabled, {

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
