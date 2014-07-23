import Ember from 'ember';

export default Ember.Mixin.create({

    /**
     * Attribute bindings for mixin's component element
     * @property {array} attributeBindings
     */
    attributeBindings: [ 'data-placement', 'title' ],

    /**
     * Enables the tooltip functionality, based on a passed-in `title` attribute
     * @method enableTooltip
     */
    enableTooltip: function () {
        if ( this.get( 'title' )) {
            this.$().tooltip();
        }
    }.on( 'didInsertElement' )
});