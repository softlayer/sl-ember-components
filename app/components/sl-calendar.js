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
     * String lookup for the date value on the content objects
     * @property {string} dateValuePath
     * @default 'date'
     */
    dateValuePath: 'date',

    /**
     * Array of passed-in date objects, indexed by formatted date
     * @property {array} dates
     * @default []
     */
    dates: [],

    /**
     * Setup for initial component state
     * @method didInsertElement
     */
    didInsertElement: function () {
        var self = this,
            dp   = this.$().datepicker( this.get( 'options' )).data( 'datepicker' );

        this.$( 'tbody' ).on( 'click', function ( event ) {
            // In days view (0), prevent changing selections
            if ( dp.viewMode === 0 ) {
                event.stopPropagation();
            }

            var target = self.$( event.target );

            if ( target.is( 'td.active.day' )) {
                var year  = dp.viewDate.getFullYear(),
                    month = dp.viewDate.getMonth() + 1,
                    day   = parseInt( target.text(), 10 ),
                    formattedDate;

                if ( month < 10 ) {
                    month = '0' + month;
                }

                if ( day < 10 ) {
                    day = '0' + day;
                }

                formattedDate = [ month, day, year ].join( '/' );
                self.sendAction( 'action', self.get( 'dates' )[ formattedDate ]);
            }
        });

        this.updateDates();
    },

    /**
     * Updates both the internally tracked dates, and the datepicker plugin's
     * highlighted dates.
     * @method updateDates
     */
    updateDates: Ember.observer([ 'content', 'dateValuePath' ], function () {
        var dateValuePath = this.get( 'dateValuePath' ),
            dates   = {},
            dpDates = [],
            formattedDate;

        this.get( 'content' ).map( function ( item ) {
            formattedDate = moment( new Date( Ember.get( item, dateValuePath ))).format( 'MM/DD/YYYY' );

            if ( !dates.hasOwnProperty( formattedDate )) {
                dates[ formattedDate ] = [];
            }

            dates[ formattedDate ].push( item );
            dpDates.push( formattedDate );
        });

        this.set( 'dates', dates );
        this.$().datepicker( 'setDates', dpDates );
    })
});
