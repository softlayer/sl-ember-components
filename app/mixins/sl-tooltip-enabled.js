import Ember from 'ember';

export default Ember.Mixin.create({

    /**
     * Attribute bindings for mixin's component element
     * @property {array} attributeBindings
     */
    attributeBindings: [ 'popover', 'title' ],

    /**
     * Enables the tooltip functionality, based on a passed-in `title` attribute
     * @method enableTooltip
     */
    enableTooltip: function () {
        if ( this.get( 'title' )) {
            var popoverContent = this.get( 'popover' );

            if ( popoverContent ) {
                this.set( 'data-toggle', 'popover' );
                this.$().popover({
                    content: popoverContent
                });
            } else {
                this.set( 'data-toggle', 'tooltip' );
                this.$().tooltip();
            }
        }
    }.on( 'didInsertElement' )
});