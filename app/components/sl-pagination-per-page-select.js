import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'span',
    classNames: [ 'sl-pagination-per-page-select form-inline' ],
    perPage: Ember.computed.oneWay( 'itemCountPerPage' ),
    perPageObserver: function(){
        this.sendAction( 'action', this.get( 'perPage' ) );
    }.observes( 'perPage' )
});
