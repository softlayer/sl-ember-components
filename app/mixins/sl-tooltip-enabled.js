import Ember from 'ember';

export default Ember.Mixin.create({

    /**
     * Attribute bindings for mixin's component element
     * @property {array} attributeBindings
     */
    attributeBindings: [ 'title' ],

    /**
     * Enables the tooltip functionality, based on a passed-in `title` attribute
     * @method enableTooltip
     */
    enableTooltip: function () {
        var popoverContent = this.get( 'popover' );
        var title = this.get( 'title' );

        if ( popoverContent ) {
            this.set( 'data-toggle', 'popover' );
            this.$().popover({
                content: popoverContent,
                placement: 'top'
            });
        } else if ( title ) {
            this.set( 'data-toggle', 'tooltip' );
            this.$().tooltip();
        }
    }.on( 'didInsertElement' )
});