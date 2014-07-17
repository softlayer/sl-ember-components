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
     * Which days of the week to disable
     * @property {array} daysOfWeekDisabled - 0 (Sunday) to 6 (Saturday)
     * @default [0, 1, 2, 3, 4, 5, 6]
     */
    daysOfWeekDisabled: [ 0, 1, 2, 3, 4, 5, 6 ],

    /**
     * Setup for initial component state
     * @method didInsertElement
     */
    didInsertElement: function () {
        this.$().datepicker( this.get( 'options' ));
        this.updateDates();
    },

    /**
     * Updates the datepicker plugin's highlighted dates
     * @method updateDates
     */
    updateDates: Ember.observer([ 'content', 'dateValuePath' ], function () {
        var dateValuePath = this.get( 'dateValuePath' );
        var dates = this.get( 'content' ).map( function ( item ) {
            return moment( new Date( item[ dateValuePath ])).format( 'MM/DD/YYYY' );
        });

        this.$().datepicker( 'setDates', dates );
    })
});
