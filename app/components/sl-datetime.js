import Ember from 'ember';
import TooltipEnabled from '../mixins/sl-tooltip-enabled';

export default Ember.Component.extend( TooltipEnabled, {
    attributeBindings: [ 'datetime' ],

    classNames: [ 'sl-datetime' ],

    datetime: function () {
        return moment( this.get( 'value' ));
    }.property( 'value' ),

    /**
     * "date", "datetime", "relative"
     */
    format: 'datetime',

    fullDatetime: function () {
        return moment( this.get( 'value' )).format( 'YYYY-MM-DD HH:mm A [GMT]ZZ' );
    }.property( 'format', 'value' ),

    formattedValue: function () {
        var momentValue = moment( this.get( 'value' ));

        switch ( this.get( 'format' )) {
            case 'date':     return momentValue.format( 'YYYY-MM-DD' );
            case 'datetime': return momentValue.format( 'dddd, MMMM Do YYYY, h:mm A' );
            case 'relative': return momentValue.fromNow();
        }
    }.property( 'format', 'value' ),

    tagName: 'time',

    title: function () {
        return this.get( 'fullDatetime' );
    }.property( 'fullDatetime' ),

    value: function () {
        return new Date();
    }.property()
});
