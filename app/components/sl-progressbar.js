import Ember from 'ember';

export default Ember.Component.extend({
    active: false,

    classNames: [ 'progress' ],

    barClass: function () {
        var classes = [
            'progress-bar',
            'progress-bar-' + this.get( 'type' )
        ];

        if ( this.get( 'active' )) {
            classes.push( 'active' );
        }

        if ( this.get( 'striped' )) {
            classes.push( 'progress-bar-striped' );
        }

        return classes.join( ' ' );
    }.property( 'active', 'type' ),

    styleString: function () {
        return 'width: ' + this.get( 'value' ) + '%;';
    }.property( 'value' ),

    type: 'default'
});
