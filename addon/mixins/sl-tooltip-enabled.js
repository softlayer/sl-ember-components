import Ember from 'ember';

export default Ember.Mixin.create({

    /**
     * Enables the tooltip functionality, based on component's `title` attribute
     * @method enableTooltip
     */
    enableTooltip: function () {
        var popoverContent = this.get( 'popover' );
        var title = this.get( 'title' );

        if ( !popoverContent && !title ) {
            return;
        }

        if ( this.get( 'isPopover' )) {
            this.$().popover( 'destroy' );
            this.set( 'isPopover', false );
        }

        if ( this.get( 'isTooltip' )) {
            this.$().tooltip( 'destroy' );
            this.set( 'isTooltip', false );
        }

        if ( popoverContent ) {
            this.set( 'data-toggle', 'popover' );
            this.$().popover({
                content: popoverContent,
                placement: 'top'
            });
            this.set( 'isPopover', false );
        } else if ( title ) {
            this.set( 'data-toggle', 'tooltip' );
            this.$().tooltip({
                container: 'body',
                title: title
            });
            this.set( 'isTooltip', true );
        }
    }.observes( 'popover', 'title' ).on( 'didInsertElement' ),

    /**
     * Whether the component has been set up as a popover
     * @property {boolean} isPopover
     * @default false
     */
    isPopover: false,

    /**
     * Whether the component has been set up as a tooltip
     * @property {boolean} isTooltip
     * @default false
     */
    isTooltip: false
});